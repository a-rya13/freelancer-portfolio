interface TechBadgeProps {
  name: string;
}

export default function TechBadge({ name }: TechBadgeProps) {
  return (
    <span
      className="
      inline-flex
      items-center
      rounded-full
      border
      border-zinc-200
      bg-white
      px-3
      py-1.5
      text-sm
      font-medium
      text-zinc-700
      transition-colors
      duration-300
      hover:border-zinc-900
      hover:text-zinc-900
    "
    >
      {name}
    </span>
  );
}
