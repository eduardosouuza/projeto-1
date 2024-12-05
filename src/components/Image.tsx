import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}

export function Image({ src, alt, className = '', sizes = '100vw' }: ImageProps) {
  // Generate WebP URL with quality parameter
  const webpUrl = `${src}&fm=webp&q=75`;
  
  // Generate responsive widths
  const mobileSrc = `${src}&w=400`;
  const tabletSrc = `${src}&w=800`;
  const desktopSrc = `${src}&w=1200`;

  return (
    <img
      src={webpUrl}
      alt={alt}
      className={`w-full ${className}`}
      loading="lazy"
      srcSet={`
        ${mobileSrc} 400w,
        ${tabletSrc} 800w,
        ${desktopSrc} 1200w
      `}
      sizes={sizes}
    />
  );
}