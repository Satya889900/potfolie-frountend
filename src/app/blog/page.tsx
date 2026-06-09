import BlogGrid from "../../components/blog/BlogGrid";
import { getAllBlogs } from "../../services/blogService";

export default async function BlogPage() {
  const blogs = await getAllBlogs();

  return <BlogGrid blogs={blogs} />;
}