import { useState } from 'react';

type Props = { src: string; alt: string; className?: string; priority?: boolean };

export default function MediaImage({ src, alt, className = '', priority = false }: Props) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div className={`media-fallback ${className}`} role="img" aria-label={alt}><span>{alt}</span></div>;
  return <img src={src} alt={alt} className={className} loading={priority ? 'eager' : 'lazy'} onError={() => setFailed(true)} />;
}
