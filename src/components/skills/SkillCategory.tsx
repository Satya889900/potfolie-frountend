import SkillCard from "./SkillCard";

export default function SkillCategory() {
  const frontend = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
  ];

  const backend = [
    "Java",
    "Spring Boot",
    "Node.js",
    "Express.js",
  ];

  const database = [
    "MongoDB",
    "MySQL",
    "PostgreSQL",
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold mb-12">
          Skills
        </h1>

        <h2 className="text-3xl font-semibold mb-6">
          Frontend
        </h2>

        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {frontend.map((skill) => (
            <SkillCard key={skill} skill={skill} />
          ))}
        </div>

        <h2 className="text-3xl font-semibold mb-6">
          Backend
        </h2>

        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {backend.map((skill) => (
            <SkillCard key={skill} skill={skill} />
          ))}
        </div>

        <h2 className="text-3xl font-semibold mb-6">
          Database
        </h2>

        <div className="grid md:grid-cols-4 gap-4">
          {database.map((skill) => (
            <SkillCard key={skill} skill={skill} />
          ))}
        </div>

      </div>
    </section>
  );
}