const presentContinuous = {

  usage: `
    <p>The Present Continuous describes what is happening at or around the moment of speaking. Unlike the Present Simple — which deals with permanent truths and habits — the Present Continuous focuses on actions that are <strong>temporary, in progress, or developing</strong>. It is formed with <strong>am / is / are + verb-ing</strong>.</p>

    <h3>When to use it</h3>
    <p>Five distinct uses.</p>

    <h4>1 — Action in progress right now</h4>
    <p>Something happening at the exact moment of speaking.</p>
    <ul>
      <li><em>She is reading a book at the moment.</em></li>
    </ul>

    <h4>2 — Temporary situation</h4>
    <p>A situation that is true now but will not last permanently.</p>
    <ul>
      <li><em>He is staying with friends this week.</em></li>
    </ul>

    <h4>3 — Fixed future arrangement</h4>
    <p>A personal plan already arranged for the near future — more certain than a simple intention.</p>
    <ul>
      <li><em>We are meeting the director on Friday.</em></li>
    </ul>

    <h4>4 — Changing or developing situation</h4>
    <p>A trend or gradual change happening over a period of time.</p>
    <ul>
      <li><em>The climate is getting warmer every year.</em></li>
    </ul>

    <h4>5 — Irritation with "always"</h4>
    <p>When <code>always</code> is used with the continuous, it expresses annoyance at a repeated behaviour — not just a neutral habit.</p>
    <ul>
      <li><em>He is always losing his keys!</em> (= it's irritating)</li>
    </ul>
  `,

  structure: `
    <h3>Full conjugation — affirmative</h3>
    <p>am / is / are + verb-ing. The auxiliary changes with the subject; the -ing form always stays the same.</p>

    <table>
      <tr><th>Subject</th><th>Auxiliary</th><th>Example: work</th></tr>
      <tr><td>I</td><td>am</td><td>I am working</td></tr>
      <tr><td>You</td><td>are</td><td>You are working</td></tr>
      <tr><td>He / She / It</td><td>is</td><td>He is working</td></tr>
      <tr><td>We</td><td>are</td><td>We are working</td></tr>
      <tr><td>You (pl.)</td><td>are</td><td>You are working</td></tr>
      <tr><td>They</td><td>are</td><td>They are working</td></tr>
    </table>

    <h4>Contractions (spoken and informal written)</h4>
    <ul>
      <li>I'm working / you're working / he's working / we're working / they're working</li>
    </ul>

    <h3>Spelling rules — adding <code>-ing</code></h3>
    <p>The base verb changes spelling in some cases before adding -ing.</p>

    <h4>Most verbs → add <code>-ing</code> directly</h4>
    <ul>
      <li><strong>work → working</strong> | <strong>eat → eating</strong> | <strong>read → reading</strong></li>
    </ul>

    <h4>Ends in silent <code>-e</code> → drop the <code>-e</code>, then add <code>-ing</code></h4>
    <p>The silent <code>e</code> is removed to avoid a double vowel sound.</p>
    <ul>
      <li><strong>make → making</strong> | <strong>write → writing</strong> | <strong>come → coming</strong></li>
    </ul>

    <h4>Ends in <code>-ee</code>, <code>-oe</code>, <code>-ye</code> → keep the <code>-e</code>, add <code>-ing</code></h4>
    <p>These endings are not silent, so the <code>e</code> stays.</p>
    <ul>
      <li><strong>see → seeing</strong> | <strong>agree → agreeing</strong> | <strong>dye → dyeing</strong></li>
    </ul>

    <h4>One syllable: short vowel + single consonant → double the consonant</h4>
    <p>Doubling protects the short vowel sound.</p>
    <ul>
      <li><strong>run → running</strong> | <strong>sit → sitting</strong> | <strong>swim → swimming</strong> | <strong>get → getting</strong></li>
    </ul>

    <h4>Ends in <code>-ie</code> → change <code>-ie</code> to <code>-y</code>, then add <code>-ing</code></h4>
    <ul>
      <li><strong>lie → lying</strong> | <strong>die → dying</strong> | <strong>tie → tying</strong></li>
    </ul>

    <h4>British English: verbs ending in vowel + <code>l</code> → always double the <code>l</code></h4>
    <p>In British English, the final <code>l</code> is always doubled regardless of stress. American English does not follow this rule.</p>
    <ul>
      <li><strong>travel → travelling</strong> (British) / traveling (American)</li>
      <li><strong>cancel → cancelling</strong> | <strong>model → modelling</strong></li>
    </ul>

    <h3>Negative</h3>
    <p>am not / is not / are not + verb-ing.</p>

    <h4>Full forms and contractions</h4>
    <ul>
      <li>I <strong>am not</strong> working. / I<strong>'m not</strong> working.</li>
      <li>She <strong>is not</strong> working. / She<strong>'s not</strong> working. / She <strong>isn't</strong> working.</li>
      <li>They <strong>are not</strong> working. / They<strong>'re not</strong> working. / They <strong>aren't</strong> working.</li>
    </ul>

    <blockquote>
      <strong>British English note:</strong> Both contraction forms are acceptable (<em>she's not / she isn't</em>). In formal writing, the full form <code>is not</code> is often preferred, although contractions remain common in many contexts. Note: <code>I amn't</code> does not exist — only <code>I'm not</code>.
    </blockquote>

    <h3>Questions</h3>
    <p>Invert the subject and the auxiliary (am / is / are).</p>

    <h4>Yes / No questions</h4>
    <ul>
      <li><em>Are you working today?</em> / <em>Is she coming to the meeting?</em></li>
    </ul>

    <h4>Wh- questions</h4>
    <p>Question word + am/is/are + subject + verb-ing.</p>
    <ul>
      <li><em>What are you doing?</em> / <em>Where is he going?</em></li>
    </ul>

    <h3>Short answers</h3>
    <p>Use the auxiliary only — never repeat the main verb.</p>

    <table>
      <tr><th>Positive</th><th>Negative</th></tr>
      <tr><td>Yes, I am.</td><td>No, I'm not.</td></tr>
      <tr><td>Yes, she is.</td><td>No, she isn't.</td></tr>
      <tr><td>Yes, they are.</td><td>No, they aren't.</td></tr>
    </table>

    <h3>Tag questions</h3>
    <p>Positive statement → negative tag. Negative statement → positive tag. Use the same auxiliary.</p>
    <ul>
      <li><em>She is working late, isn't she?</em></li>
      <li><em>They aren't coming, are they?</em></li>
    </ul>
  `,

  signalWords: `
    <h3>Signal words</h3>
    <p>Words and phrases that typically appear with the Present Continuous.</p>

    <h4>For actions happening now</h4>
    <ul>
      <li><strong>now, right now, at the moment, at present, currently, still</strong></li>
    </ul>
    <blockquote>She is still working on the report.</blockquote>

    <h4>For temporary situations</h4>
    <ul>
      <li><strong>today, this week, this month, this year, nowadays, these days</strong></li>
    </ul>
    <blockquote>More people are working from home these days.</blockquote>

    <h4>For future arrangements</h4>
    <ul>
      <li><strong>tonight, tomorrow, next week, on Friday</strong></li>
    </ul>
    <blockquote>I am flying to Edinburgh tomorrow.</blockquote>
  `,

  errors: `
    <h3>Common errors</h3>
    <p>Mistakes learners frequently make with the Present Continuous.</p>

    <h4>1 — Using a stative verb in the continuous</h4>
    <p>Stative verbs (know, like, want, understand…) describe states, not actions. They do not take the continuous form.</p>
    <ul>
      <li>✗ <em>I am knowing the answer.</em></li>
      <li>✓ <em>I know the answer.</em></li>
    </ul>

    <h4>2 — Forgetting the auxiliary</h4>
    <p>The auxiliary <code>am / is / are</code> is obligatory — it cannot be dropped.</p>
    <ul>
      <li>✗ <em>She working right now.</em></li>
      <li>✓ <em>She is working right now.</em></li>
    </ul>

    <h4>3 — Using Present Continuous for habits</h4>
    <p>Habits and routines use the Present Simple. Using the continuous changes the meaning — it implies irritation rather than routine.</p>
    <ul>
      <li>✗ <em>I am usually going to the gym.</em></li>
      <li>✓ <em>I usually go to the gym.</em></li>
    </ul>

    <h4>4 — Spelling: forgetting to double the consonant</h4>
    <ul>
      <li>✗ <em>runing, siting, swiming</em></li>
      <li>✓ <em>running, sitting, swimming</em></li>
    </ul>

    <h4>5 — Spelling: forgetting to drop the silent -e</h4>
    <ul>
      <li>✗ <em>makeing, writeing, comeing</em></li>
      <li>✓ <em>making, writing, coming</em></li>
    </ul>

    <h4>6 — Using Present Continuous for general truths</h4>
    <p>Facts and general truths always use the Present Simple.</p>
    <ul>
      <li>✗ <em>Water is boiling at 100°C.</em></li>
      <li>✓ <em>Water boils at 100°C.</em></li>
    </ul>
  `,

  extra: [
    {
      title: 'Stative Verbs in the Continuous — When It Is Allowed',
      content: `
        <p>Most stative verbs cannot be used in the continuous. However, some verbs have both a stative and a dynamic meaning. When used dynamically — describing an active process rather than a state — the continuous form is possible and natural.</p>

        <table>
          <tr><th>Stative use (Present Simple)</th><th>Dynamic use (Present Continuous)</th></tr>
          <tr><td><em>I think she is right.</em><br>(opinion)</td><td><em>I am thinking about the problem.</em><br>(active mental process)</td></tr>
          <tr><td><em>I have a car.</em><br>(possession)</td><td><em>We are having dinner.</em><br>(activity)</td></tr>
          <tr><td><em>She looks tired.</em><br>(= she seems tired)</td><td><em>She is looking at the menu.</em><br>(deliberate action)</td></tr>
          <tr><td><em>I see what you mean.</em><br>(= I understand)</td><td><em>I am seeing my doctor tomorrow.</em><br>(appointment)</td></tr>
          <tr><td><em>He is selfish.</em><br>(permanent character)</td><td><em>He is being selfish.</em><br>(behaving selfishly right now)</td></tr>
        </table>

        <blockquote>
          <strong>Note on <em>have got</em>:</strong> In British English, possession is commonly expressed with <em>have got</em> rather than <em>have</em>. Since <em>have got</em> is stative, it is never used in the continuous: <em>"She's got a car"</em> — not <em>"She is having got a car"</em>. The dynamic form <em>having</em> only applies to activities: <em>"We are having dinner."</em>
        </blockquote>
      `,
    },
    {
      title: 'Present Continuous vs Present Simple',
      content: `
        <p>The most common source of confusion for learners. The key question: is it a temporary action or a permanent habit?</p>

        <h4>Action in progress vs habit</h4>
        <table>
          <tr><th>Present Continuous</th><th>Present Simple</th></tr>
          <tr><td><em>She is working in a hospital this month.</em><br>Temporary — will change</td><td><em>She works in a hospital.</em><br>Permanent — her job</td></tr>
        </table>

        <h4>Temporary arrangement vs routine</h4>
        <table>
          <tr><th>Present Continuous</th><th>Present Simple</th></tr>
          <tr><td><em>I am staying with friends this week.</em><br>Temporary, not permanent</td><td><em>I get up at seven.</em><br>My usual routine</td></tr>
        </table>

        <h4>Irritating habit vs neutral habit</h4>
        <p>The Present Continuous with <code>always</code> expresses annoyance — a very common pattern in spoken British English.</p>
        <table>
          <tr><th>Present Continuous</th><th>Present Simple</th></tr>
          <tr><td><em>He is always losing his keys!</em><br>Expresses irritation</td><td><em>He always loses his keys.</em><br>Neutral observation</td></tr>
        </table>

        <h4>Typical signal words</h4>
        <table>
          <tr><th>Present Continuous</th><th>Present Simple</th></tr>
          <tr><td>now, right now, at the moment, currently, today, this week</td><td>always, usually, often, sometimes, never, every day, on Mondays</td></tr>
        </table>
      `,
    },
  ],
};

export default presentContinuous;