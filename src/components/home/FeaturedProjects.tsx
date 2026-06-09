export default function FeaturedProjects() {
  const projects = [
    "Student Management System",
    "Employee Management System",
    "WhatsApp Automation Dashboard",
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-10">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {projects.map((project) => (
            <div
              key={project}
              className="border rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold">
                {project}
              </h3>

              <p className="mt-3 text-gray-500">
                Modern full stack application
                built using latest technologies.
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}