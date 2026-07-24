type Props = {
  badge?: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ badge, title, description }: Props) {
  return (
    <div className="max-w-3xl">
      {badge && (
        <span className="rounded-full border border-zinc-300 px-4 py-2 text-xs uppercase tracking-[0.25em] text-zinc-500">
          {badge}
        </span>
      )}

      <h2 className="mt-6 text-5xl font-black leading-tight">{title}</h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-zinc-600">{description}</p>
      )}
    </div>
  );
}
