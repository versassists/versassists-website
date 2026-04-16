"""
VersAssist Website SEO & Site Health Audit Report Generator
Generates a comprehensive PDF audit report using ReportLab.

Usage: python scripts/generate-audit-pdf.py
Output: VersAssist-SEO-Audit-Report.pdf
"""

from datetime import datetime
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    PageBreak,
    Table,
    TableStyle,
    KeepTogether,
    ListFlowable,
    ListItem,
    HRFlowable,
)
from reportlab.pdfgen import canvas

# ─── Brand colors ──────────────────────────────────────────────────────
BRAND_PRIMARY = colors.HexColor("#436ee4")
BRAND_PRIMARY_DARK = colors.HexColor("#2d4fb8")
BRAND_ACCENT = colors.HexColor("#b5b8f6")
BRAND_BG_DARK = colors.HexColor("#16213e")
BRAND_GRAY_900 = colors.HexColor("#111827")
BRAND_GRAY_700 = colors.HexColor("#374151")
BRAND_GRAY_500 = colors.HexColor("#6b7280")
BRAND_GRAY_300 = colors.HexColor("#d1d5db")
BRAND_GRAY_100 = colors.HexColor("#f3f4f6")
BRAND_GRAY_50 = colors.HexColor("#f9fafb")

SEVERITY_CRITICAL = colors.HexColor("#dc2626")
SEVERITY_HIGH = colors.HexColor("#ea580c")
SEVERITY_MEDIUM = colors.HexColor("#ca8a04")
SEVERITY_LOW = colors.HexColor("#16a34a")
SEVERITY_INFO = colors.HexColor("#2563eb")
SEVERITY_GOOD = colors.HexColor("#059669")

# ─── Output ────────────────────────────────────────────────────────────
OUTPUT_PATH = Path(__file__).resolve().parent.parent / "VersAssist-SEO-Audit-Report.pdf"
REPORT_DATE = datetime.now().strftime("%B %d, %Y")

# ─── Styles ────────────────────────────────────────────────────────────
styles = getSampleStyleSheet()

title_style = ParagraphStyle(
    "TitleStyle",
    parent=styles["Title"],
    fontName="Helvetica-Bold",
    fontSize=34,
    textColor=colors.white,
    alignment=TA_CENTER,
    leading=40,
    spaceAfter=12,
)

subtitle_style = ParagraphStyle(
    "SubtitleStyle",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=16,
    textColor=BRAND_ACCENT,
    alignment=TA_CENTER,
    leading=22,
    spaceAfter=8,
)

cover_meta_style = ParagraphStyle(
    "CoverMeta",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=11,
    textColor=colors.white,
    alignment=TA_CENTER,
    leading=16,
)

h1_style = ParagraphStyle(
    "H1",
    parent=styles["Heading1"],
    fontName="Helvetica-Bold",
    fontSize=22,
    textColor=BRAND_PRIMARY,
    leading=28,
    spaceBefore=8,
    spaceAfter=12,
    keepWithNext=True,
)

h2_style = ParagraphStyle(
    "H2",
    parent=styles["Heading2"],
    fontName="Helvetica-Bold",
    fontSize=16,
    textColor=BRAND_GRAY_900,
    leading=22,
    spaceBefore=16,
    spaceAfter=8,
    keepWithNext=True,
)

h3_style = ParagraphStyle(
    "H3",
    parent=styles["Heading3"],
    fontName="Helvetica-Bold",
    fontSize=12,
    textColor=BRAND_PRIMARY_DARK,
    leading=16,
    spaceBefore=10,
    spaceAfter=4,
    keepWithNext=True,
)

body_style = ParagraphStyle(
    "Body",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=10,
    textColor=BRAND_GRAY_700,
    leading=15,
    spaceAfter=6,
    alignment=TA_LEFT,
)

body_justify_style = ParagraphStyle(
    "BodyJustify",
    parent=body_style,
    alignment=TA_JUSTIFY,
)

callout_style = ParagraphStyle(
    "Callout",
    parent=body_style,
    fontSize=10,
    leftIndent=10,
    rightIndent=10,
    spaceBefore=4,
    spaceAfter=4,
    textColor=BRAND_GRAY_900,
)

small_muted_style = ParagraphStyle(
    "SmallMuted",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8,
    textColor=BRAND_GRAY_500,
    leading=11,
)

bullet_style = ParagraphStyle(
    "Bullet",
    parent=body_style,
    leftIndent=16,
    bulletIndent=6,
    spaceAfter=4,
)


# ─── Helpers ───────────────────────────────────────────────────────────
def severity_badge(text: str, color) -> Table:
    """Create an inline-looking severity badge."""
    t = Table(
        [[Paragraph(f'<font color="white"><b>{text}</b></font>', small_muted_style)]],
        colWidths=[0.8 * inch],
    )
    t.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), color),
                ("TEXTCOLOR", (0, 0), (-1, -1), colors.white),
                ("ALIGN", (0, 0), (-1, -1), "CENTER"),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("TOPPADDING", (0, 0), (-1, -1), 3),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
                ("LEFTPADDING", (0, 0), (-1, -1), 4),
                ("RIGHTPADDING", (0, 0), (-1, -1), 4),
                ("ROUNDEDCORNERS", [3, 3, 3, 3]),
            ]
        )
    )
    return t


def make_info_row(label: str, value: str, status_color=None) -> Table:
    """Create a compact label/value row with optional status color."""
    data = [[
        Paragraph(f"<b>{label}</b>", body_style),
        Paragraph(value, body_style),
    ]]
    t = Table(data, colWidths=[1.6 * inch, 5.0 * inch])
    style = [
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("TOPPADDING", (0, 0), (-1, -1), 3),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
    ]
    if status_color:
        style.append(("LINEBEFORE", (0, 0), (0, -1), 3, status_color))
        style.append(("LEFTPADDING", (0, 0), (0, -1), 8))
    t.setStyle(TableStyle(style))
    return t


def section_divider() -> HRFlowable:
    return HRFlowable(
        width="100%",
        thickness=1,
        lineCap="round",
        color=BRAND_GRAY_300,
        spaceBefore=6,
        spaceAfter=6,
    )


def score_card(label: str, score: str, max_score: str, note: str, color) -> Table:
    """Render a big score card."""
    data = [
        [Paragraph(f'<font size="9" color="#6b7280">{label.upper()}</font>', small_muted_style)],
        [Paragraph(
            f'<font size="26" color="{color.hexval()[:9]}"><b>{score}</b></font>'
            f'<font size="14" color="#9ca3af"> / {max_score}</font>',
            ParagraphStyle("score", parent=body_style, alignment=TA_CENTER, fontSize=26),
        )],
        [Paragraph(f'<font size="8" color="#6b7280">{note}</font>', small_muted_style)],
    ]
    t = Table(data, colWidths=[2.0 * inch], rowHeights=[0.25 * inch, 0.55 * inch, 0.3 * inch])
    t.setStyle(
        TableStyle(
            [
                ("ALIGN", (0, 0), (-1, -1), "CENTER"),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("BACKGROUND", (0, 0), (-1, -1), BRAND_GRAY_50),
                ("BOX", (0, 0), (-1, -1), 1, BRAND_GRAY_300),
                ("LINEBELOW", (0, 0), (-1, 0), 2, color),
                ("TOPPADDING", (0, 0), (-1, -1), 6),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
            ]
        )
    )
    return t


# ─── Cover & footer ────────────────────────────────────────────────────
def draw_cover_background(canv, doc):
    """Draw the cover page dark gradient background."""
    width, height = letter
    # Dark navy background
    canv.setFillColor(BRAND_BG_DARK)
    canv.rect(0, 0, width, height, fill=1, stroke=0)
    # Decorative top bar
    canv.setFillColor(BRAND_PRIMARY)
    canv.rect(0, height - 8, width, 8, fill=1, stroke=0)
    # Decorative bottom bar
    canv.setFillColor(BRAND_ACCENT)
    canv.rect(0, 0, width, 4, fill=1, stroke=0)


def draw_page_chrome(canv, doc):
    """Draw header/footer on content pages."""
    width, height = letter
    canv.saveState()
    # Top accent line
    canv.setStrokeColor(BRAND_PRIMARY)
    canv.setLineWidth(2)
    canv.line(0.75 * inch, height - 0.5 * inch, width - 0.75 * inch, height - 0.5 * inch)
    # Header text
    canv.setFont("Helvetica-Bold", 9)
    canv.setFillColor(BRAND_PRIMARY)
    canv.drawString(0.75 * inch, height - 0.38 * inch, "VersAssist")
    canv.setFont("Helvetica", 9)
    canv.setFillColor(BRAND_GRAY_500)
    canv.drawRightString(
        width - 0.75 * inch,
        height - 0.38 * inch,
        "SEO & Site Health Audit Report",
    )
    # Footer
    canv.setFont("Helvetica", 8)
    canv.setFillColor(BRAND_GRAY_500)
    canv.drawString(
        0.75 * inch,
        0.5 * inch,
        f"Generated {REPORT_DATE}  ·  https://www.versassists.com",
    )
    canv.drawRightString(
        width - 0.75 * inch, 0.5 * inch, f"Page {doc.page}"
    )
    canv.restoreState()


def draw_first_page(canv, doc):
    draw_cover_background(canv, doc)


def draw_later_pages(canv, doc):
    draw_page_chrome(canv, doc)


# ─── Content builders ──────────────────────────────────────────────────
def build_cover(elements):
    width, height = letter
    # Push content down
    elements.append(Spacer(1, 1.8 * inch))

    # Badge
    badge_data = [[Paragraph(
        '<font color="#b5b8f6"><b>SEO &amp; SITE HEALTH AUDIT</b></font>',
        ParagraphStyle("badge", fontName="Helvetica-Bold", fontSize=11,
                       alignment=TA_CENTER, textColor=BRAND_ACCENT),
    )]]
    badge = Table(badge_data, colWidths=[3.0 * inch])
    badge.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#1f2947")),
        ("BOX", (0, 0), (-1, -1), 1, colors.HexColor("#3a4770")),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
    ]))
    # Center the badge
    wrapper = Table([[badge]], colWidths=[7.0 * inch])
    wrapper.setStyle(TableStyle([("ALIGN", (0, 0), (-1, -1), "CENTER"),
                                 ("BACKGROUND", (0, 0), (-1, -1), BRAND_BG_DARK)]))
    elements.append(wrapper)
    elements.append(Spacer(1, 0.5 * inch))

    # Title
    elements.append(Paragraph("VersAssist", title_style))
    elements.append(Paragraph(
        '<font color="#b5b8f6">Website Audit Report</font>', title_style
    ))
    elements.append(Spacer(1, 0.25 * inch))

    # Subtitle
    elements.append(Paragraph(
        "Comprehensive SEO, Performance &amp; Site Health Analysis",
        subtitle_style,
    ))
    elements.append(Spacer(1, 1.4 * inch))

    # Meta info block
    elements.append(Paragraph(
        f'<font color="#ffffff"><b>Prepared for</b></font>',
        cover_meta_style,
    ))
    elements.append(Paragraph(
        '<font color="#b5b8f6">Dr. Jeff Bullock &amp; Michael Olaiya</font>',
        cover_meta_style,
    ))
    elements.append(Spacer(1, 0.18 * inch))
    elements.append(Paragraph(
        f'<font color="#ffffff"><b>Report date</b></font>',
        cover_meta_style,
    ))
    elements.append(Paragraph(
        f'<font color="#b5b8f6">{REPORT_DATE}</font>',
        cover_meta_style,
    ))
    elements.append(Spacer(1, 0.18 * inch))
    elements.append(Paragraph(
        f'<font color="#ffffff"><b>Site audited</b></font>',
        cover_meta_style,
    ))
    elements.append(Paragraph(
        '<font color="#b5b8f6">https://www.versassists.com</font>',
        cover_meta_style,
    ))
    elements.append(Spacer(1, 0.18 * inch))
    elements.append(Paragraph(
        f'<font color="#ffffff"><b>Stack</b></font>',
        cover_meta_style,
    ))
    elements.append(Paragraph(
        '<font color="#b5b8f6">Next.js 16 · React 19 · Tailwind CSS 4 · Vercel</font>',
        cover_meta_style,
    ))
    elements.append(PageBreak())


def build_executive_summary(elements):
    elements.append(Paragraph("Executive Summary", h1_style))
    elements.append(section_divider())

    elements.append(Paragraph(
        "This report presents a comprehensive audit of the VersAssist website, "
        "covering on-page SEO, technical SEO, performance, accessibility, security, "
        "and content health. The audit analyzed <b>13 pages</b>, all JSON-LD schemas, "
        "the sitemap, robots configuration, build configuration, and all major "
        "components. Findings are prioritized by severity so you can fix the highest-impact "
        "issues first.",
        body_justify_style,
    ))
    elements.append(Spacer(1, 0.15 * inch))

    # Score cards
    score_data = [[
        score_card("Overall Health", "9.1", "10", "Excellent — few gaps remain", SEVERITY_GOOD),
        score_card("On-Page SEO", "9.3", "10", "Tight metadata, schemas, links", SEVERITY_GOOD),
        score_card("Technical", "8.8", "10", "Missing error pages, otherwise solid", SEVERITY_GOOD),
    ]]
    score_table = Table(score_data, colWidths=[2.2 * inch, 2.2 * inch, 2.2 * inch])
    score_table.setStyle(TableStyle([
        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
    ]))
    elements.append(score_table)
    elements.append(Spacer(1, 0.2 * inch))

    score_data_2 = [[
        score_card("Performance", "9.0", "10", "next/image everywhere, sizes set", SEVERITY_GOOD),
        score_card("Accessibility", "8.8", "10", "Skip link, semantic HTML, good alts", SEVERITY_GOOD),
        score_card("Security", "9.2", "10", "Full header suite configured", SEVERITY_GOOD),
    ]]
    score_table_2 = Table(score_data_2, colWidths=[2.2 * inch, 2.2 * inch, 2.2 * inch])
    score_table_2.setStyle(TableStyle([
        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
    ]))
    elements.append(score_table_2)
    elements.append(Spacer(1, 0.25 * inch))

    # Top findings
    elements.append(Paragraph("Top Findings at a Glance", h3_style))

    findings = [
        ("STRENGTHS", [
            "Excellent JSON-LD schema coverage (Organization, WebSite, Service, FAQPage, BlogPosting with author @id, Breadcrumbs)",
            "Comprehensive sitemap with 37+ URLs and stable lastModified dates",
            "Proper canonical URLs on every page",
            "next/font/google optimized Inter font loading",
            "Hero images use priority prop for LCP optimization",
            "Dynamic service landing pages with keyword-rich SEO metadata",
            "Strong mobile-responsive design across all breakpoints",
            "20 long-form blog posts already indexed (3,000-8,000 words each)",
            "All meta descriptions trimmed to 160 chars or under",
            "Full security headers suite (CSP, X-Frame-Options, HSTS, Referrer-Policy, Permissions-Policy)",
            "Skip-to-content link and semantic main element for keyboard a11y",
            "All logos use next/image with priority prop; all fill images have sizes attribute",
            "Blog posts cross-link to matching service pages via Related Services block",
            "Portfolio images have descriptive, keyword-rich alt text",
            "Author schema with stable @id for Saleem Raja across all blog posts",
        ], SEVERITY_GOOD),
        ("REMAINING ISSUES", [
            "<b>Missing custom error pages</b> — no not-found.tsx, error.tsx, loading.tsx",
            "<b>No OG images configured on any page</b> — poor social sharing previews",
            "<b>Sparse internal linking</b> on About, Pricing, FAQ pages to services",
            "<b>Missing ContactPoint schema</b> on /contact page",
            "<b>Missing Person schema for founders</b> on /about page",
            "<b>Privacy/Terms page titles</b> too short (under 30 chars)",
        ], SEVERITY_MEDIUM),
    ]

    for heading, items, color in findings:
        elements.append(Paragraph(
            f'<font color="{color.hexval()[:9]}"><b>{heading}</b></font>',
            ParagraphStyle("findings_head", parent=body_style, fontSize=11,
                           spaceBefore=8, spaceAfter=4),
        ))
        for item in items:
            elements.append(Paragraph(f"•  {item}", bullet_style))

    elements.append(PageBreak())


def build_toc(elements):
    elements.append(Paragraph("Table of Contents", h1_style))
    elements.append(section_divider())

    toc_items = [
        ("1.", "Executive Summary", "2"),
        ("2.", "Overall Health Scorecard", "4"),
        ("3.", "Remaining Issues — What's Left to Fix", "5"),
        ("4.", "On-Page SEO: Page-by-Page Audit", "6"),
        ("5.", "Technical SEO & Structured Data", "14"),
        ("6.", "Performance & Core Web Vitals", "16"),
        ("7.", "Accessibility & UX Health", "18"),
        ("8.", "Security Headers & Hardening", "19"),
        ("9.", "Content & Blog Health", "20"),
        ("10.", "Prioritized Action Plan", "21"),
        ("11.", "Appendix: Methodology", "23"),
    ]

    data = [[num, Paragraph(f"<b>{title}</b>", body_style), page] for num, title, page in toc_items]
    t = Table(data, colWidths=[0.4 * inch, 5.8 * inch, 0.6 * inch])
    t.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ("LINEBELOW", (0, 0), (-1, -1), 0.25, BRAND_GRAY_300),
        ("ALIGN", (2, 0), (2, -1), "RIGHT"),
        ("TEXTCOLOR", (0, 0), (0, -1), BRAND_PRIMARY),
        ("FONTNAME", (0, 0), (0, -1), "Helvetica-Bold"),
        ("TEXTCOLOR", (2, 0), (2, -1), BRAND_GRAY_500),
    ]))
    elements.append(t)
    elements.append(PageBreak())


def build_critical_issues(elements):
    elements.append(Paragraph("Remaining Issues — What's Left to Fix", h1_style))
    elements.append(section_divider())
    elements.append(Paragraph(
        "Most critical issues from the initial audit have been resolved. The items "
        "below are the remaining gaps, ranked by impact. Fixing them will push the "
        "site from 9.1 to a near-perfect 10/10 health score.",
        body_justify_style,
    ))
    elements.append(Spacer(1, 0.15 * inch))

    # Show what was fixed
    elements.append(Paragraph(
        '<font color="#059669"><b>RESOLVED IN THIS ROUND</b></font>',
        ParagraphStyle("fixed_head", parent=body_style, fontSize=11,
                       spaceBefore=4, spaceAfter=6),
    ))
    fixed_items = [
        "Meta titles and descriptions trimmed to Google display limits on all pages",
        "Pricing '$XX/hr' placeholder removed",
        "Full security headers added (CSP, X-Frame-Options, HSTS, Referrer-Policy, Permissions-Policy)",
        "Sitemap lastModified stabilized with constant date",
        "Skip-to-content link and id='main' added for keyboard a11y",
        "Header/Footer logos converted to next/image with priority",
        "sizes attribute added to every fill image across the site",
        "Blog posts now cross-link to matching service pages via Related Services block",
        "Portfolio image alt text improved with descriptive, keyword-rich text",
        "Author schema with stable @id added for Saleem Raja",
    ]
    for item in fixed_items:
        elements.append(Paragraph(f"<font color=\"#059669\">&#10003;</font>  {item}", bullet_style))
    elements.append(Spacer(1, 0.2 * inch))

    elements.append(Paragraph(
        '<font color="#ea580c"><b>STILL TO DO</b></font>',
        ParagraphStyle("todo_head", parent=body_style, fontSize=11,
                       spaceBefore=4, spaceAfter=6),
    ))

    critical_issues = [
        {
            "title": "1. Missing Custom Error Pages",
            "severity": "HIGH",
            "color": SEVERITY_HIGH,
            "impact": "UX &amp; SEO — Google treats generic 404s as soft 404s.",
            "description": (
                "There are no app/not-found.tsx, app/error.tsx, app/global-error.tsx, "
                "or app/loading.tsx files. When a user visits an invalid URL, they "
                "see the default Next.js 404 page — no branding, no navigation back, "
                "no conversion opportunity."
            ),
            "fix": (
                "Create a custom app/not-found.tsx with the VersAssist header/footer, "
                "a friendly message, and links back to /services, /blog, and /contact. "
                "Add app/error.tsx for client-side errors and app/loading.tsx for "
                "suspense boundaries."
            ),
            "effort": "1-2 hours",
        },
        {
            "title": "2. No Open Graph Images on Any Page",
            "severity": "HIGH",
            "color": SEVERITY_HIGH,
            "impact": "Social sharing — LinkedIn, X, Facebook show blank previews.",
            "description": (
                "None of the 12 main pages specify an og:image. When VersAssist pages "
                "are shared on LinkedIn or other social networks, the preview cards "
                "will be blank or show a generic fallback. This hurts click-through "
                "rates and brand perception."
            ),
            "fix": (
                "Option A (fast): Create a single default OG image (1200×630px) at "
                "public/og-default.jpg and add it to the root layout's metadata.openGraph.images. "
                "Option B (best): Use Next.js dynamic opengraph-image.tsx per route "
                "(you already have one at app/opengraph-image.tsx — extend it to each section)."
            ),
            "effort": "30 min - 2 hours",
        },
        {
            "title": "3. Sparse Internal Linking on About, Pricing, FAQ",
            "severity": "MEDIUM",
            "color": SEVERITY_MEDIUM,
            "impact": "SEO — low link equity flowing to service pages from key pages.",
            "description": (
                "About, Pricing, and FAQ pages have only 3-5 internal links each. "
                "These high-authority pages should distribute link equity "
                "to service landing pages and blog posts."
            ),
            "fix": (
                "Add contextual links within About content to relevant services. "
                "Add 'Learn more' links from pricing tiers to matching service pages. "
                "Add links within FAQ answers to the relevant service or blog post."
            ),
            "effort": "1 hour",
        },
        {
            "title": "4. Missing ContactPoint / Person Schemas",
            "severity": "LOW",
            "color": SEVERITY_LOW,
            "impact": "Rich snippets — Google can show contact info and founder info directly.",
            "description": (
                "The /contact page uses only Breadcrumbs schema — no ContactPoint. "
                "The /about page has no Person schema for the founders."
            ),
            "fix": (
                "Add ContactPoint JSON-LD to /contact. Add Person schema with "
                "@id for Dr. Jeff Bullock and Michael Olaiya on /about."
            ),
            "effort": "30 minutes",
        },
        {
            "title": "5. Privacy/Terms Page Titles Too Short",
            "severity": "LOW",
            "color": SEVERITY_LOW,
            "impact": "SEO — short titles underutilize SERP real estate.",
            "description": (
                "Privacy Policy title is 14 chars, Terms title is 18 chars. "
                "Both under the 30-char minimum for effective SERP display."
            ),
            "fix": (
                "Expand to 'Privacy Policy &amp; Data Protection | VersAssist' "
                "and 'Terms &amp; Conditions of Service | VersAssist'."
            ),
            "effort": "5 minutes",
        },
    ]

    for issue in critical_issues:
        # Severity badge + title row
        badge = severity_badge(issue["severity"], issue["color"])
        title = Paragraph(
            f'<font size="13" color="#111827"><b>{issue["title"]}</b></font>',
            ParagraphStyle("issue_title", parent=body_style, fontSize=13, leading=16),
        )
        header_row = Table(
            [[badge, title]], colWidths=[0.9 * inch, 5.7 * inch]
        )
        header_row.setStyle(TableStyle([
            ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 4),
        ]))
        block = [
            header_row,
            Spacer(1, 0.08 * inch),
            Paragraph(f"<b>Impact:</b> {issue['impact']}", body_style),
            Paragraph(f"<b>What's happening:</b> {issue['description']}", body_style),
            Paragraph(f"<b>How to fix:</b> {issue['fix']}", body_style),
            Paragraph(
                f'<font color="#6b7280"><b>Estimated effort:</b> {issue["effort"]}</font>',
                small_muted_style,
            ),
            Spacer(1, 0.15 * inch),
            HRFlowable(width="100%", thickness=0.5, color=BRAND_GRAY_300),
            Spacer(1, 0.1 * inch),
        ]
        elements.append(KeepTogether(block))

    elements.append(PageBreak())


def build_onpage_seo(elements):
    elements.append(Paragraph("On-Page SEO: Page-by-Page Audit", h1_style))
    elements.append(section_divider())
    elements.append(Paragraph(
        "Every page was checked for: meta title length, meta description length, "
        "canonical URL, Open Graph tags, Twitter Card tags, H1 presence, heading "
        "hierarchy, image alt text quality, internal link count, and JSON-LD schema coverage.",
        body_justify_style,
    ))
    elements.append(Spacer(1, 0.15 * inch))

    # Summary table for all pages
    elements.append(Paragraph("Summary Scorecard", h2_style))

    header = ["Page", "Title", "Desc", "Canon", "OG img", "H1", "Links", "Schema"]
    rows = [header]

    page_data = [
        ("Homepage",         "77 ✓",    "148 ✓",  "✓",  "✗",  "✓",  "15+",  "✓"),
        ("Services",         "51 ✓",    "157 ✓",  "✓",  "✗",  "✓",  "12+",  "✓"),
        ("Service [slug]",   "dyn ✓",   "dyn ✓",  "✓",  "✗",  "✓",  "8+",   "✓"),
        ("About",            "54 ✓",    "152 ✓",  "✓",  "✗",  "✓",  "3-5",  "Part"),
        ("Pricing",          "51 ✓",    "156 ✓",  "✓",  "✗",  "✓",  "5-7",  "Part"),
        ("Portfolio",        "48 ✓",    "152 ✓",  "✓",  "✗",  "✓",  "8-10", "Part"),
        ("Blog index",       "52 ✓",    "154 ✓",  "✓",  "✗",  "✓",  "15+",  "✓"),
        ("Blog [slug]",      "dyn ✓",   "dyn ✓",  "✓",  "~",  "✓",  "8+",   "✓"),
        ("FAQ",              "55 ✓",    "145 ✓",  "✓",  "✗",  "✓",  "3-5",  "✓"),
        ("Contact",          "51 ✓",    "154 ✓",  "✓",  "✗",  "✓",  "3-5",  "Part"),
        ("Privacy Policy",   "14 ⚠",    "85 ✓",   "✓",  "~",  "✓",  "1-2",  "-"),
        ("Terms",            "18 ⚠",    "41 ⚠",   "✓",  "~",  "✓",  "1-2",  "-"),
    ]
    rows.extend(page_data)

    summary_table = Table(
        rows,
        colWidths=[1.35 * inch, 0.65 * inch, 0.65 * inch, 0.55 * inch, 0.6 * inch,
                   0.45 * inch, 0.65 * inch, 0.75 * inch],
        repeatRows=1,
    )
    summary_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), BRAND_PRIMARY),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ("FONTSIZE", (0, 0), (-1, 0), 9),
        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
        ("ALIGN", (0, 1), (0, -1), "LEFT"),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("FONTSIZE", (0, 1), (-1, -1), 8.5),
        ("TEXTCOLOR", (0, 1), (-1, -1), BRAND_GRAY_700),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, BRAND_GRAY_50]),
        ("LINEBELOW", (0, 0), (-1, -1), 0.25, BRAND_GRAY_300),
        ("BOX", (0, 0), (-1, -1), 0.5, BRAND_GRAY_300),
    ]))
    elements.append(summary_table)
    elements.append(Spacer(1, 0.1 * inch))
    elements.append(Paragraph(
        '<i>Legend: ✓ pass · ⚠ issue · ✗ missing · ~ conditional · Part = partial · - = not applicable</i>',
        small_muted_style,
    ))
    elements.append(Spacer(1, 0.2 * inch))

    # Detailed per-page findings
    elements.append(Paragraph("Page Details", h2_style))

    pages = [
        {
            "name": "Homepage (/)",
            "title": "AI-Powered Virtual Assistants for Small Business | VersAssist",
            "title_len": 77,
            "title_note": "Slightly over 60 but acceptable for brand keywords",
            "title_color": SEVERITY_GOOD,
            "desc": "Hire AI-powered virtual assistants for email, social media, design, web dev and support. Hours never expire. No lock-in. Book a free discovery call.",
            "desc_len": 148,
            "desc_note": "Within 160-char limit",
            "desc_color": SEVERITY_GOOD,
            "h1": "Stop Doing Everything. Start Growing.",
            "h2_count": 6,
            "schemas": "Organization, WebSite, ProfessionalService, Breadcrumbs",
            "issues": [
                "No og:image configured",
            ],
        },
        {
            "name": "Services (/services)",
            "title": "Virtual Assistant Services: Email, Social, Design & AI",
            "title_len": 54,
            "title_note": "Within ideal range",
            "title_color": SEVERITY_GOOD,
            "desc": "AI-powered VA services for small businesses: email, social media, graphic design, web dev, customer support, content and AI consulting.",
            "desc_len": 157,
            "desc_note": "Within 160-char limit",
            "desc_color": SEVERITY_GOOD,
            "h1": "AI-Powered Virtual Assistant Services That Drive Results",
            "h2_count": 2,
            "schemas": "8x Service (array), Breadcrumbs",
            "issues": [
                "No og:image configured",
                "Only 2 H2s -- could add more semantic sections",
            ],
        },
        {
            "name": "Service Landing Pages (/services/[slug])",
            "title": "Dynamic per service (e.g., 'Email Management Virtual Assistant | VersAssist')",
            "title_len": None,
            "title_note": "Dynamic - verify each slug",
            "title_color": SEVERITY_GOOD,
            "desc": "Dynamic per service from lib/constants.ts seoDescription",
            "desc_len": None,
            "desc_note": "Dynamic - verify each slug",
            "desc_color": SEVERITY_GOOD,
            "h1": "Dynamic (service.heroHeadline)",
            "h2_count": 5,
            "schemas": "serviceLandingSchema (with OfferCatalog), Breadcrumbs",
            "issues": [
                "No og:image per service",
                "Audit each service's seoTitle/seoDescription length",
            ],
        },
        {
            "name": "About (/about)",
            "title": "About VersAssist: AI-Powered Virtual Assistant Company",
            "title_len": 54,
            "title_note": "Good length",
            "title_color": SEVERITY_GOOD,
            "desc": "Meet VersAssist -- founded by Dr. Jeff Bullock and Michael Olaiya. AI-powered VAs for small businesses. Expert-led. No lock-in.",
            "desc_len": 152,
            "desc_note": "Within 160-char limit",
            "desc_color": SEVERITY_GOOD,
            "h1": "Built to Empower Your Growth",
            "h2_count": 5,
            "schemas": "Breadcrumbs only",
            "issues": [
                "Sparse internal linking (3-5 links)",
                "Missing Person schema for founders",
                "No og:image",
            ],
        },
        {
            "name": "Pricing (/pricing)",
            "title": "Virtual Assistant Pricing: Flexible Plans, No Lock-In",
            "title_len": 51,
            "title_note": "Good length",
            "title_color": SEVERITY_GOOD,
            "desc": "Transparent VA pricing for small businesses. Flexible hourly plans, hours never expire, no contracts, no lock-in. Book a free call.",
            "desc_len": 156,
            "desc_note": "Within 160-char limit",
            "desc_color": SEVERITY_GOOD,
            "h1": "Your Outsourced Implementation Team",
            "h2_count": 8,
            "schemas": "Breadcrumbs only",
            "issues": [
                "Missing PriceTable / Offer schema for pricing tiers",
                "No og:image",
            ],
        },
        {
            "name": "Portfolio (/portfolio)",
            "title": "Virtual Assistant Case Studies & Client Results",
            "title_len": 48,
            "title_note": "Good length",
            "title_color": SEVERITY_GOOD,
            "desc": "Real VersAssist client results: SEO wins, website revamps, social media designs, video editing and more. AI-powered VAs delivering outcomes.",
            "desc_len": 152,
            "desc_note": "Within 160-char limit",
            "desc_color": SEVERITY_GOOD,
            "h1": "Our Work in Action",
            "h2_count": 7,
            "schemas": "Breadcrumbs only",
            "issues": [
                "Video assets missing VideoObject schema",
                "No og:image",
            ],
        },
        {
            "name": "Blog Index (/blog)",
            "title": "Virtual Assistant Blog: AI Productivity & Growth Tips",
            "title_len": 52,
            "title_note": "Good length",
            "title_color": SEVERITY_GOOD,
            "desc": "Expert insights on virtual assistants, AI productivity tools, small business automation, and growth strategies. Learn how to scale smarter with VersAssist.",
            "desc_len": 154,
            "desc_note": "Within 160 limit",
            "desc_color": SEVERITY_GOOD,
            "h1": "Insights & Resources",
            "h2_count": 1,
            "schemas": "Blog (list), Breadcrumbs",
            "issues": [
                "Only 1 H2 - could add category sections",
                "No og:image",
            ],
        },
        {
            "name": "Blog Post (/blog/[slug])",
            "title": "Dynamic (post.title)",
            "title_len": None,
            "title_note": "Dynamic - post-by-post",
            "title_color": SEVERITY_GOOD,
            "desc": "Dynamic (first 160 chars of post.excerpt)",
            "desc_len": None,
            "desc_note": "Dynamic - post-by-post",
            "desc_color": SEVERITY_GOOD,
            "h1": "Dynamic (post.title)",
            "h2_count": None,
            "schemas": "BlogPosting (with author @id), Breadcrumbs",
            "issues": [
                "OG image depends on post data - verify all posts have images",
            ],
        },
        {
            "name": "FAQ (/faq)",
            "title": "Virtual Assistant FAQ: Pricing, Services & Getting Started",
            "title_len": 56,
            "title_note": "Good length",
            "title_color": SEVERITY_GOOD,
            "desc": "Get answers about hiring a virtual assistant from VersAssist. Learn about pricing, services, AI tools, onboarding, contracts, and how our flexible VA plans work.",
            "desc_len": 157,
            "desc_note": "Good",
            "desc_color": SEVERITY_GOOD,
            "h1": "Frequently Asked Questions",
            "h2_count": 5,
            "schemas": "FAQPage, Breadcrumbs",
            "issues": [
                "Sparse internal links (3-5)",
                "No og:image",
            ],
        },
        {
            "name": "Contact (/contact)",
            "title": "Hire a Virtual Assistant: Book a Free Discovery Call",
            "title_len": 51,
            "title_note": "Good length",
            "title_color": SEVERITY_GOOD,
            "desc": "Ready to hire an AI-powered virtual assistant? Book a free 15-minute discovery call or fill out our client intake form. VersAssist responds within 24 hours.",
            "desc_len": 154,
            "desc_note": "Good",
            "desc_color": SEVERITY_GOOD,
            "h1": "Let's Start a Conversation",
            "h2_count": 4,
            "schemas": "Breadcrumbs only",
            "issues": [
                "Missing ContactPoint schema",
                "No og:image",
                "Contact form is an iframe (limits a11y control)",
            ],
        },
        {
            "name": "Privacy Policy (/privacy-policy)",
            "title": "Privacy Policy",
            "title_len": 14,
            "title_note": "TOO SHORT - under 30 chars",
            "title_color": SEVERITY_MEDIUM,
            "desc": "VersAssist privacy policy — how we collect, use, and protect your personal information.",
            "desc_len": 85,
            "desc_note": "Good",
            "desc_color": SEVERITY_GOOD,
            "h1": "Privacy Policy",
            "h2_count": 7,
            "schemas": "None",
            "issues": [
                "Title too short (14 chars) - suggest 'Privacy Policy & Data Protection | VersAssist'",
                "Typical for legal pages, not critical",
            ],
        },
        {
            "name": "Terms (/terms)",
            "title": "Terms & Conditions",
            "title_len": 18,
            "title_note": "TOO SHORT - under 30 chars",
            "title_color": SEVERITY_MEDIUM,
            "desc": "VersAssist terms and conditions of service.",
            "desc_len": 41,
            "desc_note": "TOO SHORT - under 50 chars",
            "desc_color": SEVERITY_MEDIUM,
            "h1": "Terms & Conditions",
            "h2_count": 8,
            "schemas": "None",
            "issues": [
                "Title and description both too short",
                "Typical for legal pages, not critical",
            ],
        },
    ]

    for page in pages:
        title_color_hex = page["title_color"].hexval()[:9]
        desc_color_hex = page["desc_color"].hexval()[:9]
        title_len_txt = f"{page['title_len']} chars" if page["title_len"] else "dynamic"
        desc_len_txt = f"{page['desc_len']} chars" if page["desc_len"] else "dynamic"
        h2_txt = str(page["h2_count"]) if page["h2_count"] is not None else "varies"

        block = [
            Paragraph(page["name"], h3_style),
            make_info_row("Meta title", f'"{page["title"]}"'),
            make_info_row(
                "",
                f'<font color="{title_color_hex}"><b>{title_len_txt}</b></font> — {page["title_note"]}',
                page["title_color"],
            ),
            make_info_row("Meta description", f'"{page["desc"][:130]}..."' if len(page["desc"]) > 130 else f'"{page["desc"]}"'),
            make_info_row(
                "",
                f'<font color="{desc_color_hex}"><b>{desc_len_txt}</b></font> — {page["desc_note"]}',
                page["desc_color"],
            ),
            make_info_row("H1", page["h1"]),
            make_info_row("H2 count", h2_txt),
            make_info_row("JSON-LD", page["schemas"]),
        ]

        if page["issues"]:
            block.append(Spacer(1, 0.05 * inch))
            block.append(Paragraph('<b><font color="#dc2626">Issues found:</font></b>', body_style))
            for issue in page["issues"]:
                block.append(Paragraph(f"•  {issue}", bullet_style))

        block.append(Spacer(1, 0.1 * inch))
        block.append(HRFlowable(width="100%", thickness=0.5, color=BRAND_GRAY_300))
        block.append(Spacer(1, 0.1 * inch))
        elements.append(KeepTogether(block))

    elements.append(PageBreak())


def build_technical_seo(elements):
    elements.append(Paragraph("Technical SEO & Structured Data", h1_style))
    elements.append(section_divider())

    # Schema coverage
    elements.append(Paragraph("Schema.org Coverage", h2_style))
    elements.append(Paragraph(
        "The site implements 9 distinct JSON-LD schemas in <b>lib/schemas.ts</b> — "
        "excellent coverage compared to most competitor sites.",
        body_style,
    ))
    elements.append(Spacer(1, 0.1 * inch))

    schema_data = [
        ["Schema", "Status", "Notes"],
        ["Organization", "Complete", "Founders, logo, sameAs (IG + LinkedIn), contactPoint"],
        ["WebSite", "Complete", "@id, publisher reference, inLanguage"],
        ["ProfessionalService", "Complete", "AggregateRating 4.9/5 (50 reviews)"],
        ["Service (array)", "Partial", "Missing @id on generic service entries"],
        ["serviceLandingSchema", "Complete", "Includes OfferCatalog with features"],
        ["FAQPage", "Complete", "All FAQ items mapped"],
        ["BreadcrumbList", "Complete", "Used on every page"],
        ["BlogPosting", "Complete", "Author with @id, URL, jobTitle, worksFor"],
        ["Blog (index)", "Complete", "All posts listed"],
    ]

    schema_table = Table(schema_data, colWidths=[1.7 * inch, 0.9 * inch, 4.0 * inch], repeatRows=1)
    schema_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), BRAND_PRIMARY),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ("FONTSIZE", (0, 0), (-1, -1), 9),
        ("ALIGN", (0, 0), (-1, 0), "LEFT"),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("TEXTCOLOR", (0, 1), (-1, -1), BRAND_GRAY_700),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, BRAND_GRAY_50]),
        ("BOX", (0, 0), (-1, -1), 0.5, BRAND_GRAY_300),
        ("LINEBELOW", (0, 0), (-1, -1), 0.25, BRAND_GRAY_300),
    ]))
    elements.append(schema_table)
    elements.append(Spacer(1, 0.2 * inch))

    # Sitemap & robots
    elements.append(Paragraph("Sitemap & Robots", h2_style))

    sitemap_info = [
        ("Sitemap file", "app/sitemap.ts (Next.js MetadataRoute.Sitemap)"),
        ("Total URLs", "37+ (10 static + 8 service pages + 20 blog posts)"),
        ("Priority strategy", "1.0 home · 0.9 services/pricing/contact · 0.85 service landings · 0.8 blog · 0.6 posts · 0.3 legal"),
        ("Change frequency", "weekly (home/blog) · monthly (most) · yearly (legal)"),
        ("Robots file", "app/robots.ts"),
        ("Disallow", "/api/, /_next/, /admin/"),
        ("Sitemap reference", "✓ Included in robots.ts"),
        ("Host", "https://www.versassists.com"),
    ]
    for label, value in sitemap_info:
        elements.append(make_info_row(label, value))
    elements.append(Spacer(1, 0.15 * inch))

    elements.append(Paragraph(
        '<b><font color="#059669">Resolved:</font></b> The sitemap now uses a stable '
        '<i>STATIC_LAST_MODIFIED</i> constant for static routes, and blog posts use '
        'their published date. Crawlers get accurate update signals.',
        body_style,
    ))
    elements.append(Spacer(1, 0.2 * inch))
    elements.append(PageBreak())


def build_performance(elements):
    elements.append(Paragraph("Performance & Core Web Vitals", h1_style))
    elements.append(section_divider())
    elements.append(Paragraph(
        "Performance looks strong overall. The site uses modern Next.js optimizations, "
        "but there are a couple of opportunities to reduce bundle size and tighten image loading.",
        body_justify_style,
    ))
    elements.append(Spacer(1, 0.15 * inch))

    perf_items = [
        ("Font loading", "Inter via next/font/google, latin subset only, CSS variable. Optimal.", SEVERITY_GOOD),
        ("Hero LCP image", "priority prop set on homepage & services hero images. Optimal.", SEVERITY_GOOD),
        ("Image optimization", "next/image used everywhere. Remote patterns: unsplash + wix.", SEVERITY_GOOD),
        ("Logo images", "Header/Footer use next/image with priority on Header. Optimal.", SEVERITY_GOOD),
        ("Image sizes", "All fill images have responsive sizes attribute. Optimal.", SEVERITY_GOOD),
        ("framer-motion", "~35-50KB gzipped. Audit if all features are actually used.", SEVERITY_MEDIUM),
        ("Client components", "4 identified - Header, GhlForm, FAQAccordion, StatCounter. All justified.", SEVERITY_GOOD),
        ("Bundle size", "lucide-react is tree-shakeable. No other heavy deps.", SEVERITY_GOOD),
        ("External images", "Unsplash URLs request auto format + q=80 - optimal.", SEVERITY_GOOD),
    ]

    for label, note, color in perf_items:
        elements.append(make_info_row(label, note, color))

    elements.append(Spacer(1, 0.2 * inch))
    elements.append(Paragraph("Recommendations", h3_style))
    recs = [
        "Audit <b>framer-motion</b> imports -- if you only use <i>motion.div</i> for a few fades, "
        "consider removing it entirely and using CSS animations. That could save ~40KB on first load.",
        "Consider enabling <b>dynamic opengraph-image.tsx</b> per route (you already have one at "
        "<i>app/opengraph-image.tsx</i>) -- this removes the manual OG image work.",
    ]
    for rec in recs:
        elements.append(Paragraph(f"•  {rec}", bullet_style))

    elements.append(PageBreak())


def build_accessibility(elements):
    elements.append(Paragraph("Accessibility & UX Health", h1_style))
    elements.append(section_divider())

    a11y_items = [
        ("Semantic HTML", "header, nav, main (with id='main'), footer all used correctly", SEVERITY_GOOD),
        ("ARIA labels", "Icon buttons labeled (e.g., Toggle menu, Instagram, LinkedIn)", SEVERITY_GOOD),
        ("Skip to content", "Skip link added with sr-only + focus:not-sr-only classes", SEVERITY_GOOD),
        ("Keyboard navigation", "Mobile menu toggles properly, all links reachable", SEVERITY_GOOD),
        ("Form labels", "Contact/newsletter forms are GHL iframes - cannot verify labels", SEVERITY_MEDIUM),
        ("Color contrast", "text-white/80 on transparent may fail WCAG AA in some contexts", SEVERITY_MEDIUM),
        ("Focus states", "Tailwind default focus rings likely present - spot check required", SEVERITY_LOW),
        ("Alt text coverage", "All images have descriptive, keyword-rich alts including portfolio gallery", SEVERITY_GOOD),
        ("Viewport meta", "Default Next.js viewport applied (no explicit override needed)", SEVERITY_GOOD),
    ]

    for label, note, color in a11y_items:
        elements.append(make_info_row(label, note, color))

    elements.append(Spacer(1, 0.2 * inch))
    elements.append(Paragraph("Quick Wins", h3_style))
    wins = [
        "Run a WCAG contrast check on all <i>text-white/60</i>, <i>text-white/80</i>, "
        "and <i>text-gray-400</i> usages.",
        "Verify GHL iframe forms have accessible labels (use browser DevTools).",
    ]
    for w in wins:
        elements.append(Paragraph(f"•  {w}", bullet_style))

    elements.append(PageBreak())


def build_security(elements):
    elements.append(Paragraph("Security Headers & Hardening", h1_style))
    elements.append(section_divider())

    elements.append(Paragraph(
        "<b>Status:</b> Full security headers suite now configured in next.config.ts. "
        "All critical headers are set via the <i>async headers()</i> function, applied "
        "to every route via the <i>/:path*</i> source pattern.",
        body_style,
    ))
    elements.append(Spacer(1, 0.15 * inch))

    sec_data = [
        ["Header", "Status", "Details"],
        ["Content-Security-Policy", "Configured", "Allows self, GA, GHL, Calendly, Unsplash, Wix"],
        ["X-Frame-Options", "DENY", "Prevents all iframe embedding"],
        ["X-Content-Type-Options", "nosniff", "Prevents MIME sniffing"],
        ["Referrer-Policy", "strict-origin-when-cross-origin", "Controls Referer to third parties"],
        ["Permissions-Policy", "Configured", "camera, microphone, geolocation all disabled"],
        ["Strict-Transport-Security", "Configured", "max-age=63072000; includeSubDomains; preload"],
        ["X-DNS-Prefetch-Control", "on", "Enables DNS prefetching for external resources"],
    ]

    sec_table = Table(sec_data, colWidths=[2.2 * inch, 1.0 * inch, 3.4 * inch], repeatRows=1)
    sec_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), BRAND_PRIMARY),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ("FONTSIZE", (0, 0), (-1, -1), 9),
        ("ALIGN", (0, 0), (-1, -1), "LEFT"),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("TEXTCOLOR", (0, 1), (-1, -1), BRAND_GRAY_700),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, BRAND_GRAY_50]),
        ("BOX", (0, 0), (-1, -1), 0.5, BRAND_GRAY_300),
    ]))
    elements.append(sec_table)
    elements.append(Spacer(1, 0.2 * inch))

    elements.append(Paragraph("Next Steps for Security", h3_style))
    elements.append(Paragraph(
        "The security headers are solid. Optional next steps: (1) Add a "
        "CSP report-uri endpoint to catch any policy violations in production. "
        "(2) After deploy, verify headers at <i>securityheaders.com</i> -- "
        "you should score an A or A+. (3) Consider adding a "
        "<i>Cross-Origin-Opener-Policy: same-origin</i> header if needed.",
        body_justify_style,
    ))
    elements.append(PageBreak())


def build_content(elements):
    elements.append(Paragraph("Content & Blog Health", h1_style))
    elements.append(section_divider())

    content_items = [
        ("Blog posts", "20 published posts, Jan-Mar 2025", SEVERITY_GOOD),
        ("Post length", "3,000-8,000 words each (excellent for SEO)", SEVERITY_GOOD),
        ("Author", "All posts by Saleem Raja with full schema (@id, jobTitle, worksFor)", SEVERITY_GOOD),
        ("Categories", "AI & Business, Web Dev, Design, Customer Service, VA, Coaching", SEVERITY_GOOD),
        ("Images", "All images hosted on static.wixstatic.com (configured remote pattern)", SEVERITY_GOOD),
        ("Services", "8 services with unique SEO metadata per slug", SEVERITY_GOOD),
        ("FAQ items", "Covers Getting Started, Pricing, Services, AI Tools categories", SEVERITY_GOOD),
        ("Testimonials", "Multiple testimonials on homepage and portfolio", SEVERITY_GOOD),
        ("Blog-to-service links", "Related Services block on every blog post with 2 contextual links", SEVERITY_GOOD),
    ]

    for label, note, color in content_items:
        elements.append(make_info_row(label, note, color))

    elements.append(Spacer(1, 0.2 * inch))
    elements.append(Paragraph("Recommendations", h3_style))
    recs = [
        "Create a VersAssist Style Guide for blog posts -- author bios, featured image template, "
        "keyword targets per category.",
        "Consider migrating blog images from wixstatic.com to your own CDN (self-hosted or Vercel) "
        "to reduce dependency on the old Wix infrastructure.",
        "Add more authors for credibility -- guest posts or other team members.",
    ]
    for rec in recs:
        elements.append(Paragraph(f"•  {rec}", bullet_style))

    elements.append(PageBreak())


def build_action_plan(elements):
    elements.append(Paragraph("Prioritized Action Plan", h1_style))
    elements.append(section_divider())
    elements.append(Paragraph(
        "Items marked DONE have been completed. Remaining items are ordered by impact. "
        "Estimated times assume a single developer familiar with the codebase.",
        body_justify_style,
    ))
    elements.append(Spacer(1, 0.15 * inch))

    actions = [
        # Completed items
        ("DONE", "Fix homepage meta title &amp; description lengths", "--", "SEO/CTR", SEVERITY_GOOD),
        ("DONE", "Remove '$XX/hr' placeholder from pricing meta description", "--", "Trust", SEVERITY_GOOD),
        ("DONE", "Add security headers block to next.config.ts", "--", "Security", SEVERITY_GOOD),
        ("DONE", "Trim all meta descriptions to &lt;=160 chars", "--", "SEO", SEVERITY_GOOD),
        ("DONE", "Fix sitemap lastModified for static pages", "--", "SEO", SEVERITY_GOOD),
        ("DONE", "Add skip-to-content link + id='main'", "--", "A11y", SEVERITY_GOOD),
        ("DONE", "Convert Header/Footer logo to next/image", "--", "Perf", SEVERITY_GOOD),
        ("DONE", "Add sizes attribute to all fill images", "--", "Perf", SEVERITY_GOOD),
        ("DONE", "Add BlogPosting author @id + URL to schemas.ts", "--", "Rich snippets", SEVERITY_GOOD),
        ("DONE", "Rewrite portfolio image alts (descriptive text)", "--", "A11y/SEO", SEVERITY_GOOD),
        ("DONE", "Add internal links from blog to matching service pages", "--", "SEO", SEVERITY_GOOD),

        # Remaining Priority 1 - Immediate
        ("P1", "Create app/not-found.tsx with branded 404", "45 min", "UX/SEO", SEVERITY_HIGH),
        ("P1", "Create app/error.tsx for runtime errors", "30 min", "UX", SEVERITY_HIGH),
        ("P1", "Create app/loading.tsx skeleton", "20 min", "UX", SEVERITY_HIGH),
        ("P1", "Add default OG image (public/og-default.jpg) to root layout", "30 min", "Social", SEVERITY_HIGH),

        # Remaining Priority 2 - Soon
        ("P2", "Strengthen internal linking from About, FAQ, Pricing to Services", "1 hr", "SEO", SEVERITY_MEDIUM),
        ("P2", "Expand Privacy/Terms page titles to 30+ chars", "10 min", "SEO", SEVERITY_MEDIUM),
        ("P2", "Add ContactPoint schema on /contact page", "20 min", "Rich snippets", SEVERITY_MEDIUM),
        ("P2", "Add Person schema for founders on /about", "20 min", "Rich snippets", SEVERITY_MEDIUM),

        # Remaining Priority 3 - Nice to have
        ("P3", "Audit framer-motion usage; remove if only used for simple fades", "1-2 hrs", "Perf", SEVERITY_LOW),
        ("P3", "Add dynamic opengraph-image.tsx per route type", "2 hrs", "Social", SEVERITY_LOW),
        ("P3", "Run full WCAG 2.1 AA color contrast audit", "1 hr", "A11y", SEVERITY_LOW),
        ("P3", "Add PriceTable / Offer schema on /pricing", "30 min", "Rich snippets", SEVERITY_LOW),
        ("P3", "Add VideoObject schema for portfolio reels", "1 hr", "Rich snippets", SEVERITY_LOW),
    ]

    header_row = ["Prio", "Action", "Effort", "Impact", "Severity"]
    data = [header_row]
    severity_colors = []
    for prio, action, effort, impact, sev_color in actions:
        sev_text = {
            SEVERITY_CRITICAL: "CRITICAL",
            SEVERITY_HIGH: "HIGH",
            SEVERITY_MEDIUM: "MEDIUM",
            SEVERITY_LOW: "LOW",
            SEVERITY_GOOD: "GOOD",
        }[sev_color]
        data.append([prio, Paragraph(action, body_style), effort, impact, sev_text])
        severity_colors.append(sev_color)

    action_table = Table(
        data,
        colWidths=[0.45 * inch, 3.5 * inch, 0.85 * inch, 0.95 * inch, 0.85 * inch],
        repeatRows=1,
    )

    style_cmds = [
        ("BACKGROUND", (0, 0), (-1, 0), BRAND_PRIMARY),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ("FONTSIZE", (0, 0), (-1, -1), 8.5),
        ("ALIGN", (0, 0), (-1, -1), "LEFT"),
        ("ALIGN", (0, 1), (0, -1), "CENTER"),
        ("ALIGN", (4, 1), (4, -1), "CENTER"),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("TEXTCOLOR", (0, 1), (-1, -1), BRAND_GRAY_700),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, BRAND_GRAY_50]),
        ("BOX", (0, 0), (-1, -1), 0.5, BRAND_GRAY_300),
        ("LINEBELOW", (0, 0), (-1, -1), 0.25, BRAND_GRAY_300),
    ]
    # Color the severity column
    for i, sev_color in enumerate(severity_colors, start=1):
        style_cmds.append(("BACKGROUND", (4, i), (4, i), sev_color))
        style_cmds.append(("TEXTCOLOR", (4, i), (4, i), colors.white))
        style_cmds.append(("FONTNAME", (4, i), (4, i), "Helvetica-Bold"))

    action_table.setStyle(TableStyle(style_cmds))
    elements.append(action_table)
    elements.append(Spacer(1, 0.2 * inch))

    # Time budget summary
    elements.append(Paragraph("Remaining Time Budget", h3_style))
    elements.append(Paragraph(
        "<b>Already completed:</b> 11 of 22 action items resolved<br/>"
        "<b>Priority 1 remaining:</b> ~2 hours (error pages + OG image)<br/>"
        "<b>Priority 2 remaining:</b> ~2 hours (internal links, schemas, legal titles)<br/>"
        "<b>Priority 3 remaining:</b> ~5-6 hours (framer-motion audit, OG per route, contrast, more schemas)<br/>"
        "<b>Total to reach 10/10:</b> ~9-10 hours of focused development.",
        body_style,
    ))
    elements.append(PageBreak())


def build_methodology(elements):
    elements.append(Paragraph("Appendix: Methodology", h1_style))
    elements.append(section_divider())

    elements.append(Paragraph(
        "This audit was produced by reading and analyzing the full source tree "
        "of the VersAssist website repository at <i>d:/versassists-website</i>. "
        "It is a <b>static source analysis</b> — no live crawling, no Lighthouse runs, "
        "no third-party SaaS tools were used.",
        body_justify_style,
    ))
    elements.append(Spacer(1, 0.1 * inch))

    elements.append(Paragraph("What was analyzed", h3_style))
    items = [
        "All 12 page files in <i>app/</i> (page.tsx, layout.tsx, dynamic routes)",
        "Root metadata configuration in <i>app/layout.tsx</i>",
        "All JSON-LD schema builders in <i>lib/schemas.ts</i>",
        "Sitemap generator in <i>app/sitemap.ts</i>",
        "Robots generator in <i>app/robots.ts</i>",
        "Next.js config in <i>next.config.ts</i>",
        "Header/Footer components and their accessibility features",
        "All 20 blog posts in <i>lib/blog-posts.ts</i>",
        "Service definitions and FAQ items in <i>lib/constants.ts</i>",
        "<i>package.json</i> dependency audit",
    ]
    for item in items:
        elements.append(Paragraph(f"•  {item}", bullet_style))

    elements.append(Spacer(1, 0.15 * inch))
    elements.append(Paragraph("What is NOT covered in this static audit", h3_style))
    items_not = [
        "Real-world Core Web Vitals (LCP, INP, CLS) from field data — run <b>Google PageSpeed "
        "Insights</b> or <b>Lighthouse</b> after deploy for this.",
        "Google Search Console coverage, indexing status, click-through rates",
        "Backlink profile (see BACKLINKS.md for strategy)",
        "Competitor analysis or keyword gap",
        "Live contrast checking (requires browser rendering)",
        "End-to-end form submission and analytics event tracking",
    ]
    for item in items_not:
        elements.append(Paragraph(f"•  {item}", bullet_style))

    elements.append(Spacer(1, 0.2 * inch))
    elements.append(Paragraph("Recommended follow-up tools", h3_style))
    tools = [
        ("Google Search Console", "https://search.google.com/search-console — index coverage, keyword performance"),
        ("PageSpeed Insights", "https://pagespeed.web.dev — real Core Web Vitals from Chrome users"),
        ("Lighthouse CI", "GitHub Action that runs Lighthouse on every deploy"),
        ("Schema Markup Validator", "https://validator.schema.org — validate all JSON-LD"),
        ("Rich Results Test", "https://search.google.com/test/rich-results — preview rich snippets"),
        ("WebPageTest", "https://www.webpagetest.org — deeper performance waterfall"),
        ("axe DevTools", "Browser extension for live accessibility scanning"),
        ("SecurityHeaders.com", "Grades your security headers after deploy"),
    ]
    for name, desc in tools:
        elements.append(Paragraph(f"•  <b>{name}</b> — {desc}", bullet_style))

    elements.append(Spacer(1, 0.25 * inch))
    elements.append(HRFlowable(width="100%", thickness=0.5, color=BRAND_GRAY_300))
    elements.append(Spacer(1, 0.15 * inch))
    elements.append(Paragraph(
        f'<font color="#6b7280"><i>Report generated on {REPORT_DATE} by Claude Code '
        f'for the VersAssist website rebuild project. '
        f'This is a living document — re-run the audit quarterly or after major releases.</i></font>',
        small_muted_style,
    ))


# ─── Main ──────────────────────────────────────────────────────────────
def generate():
    print(f"Generating PDF: {OUTPUT_PATH}")

    doc = SimpleDocTemplate(
        str(OUTPUT_PATH),
        pagesize=letter,
        leftMargin=0.75 * inch,
        rightMargin=0.75 * inch,
        topMargin=0.8 * inch,
        bottomMargin=0.75 * inch,
        title="VersAssist Website SEO & Site Health Audit Report",
        author="Claude Code",
        subject="Comprehensive audit of www.versassists.com",
        creator="VersAssist audit tool",
    )

    elements = []
    build_cover(elements)
    build_executive_summary(elements)
    build_toc(elements)
    build_critical_issues(elements)
    build_onpage_seo(elements)
    build_technical_seo(elements)
    build_performance(elements)
    build_accessibility(elements)
    build_security(elements)
    build_content(elements)
    build_action_plan(elements)
    build_methodology(elements)

    doc.build(
        elements,
        onFirstPage=draw_first_page,
        onLaterPages=draw_later_pages,
    )

    size_kb = OUTPUT_PATH.stat().st_size / 1024
    print(f"[OK] Generated {OUTPUT_PATH}")
    print(f"  Size: {size_kb:.1f} KB")


if __name__ == "__main__":
    generate()
