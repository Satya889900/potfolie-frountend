import DashboardCard from "./DashboardCard";

export default function DashboardStats() {
  const stats = [
    {
      title: "Projects",
      value: "20+",
    },
    {
      title: "Skills",
      value: "15+",
    },
    {
      title: "Certificates",
      value: "10+",
    },
    {
      title: "Blogs",
      value: "5+",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold mb-12">
          Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item) => (
            <DashboardCard
              key={item.title}
              title={item.title}
              value={item.value}
            />
          ))}
        </div>

      </div>
    </section>
  );
}