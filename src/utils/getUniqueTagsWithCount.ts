import { slugifyStr } from "./slugify";
import type { CollectionEntry } from "astro:content";

interface TagWithCount {
  tag: string;
  tagName: string;
  count: number;
}

const getUniqueTagsWithCount = (
  posts: CollectionEntry<"blog">[]
): TagWithCount[] => {
  const filteredPosts = posts.filter(({ data }) => !data.draft);

  const tagCounts: Record<string, number> = {};
  const tagNames: Record<string, string> = {};

  filteredPosts.forEach(post => {
    post.data.tags.forEach(tag => {
      const slug = slugifyStr(tag);
      tagCounts[slug] = (tagCounts[slug] || 0) + 1;
      tagNames[slug] = tag;
    });
  });

  const tags: TagWithCount[] = Object.keys(tagCounts)
    .map(slug => ({
      tag: slug,
      tagName: tagNames[slug],
      count: tagCounts[slug],
    }))
    .sort((tagA, tagB) => tagA.tag.localeCompare(tagB.tag));

  return tags;
};

export default getUniqueTagsWithCount;
