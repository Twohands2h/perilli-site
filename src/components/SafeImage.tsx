'use client';

import Image, { type ImageProps } from 'next/image';
import { useState } from 'react';

/**
 * Image wrapper that:
 * - Shows a shimmer placeholder while loading (prevents black flash)
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
        <>
            {!loaded && (
                <div
                    className="absolute inset-0 z-[1]"
                    style={{
                        background: 'linear-gradient(110deg, #1a1a1a 30%, #2a2a2a 50%, #1a1a1a 70%)',
                        backgroundSize: '200% 100%',
                        animation: 'shimmer 1.5s ease-in-out infinite',
                    }}
                />
            )}
            <Image
                {...props}
                quality={props.quality ?? 90}
                onError={() => setFailed(true)}
                onLoad={() => setLoaded(true)}
                className={`${props.className || ''} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
            />
        </>
    );
}
