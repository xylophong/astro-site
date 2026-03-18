import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, modDatetime, description, tags, author } = frontmatter;

  const titleProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className:
      "text-lg font-semibold tracking-tight leading-snug text-skin-base group-hover:text-skin-accent transition-colors",
  };

  return (
    <li className="group py-8 border-b border-[rgba(var(--color-border),0.12)]">
      <div className="flex flex-col gap-3">
        <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} />
        <a href={href} className="block no-underline">
          {secHeading ? (
            <h2 {...titleProps}>{title}</h2>
          ) : (
            <h3 {...titleProps}>{title}</h3>
          )}
        </a>
        {description && (
          <p
            className="text-sm leading-relaxed line-clamp-3"
            style={{ color: "rgba(var(--color-text-base), 0.6)" }}
          >
            {description}
          </p>
        )}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {author && (
            <span
              className="text-xs font-medium"
              style={{ color: "rgba(var(--color-text-base), 0.5)" }}
            >
              {author}
            </span>
          )}
          {author && tags && tags.length > 0 && (
            <span
              className="text-xs"
              style={{ color: "rgba(var(--color-text-base), 0.25)" }}
            >
              ·
            </span>
          )}
          {tags && (
            <ul className="flex flex-wrap gap-1.5">
              {tags.slice(0, 4).map((tag: string) => (
                <li key={tag}>
                  <a
                    href={`/tags/${slugifyStr(tag)}`}
                    className="tag-pill no-underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {tag}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </li>
  );
}
