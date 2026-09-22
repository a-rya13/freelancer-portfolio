interface TechBadgeProps {
  name: string;
}

export default function TechBadge({ name }: TechBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#23232A] px-[12px] py-[6px] font-mono text-[10px] uppercase tracking-[0.12em] text-dim transition-colors hover:border-dim hover:text-text">
      {name}
    </span>
  );
}
