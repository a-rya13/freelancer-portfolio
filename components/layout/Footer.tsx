import Link from "next/link";

const navigation = [
  {
    title: "Work",
    href: "#work",
  },
  {
    title: "Capabilities",
    href: "#services",
  },
  {
    title: "Process",
    href: "#process",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

const socials = [
  {
    title: "LinkedIn",
    href: "https://linkedin.com",
  },
  {
    title: "GitHub",
    href: "https://github.com",
  },
  {
    title: "Instagram",
    href: "https://instagram.com",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6">
        {/* Top */}

        <div className="grid gap-16 lg:grid-cols-[2fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="font-heading text-3xl font-semibold tracking-tight"
            >
              ARYA
              <span className="text-zinc-400">.</span>
            </Link>

            <p className="mt-6 max-w-md leading-8 text-zinc-600">
              Independent Full-Stack Developer building modern digital products,
              premium web experiences, and scalable software for startups and
              growing businesses.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Navigation
            </h4>

            <div className="mt-6 flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="transition hover:text-black text-zinc-600"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Connect
            </h4>

            <div className="mt-6 flex flex-col gap-4">
              {socials.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  className="transition hover:text-black text-zinc-600"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="flex flex-col items-start justify-between gap-6 border-t border-zinc-200 pt-8 text-sm text-zinc-500 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} ARYA BUILDS. All rights reserved.</p>

          <p>Crafted with Next.js, Tailwind CSS & Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
