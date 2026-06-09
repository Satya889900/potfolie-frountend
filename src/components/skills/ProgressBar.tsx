interface ProgressBarProps {
  skill: string;
  percentage: number;
}

export default function ProgressBar({
  skill,
  percentage,
}: ProgressBarProps) {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span>{skill}</span>
        <span>{percentage}%</span>
      </div>

      <div className="h-3 bg-gray-200 rounded-full">
        <div
          className="h-3 bg-blue-600 rounded-full"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>
    </div>
  );
}