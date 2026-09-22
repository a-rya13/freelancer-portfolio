"use client";

import { Fragment } from "react";

const ITEMS = [
  "SEO",
  "AEO",
  "Google Ads",
  "Meta Ads",
  "Web Apps",
  "Indexing",
  "Content Strategy",
  "Reels & Edits",
  "Business Plans",
  "Leads",
];

function MarqueeGroup({ hidden }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden}
      className="flex items-center gap-[34px] whitespace-nowrap px-[17px] py-[13px] font-mono text-[11px] uppercase tracking-[0.2em] text-dim"
    >
      {ITEMS.map((item) => (
        <Fragment key={item}>
          <span>{item}</span>
          <span className="text-amber">◆</span>
        </Fragment>
      ))}
    </div>
  );
}

export default function ServiceMarquee() {
  return (
    <div className="overflow-hidden border-t border-b border-[#1A1A1E] bg-surface">
      <div className="flex w-max animate-[marquee_42s_linear_infinite] motion-reduce:animate-none">
        <MarqueeGroup />
        <MarqueeGroup hidden />
      </div>
    </div>
  );
}
