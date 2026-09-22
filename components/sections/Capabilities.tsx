import { capabilities } from "@/data/capabilities";

export default function Capabilities() {
  return (
    <section
      id="services"
      className="bg-surface px-5 pt-[86px] pb-[96px] text-text sm:px-6 md:px-[40px]"
    >
      <div className="mx-auto max-w-[1560px]">
        <div className="mb-[44px] flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="font-heading text-[clamp(28px,3vw,40px)] font-semibold tracking-[-0.03em]">
            What I run for you
          </h2>

          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#77746E]">
            12 services / one operator
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-[40px] gap-y-0">
          {capabilities.map((item) => (
            <div
              key={item.index}
              className="flex gap-4 border-t border-hairline py-[22px]"
            >
              <span className="pt-[5px] font-mono text-[11px] text-amber">
                {item.index}
              </span>

              <div>
                <h3 className="text-[19px] font-medium">{item.title}</h3>
                <p className="mt-[6px] text-[14px] leading-[1.5] text-[#807D77]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
