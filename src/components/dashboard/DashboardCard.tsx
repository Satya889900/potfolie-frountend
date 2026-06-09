interface DashboardCardProps {
  title: string;
  value: string;
}

export default function DashboardCard({
  title,
  value,
}: DashboardCardProps) {
  return (
    <div className="border rounded-xl p-6 shadow-sm hover:shadow-lg transition">

      <h3 className="text-gray-500 text-lg">
        {title}
      </h3>

      <h2 className="text-4xl font-bold mt-4">
        {value}
      </h2>

    </div>
  );
}