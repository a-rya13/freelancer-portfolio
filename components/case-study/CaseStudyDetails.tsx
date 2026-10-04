import { Project } from "@/types/project";
import { hasValue } from "@/lib/utils";

import TechBadge from "@/components/sections/selected-work/TechBadge";
import ProjectGallery from "@/components/sections/selected-work/ProjectGallery";

interface Props {
  project: Project;
}

export default function CaseStudyDetails({ project }: Props) {
  return (
    <section className="bg-surface px-5 py-[86px] text-text sm:px-6 md:px-[40px]">
      <div className="mx-auto max-w-[1560px]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(330px,1fr))] gap-x-[64px] gap-y-[56px]">
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-[12px] font-mono text-[10px] uppercase tracking-[0.2em]">
              <span className="h-px w-[20px] bg-amber" />
              <span className="text-amber">{project.status}</span>
              {hasValue(project.duration) && (
                <>
                  <span className="text-[#4A4A52]">/</span>
                  <span className="text-dimmest">{project.duration}</span>
                </>
              )}
            </div>

            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-dimmest">
              Role — {project.role}
            </p>

            <p className="mt-[20px] max-w-[52ch] text-[15px] leading-[1.6] text-[#A8A49D]">
              {project.overview}
            </p>

            <div className="mt-[30px] flex flex-col gap-[18px] border-t border-hairline pt-[24px]">
              <div className="flex gap-[14px]">
                <span className="w-[74px] shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-dimmest">
                  Problem
                </span>
                <p className="text-[14px] leading-[1.5] text-[#908D86]">
                  {project.challenge}
                </p>
              </div>

              <div className="flex gap-[14px]">
                <span className="w-[74px] shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-dimmest">
                  Solution
                </span>
                <p className="text-[14px] leading-[1.5] text-[#908D86]">
                  {project.solution}
                </p>
              </div>

              <div className="flex gap-[14px]">
                <span className="w-[74px] shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-dimmest">
                  Outcome
                </span>
                <p className="text-[14px] leading-[1.5] text-[#C9C5BE]">
                  {project.outcome}
                </p>
              </div>
            </div>

            {project.metrics.length > 0 && (
              <div className="mt-[30px] flex flex-wrap gap-[30px] border-t border-hairline pt-[24px]">
                {project.metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="text-[22px] font-semibold text-text">
                      {metric.value}
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-dim">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-[28px] flex flex-wrap gap-[8px] border-t border-hairline pt-[24px]">
              {project.technologies.map((tech) => (
                <TechBadge key={tech.name} name={tech.name} />
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-dimmest">
              What shipped
            </p>

            <div className="mt-[16px] flex flex-col gap-[11px] border-b border-hairline pb-[30px]">
              {project.features.map((feature) => (
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

            {project.gallery.length > 0 && (
              <div className="mt-[30px]">
                <ProjectGallery images={project.gallery} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
