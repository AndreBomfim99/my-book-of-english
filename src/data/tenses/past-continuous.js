const pastContinuous = {

  usage: `
    <p>The Past Continuous describes an action or situation that was <strong>in progress at a specific moment in the past</strong>. It does not focus on when the action started or finished — only that it was ongoing at that particular time. It is formed with <strong>was / were + verb-ing</strong>.</p>

    <h3>When to use it</h3>
    <p>Five core uses.</p>

    <h4>1 — Action in progress at a specific past moment</h4>
    <p>Something that was already happening at a particular time in the past.</p>
    <ul>
      <li><em>At eight o'clock, she was having dinner.</em></li>
      <li><em>What were you doing at midday yesterday?</em></li>
    </ul>

    <h4>2 — Action interrupted by a shorter event</h4>
    <p>The Past Continuous sets the background action; the Simple Past describes the shorter action that interrupted it. This is the most common pattern.</p>
    <ul>
      <li><em>I was walking home when I bumped into an old friend.</em></li>
      <li><em>She was reading in the garden when it started to rain.</em></li>
    </ul>

    <h4>3 — Two simultaneous actions in the past</h4>
    <p>Two longer actions happening at the same time, usually linked with <em>while</em>.</p>
    <ul>
      <li><em>While she was cooking, he was laying the table.</em></li>
    </ul>

    <h4>4 — Background and scene-setting in narrative</h4>
    <p>Used to describe the atmosphere, surroundings, or ongoing situation at the start of a story or account. The Simple Past then introduces the events.</p>
    <ul>
      <li><em>The sun was shining, birds were singing, and people were strolling through the park — when suddenly everything changed.</em></li>
    </ul>

    <h4>5 — Polite and tentative requests</h4>
    <p>In British English, the Past Continuous is often used to make requests and questions sound softer and more indirect — a very common politeness strategy.</p>
    <ul>
      <li><em>I was wondering if you could help me.</em></li>
      <li><em>I was hoping you might have a moment.</em></li>
      <li><em>We were thinking of visiting next weekend — would that suit you?</em></li>
    </ul>
  `,

  structure: `
    <h3>Full conjugation — affirmative</h3>
    <p>was / were + verb-ing. <strong>Was</strong> is used with I / he / she / it. <strong>Were</strong> is used with you / we / they.</p>

    <table>
      <tr><th>Subject</th><th>Auxiliary</th><th>Example: work</th></tr>
      <tr><td>I</td><td>was</td><td>I was working</td></tr>
      <tr><td>You</td><td>were</td><td>You were working</td></tr>
      <tr><td>He / She / It</td><td>was</td><td>She was working</td></tr>
      <tr><td>We</td><td>were</td><td>We were working</td></tr>
      <tr><td>You (pl.)</td><td>were</td><td>You were working</td></tr>
      <tr><td>They</td><td>were</td><td>They were working</td></tr>
    </table>

    <h3>Spelling rules — adding <code>-ing</code></h3>
    <p>The same rules apply as in the Present Continuous.</p>

    <h4>Most verbs → add <code>-ing</code> directly</h4>
    <ul>
      <li><strong>work → working</strong> | <strong>eat → eating</strong> | <strong>read → reading</strong></li>
    </ul>

    <h4>Ends in silent <code>-e</code> → drop the <code>-e</code>, add <code>-ing</code></h4>
    <ul>
      <li><strong>make → making</strong> | <strong>write → writing</strong> | <strong>come → coming</strong></li>
    </ul>

    <h4>Ends in <code>-ee</code>, <code>-oe</code>, <code>-ye</code> → keep the <code>-e</code>, add <code>-ing</code></h4>
    <ul>
      <li><strong>see → seeing</strong> | <strong>agree → agreeing</strong> | <strong>dye → dyeing</strong></li>
    </ul>

    <h4>One syllable: short vowel + single consonant → double the consonant</h4>
    <ul>
      <li><strong>run → running</strong> | <strong>sit → sitting</strong> | <strong>swim → swimming</strong> | <strong>get → getting</strong></li>
    </ul>

    <h4>Ends in <code>-ie</code> → change to <code>-y</code>, add <code>-ing</code></h4>
    <ul>
      <li><strong>lie → lying</strong> | <strong>die → dying</strong> | <strong>tie → tying</strong></li>
    </ul>

    <h4>British English: verbs ending in vowel + <code>l</code> → always double the <code>l</code></h4>
    <p>In British English, the final <code>l</code> is always doubled regardless of stress.</p>
    <ul>
      <li><strong>travel → travelling</strong> (British) / traveling (American)</li>
      <li><strong>cancel → cancelling</strong> | <strong>model → modelling</strong></li>
    </ul>

    <h3>Negative</h3>
    <p>was not / were not + verb-ing.</p>

    <h4>I / he / she / it → <code>was not</code> (wasn't)</h4>
    <ul>
      <li><em>I was not listening.</em> / <em>She wasn't paying attention.</em></li>
    </ul>

    <h4>You / we / they → <code>were not</code> (weren't)</h4>
    <ul>
      <li><em>They were not expecting that.</em> / <em>We weren't doing anything wrong.</em></li>
    </ul>

    <blockquote>
      <strong>British English note:</strong> In formal written British English, the full forms <code>was not</code> and <code>were not</code> are often preferred over contractions, although contractions remain common in many contexts.
    </blockquote>

    <h3>Questions</h3>
    <p>Invert the subject and <em>was / were</em>. No auxiliary <em>did</em> is needed.</p>

    <h4>Yes / No questions</h4>
    <ul>
      <li><em>Was she working late?</em> / <em>Were they listening?</em></li>
    </ul>

    <h4>Wh- questions</h4>
    <p>Question word + was/were + subject + verb-ing.</p>
    <ul>
      <li><em>What were you doing at the time?</em> / <em>Where was he going?</em></li>
    </ul>

    <h4>Subject questions — no inversion needed</h4>
    <p>When the question word replaces the subject, the word order stays the same.</p>
    <ul>
      <li><em>Who was making all that noise?</em></li>
      <li><em>What was happening outside?</em></li>
    </ul>

    <h3>Short answers</h3>
    <p>Use <em>was / were</em> only — never repeat the main verb.</p>

    <table>
      <tr><th>Positive</th><th>Negative</th></tr>
      <tr><td>Yes, I was.</td><td>No, I wasn't.</td></tr>
      <tr><td>Yes, she was.</td><td>No, she wasn't.</td></tr>
      <tr><td>Yes, they were.</td><td>No, they weren't.</td></tr>
    </table>

    <h3>Tag questions</h3>
    <p>Positive statement → negative tag. Negative statement → positive tag.</p>
    <ul>
      <li><em>You were listening, weren't you?</em></li>
      <li><em>She wasn't working, was she?</em></li>
      <li><em>It was raining when you left, wasn't it?</em></li>
    </ul>
  `,

  signalWords: `
    <h3>Signal words</h3>
    <p>The Past Continuous is closely associated with words and phrases that indicate a moment in the past or simultaneous activity.</p>

    <h4>while</h4>
    <p>Introduces the longer background action. Typically followed by the Past Continuous.</p>
    <ul>
      <li><em>While I was having a shower, the phone rang.</em></li>
    </ul>

    <h4>as</h4>
    <p>Similar to <em>while</em> — used when two actions develop together, often with a sense of gradual change.</p>
    <ul>
      <li><em>As she was leaving, she noticed the letter on the floor.</em></li>
    </ul>

    <h4>when</h4>
    <p>Typically introduces the shorter interrupting action (Simple Past), but can also introduce the moment at which a background action was in progress.</p>
    <ul>
      <li><em>I was working when she called.</em> (Past Continuous + when + Simple Past)</li>
      <li><em>When I arrived, they were having tea.</em> (when + Simple Past + Past Continuous)</li>
    </ul>

    <h4>at that moment / at that time</h4>
    <p>Points to a specific moment in the past when the action was in progress.</p>
    <ul>
      <li><em>At that moment, everyone was looking at him.</em></li>
    </ul>

    <h4>all morning / all day / all evening</h4>
    <p>Emphasises that the action continued throughout the entire period.</p>
    <ul>
      <li><em>She was working in the garden all afternoon.</em></li>
    </ul>

    <h4>still</h4>
    <p>Emphasises that the action was ongoing and had not stopped at that point.</p>
    <ul>
      <li><em>At midnight, he was still writing.</em></li>
    </ul>
  `,

  errors: `
    <h3>Common errors</h3>
    <p>Mistakes learners frequently make with the Past Continuous.</p>

    <h4>1 — Using was for all persons</h4>
    <p><em>Was</em> is only used with I / he / she / it. You / we / they always take <em>were</em>.</p>
    <ul>
      <li>✗ <em>They was playing in the park.</em></li>
      <li>✓ <em>They were playing in the park.</em></li>
      <li>✗ <em>We was watching the match.</em></li>
      <li>✓ <em>We were watching the match.</em></li>
    </ul>

    <h4>2 — Using Past Continuous instead of Simple Past for a completed action</h4>
    <p>If an action was completed and the focus is on the event itself rather than the process, use the Simple Past.</p>
    <ul>
      <li>✗ <em>I was reading the whole book yesterday.</em> (completed — focus on the result)</li>
      <li>✓ <em>I read the whole book yesterday.</em></li>
      <li>✓ <em>I was reading all afternoon.</em> (focus on the ongoing activity — correct)</li>
    </ul>

    <h4>3 — Using a stative verb in the continuous</h4>
    <p>Stative verbs (know, want, like, believe, understand…) cannot be used in any continuous form.</p>
    <ul>
      <li>✗ <em>I was knowing the answer.</em></li>
      <li>✓ <em>I knew the answer.</em></li>
      <li>✗ <em>She was wanting to leave.</em></li>
      <li>✓ <em>She wanted to leave.</em></li>
    </ul>

    <h4>4 — Confusing while and when</h4>
    <p><em>While</em> is used before the longer, ongoing action (Past Continuous). <em>When</em> is typically used before the shorter, completed action (Simple Past).</p>
    <ul>
      <li>✗ <em>When I was cooking, the phone rang.</em> (grammatically possible but less natural)</li>
      <li>✓ <em>While I was cooking, the phone rang.</em></li>
      <li>✓ <em>I was cooking when the phone rang.</em></li>
    </ul>

    <h4>5 — Forgetting the auxiliary was / were</h4>
    <p>The auxiliary is obligatory — the -ing form cannot stand alone in the past.</p>
    <ul>
      <li>✗ <em>She working when I arrived.</em></li>
      <li>✓ <em>She was working when I arrived.</em></li>
    </ul>

    <h4>6 — Spelling: forgetting to double the consonant</h4>
    <ul>
      <li>✗ <em>She was runing. / He was siting.</em></li>
      <li>✓ <em>She was running. / He was sitting.</em></li>
    </ul>

    <h4>7 — Spelling: forgetting to drop the silent -e</h4>
    <ul>
      <li>✗ <em>They were makeing. / She was writeing.</em></li>
      <li>✓ <em>They were making. / She was writing.</em></li>
    </ul>
  `,

  extra: [
    {
      title: 'Past Continuous vs Simple Past',
      content: `
        <p>These two tenses are frequently used together and understanding the difference between them is essential for natural storytelling in English.</p>

        <h4>The core difference</h4>
        <table>
          <tr><th>Past Continuous</th><th>Simple Past</th></tr>
          <tr><td>A longer action <strong>in progress</strong> at a past moment — the background.</td><td>A shorter, <strong>completed</strong> action — the event or interruption.</td></tr>
          <tr><td><em>She was reading a novel.</em></td><td><em>The phone rang.</em></td></tr>
        </table>

        <h4>The interruption pattern</h4>
        <p>The most common structure in narratives: the Past Continuous sets the scene, and the Simple Past introduces what happened.</p>
        <table>
          <tr><th>Background (Past Continuous)</th><th>Event (Simple Past)</th></tr>
          <tr><td><em>I was walking through Hyde Park</em></td><td><em>when I saw an old colleague.</em></td></tr>
          <tr><td><em>They were having supper</em></td><td><em>when the lights went out.</em></td></tr>
        </table>

        <h4>Sequence vs simultaneous</h4>
        <table>
          <tr><th>Simple Past (sequence)</th><th>Past Continuous (simultaneous)</th></tr>
          <tr><td><em>He got up and made breakfast.</em><br>(one after the other)</td><td><em>While he was making breakfast, she was getting dressed.</em><br>(at the same time)</td></tr>
        </table>

        <h4>Completed result vs ongoing process</h4>
        <table>
          <tr><th>Simple Past</th><th>Past Continuous</th></tr>
          <tr><td><em>I read the report.</em><br>(finished — I read the whole thing)</td><td><em>I was reading the report when he came in.</em><br>(in progress — not necessarily finished)</td></tr>
        </table>

        <h4>Signal words</h4>
        <table>
          <tr><th>Past Continuous</th><th>Simple Past</th></tr>
          <tr><td>while, as, at that moment, at that time, all morning / all day, still</td><td>when, then, suddenly, immediately, after that, eventually</td></tr>
        </table>
      `,
    },
    {
      title: 'Polite Requests with the Past Continuous',
      content: `
        <p>One of the most distinctly British uses of the Past Continuous is in softening requests and questions. Using the past tense creates a sense of distance that makes the request feel less direct and more polite — a quality highly valued in British social interaction.</p>

        <h4>How it works</h4>
        <p>Instead of using the present tense — which can sound abrupt — British speakers shift to the Past Continuous to make a request more tentative and courteous.</p>

        <table>
          <tr><th>More direct</th><th>More polite (Past Continuous)</th></tr>
          <tr><td><em>I want to ask you something.</em></td><td><em>I was wondering if I could ask you something.</em></td></tr>
          <tr><td><em>I hope you can help.</em></td><td><em>I was hoping you might be able to help.</em></td></tr>
          <tr><td><em>We want to visit next week.</em></td><td><em>We were thinking of visiting next week.</em></td></tr>
          <tr><td><em>Can you give me a moment?</em></td><td><em>I was wondering if you had a moment.</em></td></tr>
        </table>

        <h4>Most common verbs in this pattern</h4>
        <ul>
          <li><strong>was / were wondering</strong> — the most frequent; used to introduce a question or request</li>
          <li><strong>was / were hoping</strong> — implies an expectation that may or may not be met</li>
          <li><strong>was / were thinking</strong> — introduces a suggestion or plan tentatively</li>
          <li><strong>was / were looking</strong> — used when seeking something: <em>"I was looking for some advice."</em></li>
        </ul>

        <blockquote>
          <strong>British English note:</strong> This pattern is extremely common in British professional and social contexts — in emails, phone calls, and face-to-face conversation. Mastering it will immediately make your English sound more natural and culturally appropriate in the UK.
        </blockquote>
      `,
    },
  ],
};

export default pastContinuous;
