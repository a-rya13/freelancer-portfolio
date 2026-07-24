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
      {/* Image Selector */}

      {images.length > 1 && (
        <div className="mb-6 flex flex-wrap gap-3">
          {images.map((image, index) => (
            <button
              key={image.src}
              onClick={() => setActiveImage(index)}
              className={`
                rounded-full
                border
                px-4
                py-2
                text-sm
                font-medium
                transition-all
                duration-300

                ${
                  activeImage === index
                    ? "border-zinc-900 bg-zinc-900 text-white"
                    : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-400"
                }
              `}
            >
              {image.alt}
            </button>
          ))}
        </div>
      )}

      {/* Browser Window */}

      <div
        className="
          overflow-hidden
          rounded-[32px]
          border
          border-zinc-200
          bg-white
          shadow-[0_30px_80px_rgba(0,0,0,0.08)]
        "
      >
        {/* Browser Top */}

        <div
          className="
            flex
            items-center
            gap-2
            border-b
            border-zinc-200
            bg-zinc-50
            px-5
            py-4
          "
        >
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>

        {/* Screenshot */}

        <div className="overflow-hidden bg-white p-4 md:p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeImage}
              initial={{
                opacity: 0,
                y: 12,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -12,
                scale: 0.98,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
            >
              <Image
                src={images[activeImage].src}
                alt={images[activeImage].alt}
                width={1800}
                height={1100}
                priority
                className="
                  h-auto
                  w-full
                  rounded-2xl
                  border
                  border-zinc-100
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-[1.015]
                "
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
