import type { Metadata } from 'next';
import Image from 'next/image';
import PhotoGallery from '@/components/ui/PhotoGallery';

export const metadata: Metadata = {
  title: 'Photography | Danny Driscoll',
  description: 'Photography by Danny Driscoll. Empathique: a natural passion for observing emotion.',
};

export default function PhotographyPage() {
  return (
    <div className="about-main min-h-screen transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 py-24">

        <div className="mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-[#4063FB]">Photography</p>
          <h1 className="about-heading text-5xl font-bold leading-tight mb-4">
            Em&bull;pa&bull;thique{' '}
            <span className="text-lg font-normal text-gray-400">/ɛmˈpæθiˍk/</span>
          </h1>
          <p className="text-sm text-gray-400 italic mb-3">noun</p>
          <p className="about-body leading-relaxed max-w-2xl">Definition: 1. A habit of watching for emotion first. 2. The instinct to notice what someone is feeling, and to keep looking after others look away.</p>
        </div>

        <h2 className="about-heading text-2xl font-bold mb-4">Capture the World&apos;s Salient Cues</h2>
        <p className="about-body leading-relaxed mb-10 max-w-2xl">Photography connects me to the world, my family, and my ancestors. My grandfather Carl was a photographer from his days in the United States Air Force during WWII through his retirement from Dow Chemical&apos;s Photo Development Division. He changed a room when he walked in, and his photos show he noticed. He shot the reaction, not the pose.</p>

        <div className="about-photo-bg relative w-full aspect-video rounded-2xl overflow-hidden mb-3">
          <Image src="/images/photography/Carl-Zimmer---WWII.png" alt="Carl Zimmer, Luke Air Force Base, January 1, 1941" fill className="object-cover object-center" unoptimized />
        </div>
        <p className="text-xs text-gray-400 text-center mb-16">Luke Air Force Base, January 1, 1941. Papa Carl, front and center.</p>

        <p className="text-sm text-gray-400 mb-6">Some of my shots.</p>

        <PhotoGallery />

        <div className="about-carl-quote text-center py-12 border-t">
          <p className="text-2xl font-light italic mb-3">&ldquo;May today feel like a win your future self will cheer for!&rdquo;</p>
          <p className="text-sm text-gray-400">Papa Carl</p>
        </div>

      </div>
    </div>
  );
}
