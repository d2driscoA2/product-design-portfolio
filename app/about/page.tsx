import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Danny Driscoll',
  description: 'Principal Product Designer based in Ann Arbor. 18+ years designing enterprise products at TeleSign, Netflix, and Appily.com. Designing products where mistakes have consequences.',
};

const interests = [
  { label: 'Basketball', transfer: 'Statistical analysis', detail: 'I follow basketball the way I follow user research: pattern recognition from large datasets, variance vs. signal, and knowing when a sample size is too small to act on.' },
  { label: 'Restoring old electronics', transfer: 'Root cause analysis', detail: 'A dead device has a specific failure. Finding it requires forming a hypothesis, isolating variables, and testing without destroying the patient. Better debugging practice than most formal training.' },
  { label: 'Woodworking', transfer: 'Constraints-first thinking', detail: "Wood tells you what it will and won't do. You design around the material, not against it. My grandfathers were builders. Working with constraints produces better outcomes than ignoring them." },
  { label: '3D Printing', transfer: 'Prototyping mindset', detail: 'The fastest way to understand a technology is to make something with it. Ship a rough version, learn what breaks, fix it. Iteration over speculation.' },
  { label: 'Long-form writing', transfer: 'Structured argumentation', detail: 'Making an argument hold together on the page is the same skill as making a design decision legible to a skeptical stakeholder. Both require anticipating objections before they are raised.' },
  { label: 'Photography', transfer: 'Empathic observation', detail: 'My grandfather Carl photographed during WWII. I shot every campus in the Appily.com (formerly Cappex) network rather than use stock. The world looks different when you decide to actually see it.' },
];

interface FunFact {
  title: string;
  tag?: string;
  body: string;
}

const funFacts: FunFact[] = [
  { title: 'National Poetry Society Poet', body: 'In seventh grade I submitted a poem to the National Poetry Archive. It was accepted and published in one of their printed books. The first time I understood that making something and putting it into the world are two different acts.' },
  { title: 'Recorded with Grammy-Winning Producer', body: 'Miguel Millions is a longtime collaborator of Pharrell Williams and won multiple Grammys including for Happy. Getting in a room with people at that level permanently changes how you think about craft and standards.' },
  { title: 'Extra in Fortnite Commercial', body: 'A friend who acts in Hollywood brought me in for a brief extra role. Being on a professional set, watching how quickly decisions get made and unmade, felt familiar in all the right ways.' },
  { title: 'Hip-Hop and Pop Punk Junkie', body: 'Blink-182 and The Roots. Two genres that look nothing alike and share everything: precision, restraint, and the ability to say something true in under four minutes.' },
  { title: 'Trained at Second City Hollywood', tag: 'Hollywood · 6560 Hollywood Blvd', body: 'Improv comedy training at the LA outpost of one of the most respected comedy institutions in North America. Learning to think fast, listen harder, and never block your scene partner.' },
  { title: 'Stand-Up Comedy Open Mics', body: 'I regularly attend open mics to support other comedians and to practice fighting through nerves and anxiety. Getting on stage in front of strangers with a microphone and no safety net is the same exposure exercise as presenting to a skeptical C-suite.' },
];

const stats = [
  { value: '18+',   label: 'Years in product design',       employer: 'TeleSign + Appily.com' },
  { value: '21B+',  label: 'Annual transactions protected', employer: 'AT TeleSign' },
  { value: '47%',   label: 'Application completion rate',   employer: 'AT APPILY.COM' },
  { value: '67→35', label: 'Days to onboard, enterprise', employer: 'AT TeleSign' },
];

function FloatingRings({ className }: { className?: string }) {
  const rings = [280, 220, 160, 100, 50, 15];
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      {rings.map((r) => (
        <circle key={r} cx="200" cy="200" r={r} stroke="#4063FB" strokeWidth="1" />
      ))}
    </svg>
  );
}

export default function AboutPage() {
  return (
    <main className="about-main min-h-screen transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 py-24">

        <div className="mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{color:"var(--color-text-secondary)"}}>About</p>
          <h1 className="about-heading text-5xl font-bold leading-tight mb-6">Danny Driscoll</h1>
          <p className="about-subheading text-xl font-medium">Principal Product Designer · Ann Arbor, Michigan</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="md:col-span-1">
            <div className="about-photo-bg rounded-2xl overflow-hidden" style={{ width: '100%', aspectRatio: '1 / 1' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/headshots/headshot-dark.png" alt="Danny Driscoll" width={480} height={480} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
            </div>
            <div className="mt-6 space-y-2">
              <a href="https://linkedin.com/in/dandriscoll" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-[#4063FB] hover:opacity-70 transition-opacity" style={{textDecoration:'underline',textUnderlineOffset:'3px',textDecorationThickness:'1px'}}>LinkedIn<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{display:'inline',marginLeft:'4px',verticalAlign:'middle'}}><path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="#4063FB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
              <a href="mailto:d2drisco@icloud.com" className="inline-flex items-center gap-1 text-sm font-medium text-[#4063FB] hover:opacity-70 transition-opacity" style={{textDecoration:'underline',textUnderlineOffset:'3px',textDecorationThickness:'1px'}}>d2drisco@icloud.com<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{display:'inline',marginLeft:'4px',verticalAlign:'middle'}}><path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="#4063FB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
            </div>
          </div>
          <div className="md:col-span-2 space-y-6 text-lg leading-relaxed">
            <p className="about-body">I grew up in Ann Arbor surrounded by engineers. My father has taught aerospace engineering at the University of Michigan for over 40 years. My grandfathers were engineers. The technical world was never abstract to me. But I watched non-technical family members struggle with the same interfaces those engineers built. That gap is where I work.</p>
            <p className="about-body">I came to design through Human-Computer Interaction at Western Michigan University after witnessing a student have an epileptic seizure triggered by a flashing pop-up ad. That moment made clear that design has consequences. It is not decoration. From there: four years at Appily.com (formerly Cappex) building the college application platform that reached 47% completion against a 35% industry standard, then five years at TeleSign as Principal Product Designer protecting 21 billion annual transactions and cutting enterprise onboarding from 67 days to 35.</p>
            <p className="about-body">My philosophy is communication before aesthetics. I run A/B tests by statistical significance, not gut feel. I design for the user who is confused, not the user who already knows what to do. I have presented directly to C-suite at Fortune 500 companies and filed bugs on my own shipped work. I am looking for Senior, Principal, or Director roles in enterprise B2B SaaS: security products, developer tools, authentication platforms, or communication systems.</p>
            <p className="about-muted text-base">Spouse and two kids in Ann Arbor. Grew up on computers from age 4. Still plays guitar.</p>
          </div>
        </div>

        <div className="about-border border-t pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold mb-1 text-[#4063FB]">{stat.value}</p>
              <p className="about-body text-sm leading-snug mb-1">{stat.label}</p>
              <p className="about-muted text-xs font-medium tracking-wide uppercase">{stat.employer}</p>
            </div>
          ))}
        </div>

        <div className="beyond-section relative mb-16 rounded-2xl overflow-hidden p-8 transition-colors duration-300">
          <FloatingRings className="beyond-rings absolute -top-24 -left-24 w-72 h-72 pointer-events-none transition-opacity duration-300" />
          <FloatingRings className="beyond-rings absolute -bottom-16 -right-16 w-64 h-64 pointer-events-none transition-opacity duration-300" />
          <FloatingRings className="beyond-rings absolute top-1/2 right-8 -translate-y-1/2 w-80 h-80 pointer-events-none transition-opacity duration-300" />
          <div className="relative z-10">
            <h2 className="about-heading text-2xl font-bold mb-2">Beyond the work</h2>
            <p className="about-subheading mb-10">The interests that inform how I think.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {interests.map((item) => (
                <div key={item.label} className="about-card border rounded-xl p-5 transition-colors">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <p className="about-heading text-sm font-bold">{item.label}</p>
                    <span className="skill-badge">{item.transfer}</span>
                  </div>
                  <div className="skill-divider" />
                  <p className="about-muted text-sm leading-relaxed mt-2">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-24">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{color:"var(--color-text-secondary)"}}>Things you didn&apos;t ask about</p>
          <h2 className="about-heading text-2xl font-bold mb-10">The rest of the picture.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {funFacts.map((fact) => (
              <div key={fact.title} className="about-card border rounded-xl p-5 transition-colors">
                {fact.tag && <span className="skill-badge inline-block mb-3">{fact.tag}</span>}
                <p className="about-heading text-sm font-bold mb-2">{fact.title}</p>
                <p className="about-muted text-sm leading-relaxed">{fact.body}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{color:"var(--color-text-secondary)"}}>Commercial appearance</p>
              <p className="about-heading text-sm font-bold mb-1">Fortnite</p>
              <p className="about-muted text-xs mb-3">Extra role alongside a friend who acts in Hollywood.</p>
              <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                <iframe src="https://www.youtube.com/embed/OnMkDgh4SpU" title="Fortnite commercial" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 w-full h-full" style={{ border: 'none' }} />
              </div>
            </div>
          </div>
        </div>


        <div className="about-border border-t pt-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{color:"var(--color-text-secondary)"}}>Photography</p>
          <h2 className="about-heading text-2xl font-bold mb-4">Empathique</h2>
          <p className="about-body leading-relaxed mb-6 max-w-2xl">Photography connects me to the world, my family, and my ancestors. My grandfather Carl photographed during WWII. I shot every campus in the Appily.com (formerly Cappex) network rather than use stock imagery.</p>
          <a href="/photography" className="inline-flex items-center gap-1 text-sm font-semibold text-[#4063FB] hover:opacity-70 transition-opacity" style={{textDecoration:'underline',textUnderlineOffset:'3px',textDecorationThickness:'1px'}}>View photography<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{display:'inline',marginLeft:'4px',verticalAlign:'middle'}}><path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="#4063FB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
        </div>

      </div>
    </main>
  );
}
