"use client";

import { useRef, useState } from "react";

import { projects } from "@/data/projects";

const orderedProjects = projects.filter((project) => project.featured);

export default function SelectedWork() {
  const [activeIndex, setActiveIndex] = useState(0);
  const rowRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const active = orderedProjects[activeIndex];

  const focusRow = (index: number) => {
    const length = orderedProjects.length;
    const nextIndex = (index + length) % length;
    rowRefs.current[nextIndex]?.focus();
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      focusRow(index + 1);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      focusRow(index - 1);
    }
  };

  return (
    <section
      id="work"
      className="bg-bg px-5 pt-[86px] pb-[30px] text-text sm:px-6 md:px-[40px]"
    >
      <div className="mx-auto max-w-[1560px]">
        <div className="mb-[44px] flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="font-heading text-[clamp(28px,3vw,40px)] font-semibold tracking-[-0.03em]">
            Proof, not promises
          </h2>

          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-dimmest">
            {orderedProjects.length} selected / hover a row to inspect
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(330px,1fr))] items-start gap-x-[64px] gap-y-[56px]">
          {/* LEFT */}
          <div role="listbox" aria-label="Selected work" className="flex flex-col">
            {orderedProjects.map((project, index) => {
              const isActive = index === activeIndex;
              const isLast = index === orderedProjects.length - 1;

              return (
                <button
                  key={project.slug}
                  ref={(el) => {
                    rowRefs.current[index] = el;
                  }}
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  className={`flex cursor-pointer items-center gap-[18px] border-t border-hairline px-[4px] py-[20px] text-left transition-colors hover:bg-[rgba(245,165,36,0.03)] focus:outline-none ${
                    isLast ? "border-b" : ""
                  }`}
                >
                  <span
                    className={`self-stretch w-[2px] bg-amber ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  <span className="w-[20px] font-mono text-[11px] text-amber">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex-1">
                    <span
                      className={`block text-[19px] font-medium ${
                        isActive ? "text-text" : "text-dim"
                      }`}
                    >
                      {project.title}
                    </span>
                    <span className="mt-[5px] block font-mono text-[10px] uppercase tracking-[0.16em] text-dimmest">
                      {project.category}
                    </span>
                  </span>

                  <span className="flex flex-none items-center gap-[9px] font-mono text-[11px] uppercase tracking-[0.14em] text-dim">
                    <span
                      className={`h-[5px] w-[5px] rounded-full bg-amber ${
                        project.status === "ongoing"
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    />
                    {project.duration}
                  </span>
                </button>
              );
            })}
          </div>

          {/* RIGHT */}
          <div className="border border-hairline bg-surface p-[34px] pb-[30px]">
            <div className="flex items-center gap-[12px] font-mono text-[10px] uppercase tracking-[0.2em]">
              <span className="h-px w-[20px] bg-amber" />
              <span className="text-amber">{active.status}</span>
              <span className="text-[#4A4A52]">/</span>
              <span className="text-dimmest">{active.duration}</span>
            </div>

            <h3 className="font-heading mt-[20px] text-[clamp(24px,2.6vw,34px)] font-semibold tracking-[-0.03em]">
              {active.title}
            </h3>

            <p className="mt-[14px] max-w-[52ch] text-[15px] leading-[1.6] text-[#A8A49D]">
              {active.tagline}
            </p>

            <p className="mt-[16px] font-mono text-[10px] uppercase tracking-[0.14em] text-dimmest">
              Role — {active.role}
            </p>

            <div className="mt-[30px] border-t border-b border-hairline py-[24px]">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-dimmest">
                What shipped
              </p>

              <div className="mt-[16px] grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-x-[28px] gap-y-[11px]">
                {active.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-[10px]">
                    <span className="text-[11px] leading-[1.5] text-amber">
                      ◆
                    </span>
                    <span className="text-[14px] leading-[1.5] text-[#C9C5BE]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-[26px] flex flex-col gap-[18px]">
              <div className="flex gap-[14px]">
                <span className="w-[74px] shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-dimmest">
                  Problem
                </span>
                <p className="text-[14px] leading-[1.5] text-[#908D86]">
                  {active.challenge}
                </p>
              </div>

              <div className="flex gap-[14px]">
                <span className="w-[74px] shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-dimmest">
                  Outcome
                </span>
                <p className="text-[14px] leading-[1.5] text-[#C9C5BE]">
                  {active.outcome}
                </p>
              </div>
            </div>

            <div className="mt-[28px] flex flex-wrap gap-[8px] border-t border-hairline pt-[24px]">
              {active.technologies.map((tech) => (
                <span
                  key={tech.name}
                  className="rounded-full border border-[#23232A] px-[12px] py-[6px] font-mono text-[10px] uppercase tracking-[0.12em] text-dim"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
