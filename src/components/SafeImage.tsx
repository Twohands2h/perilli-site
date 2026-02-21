'use client';

import Image, { type ImageProps } from 'next/image';
import { useState } from 'react';

/**
 * Image wrapper that shows a dark background (#131313) when the image fails to load.
 * Drop-in replacement for next/image — same props.
 */
export default function SafeImage(props: ImageProps) {
    const [failed, setFailed] = useState(false);

    if (failed) {
        return <div className="w-full h-full bg-[#131313]" />;
    }

    return (
        <Image
            {...props}
            onError={() => setFailed(true)}
        />
    );
}
