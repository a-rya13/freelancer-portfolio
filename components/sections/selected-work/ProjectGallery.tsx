"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface ProjectImage {
  src: string;
  alt: string;
}

interface ProjectGalleryProps {
  images: ProjectImage[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const [activeImage, setActiveImage] = useState(0);

  if (!images.length) return null;

  return (
    <div className="w-full">
      {images.length > 1 && (
        <div className="mb-[16px] flex flex-wrap gap-[8px]">
          {images.map((image, index) => (
            <button
              key={image.src}
              onClick={() => setActiveImage(index)}
              className={`rounded-full border px-[14px] py-[7px] font-mono text-[10px] uppercase tracking-[0.12em] transition-colors ${
                activeImage === index
                  ? "border-amber bg-amber text-[#100C04]"
                  : "border-[#26262B] text-[#B9B5AD] hover:border-dim hover:text-text"
              }`}
            >
              {image.alt}
            </button>
          ))}
        </div>
      )}

      <div className="overflow-hidden border border-hairline bg-bg">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImage}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="p-[14px]"
          >
            <Image
              src={images[activeImage].src}
              alt={images[activeImage].alt}
              width={1600}
              height={1000}
              className="h-auto w-full border border-hairline object-contain"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
