'use client';

import Image from 'next/image';
import { useState } from 'react';
import { getLogoUrl } from '@/lib/logos';

interface LogoImageProps {
  productName: string;
  size?: number;
  className?: string;
}

export function LogoImage({ productName, size = 48, className = '' }: LogoImageProps) {
  const [hasError, setHasError] = useState(false);
  const logoUrl = getLogoUrl(productName);

  if (hasError) {
    // Fallback to letter avatar
    return (
      <div
        className={`bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold ${className}`}
        style={{ width: size, height: size, fontSize: size * 0.4 }}
      >
        {productName.charAt(0)}
      </div>
    );
  }

  return (
    <div
      className={`relative rounded-xl overflow-hidden bg-white border border-slate-100 ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={logoUrl}
        alt={`${productName} logo`}
        fill
        className="object-contain p-1.5"
        onError={() => setHasError(true)}
        unoptimized
      />
    </div>
  );
}
