import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, modDatetime, description } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-medium decoration-dashed hover:underline",
  };

  return (
    <li className="my-8 border-4 border-black p-6 bg-skin-card shadow-retro hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all">
      <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} />
      <a
        href={href}
        className="inline-block text-2xl font-retro uppercase text-skin-accent hover:text-skin-base transition-colors"
      >
        {secHeading ? (
          <h2 {...headerProps}>{title}</h2>
        ) : (
          <h3 {...headerProps}>{title}</h3>
        )}
      </a>
      <p className="mt-4 font-sans line-clamp-3">{description}</p>
    </li>
  );
}
