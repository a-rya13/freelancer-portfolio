import Link from "next/link";
import { Phone } from "lucide-react";

const navigation = [
  { title: "Work", href: "/work" },
  { title: "Services", href: "/services" },
  { title: "About", href: "/#about" },
  { title: "Contact", href: "/#contact" },
];

// TODO: replace with real numbers/handles once provided.
const PHONE_NUMBER = "+91 00000 00000";
const PHONE_HREF = "tel:+910000000000";
const WHATSAPP_HREF = "https://wa.me/910000000000";
const INSTAGRAM_HREF = "https://instagram.com";
const LINKEDIN_HREF = "https://linkedin.com";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.14H4.7V23H.24V8.14zM8.4 8.14h4.27v2.03h.06c.6-1.13 2.06-2.32 4.24-2.32 4.53 0 5.37 2.98 5.37 6.86V23h-4.46v-6.62c0-1.58-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.49V23H8.4V8.14z" />
    </svg>
  );
}

export function WhatsappIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.47 14.38c-.29-.15-1.73-.85-2-.95-.27-.1-.46-.15-.66.15-.2.29-.76.94-.93 1.14-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.6-.91-2.19-.24-.58-.48-.5-.66-.51-.17-.01-.37-.01-.56-.01-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.43 0 1.43 1.04 2.82 1.19 3.01.15.2 2.05 3.13 4.97 4.39.69.3 1.24.48 1.66.61.7.22 1.33.19 1.84.12.56-.08 1.73-.71 1.98-1.39.24-.68.24-1.27.17-1.39-.07-.12-.27-.2-.56-.34z" />
      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.87.51 3.63 1.4 5.14L2 22l4.99-1.31A9.94 9.94 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.15c-1.62 0-3.14-.44-4.44-1.2l-.32-.19-3.16.83.84-3.08-.21-.32A8.15 8.15 0 013.85 12c0-4.5 3.66-8.15 8.15-8.15S20.15 7.5 20.15 12 16.5 20.15 12 20.15z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border py-14 sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 sm:gap-12 sm:px-6 lg:gap-16">
        {/* Top */}

        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-12">
          <div>
            <Link
              href="/"
              className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              Arya Agarwal
              <span className="text-zinc-400">.</span>
            </Link>

            <p className="mt-6 max-w-md leading-7 text-zinc-600 sm:leading-8">
              Digital Growth Partner helping small businesses build fast, modern
              websites, CRMs, and growth systems — so leads get answered quicker
              and your business keeps growing online.
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
              Get in Touch
            </h4>

            <div className="mt-6 flex flex-col gap-4">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2.5 text-zinc-600 transition hover:text-black"
              >
                <Phone size={17} />
                {PHONE_NUMBER}
              </a>

              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-zinc-600 transition hover:text-black"
              >
                <WhatsappIcon className="h-[17px] w-[17px]" />
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Connect
            </h4>

            <div className="mt-6 flex items-center gap-4">
              <a
                href={INSTAGRAM_HREF}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-zinc-600 transition hover:border-zinc-900 hover:text-black"
              >
                <InstagramIcon className="h-[18px] w-[18px]" />
              </a>

              <a
                href={LINKEDIN_HREF}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-zinc-600 transition hover:border-zinc-900 hover:text-black"
              >
                <LinkedinIcon className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="flex flex-col items-start justify-between gap-6 border-t border-border pt-8 text-sm text-zinc-500 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Arya Agarwal. All rights reserved.</p>

          <p>Crafted for businesses who want to grow.</p>
        </div>
      </div>
    </footer>
  );
}
