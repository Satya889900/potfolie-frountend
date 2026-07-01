// ═══════════════════════════════════════════════════════════════
// 🚧 COMING SOON — Blog page is under construction.
//    All original code is preserved below (commented out).
//    Uncomment when blog content is ready.
// ═══════════════════════════════════════════════════════════════

import ComingSoonPage from "../../components/common/ComingSoon";

export default function BlogPage() {
  return <ComingSoonPage title="BLOG." badge="MY ARTICLES & INSIGHTS" />;
}

// ── ORIGINAL CODE (preserved, do not delete) ──────────────────
//
// import BlogGrid from "../../components/blog/BlogGrid";
// import { getAllBlogs } from "../../services/blogService";
//
// export default async function BlogPage() {
//   const blogs = await getAllBlogs();
//   return <BlogGrid blogs={blogs} />;
// }