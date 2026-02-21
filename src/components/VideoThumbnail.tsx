'use client';

import { useRef, useCallback } from 'react';
import SafeImage from './SafeImage';

interface VideoThumbnailProps {
  src: string;       // static image
  videoSrc: string;  // MP4 file
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
}

export default function VideoThumbnail({ src, videoSrc, alt, fill, className, sizes }: VideoThumbnailProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = useCallback(() => {
    const video = videoRef.current;
    const img = imgRef.current;
    if (!video || !img) return;

    video.currentTime = 0;
    video.play().then(() => {
      img.style.opacity = '0';
    }).catch(() => {
      // Autoplay blocked — keep static image visible
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    const video = videoRef.current;
    const img = imgRef.current;
    if (!video || !img) return;

    video.pause();
    img.style.opacity = '1';
  }, []);

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video layer (behind) */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        className={`absolute inset-0 w-full h-full object-cover ${className || ''}`}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Static image layer (on top, fades out on hover) */}
      <div
        ref={imgRef}
        className="absolute inset-0 transition-opacity duration-500"
        style={{ opacity: 1 }}
      >
        <SafeImage
          src={src}
          alt={alt}
          fill={fill}
          className={className}
          sizes={sizes}
        />
      </div>
    </div>
  );
}
