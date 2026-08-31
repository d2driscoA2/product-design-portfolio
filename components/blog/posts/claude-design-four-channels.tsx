import { BlogImage } from '@/components/blog/BlogImage'

/* ─────────────────────────────────────────────────────────────────
   Blog post: "Claude Design Has Four Input Channels. Most Designers
   Are Using the Slowest One."
   Danny Driscoll · August 2026
───────────────────────────────────────────────────────────────── */

export function ClaudeDesignFourChannelsPost() {
  return (
    <article className="blog-content">

      <h2>The Slot Machine Problem</h2>
      <p>
        Claude Design shipped in April 2026 with four separate ways to change
        a design on the canvas: chat, inline comments, direct text editing,
        and adjustment sliders Claude builds on demand. All four are in
        Anthropic&rsquo;s launch announcement. Open a new session and the
        cursor lands in one of them, and that is the one that ends up doing
        all the work.
      </p>
      <p>
        The chat box. Describe the change, wait for the regeneration, judge
        the result, describe the change again. This is the slot machine
        workflow: write a prompt, pull the lever, see what comes up, pull
        again. A slot machine has one input, and every pull re-rolls the
        entire screen. A mixing board has a fader per channel; you move the
        one fader carrying the problem and the rest of the mix stays put.
        Claude Design ships the mixing board. Habit walks up and asks
        where the lever is.
      </p>
      <p>
        The stakes here are not subtle. Iteration speed is the entire reason
        an AI design tool earns a place in your workflow. If every
        element-level tweak routes through a written paragraph and a full
        regeneration, the tool is iterating slower than Figma with less
        control, and the faster loop is sitting one channel away.
      </p>

      <hr className="blog-divider" />

      <h2>The Four Channels</h2>
      <p>
        Each channel has a scope. Scope is the thing to pay attention to,
        because it determines how much of your design the model considers
        fair game when it responds.
      </p>
      <ul className="blog-unordered-list">
        <li>
          <strong>Chat is page-scoped.</strong> A chat message addresses the
          whole design. That makes it the right channel for structure: add a
          section, change the hierarchy, reflow the layout for mobile. It also
          makes it the wrong channel for one misaligned button, because you
          have invited the model to reconsider the page to fix the button.
        </li>
        <li>
          <strong>Inline comments are element-scoped.</strong> You pin the
          comment to the element, the way you would drop a sticky note on one
          region of a whiteboard instead of describing the whiteboard over the
          phone. The pin carries the location, so your words only have to
          carry the intent.
        </li>
        <li>
          <strong>Direct editing is text-scoped.</strong> Click the headline,
          type the new headline. There is no reason to ask a model to guess at
          words you already know. Typing them is faster than describing them,
          and the result is exact.
        </li>
        <li>
          <strong>Sliders are value-scoped.</strong> Ask Claude for a control
          and it generates one: card padding, corner radius, accent hue, type
          scale. You drag until it looks right. This is the channel for taste,
          the changes you feel before you have a number for them.
        </li>
      </ul>

      <BlogImage
        src="/blog/images/postA-channel-map.png"
        alt="Diagram mapping the four Claude Design input channels to their scopes: chat to page, inline comment to element, direct edit to text, slider to value"
        caption="The four channels and their scopes. The channel you pick tells the model how much of the design it is allowed to reconsider."
        variant="bordered"
      />

      <hr className="blog-divider" />

      <h2>Talk, Point, Type, Turn</h2>
      <p>
        Here is how I route changes. Four verbs, one per channel.
      </p>
      <ol className="blog-ordered-list blog-ordered-list--playbook">
        <li>
          <strong>Talk for structure.</strong> New sections, reordered
          hierarchy, layout changes, anything where the model needs permission
          to move multiple elements. Chat is the only channel wide enough
          for this, which is exactly why it is wrong for everything below.
        </li>
        <li>
          <strong>Point for elements.</strong> One button, one card, one
          image. Pin an inline comment to the thing itself. Location travels
          with the pin, so a comment reading &ldquo;more contrast here&rdquo;
          lands precisely where a chat message reading &ldquo;more contrast
          on the second card in the pricing row&rdquo; lands approximately.
        </li>
        <li>
          <strong>Type for words.</strong> Headlines, labels, microcopy.
          Direct edit, every time. The model is a collaborator on layout and
          a middleman on copy you have already written.
        </li>
        <li>
          <strong>Turn for taste.</strong> Spacing, color, radius, scale.
          Ask for a slider and drag it. &ldquo;A little more breathing
          room&rdquo; is not a sentence. It is a slider position.
        </li>
      </ol>

      <hr className="blog-divider" />

      <h2>The Slider Is a Design Token You Tune by Hand</h2>
      <p>
        The sliders deserve more attention than they get, because they are
        doing something design tools have never done. When Claude generates
        a padding slider for the card you are staring at, it has effectively
        exposed a design token with a physical control attached. You are not
        describing a value. You are tuning it live, with the render updating
        as you drag.
      </p>
      <p>
        The move that makes this compound: tune the value on one element,
        then ask Claude to propagate it. Set the card padding by feel, then
        one chat message applies it across every card in the design. That is
        a token update, not a local patch. You calibrated by eye on one
        component and shipped the decision system-wide.
      </p>

      <BlogImage
        src="/blog/images/postA-sliders.png"
        alt="Recreation of the Claude Design canvas with an adjustment panel open, showing sliders for card padding, corner radius, accent hue, and type scale next to a pricing card"
        caption="A recreation of Claude Design's adjustment sliders, drawn for this post. Tune the value on one card by feel, then ask Claude to propagate it everywhere. Token thinking, without the token spreadsheet."
        variant="inset"
      />

      <hr className="blog-divider" />

      <h2>Where the Chat-Only Session Breaks Down</h2>
      <p>
        The failure mode is easy to reproduce, and worth walking through
        once so you recognize it early. Take a design with one stat block
        that needs tighter spacing, and run the fix through chat, because
        chat is where the cursor starts.
      </p>
      <p>
        The model fixes the stat block and adjusts the two sections beside
        it, because a page-scoped channel handed it the whole page. The
        next message undoes the side effects, which produces new side
        effects. Three rounds in, the session feels like it is fighting
        you, and the tool takes the blame.
      </p>
      <p>
        The root cause is not model quality. It is channel selection.
        Element-scoped requests pushed through the page-scoped channel,
        and the tool blamed for hearing the request at the scope it was
        given. One pinned comment on the stat block carries the constraint
        the sentences keep dropping.
      </p>

      <BlogImage
        src="/blog/images/postA-scope-mismatch.png"
        alt="Side by side comparison: a page-scoped chat message causing three elements to shift, versus an element-scoped inline comment pinned to one stat block changing only that block"
        caption="The same request through two channels. Chat gives the model the page. The pin gives it the element. The model respects the scope you hand it."
        variant="bordered"
      />

      <hr className="blog-divider" />

      <h2>The Channel Rule</h2>
      <p>
        Match the scope of the channel to the scope of the change.
      </p>
      <p>
        That is the whole rule. An element-scoped request through a
        page-scoped channel is an invitation for the model to consider
        everything, and it accepted your invitation, politely, every time.
        The reverse failure exists too: nobody restructures a page through
        forty inline comments. When a session feels like it is fighting you,
        check the scope mismatch before you check the prompt.
      </p>
      <p>
        This is the same discipline we already apply to human collaboration.
        You do not redline a comma in a kickoff meeting, and you do not
        restructure the information architecture in a margin note. The
        channels were always scoped. Claude Design made the scoping literal.
      </p>

      <hr className="blog-divider" />

      <h2>Where the Output Goes Next</h2>
      <p>
        The refinement loop matters because of what sits on the far end of
        it. Claude Design exports to Canva, PDF, PPTX, and standalone HTML,
        and it packages a handoff bundle with design specifications for
        Claude Code, per Anthropic&rsquo;s announcement. A design you
        refined through the right channels arrives at implementation with
        the decisions already encoded.
      </p>
      <p>
        The tool is in research preview and the rough edges are real. But
        here is the encouraging part: the four channels reward skills
        designers already have. Knowing whether a change is structure or
        taste. Knowing where a comment belongs. Knowing when a value needs
        tuning by hand instead of a description. That is design judgment,
        and the channels finally give it a direct line into the tool.
      </p>
      <p>
        So bring the habits you built long before AI showed up. Point at
        the element the way you would in a critique. Tune the value the way
        you would in the inspector. The mixing board is set up, and
        designers are exactly the people who know what a good mix sounds
        like.
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
              style={{ color: '#4063FB', textDecoration: 'underline', textDecorationThickness: '1px', textUnderlineOffset: '3px' }}
            >
              displayedux.com
            </a>
          </em>
        </p>
      </div>

    </article>
  )
}
