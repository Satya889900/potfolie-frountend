export default function ExperienceTimeline() {
  const experiences = [
    {
      company: "Kods",
      role: "Full Stack Developer",
      duration: "2025 - Present",
      description:
        "Working on Next.js, React, Spring Boot, WhatsApp Automation, CRM and Dashboard Applications.",
    },
    {
      company: "Personal Projects",
      role: "MERN Stack Developer",
      duration: "2024 - 2025",
      description:
        "Built Student Management System, Employee Management System and Full Stack Applications.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-6xl font-bold mb-12 tracking-tight">
          Experience
        </h1>

        <div className="space-y-8">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="border-l-4 border-blue-600 pl-6 py-4"
            >
              <h2 className="text-3xl font-bold">
                {item.role}
              </h2>

              <h3 className="text-xl text-blue-600">
                {item.company}
              </h3>

              <p className="text-base text-gray-500 mt-1">
                {item.duration}
              </p>

              <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}