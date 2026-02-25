'use client';

import Image, { type ImageProps } from 'next/image';
import { useState } from 'react';

/**
 * Image wrapper that:
 * - Shows a subtle placeholder while loading (prevents black flash)
 * - Shows a dark background (#131313) if the image fails to load
 * Drop-in replacement for next/image — same props.
 */
export default function SafeImage(props: ImageProps) {
    const [failed, setFailed] = useState(false);
    const [loaded, setLoaded] = useState(false);

    if (failed) {
        return <div className="w-full h-full bg-[#131313]" />;
    }

    return (
        <div className="relative w-full h-full">
            {/* Placeholder background — visible until image loads */}
            {!loaded && (
                <div className="absolute inset-0 bg-[#1a1a1a] animate-pulse" />
            )}
            <Image
                {...props}
                quality={props.quality ?? 90}
                onError={() => setFailed(true)}
                onLoad={() => setLoaded(true)}
                className={`${props.className || ''} transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
            />
        </div>
    );
}
