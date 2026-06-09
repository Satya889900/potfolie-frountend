import Link from "next/link";
import { Blog } from "@/types/Blog";

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({
  blog,
}: BlogCardProps) {
  return (
    <div className="border rounded-xl p-6 hover:shadow-lg transition">

      <span className="text-sm text-blue-600">
        {blog.category}
      </span>

      <h2 className="text-2xl font-bold mt-3">
        {blog.title}
      </h2>

      <p className="mt-3 text-gray-500">
        {blog.description}
      </p>

      <Link
        href={`/blog/${blog.slug}`}
        className="inline-block mt-5 text-blue-600"
      >
        Read More →
      </Link>

    </div>
  );
}