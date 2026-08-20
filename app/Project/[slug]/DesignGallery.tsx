"use client";

import Image from "next/image";
import { useState } from "react";

export default function DesignGallery({
  items,
  title,
}: {
  items: string[];
  title: string;
}) {
  const [activeItem, setActiveItem] = useState<{
    src: string;
    title: string;
    isVideo: boolean;
  } | null>(null);

  return (
    <>
      <div className="project-gallery design-gallery">
        {items.map((item, index) => {
          const isVideo = item.toLowerCase().endsWith(".mp4");

          return (
            <div
              key={`${title}-${index}`}
              className="project-gallery-card design-gallery-card"
            >
              {isVideo ? (
                <video
                  className="project-gallery-video"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source src={item} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={item}
                  alt={`${title} artwork ${index + 1}`}
                  width={1200}
                  height={800}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="project-gallery-image"
                />
              )}

              <button
                type="button"
                className="design-gallery__preview"
                onClick={() =>
                  setActiveItem({
                    src: item,
                    title: `${title} artwork ${index + 1}`,
                    isVideo,
                  })
                }
              >
                View Full Size
              </button>
            </div>
          );
        })}
      </div>

      {activeItem && (
        <div
          className="design-gallery-modal"
          onClick={() => setActiveItem(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Full-size project preview"
        >
          <div
            className="design-gallery-modal__content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="design-gallery-modal__close"
              onClick={() => setActiveItem(null)}
              aria-label="Close preview"
            >
              ×
            </button>

            {activeItem.isVideo ? (
              <video
                className="design-gallery-modal__media"
                controls
                autoPlay
                playsInline
              >
                <source src={activeItem.src} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={activeItem.src}
                alt={activeItem.title}
                width={1800}
                height={1200}
                className="design-gallery-modal__media"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
