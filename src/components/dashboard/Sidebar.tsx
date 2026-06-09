import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r min-h-screen p-6">

      <h2 className="text-2xl font-bold mb-8">
        Dashboard
      </h2>

      <nav className="flex flex-col gap-4">

        <Link href="/dashboard">
          Dashboard Home
        </Link>

        <Link href="/projects">
          Projects
        </Link>

        <Link href="/blog">
          Blogs
        </Link>

        <Link href="/contact">
          Contact
        </Link>

      </nav>

    </aside>
  );
}