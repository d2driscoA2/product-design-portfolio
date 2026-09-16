import { BlogImage } from '@/components/blog/BlogImage'
import PlayDemoModal from '@/components/blog/PlayDemoModal'

/**
 * Post body: How I Designed a Trade Show Game for Logitech G
 * That Players Line Up For, in Fifteen Days
 * Category: Case Study (coral) · September 2026 · 9 min read
 *
 * Copy is voice-checked against the Master Style Guide v2.1
 * (surface + structural layers). Do not paraphrase during
 * implementation; paste verbatim.
 */

export function SuperstrikeChallengePost() {
  return (
    <article className="blog-content">
      <p>The fastest players never saw their scores.</p>
      <p>That was the first playtest finding on the Superstrike Challenge, a click speed test I designed for Logitech G&rsquo;s trade show booths. A player finishes the ten second test at eight clicks per second. The test ends. Their finger does not. The next click lands on the results screen, the game restarts, and the score they came for is gone.</p>
      <PlayDemoModal />
      <p>The commissioning client was Kamp Grizzly, a Portland creative agency, promoting the Logitech G PRO X3 SUPERSTRIKE mouse. The deliverable was a gamified kiosk for the booth floor. The stakes were attention: a kiosk earns roughly three seconds from a passing visitor, and a visitor who never sees their score has no story to tell at the booth.</p>
      <p>Fifteen calendar days, brief to billed. Five of them were working days; the rest idled while client rounds and font files came back. This is what happened inside the five, out of order, the way the project happened to me.</p>

      <BlogImage
        src="/blog/images/superstrike/process-map.png"
        alt="A six-phase process map: understand, define, explore, build, test, iterate and prove, each phase listing the real activities from the engagement, headed by five working days inside a 15 day window."
        caption="Five working days inside a fifteen day window. Every phase is here; the gaps waited on client rounds and font files."
        variant="bordered"
      />

      <h2 id="the-brief-was-a-list-of-prohibitions">The brief was a list of prohibitions</h2>
      <p>The brief arrived with hard constraints. 1920x1080, always horizontal. Black canvas. One accent color. Radius zero. No drop shadows. Condensed uppercase display type. Nothing under 24px, readable from two metres. Mouse only. No accounts, no text entry.</p>
      <p>You could read a list like this as handcuffs. I read it as the design system, delivered early.</p>
      <p>Depth came from borders and fills instead of shadows. Hierarchy came from scale and a single accent. The two-metre readability rule alone wrote the entire type scale. The finished kiosk reads as brand discipline, not limitation.</p>

      <h2 id="the-direction-kamp-grizzly-killed">The direction Kamp Grizzly killed</h2>
      <p>The first V2 draft led with the product. A plate panel with studio renders, a marketing ticker, a three-cell data HUD. Client review killed it in one sentence: it felt like shoving the mouse in the user&rsquo;s face, not a fun game.</p>
      <p>They were right, and I am glad the feedback was blunt. The rebuild inverted the hierarchy. The game became the hero. Branding framed the game instead of competing with it. Product presence shrank to a footer line and one small render.</p>
      <BlogImage
        src="/blog/images/superstrike/inversion-before-after.png"
        alt="Two wireframe panels compare the killed product-first draft, dominated by product renders with the game in a small strip, against the shipped game-first rebuild, where the game fills the screen above a thin brand footer."
        caption="The killed draft led with the product. The rebuild made the game the hero and the brand the frame."
        variant="bordered"
      />
      <p>Here is the thing about a booth floor. Attention is a budget. Spend your three seconds on marketing copy and you lose the visitor. Spend them on one question, how fast can you click, and the visitor becomes a player. A player absorbs the brand through the experience itself.</p>

      <h2 id="the-wrong-fix-shipped-first">The wrong fix shipped first</h2>
      <p>Back to the playtest bug. My first fix was mechanical: a 1.6 second input lockout on the results screen, and a deliberate PLAY AGAIN button replacing click-anywhere. It stopped the accidental restarts.</p>
      <p>It was also the wrong fix, and I shipped it anyway. A locked screen is dead time. The player stares at a frozen scoreboard, waiting out a timer they cannot see, at the exact moment the product should be paying them off.</p>
      <p>The second iteration reframed the dead time as the reward. A celebration screen: the score counts up, square confetti falls in brand colors, a tiered praise headline lands, burst statistics fill in. The 1.6 second lockout still exists. Players never feel it, because the pause is now the payoff.</p>
      <BlogImage
        src="/blog/images/superstrike/celebration-screen.png"
        alt="The live kiosk celebration screen: a blue NICE WORK headline over a large 64 total clicks, with burst statistics for longest rapid run, best single second, and peak pace in clicks per second."
        caption="The celebration screen on the live kiosk. The 1.6 second lockout still runs underneath it; players never feel the wait because the pause became the payoff."
        variant="full"
      />
      <p>The same pattern later protected the name entry screen with a 1.4 second lock. The bug got promoted. It went from defect to the most delightful moment in the product.</p>

      <BlogImage
        src="/blog/images/superstrike/principles-at-work.png"
        alt="The game screen and celebration screen recreated with annotations: visibility of system status, flow calibration, error prevention, and the gulf of evaluation closed."
        caption="The shipped screens, annotated. Naming the principle is part of the job."
        variant="full"
      />

      <h2 id="engagement-without-the-slot-machine">Engagement without the slot machine</h2>
      <p>Kamp Grizzly asked for more engagement and named what they did not want: a Las Vegas slot machine.</p>
      <p>So every reward maps to genuine performance. Heat tiers driven by live click pace, STRIKING at 4.0 clicks per second, RAPID FIRE at 6.5, SUPERSTRIKE at 8.5. Combo chains for clicks under 300 milliseconds apart. Milestone flashes. Rank titles at the finish. No randomness, no artificial near-misses, no manipulation mechanics. The dopamine comes from skill feedback, not chance.</p>
      <BlogImage
        src="/blog/images/superstrike/heat-tiers.png"
        alt="A dark diagram of the reward system: four heat tier zones from warming up through STRIKING at 4.0, RAPID FIRE at 6.5, and SUPERSTRIKE at 8.5 clicks per second, with a coral marker for the pro pace of 9.5 CPS, equal to 95 clicks."
        caption="The reward ladder. Every tier is earned by live pace; nothing is random."
        variant="full"
      />
      <p>Scoring changed for the same audience. The original model scored clicks per second. It shipped as total clicks, because whole numbers read instantly to a casual visitor. 66 clicks means something at a glance. 6.6 CPS requires math. The pro benchmark converted honestly: 9.5 CPS became 95 clicks.</p>
      <p>95 gives every player a visible mountain. Most will not summit it, and that is the point. The gap is the story visitors tell each other at the booth.</p>
      <p>The top 10 board fed a prize giveaway, which forced integrity decisions. The fake seeded scores came out, so the board starts empty and honest. A skipped name entry saves nothing, because an anonymous row can never hold a prize slot. Names enter through an on-screen QWERTY or the physical keyboard, with Tab, Backspace, and Enter fully wired.</p>
      <BlogImage
        src="/blog/images/superstrike/name-entry.png"
        alt="The live kiosk name entry screen: TOP 10 SCORE, ENTER YOUR NAME, first and last name fields above an on-screen QWERTY keyboard, a SAVE SCORE button, and a skip option that does not save the score."
        caption="Prize integrity in one screen: no anonymous rows, no seeded scores, and a skip that saves nothing."
        variant="full"
      />
      <p>Storage was a scope decision I put to the client in plain language. In-memory at zero cost. Single-machine persistence at thirty minutes of work. A shared cloud backend at half a day plus infrastructure. The middle option matched the actual event, one display machine and a 24-hour prize window, so scores live in localStorage and survive refreshes and reboots without a backend. Right-sizing a build earns more trust than over-engineering one.</p>

      <h2 id="the-second-thread-art-direction-from-an-illustrator-file">The second thread: art direction from an Illustrator file</h2>
      <p>Running under all of this was the art direction. Kamp Grizzly delivered brand comps as an Adobe Illustrator file: the official Logitech G wordmark, the SUPERSTRIKE CHALLENGE naming, the Brown typeface, four screen layouts. My job was to apply it faithfully, not to interpret it.</p>
      <p>Two moments tested the discipline. The comps still showed the PRO X2 and CPS scoring while the written instructions specified PRO X3 and total clicks. Written client direction overrides stale visuals, so the build followed the instructions, and the conflict went into the log for sign-off instead of getting silently resolved.</p>
      <p>The X3 pivot then created its own problem: a black mouse on a black canvas. The fix was a radial charcoal backlight behind the render, separating the silhouette while honoring the no-drop-shadows rule.</p>
      <p>And for one working day, the typography ran on Montserrat as a declared stand-in, because the licensed Brown font files had not arrived. It was named in the style guide and never passed off as final. When the files landed, they swapped in through two font-face rules with zero layout churn.</p>

      <h2 id="what-broke">What broke</h2>
      <p>Mid-engagement, a genuine disagreement: was the live site running the responsive build? I believed it was. The evidence said no. Reading the live page&rsquo;s internals in the browser showed the old scale transform and a missing viewport meta. The build on the URL was not the build we were discussing.</p>
      <p>Looks responsive and is responsive are different claims. The original build scaled a fixed 1920x1080 stage to fit any window, which looks flawless on a desktop and renders a miniature kiosk with 8px labels on a phone. The replacement was true reflow: fluid type, stacked layouts under 940px, single-column results under 1100px, touch input, and copy swapping CLICK for TAP on touch screens.</p>
      <BlogImage
        src="/blog/images/superstrike/looks-vs-is-responsive.png"
        alt="Two phone mockups side by side: scale-to-fit shrinks the whole 1920x1080 kiosk into a miniature with dead space and tiny labels, while true reflow stacks fluid type, swaps CLICK for TAP, and fills the phone screen."
        caption="Looks responsive and is responsive are different claims. The left phone is one CSS transform; the right one is a rebuilt layout."
        variant="bordered"
      />
      <p>A second lesson arrived late. Type scaled with viewport width but not height, which clipped the results screen on short desktop windows. Every vertical-hungry size got a viewport-height ceiling, verified numerically with an embedded 1400x820 test frame measuring real rendered coordinates. The kiosk resolution stayed pixel-identical.</p>
      <p>Two smaller breaks are worth naming, because you are the audience most likely to check. Deploys shipped zero files twice, because the deploy folder held a stale file. The Netlify output line reading &ldquo;CDN requesting 0 files&rdquo; became the tell, and the process hardened around checking it. And local version folders drifted to v03 while the client-facing release stayed V02. Harmless, caught, documented, and the standing argument for the git migration planned next.</p>
      <p>Two things shipped unresolved. Mobile sound is parked as a known issue; desktop is the paying use case and works, mobile browsers gate audio playback differently, and the fix was deferred on purpose instead of rushed. And localStorage is the wrong answer for a multi-kiosk event. The upgrade path is scoped. Whether this kiosk ever runs on two machines at once is the question the project left open.</p>

      <h2 id="where-the-ai-sat-and-where-it-did-not">Where the AI sat, and where it did not</h2>
      <p>You are probably wondering how one designer shipped this in five working days with no developer. The honest answer is a toolchain, with judgment sitting on top of it.</p>
      <p>Claude Design authored the original kiosk concept and its handoff brief, which seeded the engagement with structured constraints. Claude was the design and build partner, and Claude wrote the code: every screen, mechanic, and revision iterated conversationally against screenshots and client feedback. Claude in Chrome was the evidence engine, verifying the live site after every deploy, running full played-through QA, and reading page internals to settle the responsive dispute. Deploys ran through the Netlify CLI, under seven seconds to a displayedux.com subdomain with automatic SSL.</p>
      <p>The judgment stayed human. I rejected the product-forward direction and named why. I set the gamification ethics line. I caught the results-screen collision and the wide-screen clipping in my own screenshots. I chose the storage scope against the client&rsquo;s actual event.</p>
      <p>The clearest example is the admin flow. Staff needed to clear the board between events without visitors doing it. The first implementation gated the reset behind a typed numeric staff code. I rejected it as security theater bolted onto a keyboard, and specified the replacement: an X to exit the staff guide, a reset button opening a confirmation modal with clear consequence copy, auto-dismissing after success. The threat model at a booth is accidents, not saboteurs, and the design should match the threat.</p>
      <p>Most AI-assisted work stops at generation. This practice extends through instrumented proof on the production URL. Nothing shipped on trust. The browser evidence closed every loop.</p>
      <BlogImage
        src="/blog/images/superstrike/verification-loop.png"
        alt="A five-step cycle: describe intent, Claude generates, human reviews the screens, deploy via Netlify CLI, prove it live on the production URL, looping back with the label nothing shipped on trust."
        caption="The loop every revision ran. Generation is step two of five."
        variant="full"
      />

      <BlogImage
        src="/blog/images/superstrike/findings-to-proof.png"
        alt="A four-column table tracing three playtest findings through insight, shipped response, and proof: the momentum click bug, the short-window clipping, and the staff reset flow."
        caption="Three playtest findings, traced from insight to shipped response to measured proof."
        variant="bordered"
      />

      <PlayDemoModal />

      <div className="blog-divider" />

      <h2 id="the-playbook">The playbook</h2>
      <ol className="blog-ordered-list blog-ordered-list--playbook">
        <li>Read hard constraints as the design system, delivered early. The two-metre rule wrote the type scale. Radius zero and no shadows wrote the depth model.</li>
        <li>Spend booth attention on play, not product. One question converts a visitor into a player. The brand rides the experience.</li>
        <li>When a fix creates dead time, make the dead time the payoff. The 1.6 second lockout became the celebration screen.</li>
        <li>Reward skill, never chance. No fake near-misses, no seeded scores, no anonymous prize rows.</li>
        <li>Written client direction overrides stale comps. Follow it, log the conflict, get sign-off.</li>
        <li>Scope storage to the actual event, and show the client the tradeoff before the recommendation.</li>
        <li>Prove it on the production URL. Trust nothing, including instinct.</li>
      </ol>
    </article>
  )
}
