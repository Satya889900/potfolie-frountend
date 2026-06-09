interface SkillCardProps {
  skill: string;
}

export default function SkillCard({
  skill,
}: SkillCardProps) {
  return (
    <div className="border rounded-xl p-6 hover:shadow-lg transition cursor-pointer">
      <h3 className="text-xl font-semibold">
        {skill}
      </h3>
    </div>
  );
}