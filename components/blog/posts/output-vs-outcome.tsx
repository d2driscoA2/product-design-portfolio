import { BlogImage, BlogHeroImage } from '@/components/blog/BlogImage'

/* ─────────────────────────────────────────────────────────────────
   Blog post: "18 Years In, I Still Think Most Designers Confuse
   Output with Outcome"
   Danny Driscoll · June 2026
───────────────────────────────────────────────────────────────── */

export function OutputVsOutcomePost() {
  return (
    <article className="blog-content">

      <h2>The Confession</h2>
      <p>
        Early in my career, I measured my own effectiveness by the quality
        of what I shipped. Did the screens look good? Was the interaction model
        clean? Did the engineers build it close to spec? Those were my metrics.
        They felt like the right ones.
      </p>
      <p>
        I was wrong. Not entirely wrong. Craft matters. Execution matters.
        But I was measuring the work, not the impact of the work. And those
        are different things in ways that took me years to fully understand.
      </p>
      <p>
        Here is what I mean, and why I think this confusion is more common
        than the design industry acknowledges.
      </p>

      <BlogHeroImage
        src="/blog/images/post5-hero-cappex-submitted.png"
        alt="Cappex Universal College Application dashboard showing all four schools with Application Submitted status"
        caption="The Cappex application dashboard at full completion. Every school submitted. This screen is an outcome. The wireframes, iterations, and usability tests that produced it are output. Most portfolios show the latter. The number that mattered was the 47% completion rate that this state represents."
      />

      <hr className="blog-divider" />

      <h2>Output: What You Made. Outcome: What Changed.</h2>
      <p>
        Output is the design artifact. The wireframe. The component. The flow.
        The shipped feature. Output is what you can put in a portfolio and point to.
      </p>
      <p>
        Outcome is what happened because of the artifact. Did onboarding time
        drop? Did conversion increase? Did fraud analysts process more cases?
        Did students complete applications at a higher rate? Outcome is what
        the business cares about. It is also what users experience, though
        they usually do not have language for it.
      </p>
      <p>
        The confusion between these two things is institutional. Design teams
        are typically resourced around output. You are hired to produce screens.
        You are evaluated on design quality, delivery speed, and stakeholder
        satisfaction with the artifact. The connection between that artifact
        and a measurable downstream change in user behavior is often nobody&rsquo;s
        explicit job to track.
      </p>
      <p>
        This is how you end up with beautiful work that does not move the needle.
      </p>

      <hr className="blog-divider" />

      <h2>The Netflix Lesson: Trust Nothing, Including Instinct</h2>
      <p>
        I was at Netflix during the international expansion, working within
        the Netflix XP experimentation platform. The thing that changed my
        thinking most was not any particular test result. It was the posture
        of the organization toward design decisions.
      </p>
      <p>
        At Netflix, the assumption was that you did not know whether your design
        was better until you measured it against a population of real users.
        Not a user research panel. Not a usability test with eight participants.
        Millions of users, in market, choosing between version A and version B
        with their actual behavior.
      </p>
      <p>
        This was initially uncomfortable. I had opinions about which designs
        were better. Some of those opinions were informed by years of experience
        and pattern recognition. Some of them were just wrong. The data told
        me which was which, and it was not always the answer I expected.
      </p>
      <p>
        The principle I internalized: animations and transitions should only
        exist if you can prove via A/B testing that user engagement increased
        to a degree of statistical significance. If not, it is noise distracting
        the user from achieving their goal. This sounds obvious. It is a principle
        that most design organizations never operationalize.
      </p>
      <p>
        The experimentation culture Netflix built during that period is still
        in use today. That is the outcome of that work. Not the individual
        screens that were designed and tested and revised. The cultural and
        operational infrastructure for continuous measurement.
      </p>

      <hr className="blog-divider" />

      <h2>The Appily.com Lesson: The Number Tells You When You&rsquo;re Right</h2>
      <p>
        At Cappex (now Appily.com), I was working in an organization that
        used A/B testing and multivariate experiments as a routine tool, not
        an exceptional one. We had a lead statistician. Decisions about design
        changes went through hypothesis formation, test design, statistical
        analysis, and a decision about whether the result was significant
        enough to ship.
      </p>
      <p>
        The Universal College Application achieving a 47% completion rate against
        a 20&ndash;35% industry benchmark did not feel like a win when I was in the
        middle of building it. It felt like a series of iterations, some of which
        worked and many of which did not. The college selection interface failed
        usability testing twice before we got it right. Deadline visibility was a
        problem we did not identify until mid-process testing revealed students
        were missing important information.
      </p>
      <p>
        The number at the end validated the process, but it also revealed
        something more important: we hit 47% because we measured everything.
        We tracked completion rates per step, not just overall. We knew exactly
        where students dropped off and why. We iterated against specific
        failures, not general impressions.
      </p>

      <BlogImage
        src="/blog/images/post5-cappex-in-progress.png"
        alt="Cappex application dashboard in progress: University of Michigan missing info, Michigan State in progress, Illinois Wesleyan ready to send, Kalamazoo College submitted"
        caption="The dashboard mid-process: one school submitted, one ready, two with missing information. Each state measured. Each drop-off point tracked. The 47% completion rate was built by iterating against specific failures like these, not general impressions."
        variant="inset"
      />
      <p>
        When you design without measurement, you are navigating without a map.
        You can build something that looks right and works reasonably well.
        You cannot know whether it is as good as it could be, because you
        have no feedback loop telling you what &ldquo;good&rdquo; means in practice for
        your specific users.
      </p>

      <hr className="blog-divider" />

      <h2>The TeleSign Lesson: Design Is Infrastructure</h2>
      <p>
        At TeleSign, the product processed 21 billion annual transactions. That
        number changes the stakes of design decisions in a way that is difficult
        to fully internalize until you are inside it.
      </p>
      <p>
        Ninety percent of the six-digit verification codes you receive on your
        phone come from TeleSign APIs. When you get a login code from your bank,
        a ride confirmation from Uber, or a package notification from Amazon,
        there is a significant probability that a UI I designed was part of
        the infrastructure that made it happen. Not visible to you. Not
        something you would ever attribute to a product designer. But present.
      </p>
      <p>
        This taught me that outcome at scale is almost never visible to the
        user. The outcome of the fraud prevention interface is that millions of
        legitimate users were approved instantly without knowing they were being
        evaluated. The outcome of the self-service portal is that Fortune 500
        engineering teams went live in 35 days instead of 67, without knowing
        that 67 days was ever the baseline.
      </p>
      <p>
        Good infrastructure is invisible. Good design at scale is the same way.
        The measure of success is not how often users notice the design. It is
        how rarely they need to.
      </p>

      <BlogImage
        src="/blog/images/post5-telesign-product.png"
        alt="TeleSign Messaging API product page inside the self-service portal showing transaction data and WhatsApp integration"
        caption="The TeleSign Messaging API product page. Ninety percent of six-digit verification codes sent globally route through TeleSign. The users who received those codes never saw this screen. That is what invisible infrastructure looks like."
        variant="bordered"
      />

      <hr className="blog-divider" />

      <h2>What Changes When You Measure Outcome</h2>
      <p>
        I want to be specific about what actually changes when a design
        organization shifts from measuring output to measuring outcome.
      </p>
      <ul className="blog-unordered-list">
        <li>
          <strong>Prioritization becomes objective.</strong> When you can connect
          a design change to a measurable user behavior, you can make a case for
          building it that does not depend on stakeholder intuition. The TeleSign
          portal moved from proposal to funding in part because I could quantify
          the cost of the status quo: 40% of CS team time on tasks that could
          be automated, multiplied by fully-loaded cost, divided by the story
          points required to build the alternative.
        </li>
        <li>
          <strong>You stop defending the wrong work.</strong> When you measure
          outcome, you find out faster that a direction is not working. This
          is uncomfortable in the short term and valuable in every other way.
          The design directions I abandoned at Cappex after testing failure
          freed up time for the iterations that eventually worked.
        </li>
        <li>
          <strong>The conversation with engineering changes.</strong> When you
          show up to a sprint planning meeting with a hypothesis attached to
          the design request, you are a different partner than someone showing
          up with a mockup and a preference. Engineers respond differently to
          &ldquo;we think this will reduce drop-off by 15% based on heatmap analysis
          and the two previous tests&rdquo; than they do to &ldquo;the current design feels
          confusing.&rdquo;
        </li>
        <li>
          <strong>Your portfolio writes itself.</strong> If you measured outcome,
          you have the numbers. The case study headline is already there.
          You just have to tell the story that connects the design decision
          to the result.
        </li>
      </ul>

      <hr className="blog-divider" />

      <h2>The Honest Caveat</h2>
      <p>
        Not every design decision can be measured. Some things matter and
        are not measurable. Brand coherence. Accessibility for users who
        are not large enough in your user population to show up in a
        statistical test. The experience of a user who encounters an error
        state once in five years. These things are real. They do not
        always produce a number.
      </p>
      <p>
        The principle is not &ldquo;only do work you can measure.&rdquo; The principle
        is: build the habit of asking what would change if the work is
        successful. If you cannot answer that question, you do not have
        a clear enough problem definition to start designing. Go back and
        sharpen the problem.
      </p>
      <p>
        Design is not decoration. It is intervention. Every intervention
        has a hypothesis embedded in it, even when that hypothesis is
        implicit. Making it explicit is the difference between a designer
        who ships and a designer who builds things that matter.
      </p>

      <hr className="blog-divider" />

      <div className="blog-author-bio">
        <p>
          <em>
            Danny Driscoll is a product designer with 18+ years of experience
            across enterprise SaaS, consumer mobile, and developer tools.
            Currently open to Senior / Principal / Director Product Design roles
            in enterprise B2B. Based in Ann Arbor, Michigan.{' '}
            <a
              href="https://displayedux.com"
              style={{ color: '#3B5CE8', textDecoration: 'underline', textDecorationThickness: '1px', textUnderlineOffset: '3px' }}
            >
              displayedux.com
            </a>
          </em>
        </p>
      </div>

    </article>
  )
}
