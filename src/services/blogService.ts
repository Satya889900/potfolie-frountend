import { blogs } from "../data/blogs";

export async function getAllBlogs() {
  return blogs;
}

export async function getBlogBySlug(
  slug: string
) {
  return blogs.find(
    (blog) => blog.slug === slug
  );
}

export async function getRecentBlogs() {
  return blogs.slice(0, 3);
}