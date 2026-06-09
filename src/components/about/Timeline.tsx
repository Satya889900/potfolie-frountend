export default function Timeline() {
  const items = [
    {
      year: "2024",
      title: "Started Full Stack Development",
    },
    {
      year: "2025",
      title: "Worked on MERN Projects",
    },
    {
      year: "2026",
      title: "Building Enterprise Applications",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-10">
          Journey
        </h2>

        <div className="space-y-6">

          {items.map((item) => (
            <div
              key={item.year}
              className="border-l-4 border-blue-600 pl-6 py-4"
            >
              <h3 className="text-xl font-bold">
                {item.year}
              </h3>

              <p className="text-gray-500">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}