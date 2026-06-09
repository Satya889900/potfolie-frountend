import BlogCard from "./BlogCard";
import { Blog } from "@/types/Blog";

interface BlogGridProps {
  blogs: Blog[];
}

export default function BlogGrid({
  blogs,
}: BlogGridProps) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold mb-12">
          Blog
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
            />
          ))}
        </div>

      </div>
    </section>
  );
}