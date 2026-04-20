import Image from "next/image";
import Link from "next/link";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";

type InlineImage = {
  _type: "image";
  asset?: { _ref?: string; _id?: string };
  alt?: string;
  caption?: string;
};

type LinkMark = {
  _type: "link";
  href?: string;
};

const components: PortableTextComponents = {
  types: {
    image: ({ value }: { value: InlineImage }) => {
      if (!value?.asset) return null;
      const src = urlForImage(value).width(1200).url();
      return (
        <figure className="my-8">
          <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
            <Image
              src={src}
              alt={value.alt || ""}
              width={1200}
              height={675}
              sizes="(min-width:768px) 720px, 100vw"
              className="w-full h-auto"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-gray-500">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  marks: {
    link: ({ value, children }: { value?: LinkMark; children?: React.ReactNode }) => {
      const href = value?.href || "#";
      const isExternal = /^https?:\/\//i.test(href);
      if (isExternal) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        );
      }
      return <Link href={href}>{children}</Link>;
    },
  },
};

export default function PortableBody({ value }: { value: unknown[] }) {
  return <PortableText value={value as Parameters<typeof PortableText>[0]["value"]} components={components} />;
}
