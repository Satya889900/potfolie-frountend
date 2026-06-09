"use client";

export default function ProjectFilter() {
  return (
    <div className="flex gap-3 mb-8 flex-wrap">

      <button className="border px-4 py-2 rounded">
        All
      </button>

      <button className="border px-4 py-2 rounded">
        React
      </button>

      <button className="border px-4 py-2 rounded">
        Spring Boot
      </button>

      <button className="border px-4 py-2 rounded">
        Next.js
      </button>

    </div>
  );
}