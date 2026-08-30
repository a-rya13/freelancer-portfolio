import { WhatsappIcon } from "@/components/layout/Footer";

// TODO: replace with the real WhatsApp number once provided.
const WHATSAPP_HREF = "https://wa.me/910000000000";

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform duration-300 hover:scale-110 sm:bottom-8 sm:right-8"
    >
      <WhatsappIcon className="h-7 w-7" />
    </a>
  );
}
