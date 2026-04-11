"use client";

import Script from "next/script";

interface GhlFormProps {
  /** The GHL form ID (the last segment of the embed URL). */
  formId: string;
  /** Accessible title / iframe title. */
  title?: string;
  /** Initial height before the GHL resize script kicks in. */
  initialHeight?: number;
  /** Optional additional classes applied to the wrapper. */
  className?: string;
}

/**
 * Embeds a GoHighLevel form via iframe and loads the form-embed resize script once.
 * Submissions land directly in GHL (contacts, workflows, pipelines all fire automatically).
 */
export default function GhlForm({
  formId,
  title = "Contact Form",
  initialHeight = 700,
  className = "",
}: GhlFormProps) {
  return (
    <div className={className}>
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${formId}`}
        style={{
          width: "100%",
          height: `${initialHeight}px`,
          border: "none",
          borderRadius: "12px",
          background: "transparent",
        }}
        id={`inline-${formId}`}
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={title}
        data-height={initialHeight}
        data-layout-iframe-id={`inline-${formId}`}
        data-form-id={formId}
        title={title}
      />
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
