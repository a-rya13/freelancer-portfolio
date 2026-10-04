import { AVAILABILITY, CONTACT, SOCIAL_LINKS } from "@/constants/contact";

const SERVICE_LINKS = [
  "Search & AEO",
  "Paid acquisition",
  "Sites & web apps",
  "Content & creative",
];

function FooterColumn({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-dim">
        {heading}
      </h3>
      <div className="mt-5 flex flex-col gap-3 text-[15px]">{children}</div>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-[#C9C5BE] transition-colors hover:text-amber"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  const socials = SOCIAL_LINKS.filter((social) => social.href);

  return (
    <footer
      id="contact"
      className="bg-surface px-5 pt-[80px] pb-0 text-text sm:px-6 md:px-[40px]"
    >
      <div className="mx-auto max-w-[1560px]">
        {/* Block A */}
        <div className="flex flex-col gap-10 border-b border-hairline pb-[64px] sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-amber">
              <span className="h-px w-[26px] bg-amber" />
              Next step
            </div>

            <h2 className="font-heading mt-6 text-[clamp(30px,4vw,54px)] leading-[1.1] font-semibold tracking-[-0.035em]">
              Let&apos;s make you the
              <br />
              obvious choice.
            </h2>
          </div>

          <div className="flex flex-col gap-[14px]">
            <a
              href={CONTACT.emailHref}
              className="rounded-full bg-amber px-[30px] py-[16px] text-center font-mono text-[12px] uppercase tracking-[0.14em] text-[#100C04] transition-colors hover:bg-amber-hover"
            >
              Email me
            </a>

            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#26262B] px-[30px] py-[16px] text-center font-mono text-[12px] uppercase tracking-[0.14em] text-[#B9B5AD] transition-colors hover:border-dim hover:text-text"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Block B */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-x-[40px] gap-y-[44px] py-[56px]">
          <FooterColumn heading="Direct">
            <FooterLink href={CONTACT.emailHref}>{CONTACT.email}</FooterLink>
            <FooterLink href={CONTACT.phoneHref}>Call: {CONTACT.phone}</FooterLink>
            <FooterLink href={CONTACT.whatsappHref}>
              WhatsApp: {CONTACT.whatsapp}
            </FooterLink>
          </FooterColumn>

          {socials.length > 0 && (
            <FooterColumn heading="Elsewhere">
              {socials.map((social) => (
                <FooterLink key={social.name} href={social.href}>
                  {social.name}
                </FooterLink>
              ))}
            </FooterColumn>
          )}

          <FooterColumn heading="Work with me on">
            {SERVICE_LINKS.map((service) => (
              <FooterLink key={service} href="/services">
                {service}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn heading="Status">
            <div className="flex items-center gap-2.5 text-[#C9C5BE]">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber animate-[blink_1.4s_step-end_infinite]" />
              {AVAILABILITY.status}
            </div>
            <p className="text-[#C9C5BE]">{AVAILABILITY.location}</p>
            <p className="text-[#C9C5BE]">{AVAILABILITY.replyTime}</p>
          </FooterColumn>
        </div>

        {/* Block C */}
        <div className="flex flex-col gap-4 border-t border-hairline pt-[24px] pb-[40px] font-mono text-[11px] uppercase tracking-[0.16em] text-dimmest sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Arya Agarwal — Digital Growth Partner</p>
          <a href="#top" className="transition-colors hover:text-amber">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
