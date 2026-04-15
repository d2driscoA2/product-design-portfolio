import { BlogImage, BlogHeroImage } from '@/components/blog/BlogImage'

/* ─────────────────────────────────────────────────────────────────
   Blog post: "How I Write Case Studies That Get Callbacks at the
   Principal Level"
   Danny Driscoll · May 2026
───────────────────────────────────────────────────────────────── */

export function CaseStudyWritingPost() {
  return (
    <article className="blog-content">

      <h2>The Problem With Most UX Case Studies</h2>
      <p>
        I have read a lot of designer portfolios. Not casually. Systematically,
        as someone who has been on both sides of the hiring table and who spent
        months studying what separates the portfolios that get responses from the
        ones that don&rsquo;t.
      </p>
      <p>
        The pattern I keep seeing: designers document their process instead of
        telling a story. They list the methods they used. They show the wireframes
        they made. They present the final screens. And then they wonder why they
        aren&rsquo;t hearing back.
      </p>
      <p>
        Here is what I believe: a case study that describes what you did is
        fundamentally different from a case study that shows what you understood.
        Hiring managers at the Principal and Director level are not looking for
        evidence that you completed steps. They are looking for evidence that you
        saw things others missed.
      </p>
      <p>
        This post is about how I structured my four case studies, what I cut,
        what I kept, and what I learned from writing them.
      </p>

      <BlogHeroImage
        src="/blog/images/post2-hero-portal-home.png"
        alt="TeleSign self-service portal homepage — the product behind the 67 to 35 day onboarding case study"
        caption="The TeleSign portal. Case study headline: Enterprise Onboarding Redesign: 67 Days to 35. The outcome leads. The story follows."
      />

      <hr className="blog-divider" />

      <h2>The Three Lenses Every Reader Applies</h2>
      <p>
        When I was building displayedux.com, I kept coming back to a framework
        that shaped every word I wrote for the case studies. Every reader applies
        three filters simultaneously:
      </p>

      <div className="blog-callout">
        <div className="blog-callout-label">The three evaluation lenses</div>
        <ul className="blog-callout-list">
          <li>
            <strong>Business lens:</strong> Does this designer understand how
            their work connects to revenue, retention, or operational efficiency?
            Do they know what a good outcome looks like beyond aesthetics?
          </li>
          <li>
            <strong>Process lens:</strong> Can this designer navigate complexity?
            Do they show evidence of research, iteration, decision-making under
            constraint, and cross-functional collaboration?
          </li>
          <li>
            <strong>Craft lens:</strong> Is the work well-executed? Does the
            visual communication show sophistication and intentionality?
          </li>
        </ul>
      </div>

      <p>
        Most designer portfolios satisfy only the craft lens. The ones that get
        callbacks satisfy all three, with the business lens leading.
      </p>
      <p>
        This is not intuitive. Designers are trained to care about how things look
        and how they work. We are not always trained to connect those decisions to
        the number that appears in the quarterly review. Writing case studies that
        lead with business outcomes required me to reframe how I thought about
        my own work.
      </p>

      <hr className="blog-divider" />

      <h2>What I Led With in Each Case Study</h2>
      <p>
        Each of my four case studies opens with an outcome, not a problem
        statement. Here is what that actually looks like in practice.
      </p>

      <h3>Self-Service Customer Portal: 67 days to 35</h3>
      <p>
        The business outcome was a 48% reduction in enterprise onboarding time.
        That is the headline. Not &ldquo;I redesigned the onboarding experience.&rdquo;
        Not &ldquo;I conducted user research and built a self-service portal.&rdquo; The
        number comes first, because the number is why anyone at TeleSign cared
        about this project.
      </p>
      <p>
        The supporting context: $500K to $2M+ daily transaction revenue during
        the same period. 85% of customers completing onboarding without CS
        intervention. Zero compliance violations across 120+ countries with
        wildly different regulatory requirements. These numbers did not appear at
        the end of the case study as a results section. They appeared at the top,
        in a stats grid, before the reader hit a single word of narrative.
      </p>

      <BlogImage
        src="/blog/portal-design-guide-colors.png"
        alt="TeleSign Unified Portal design system documentation: color palette with hex codes, semantic usage notes, and system message states (info, success, warning, error)"
        caption="The Unified Portal color system — one of three design guide deliverables inside the Self-Service Portal case study. Color, typography, and component specs defined before a single line of code shipped."
        variant="bordered"
      />

      <h3>Fraud Prevention Suite: 21 billion transactions protected</h3>
      <p>
        The scale of this one is the hook. Most designers have never worked on
        a system processing 21 billion annual transactions. Most have never
        designed an interface that non-technical fraud analysts use to make
        split-second decisions about whether a phone number is legitimate. The
        number establishes stakes before I explain anything about what I did.
      </p>

      <h3>Universal College Application: 47% vs. 20-35% industry average</h3>
      <p>
        This is the clearest before/after comparison in my portfolio. The industry
        standard completion rate for college applications ranges from 20% to 35%.
        We hit 47%. That is a comparison that is immediately meaningful to anyone
        who understands conversion. I did not need to explain why completion rate
        matters. The reader already knows.
      </p>

      <BlogImage
        src="/blog/images/post2-cappex-complete.png"
        alt="Cappex Universal College Application dashboard showing all four colleges with Application Submitted status"
        caption="The Cappex application dashboard at the outcome state: all four colleges submitted. University of Michigan, Michigan State, Illinois Wesleyan, Kalamazoo College. This is what 47% completion looks like."
        variant="inset"
      />

      <hr className="blog-divider" />

      <h2>What I Cut</h2>
      <p>
        The editing process was harder than the writing. Here is a specific list
        of things I removed from each case study draft.
      </p>

      <ul className="blog-unordered-list">
        <li>
          <strong>All method lists.</strong> Phrases like &ldquo;I conducted user
          interviews, created wireframes, iterated based on feedback&rdquo; describe
          tasks, not thinking. Every working designer did those things. They are
          not evidence of anything.
        </li>
        <li>
          <strong>Every wireframe that did not show a pivotal decision.</strong>{' '}
          Wireframes belong in a case study only when they illustrate a direction
          you took or a direction you abandoned. A wireframe shown simply to
          prove you made wireframes adds nothing.
        </li>
        <li>
          <strong>Outcome language without attribution.</strong> &ldquo;Improved user
          satisfaction&rdquo; is not an outcome. &ldquo;Post-onboarding NPS increased from
          2.8 to 4.2 out of 5&rdquo; is an outcome. I went through every sentence that
          claimed an improvement and either attached a number or cut it.
        </li>
        <li>
          <strong>Any section that did not answer: what did you understand
          that others didn&rsquo;t?</strong> This was the hardest cut. Sections that
          described what happened are easy to write. Sections that explain what
          you saw that shaped the decision are the ones that matter.
        </li>
      </ul>

      <hr className="blog-divider" />

      <h2>The Constraint Section Is Not Optional</h2>
      <p>
        One of the most consistent differences I see between junior and senior
        designer portfolios: senior designers describe constraints. Junior
        designers present solutions as if constraints did not exist.
      </p>
      <p>
        For the Self-Service Portal, the constraints were real and significant.
        The project ran during the pandemic, across US and European time zones,
        with a distributed team I had never met in person. The budget was limited
        to a specific story point allocation. Every feature required ruthless
        prioritization against that ceiling.
      </p>
      <p>
        These constraints are not qualifications. They are not apologies. They
        are the conditions under which the work happened, and they explain
        decisions that would otherwise look arbitrary. Why did we launch with
        a simplified phone number flow instead of the full one? Because we had
        8 story points left and needed to ship. That is not a failure. That is
        product design.
      </p>
      <p>
        A hiring manager reading this knows what real projects look like. They
        have been in rooms where engineering said the feature they designed
        could not ship on schedule. They have made the same tradeoffs. When
        you name your constraints honestly, you signal that you have been in
        those rooms too.
      </p>

      <hr className="blog-divider" />

      <h2>The Reflection Section Is Where Seniority Shows</h2>
      <p>
        Junior designers end case studies with outcomes. Senior designers end
        them with questions.
      </p>
      <p>
        For the TeleSign portal, the reflection I wrote is specific: given what
        I know now about the SMB market we unlocked, I would have advocated
        for a separate onboarding track for SMB from the start rather than
        retrofitting the enterprise flow. The enterprise track was built for
        complexity that most SMB customers never needed. We served them well
        enough, but we served them with a tool that was never really theirs.
      </p>
      <p>
        That is not a confession of failure. It is evidence of the kind of
        retrospective thinking that prevents the same mistake in the next project.
        A VP of Design reading that section knows exactly what it means. They
        have made the same call.
      </p>

      <hr className="blog-divider" />

      <h2>The 10-Second Test</h2>
      <p>
        Hiring managers spend an average of 6 to 10 seconds on the initial
        portfolio scan. In those 10 seconds, they are answering one question:
        is this person worth 20 more minutes?
      </p>
      <p>
        Every case study card on my work index page shows a specific outcome
        in the thumbnail title. Not the project name. Not the method. The result:
      </p>

      <ul className="blog-unordered-list">
        <li>Enterprise Onboarding Redesign: 67 Days to 35</li>
        <li>ML-Powered Fraud Prevention for 21 Billion Annual Transactions</li>
        <li>6 Channels, 1 Interface: 22.2% CTR on RCS vs. 3% for SMS</li>
        <li>One Essay, Every College: 47% Completion vs. 20&ndash;35% Industry</li>
      </ul>

      <p>
        Each of those titles answers the business lens question before the reader
        clicks. The number is the invitation. The story is what follows.
      </p>

      <hr className="blog-divider" />

      <h2>Four Case Studies Is Enough</h2>
      <p>
        I have 18 years of work. I could fill a portfolio with 20 projects.
        I chose four. This was a deliberate editorial decision, not a limitation.
      </p>
      <p>
        Eight to twelve shallow projects signals an inability to prioritize. It
        says: I don&rsquo;t know which of my work is most important, so here is all
        of it. Four deeply executed case studies says: I know what matters,
        I know why, and I can make that case clearly.
      </p>
      <p>
        Editing is itself a design skill. A portfolio that cannot edit itself does
        not inspire confidence that the designer will edit their work on the job.
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
