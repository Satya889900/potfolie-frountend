export default function Statistics() {
  const stats = [
    {
      number: "10+",
      label: "Months Experience",
    },
    {
      number: "20+",
      label: "Projects",
    },
    {
      number: "15+",
      label: "Technologies",
    },
    {
      number: "100%",
      label: "Dedication",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((item) => (
            <div
              key={item.label}
              className="border rounded-xl p-8 text-center"
            >
              <h3 className="text-4xl font-bold">
                {item.number}
              </h3>

              <p className="mt-2 text-gray-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}