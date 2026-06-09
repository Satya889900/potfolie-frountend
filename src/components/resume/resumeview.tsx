import Link from "next/link";

export default function ResumeViewer() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6">

        <h1 className="text-5xl font-bold mb-6">
          Resume
        </h1>

        <p className="text-gray-500 mb-8">
          Download my latest resume in PDF format.
        </p>

        <div className="flex gap-4">

          <a
            href="/resume/Satya-Prakash-Resume.pdf"
            download
            className="
              px-6 py-3
              bg-blue-600
              text-white
              rounded-lg
              hover:bg-blue-700
              transition
            "
          >
            Download Resume
          </a>

          <a
            href="/resume/Satya-Prakash-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-6 py-3
              border
              rounded-lg
              hover:bg-gray-100
              dark:hover:bg-zinc-800
              transition
            "
          >
            View Resume
          </a>

        </div>

      </div>
    </section>
  );
}