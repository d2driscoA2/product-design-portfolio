import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Photography | Danny Driscoll',
  description: 'Photography by Danny Driscoll. Empathique — a natural passion for observing emotion.',
};

const photoNumbers = ["32","31","30","29","27","26","25","24","23","18","21","19","22","16","20","10","3","11","15","13","7","17","2","6","14","9","5","1","12","8","base","4"];

export default function PhotographyPage() {
  return (
    <main className="about-main min-h-screen transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 py-24">

        <div className="mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-[#3B5CE8]">Photography</p>
          <h1 className="about-heading text-5xl font-bold leading-tight mb-4">
            Em&bull;pa&bull;thique{' '}
            <span className="text-lg font-normal text-gray-400">/ɛmˈpæθiːk/</span>
          </h1>
          <p className="text-sm text-gray-400 italic mb-3">noun</p>
          <p className="about-body leading-relaxed max-w-2xl">Definition: 1. Natural Passion for Observing Emotion. 2. A natural, perhaps even sophisticated, inclination toward empathy, signifying a heightened capacity to engage with and appreciate the emotional states of the world in a profoundly intuitive and aesthetically nuanced manner.</p>
        </div>

        <h2 className="about-heading text-2xl font-bold mb-4">Capture the World&apos;s Salient Cues</h2>
        <p className="about-body leading-relaxed mb-10 max-w-2xl">Photography connects me to the world, my family, and my ancestors. My grandfather Carl was a photographer from his days in the United States Air Force during WWII through his retirement from Dow Chemical&apos;s Photo Development Division. He was an electric man who lit up the room when he entered. In the few photos I have seen of his work, it feels as if he used personal film to photograph and capture the emotions evoked by his presence.</p>

        <div className="about-photo-bg relative w-full aspect-video rounded-2xl overflow-hidden mb-3">
          <Image src="/images/photography/Carl-Zimmer---WWII.png" alt="Carl Zimmer, Luke Air Force Base, January 1, 1941" fill className="object-cover object-center" unoptimized />
        </div>
        <p className="text-xs text-gray-400 text-center mb-16">Luke Air Force Base, January 1, 1941. Papa Carl, front and center.</p>

        <p className="text-sm text-gray-400 mb-6">Some of my shots...</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16">
          {photoNumbers.map((n) => (
            <div key={n} className="about-photo-bg relative aspect-video rounded-lg overflow-hidden">
              <Image
                src={n === "base" ? "/images/photography/DannyDriscoll.me-Photography.png" : `/images/photography/DannyDriscoll.me-Photography-${n}.png`}
                alt="Photography by Danny Driscoll"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                unoptimized
              />
            </div>
          ))}
        </div>

        <div className="about-carl-quote text-center py-12 border-t">
          <p className="text-2xl font-light italic mb-3">&ldquo;May today feel like a win your future self will cheer for!&rdquo;</p>
          <p className="text-sm text-gray-400">— Papa Carl</p>
        </div>

      </div>
    </main>
  );
}
