/* ─────────────────────────────────────────────────────────────────
   Blog post: "The Onboarding Problem I Keep Solving at Every
   Company I've Worked At"
   Danny Driscoll · May 2026
───────────────────────────────────────────────────────────────── */

export function OnboardingPatternPost() {
  return (
    <article className="blog-content">

      <h2>Three Companies. Three Onboarding Problems. One Pattern.</h2>
      <p>
        I have worked at four companies with meaningful product design
        responsibilities. Three of them handed me an onboarding problem as one
        of my first significant assignments. At the time, I treated each one as a
        unique challenge. Looking back, they were all the same problem wearing
        different clothes.
      </p>
      <p>
        The pattern: an organization builds a product, designs the onboarding
        experience for the version of the user who already understands the
        product, and then watches completion rates collapse when real users
        show up knowing nothing.
      </p>
      <p>
        Here is how it played out three times across my career, what was
        different each time, and what stayed exactly the same.
      </p>

      <div className="blog-callout">
        <div className="blog-callout-label">The three instances</div>
        <ul className="blog-callout-list">
          <li><strong>Netflix (2011&ndash;2012):</strong> International expansion onboarding across 7 markets, millions of users, DVD-to-streaming transition</li>
          <li><strong>Appily.com, formerly Cappex (2015&ndash;2018):</strong> College application onboarding, 250K to 1.5M users, 47% completion vs. 20&ndash;35% industry</li>
          <li><strong>TeleSign (2018&ndash;2023):</strong> Enterprise B2B onboarding, 67-day process reduced to 35 days, 85% self-service rate</li>
        </ul>
      </div>

      <hr className="blog-divider" />

      <h2>Netflix: Testing Your Way to the Right First Step</h2>
      <p>
        At Netflix, the problem was not that the onboarding was bad. The problem
        was that it was built for a domestic user who had grown up with the
        product. International expansion meant onboarding users who had no
        existing Netflix context, in markets where streaming infrastructure was
        unreliable, with content libraries that did not yet match local expectations.
      </p>
      <p>
        My role was in the experimentation platform, Netflix XP, during the
        expansion into 7 international markets. The foundational work was not
        redesigning the onboarding flow. It was building the infrastructure to
        test which version of the onboarding flow worked for which user in which
        market.
      </p>
      <p>
        The lesson I took from Netflix: the right onboarding flow is not a
        design question. It is a measurement question. You form a hypothesis
        about what a new user needs to see and understand in the first session,
        you test it against a meaningful sample, and you let the data tell you
        whether you were right. Anything else is guessing at scale.
      </p>
      <p>
        The testing methodology I helped establish at Netflix is still in use
        today. That is not something I say lightly. Multivariate testing across
        millions of users creates a feedback loop that no amount of user
        research can replicate. It is the only way to know.
      </p>

      <hr className="blog-divider" />

      <h2>Appily.com: The Form That Was Eating Students Alive</h2>
      <p>
        At Cappex (now Appily.com), the onboarding problem had a specific
        shape. Students were starting the Universal College Application and
        abandoning it. The industry-standard completion rate for college
        applications ranged from 20% to 35%. We were inside that range and
        needed to get out of it.
      </p>
      <p>
        The research was unambiguous. I observed high school students
        attempting to complete the application in user testing sessions.
        What I watched was not confusion about form fields. It was cognitive
        overload. Students were tracking deadlines for eight colleges
        simultaneously, writing essays that needed to work universally,
        managing document uploads across multiple institutions, and doing all
        of this while carrying the psychological weight of what these applications
        meant for their lives.
      </p>
      <p>
        The problem was not the interface. The interface was the last line of
        defense against a process that was fundamentally overwhelming. No amount
        of UX polish was going to fix that. The fix had to be structural.
      </p>
      <p>
        What we built: one essay that submitted to every partner college. One
        profile that auto-filled across all applications. One dashboard that showed
        exactly what was missing and when it was due. The reduction in cognitive
        load was not incremental. It was categorical. A student applying to 10
        colleges went from 30+ hours of effort to 6. We validated the 47%
        completion rate through structured A/B testing with a lead statistician.
        That number held up across multiple cohorts.
      </p>
      <div className="blog-pullquote">
        The fix was not a better UI. The fix was removing 24 hours of unnecessary
        work from the user&rsquo;s life.
      </div>

      <hr className="blog-divider" />

      <h2>TeleSign: When Onboarding Is a Revenue Problem</h2>
      <p>
        The TeleSign version of this problem was the most complex and the most
        consequential in pure revenue terms.
      </p>
      <p>
        When I arrived, enterprise onboarding averaged 67 days. Every day a
        customer was not live was a day TeleSign was not recognizing revenue
        from that account. The delay was not primarily a user experience failure.
        It was an operational failure. Customer success teams were manually
        handling every step: provisioning products, generating API keys,
        explaining documentation, managing country-specific regulatory requirements
        for 120+ countries with wildly different rules.
      </p>
      <p>
        CS teams were spending 40% of their time on repetitive onboarding tasks.
        They were answering the same questions dozens of times per week.
        No single customer was asking an unreasonable question. The system just
        had no memory. Every new customer started from zero.
      </p>

      <div className="blog-callout blog-callout--blue">
        <div className="blog-callout-label">TeleSign research findings</div>
        <ul className="blog-callout-list">
          <li><strong>12 enterprise customers interviewed:</strong> consistent theme of not knowing what came next and feeling reluctant to bother the CS team with basic questions</li>
          <li><strong>1 week shadowing CS teams:</strong> same explanations delivered dozens of times, same manual provisioning steps repeated for every customer</li>
          <li><strong>40%</strong> of CS time consumed by tasks that could be automated</li>
          <li><strong>0</strong> visibility for customers into their own onboarding status</li>
        </ul>
      </div>

      <p>
        The design solution was a self-service portal that moved provisioning,
        API key generation, phone number acquisition, billing, and documentation
        access entirely into the customer&rsquo;s hands. Seven months. Distributed
        team. Pandemic constraints. 6am Pacific standups to overlap with
        European engineers.
      </p>
      <p>
        The outcome: 67 days to 35 days. 85% of customers completing onboarding
        without any CS intervention. Daily transaction revenue growing from $500K
        to $2M+ over the same period. The CS team freed to focus on complex
        cases and customer success instead of first-week logistics.
      </p>

      <hr className="blog-divider" />

      <h2>The Pattern, Stated Plainly</h2>
      <p>
        Three different companies. Three different products. Three different user
        groups. The same root cause every time:
      </p>
      <p>
        The product was built by people who already understood it, onboarded
        by processes designed for those same people, and then handed to users
        who had none of that context and no reliable way to get it.
      </p>
      <p>
        At Netflix, the context gap was cultural and market-specific. The fix was
        measurement infrastructure.
      </p>
      <p>
        At Cappex, the context gap was process complexity. Seventeen-year-olds
        were being asked to manage the operational complexity of applying to
        eight institutions simultaneously. The fix was removing work from their
        plate.
      </p>
      <p>
        At TeleSign, the context gap was technical and regulatory. Fortune 500
        engineering teams were being asked to navigate 120-country compliance
        requirements without a guide. The fix was encoding expert knowledge into
        the interface so the CS team did not have to deliver it manually for every
        customer.
      </p>
      <p>
        In every case, the onboarding failure was downstream of an organizational
        assumption: that the user arrives with more context than they actually have.
        The design solution, in every case, was to close the gap between what the
        organization assumed the user knew and what the user actually knew.
      </p>

      <hr className="blog-divider" />

      <h2>What I Look For Now</h2>
      <p>
        When I pick up a new onboarding problem, I ask three questions before I
        touch a wireframe:
      </p>
      <ol className="blog-ordered-list blog-ordered-list--playbook">
        <li>
          <strong>Who built this product and for whom did they build it?</strong>{' '}
          The gap between those two answers is usually where the onboarding
          breaks.
        </li>
        <li>
          <strong>What does the user need to believe after the first session
          to come back for the second?</strong> Not what they need to know.
          What they need to believe. Confidence is a different design problem
          than comprehension.
        </li>
        <li>
          <strong>What work are we asking the user to do that the system
          could do for them?</strong> Every piece of friction in onboarding
          is a choice someone made. The choice is often invisible until you
          look for it explicitly.
        </li>
      </ol>

      <p>
        The pattern will show up again in the next company I join. It always
        does. But recognizing it three times has made me faster at naming it
        and more credible when I explain to product and engineering why the
        first-session experience is not an afterthought. It is the moment the
        user decides whether to trust you.
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
