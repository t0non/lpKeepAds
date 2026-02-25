import Link from 'next/link';
import Image from 'next/image';
import LogoSrc from '@/imagens/logo.webp';

export function KeepAdsLogo({ className = '', priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Link href="/" aria-label="Keep Ads" className={`inline-flex items-center ${className}`}>
      <Image
        src={LogoSrc}
        alt="Keep Ads"
        width={160}
        height={40}
        priority={priority}
        quality={75}
        sizes="(max-width: 768px) 120px, 160px"
        className="h-auto w-auto"
      />
    </Link>
  );
}
