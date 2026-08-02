"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface LightboxProps {
  images: string[];
  index: number;
  title: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ images, index, title, onClose, onPrev, onNext }: LightboxProps) {
  const touchStart = useRef<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 z-[80] lightbox-backdrop flex items-center justify-center p-4" onClick={onClose}>
      <button onClick={onClose} aria-label="Close gallery" className="absolute top-4 right-4 z-[81] rounded-full bg-white/10 text-white p-3 hover:bg-white/20 transition-colors">
        <X size={22} />
      </button>
      <button onClick={(e) => { e.stopPropagation(); onPrev(); }} aria-label="Previous image" className="absolute left-4 top-1/2 -translate-y-1/2 z-[81] rounded-full bg-white/10 text-white p-3 hover:bg-white/20 transition-colors">
        <ChevronLeft size={24} />
      </button>
      <div
        className="relative w-full max-w-6xl h-[78vh]"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => { touchStart.current = e.changedTouches[0].clientX; }}
        onTouchEnd={(e) => {
          if (touchStart.current === null) return;
          const dx = e.changedTouches[0].clientX - touchStart.current;
          if (dx > 50) onPrev();
          if (dx < -50) onNext();
          touchStart.current = null;
        }}
      >
        <Image src={images[index]} alt={`${title} ${index + 1}`} fill className="object-contain" sizes="100vw" />
      </div>
      <button onClick={(e) => { e.stopPropagation(); onNext(); }} aria-label="Next image" className="absolute right-4 top-1/2 -translate-y-1/2 z-[81] rounded-full bg-white/10 text-white p-3 hover:bg-white/20 transition-colors">
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
