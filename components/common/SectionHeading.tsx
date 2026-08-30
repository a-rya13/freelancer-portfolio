type Props = {
  badge?: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ badge, title, description }: Props) {
  return (
    <div className="max-w-3xl">
      {badge && (
        <span className="rounded-full border border-zinc-300 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-zinc-500 sm:px-4 sm:py-2 sm:tracking-[0.25em]">
          {badge}
        </span>
      )}

      <h2 className="mt-5 text-3xl font-black leading-tight sm:mt-6 sm:text-4xl md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-zinc-600 sm:mt-6 sm:text-lg sm:leading-8">
          {description}
        </p>
      )}
    </div>
  );
}
