export const tenseCategories = [
  {
    id: 'present',
    number: 1,
    title: 'Present',
    tenses: [
      { id: 'simple-present', number: '1.1', title: 'Simple Present' },
      { id: 'present-continuous', number: '1.2', title: 'Present Continuous' },
      { id: 'present-perfect', number: '1.3', title: 'Present Perfect' },
      { id: 'present-perfect-continuous', number: '1.4', title: 'Present Perfect Continuous' },
    ],
  },
  {
    id: 'past',
    number: 2,
    title: 'Past',
    tenses: [
      { id: 'simple-past', number: '2.1', title: 'Simple Past' },
      { id: 'past-continuous', number: '2.2', title: 'Past Continuous' },
      { id: 'past-perfect', number: '2.3', title: 'Past Perfect' },
      { id: 'past-perfect-continuous', number: '2.4', title: 'Past Perfect Continuous' },
    ],
  },
  {
    id: 'future',
    number: 3,
    title: 'Future',
    tenses: [
      { id: 'simple-future', number: '3.1', title: 'Simple Future' },
      { id: 'future-continuous', number: '3.2', title: 'Future Continuous' },
      { id: 'future-perfect', number: '3.3', title: 'Future Perfect' },
      { id: 'future-perfect-continuous', number: '3.4', title: 'Future Perfect Continuous' },
    ],
  },
];

// Flat list (useful for prev/next navigation)
export const allTenses = tenseCategories.flatMap(cat =>
  cat.tenses.map(t => ({ ...t, category: cat.title }))
);

// ============================================================
// TENSE DETAILS — add your content here
// ============================================================
// Each key matches the tense "id" above.
// Available sections (all optional, written in HTML):
//   structure, usage, examples, signalWords, errors, extra (array)
// ============================================================

// ============================================================
// TENSE DETAILS — Present Simple + Present Continuous
// Ready to paste into tensesData.js
// ============================================================

export const tenseDetails = {

'simple-present': {

  usage: `
    <p>The Present Simple is one of the most important tenses in English. It describes what is generally true — not what is happening right now, but what regularly happens, always exists, or is always true. Think of it as the tense of facts, habits, and permanent states.</p>

    <h3>When to use it</h3>
    <p>Five core uses — each with a distinct purpose.</p>

    <h4>1 — Habits and routines</h4>
    <p>Actions that happen regularly, often with adverbs of frequency.</p>
    <ul>
      <li><em>He goes to the gym on Mondays.</em></li>
    </ul>

    <h4>2 — General truths and facts</h4>
    <p>Scientific facts or things that are permanently true.</p>
    <ul>
      <li><em>Water boils at 100°C.</em></li>
    </ul>

    <h4>3 — Permanent situations</h4>
    <p>States that are long-term or unlikely to change soon.</p>
    <ul>
      <li><em>She lives in London.</em></li>
    </ul>

    <h4>4 — Schedules and timetables</h4>
    <p>Fixed future events based on an official timetable.</p>
    <ul>
      <li><em>The train leaves at half past nine.</em></li>
    </ul>

    <h4>5 — Instructions and directions</h4>
    <p>Steps presented as a sequence of actions.</p>
    <ul>
      <li><em>You turn left at the corner, then walk straight on.</em></li>
    </ul>
  `,

  structure: `
    <h3>Full conjugation — affirmative</h3>
    <p>Only the 3rd person singular (he / she / it) changes. All other persons use the base form.</p>

    <table>
      <tr><th>Subject</th><th>Verb: work</th><th>Verb: be</th><th>Verb: have</th></tr>
      <tr><td>I</td><td>work</td><td>am</td><td>have</td></tr>
      <tr><td>You</td><td>work</td><td>are</td><td>have</td></tr>
      <tr><td>He / She / It</td><td>works</td><td>is</td><td>has</td></tr>
      <tr><td>We</td><td>work</td><td>are</td><td>have</td></tr>
      <tr><td>You (pl.)</td><td>work</td><td>are</td><td>have</td></tr>
      <tr><td>They</td><td>work</td><td>are</td><td>have</td></tr>
    </table>

    <h3>Spelling rules — 3rd person singular</h3>
    <p>Only he / she / it requires a spelling change. Here are all the rules.</p>

    <h4>Most verbs → add <code>-s</code></h4>
    <p>The default rule for the vast majority of verbs.</p>
    <ul>
      <li><strong>work → works</strong> | <strong>run → runs</strong> | <strong>eat → eats</strong></li>
    </ul>

    <h4>Ends in <code>-s / -ss / -sh / -ch / -x / -z</code> → add <code>-es</code></h4>
    <p>An extra vowel is needed to make the ending pronounceable.</p>
    <ul>
      <li><strong>watch → watches</strong> | <strong>fix → fixes</strong> | <strong>push → pushes</strong> | <strong>pass → passes</strong></li>
    </ul>

    <h4>Ends in consonant + <code>-o</code> → add <code>-es</code></h4>
    <p>A small but important group of common verbs.</p>
    <ul>
      <li><strong>go → goes</strong> | <strong>do → does</strong></li>
    </ul>

    <h4>Ends in consonant + <code>-y</code> → remove <code>-y</code>, add <code>-ies</code></h4>
    <p>The <code>y</code> changes only when it follows a consonant.</p>
    <ul>
      <li><strong>study → studies</strong> | <strong>fly → flies</strong> | <strong>carry → carries</strong></li>
    </ul>

    <h4>Ends in vowel + <code>-y</code> → add <code>-s</code> only</h4>
    <p>When <code>y</code> follows a vowel, it stays unchanged.</p>
    <ul>
      <li><strong>play → plays</strong> | <strong>enjoy → enjoys</strong> | <strong>say → says</strong></li>
    </ul>

    <h4>Ends in vowel + <code>-e</code> → add <code>-s</code> only</h4>
    <p>The <code>-e</code> stays; just add <code>-s</code>.</p>
    <ul>
      <li><strong>like → likes</strong> | <strong>love → loves</strong> | <strong>write → writes</strong></li>
    </ul>

    <h4>Irregular: <code>be</code> and <code>have</code></h4>
    <p><code>be</code> is unique — it has different forms for every person. <code>have</code> only changes in the 3rd person.</p>
    <ul>
      <li><strong>be →</strong> I am / you are / he is &nbsp;&nbsp;|&nbsp;&nbsp; <strong>have →</strong> he/she/it has</li>
    </ul>

    <h3>British English spelling</h3>
    <p>Some verbs are spelled differently in British and American English. This affects the 3rd person singular form as well.</p>

    <table>
      <tr><th>British English</th><th>American English</th><th>3rd person (BrE)</th></tr>
      <tr><td>practise (verb)</td><td>practice (verb)</td><td>he <strong>practises</strong></td></tr>
      <tr><td>licence (verb: to licence)</td><td>license (verb)</td><td>he <strong>licences</strong></td></tr>
      <tr><td>organise</td><td>organize</td><td>she <strong>organises</strong></td></tr>
      <tr><td>recognise</td><td>recognize</td><td>he <strong>recognises</strong></td></tr>
      <tr><td>analyse</td><td>analyze</td><td>she <strong>analyses</strong></td></tr>
    </table>

    <blockquote>
      <strong>Note:</strong> In British English, many verbs ending in <code>-ise</code> can also be spelled <code>-ize</code> (e.g. <em>organise / organize</em>). Both are acceptable in BrE, but <code>-ise</code> is far more common in everyday British writing.
    </blockquote>

    <h3>Pronunciation of the final <code>-s</code></h3>
    <p>The <code>-s</code> ending has three different sounds depending on the final sound of the verb.</p>

    <table>
      <tr><th>Sound</th><th>When</th><th>Examples</th></tr>
      <tr><td><strong>/s/</strong></td><td>After voiceless sounds: p, t, k, f, θ</td><td>works, eats, laughs, stops</td></tr>
      <tr><td><strong>/z/</strong></td><td>After voiced sounds: vowels, b, d, g, l, m, n…</td><td>runs, lives, plays, reads</td></tr>
      <tr><td><strong>/ɪz/</strong></td><td>After sibilant sounds: s, z, ʃ, ʒ, tʃ, dʒ</td><td>watches, pushes, fixes</td></tr>
    </table>

    <h3>Negative</h3>
    <p>Use <code>do not</code> / <code>does not</code> + base verb. The main verb loses its <code>-s</code>.</p>

    <h4>I / you / we / they → <code>do not</code> (don't)</h4>
    <ul>
      <li><em>I do not drink coffee.</em> / <em>They don't work at weekends.</em></li>
    </ul>

    <h4>He / she / it → <code>does not</code> (doesn't)</h4>
    <p>The <code>-s</code> moves to the auxiliary. The main verb returns to its base form.</p>
    <ul>
      <li><em>She doesn't like fish.</em> (not: <em>She doesn't likes</em>)</li>
    </ul>

    <blockquote>
      <strong>British English note:</strong> In formal written British English, the full forms <code>do not</code> and <code>does not</code> are often preferred over contractions, although contractions remain common in many contexts.
    </blockquote>

    <h3>Questions</h3>
    <p>Move <code>do</code> / <code>does</code> to the front. The main verb stays in its base form.</p>

    <h4>Yes / No questions</h4>
    <ul>
      <li><em>Do you speak English?</em> / <em>Does she work here?</em></li>
    </ul>

    <h4>Wh- questions</h4>
    <p>Question word + <code>do/does</code> + subject + base verb.</p>
    <ul>
      <li><em>Where do you live?</em> / <em>What does he do for a living?</em></li>
    </ul>

    <h4>Subject questions — no auxiliary</h4>
    <p>When the question word replaces the subject, no <code>do/does</code> is needed. The verb takes the normal 3rd person form.</p>
    <ul>
      <li><em>Who lives here?</em> (not: <em>Who does live here?</em>)</li>
    </ul>

    <h3>Short answers</h3>
    <p>Never repeat the main verb — use the auxiliary only.</p>

    <table>
      <tr><th>Positive</th><th>Negative</th></tr>
      <tr><td>Yes, I do.</td><td>No, I don't.</td></tr>
      <tr><td>Yes, she does.</td><td>No, he doesn't.</td></tr>
    </table>

    <h3>Tag questions</h3>
    <p>Especially common in spoken British English. A short question added to the end of a statement to seek confirmation or invite agreement.</p>

    <h4>The rule</h4>
    <p>Positive statement → negative tag. Negative statement → positive tag. Use the same auxiliary as the main sentence.</p>

    <h4>Positive → negative tag</h4>
    <ul>
      <li><em>You live in Manchester, don't you?</em></li>
    </ul>

    <h4>Negative → positive tag</h4>
    <ul>
      <li><em>She doesn't drive, does she?</em></li>
    </ul>

    <h4>With <code>be</code> — no auxiliary needed</h4>
    <ul>
      <li><em>He is a teacher, isn't he?</em> / <em>They aren't ready, are they?</em></li>
    </ul>

    <blockquote>
      <strong>British English note:</strong> Tag questions are used far more frequently and with greater variety in British English than in American English. They can express genuine questions (rising intonation) or simply seek agreement (falling intonation).
    </blockquote>
  `,

  signalWords: `
    <h3>Adverbs of frequency</h3>
    <p>These adverbs are closely associated with the Present Simple.</p>

    <h4>Position: before the main verb, after <code>be</code></h4>
    <ul>
      <li><strong>always, usually, often, sometimes, occasionally, rarely / seldom, never</strong></li>
    </ul>
    <blockquote>She always has tea in the morning. / He is never late.</blockquote>

    <h4>Position: at the end of the sentence</h4>
    <ul>
      <li><strong>every day, once a week, twice a month, on Mondays</strong></li>
    </ul>
    <blockquote>They visit their parents every Sunday.</blockquote>

    <blockquote>
      <strong>British English note:</strong> <code>seldom</code> and <code>occasionally</code> are more common in British than American English.
    </blockquote>
  `,

  errors: `
    <h3>Common errors</h3>
    <p>Mistakes learners frequently make with the Present Simple.</p>

    <h4>1 — Missing the <code>-s</code> in the 3rd person singular</h4>
    <p>The most frequent error. Every verb needs <code>-s</code> (or <code>-es</code> / <code>-ies</code>) with he / she / it.</p>
    <ul>
      <li>✗ <em>She work every day.</em></li>
      <li>✓ <em>She works every day.</em></li>
    </ul>

    <h4>2 — Using <code>does</code> + verb with <code>-s</code></h4>
    <p>When <code>does</code> is used, the main verb must return to its base form — the <code>-s</code> cannot appear twice.</p>
    <ul>
      <li>✗ <em>She doesn't works here.</em></li>
      <li>✓ <em>She doesn't work here.</em></li>
    </ul>

    <h4>3 — Using Present Simple for an action in progress right now</h4>
    <p>An action happening at this exact moment needs the Present Continuous, not the Present Simple.</p>
    <ul>
      <li>✗ <em>I watch TV right now.</em></li>
      <li>✓ <em>I am watching TV right now.</em></li>
    </ul>

    <h4>4 — Using Present Continuous for habits</h4>
    <p>Habits and routines belong to the Present Simple. The continuous form changes the meaning entirely.</p>
    <ul>
      <li>✗ <em>I am usually going to the gym.</em></li>
      <li>✓ <em>I usually go to the gym.</em></li>
    </ul>

    <h4>5 — Using a stative verb in the continuous</h4>
    <p>Verbs that describe states (know, like, want, understand…) are not used in continuous tenses.</p>
    <ul>
      <li>✗ <em>I am knowing the answer.</em></li>
      <li>✓ <em>I know the answer.</em></li>
    </ul>

    <h4>6 — Wrong position of the adverb of frequency</h4>
    <p>Adverbs of frequency go before the main verb, not after it.</p>
    <ul>
      <li>✗ <em>She drinks always tea in the morning.</em></li>
      <li>✓ <em>She always drinks tea in the morning.</em></li>
    </ul>

    <h4>7 — Wrong tag question</h4>
    <p>The tag must use the same auxiliary as the main clause (<code>do / does</code>), not <code>be</code>.</p>
    <ul>
      <li>✗ <em>She works here, isn't it?</em></li>
      <li>✓ <em>She works here, doesn't she?</em></li>
    </ul>
  `,

  extra: [
    {
      title: 'Have got — Possession in British English',
      content: `
        <p>In everyday spoken British English, possession is most commonly expressed with <strong>have got</strong> rather than simply <strong>have</strong>. Both are grammatically correct, but <em>have got</em> sounds far more natural to a British ear in informal and semi-formal contexts.</p>

        <table>
          <tr><th>Have (neutral / formal)</th><th>Have got (natural BrE)</th></tr>
          <tr><td><em>She has a dog.</em></td><td><em>She's got a dog.</em></td></tr>
          <tr><td><em>Do you have a pen?</em></td><td><em>Have you got a pen?</em></td></tr>
          <tr><td><em>I don't have time.</em></td><td><em>I haven't got time.</em></td></tr>
          <tr><td><em>He has a flat in London.</em></td><td><em>He's got a flat in London.</em></td></tr>
        </table>

        <h4>Important notes</h4>
        <ul>
          <li><em>Have got</em> is used only in the Present Simple — you cannot say <em>"I had got a car"</em> to mean possession in the past. Use <em>had</em> instead: <em>"I had a car."</em></li>
          <li>In questions and negatives, <em>have</em> acts as the auxiliary: <em>Have you got…? / I haven't got…</em></li>
          <li>In American English, <em>have got</em> exists but is less common. Americans more typically say <em>"Do you have a pen?"</em></li>
        </ul>
      `,
    },
    {
      title: 'Stative Verbs — No Continuous Form',
      content: `
        <p>These verbs describe states, not actions. They are not normally used in continuous tenses — use the Present Simple instead.</p>

        <h4>Thinking and knowing</h4>
        <p><code>know, believe, think, understand, remember, forget, mean, suppose</code></p>
        <ul>
          <li><em>I know the answer.</em> (not: <em>I am knowing</em>)</li>
        </ul>

        <h4>Feelings and desires</h4>
        <p><code>like, love, hate, want, need, prefer, wish, mind</code></p>
        <ul>
          <li><em>She loves classical music.</em> (not: <em>She is loving</em>)</li>
        </ul>

        <h4>Senses</h4>
        <p><code>see, hear, smell, taste, seem, appear, look (= seem)</code></p>
        <ul>
          <li><em>This soup tastes wonderful.</em></li>
        </ul>

        <h4>Possession and existence</h4>
        <p><code>have, own, belong, possess, contain, consist, include</code></p>
        <ul>
          <li><em>He owns a flat in Edinburgh.</em></li>
        </ul>

        <h4>Dual meaning verbs — stative and dynamic</h4>
        <p>Some verbs can be both stative and dynamic depending on meaning. When they describe an active process rather than a state, the continuous form is possible.</p>

        <table>
          <tr><th>Stative (Present Simple)</th><th>Dynamic (Present Continuous)</th></tr>
          <tr><td><em>I think she is right.</em> (opinion)</td><td><em>I am thinking about the problem.</em> (active process)</td></tr>
          <tr><td><em>I have a car.</em> (possession)</td><td><em>We are having dinner.</em> (activity)</td></tr>
          <tr><td><em>She looks tired.</em> (= seems)</td><td><em>She is looking at the menu.</em> (action)</td></tr>
          <tr><td><em>I see what you mean.</em> (understand)</td><td><em>I am seeing my doctor tomorrow.</em> (appointment)</td></tr>
        </table>
      `,
    },
    {
      title: 'Present Simple vs Present Continuous',
      content: `
        <p>The most common source of confusion for learners. The key question: is it a habit or is it happening right now?</p>

        <h4>Habit vs action in progress</h4>
        <table>
          <tr><th>Present Simple</th><th>Present Continuous</th></tr>
          <tr><td><em>She works in a hospital.</em><br>Her job — permanent situation</td><td><em>She is working right now.</em><br>At this moment — temporary</td></tr>
        </table>

        <h4>Routine vs temporary arrangement</h4>
        <table>
          <tr><th>Present Simple</th><th>Present Continuous</th></tr>
          <tr><td><em>I get up at seven.</em><br>My usual routine</td><td><em>I am staying with friends this week.</em><br>Temporary, not permanent</td></tr>
        </table>

        <h4>Neutral habit vs irritating habit</h4>
        <p>The Present Continuous with <code>always</code> expresses annoyance at a repeated behaviour — a very common pattern in spoken British English.</p>
        <table>
          <tr><th>Present Simple</th><th>Present Continuous</th></tr>
          <tr><td><em>He always loses his keys.</em><br>Neutral observation</td><td><em>He is always losing his keys!</em><br>Expresses irritation</td></tr>
        </table>

        <h4>Typical signal words</h4>
        <table>
          <tr><th>Present Simple</th><th>Present Continuous</th></tr>
          <tr><td>always, usually, often, sometimes, never, every day, on Mondays</td><td>now, right now, at the moment, currently, today, this week</td></tr>
        </table>
      `,
    },
  ],

},

  // ============================================================

  'present-continuous': {

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

},
//----------------------------------------------------------------------------------------------------------------------------------
'present-perfect': {

  usage: `
    <p>The Present Perfect connects the past to the present. It is used when a past action or experience has a direct relevance, result, or connection to the present moment. Unlike the Simple Past — which simply states that something happened at a finished point in time — the Present Perfect focuses on <strong>what that past action means right now</strong>.</p>
    <p>It is formed with <strong>have / has + past participle</strong>.</p>

    <h3>When to use it</h3>
    <p>Five core uses — each with a distinct link between past and present.</p>

    <h4>1 — Life experiences</h4>
    <p>Actions that happened at an unspecified time in one's life. The exact time is not important — the experience itself is.</p>
    <ul>
      <li><em>I have visited Japan.</em> (at some point in my life)</li>
    </ul>

    <h4>2 — Recent actions with a present result</h4>
    <p>Something that happened recently and whose result is visible or relevant now.</p>
    <ul>
      <li><em>She has broken her leg.</em> (her leg is broken now)</li>
    </ul>

    <h4>3 — Situations that started in the past and continue now</h4>
    <p>A state or action that began in the past and is still ongoing at the moment of speaking.</p>
    <ul>
      <li><em>He has lived in Edinburgh for ten years.</em> (he still lives there)</li>
    </ul>

    <h4>4 — Recent news and announcements</h4>
    <p>New information being reported for the first time, particularly in news, headlines, and announcements.</p>
    <ul>
      <li><em>Scientists have discovered a new species.</em></li>
    </ul>

    <h4>5 — Actions in an unfinished time period</h4>
    <p>Something that happened (or did not happen) within a time period that has not yet ended.</p>
    <ul>
      <li><em>I haven't seen her today.</em> (today is not over yet)</li>
    </ul>
  `,

  structure: `
    <h3>Full conjugation — affirmative</h3>
    <p>have / has + past participle. Only the 3rd person singular uses <code>has</code>.</p>

    <table>
      <tr><th>Subject</th><th>Auxiliary</th><th>Example: work</th><th>Example: go</th></tr>
      <tr><td>I</td><td>have</td><td>I have worked</td><td>I have gone</td></tr>
      <tr><td>You</td><td>have</td><td>You have worked</td><td>You have gone</td></tr>
      <tr><td>He / She / It</td><td>has</td><td>He has worked</td><td>She has gone</td></tr>
      <tr><td>We</td><td>have</td><td>We have worked</td><td>We have gone</td></tr>
      <tr><td>You (pl.)</td><td>have</td><td>You have worked</td><td>You have gone</td></tr>
      <tr><td>They</td><td>have</td><td>They have worked</td><td>They have gone</td></tr>
    </table>

    <h4>Contractions (spoken and informal written)</h4>
    <ul>
      <li>I've worked / you've worked / he's worked / we've worked / they've worked</li>
    </ul>

    <h3>Regular past participles</h3>
    <p>For regular verbs, the past participle is formed by adding <code>-ed</code> to the base verb — the same form as the Simple Past.</p>
    <ul>
      <li><strong>work → worked</strong> | <strong>play → played</strong> | <strong>visit → visited</strong></li>
    </ul>

    <h3>Irregular past participles</h3>
    <p>Irregular verbs have a unique past participle that must be learnt individually. These are the most common ones.</p>

    <table>
      <tr><th>Base form</th><th>Simple Past</th><th>Past Participle</th></tr>
      <tr><td>be</td><td>was / were</td><td>been</td></tr>
      <tr><td>become</td><td>became</td><td>become</td></tr>
      <tr><td>begin</td><td>began</td><td>begun</td></tr>
      <tr><td>break</td><td>broke</td><td>broken</td></tr>
      <tr><td>bring</td><td>brought</td><td>brought</td></tr>
      <tr><td>buy</td><td>bought</td><td>bought</td></tr>
      <tr><td>come</td><td>came</td><td>come</td></tr>
      <tr><td>do</td><td>did</td><td>done</td></tr>
      <tr><td>drink</td><td>drank</td><td>drunk</td></tr>
      <tr><td>drive</td><td>drove</td><td>driven</td></tr>
      <tr><td>eat</td><td>ate</td><td>eaten</td></tr>
      <tr><td>fall</td><td>fell</td><td>fallen</td></tr>
      <tr><td>feel</td><td>felt</td><td>felt</td></tr>
      <tr><td>find</td><td>found</td><td>found</td></tr>
      <tr><td>fly</td><td>flew</td><td>flown</td></tr>
      <tr><td>forget</td><td>forgot</td><td>forgotten</td></tr>
      <tr><td>get</td><td>got</td><td>got (British) / gotten (American)</td></tr>
      <tr><td>give</td><td>gave</td><td>given</td></tr>
      <tr><td>go</td><td>went</td><td>gone</td></tr>
      <tr><td>have</td><td>had</td><td>had</td></tr>
      <tr><td>hear</td><td>heard</td><td>heard</td></tr>
      <tr><td>keep</td><td>kept</td><td>kept</td></tr>
      <tr><td>know</td><td>knew</td><td>known</td></tr>
      <tr><td>leave</td><td>left</td><td>left</td></tr>
      <tr><td>lose</td><td>lost</td><td>lost</td></tr>
      <tr><td>make</td><td>made</td><td>made</td></tr>
      <tr><td>meet</td><td>met</td><td>met</td></tr>
      <tr><td>pay</td><td>paid</td><td>paid</td></tr>
      <tr><td>put</td><td>put</td><td>put</td></tr>
      <tr><td>read</td><td>read</td><td>read</td></tr>
      <tr><td>run</td><td>ran</td><td>run</td></tr>
      <tr><td>say</td><td>said</td><td>said</td></tr>
      <tr><td>see</td><td>saw</td><td>seen</td></tr>
      <tr><td>send</td><td>sent</td><td>sent</td></tr>
      <tr><td>sleep</td><td>slept</td><td>slept</td></tr>
      <tr><td>speak</td><td>spoke</td><td>spoken</td></tr>
      <tr><td>spend</td><td>spent</td><td>spent</td></tr>
      <tr><td>take</td><td>took</td><td>taken</td></tr>
      <tr><td>teach</td><td>taught</td><td>taught</td></tr>
      <tr><td>tell</td><td>told</td><td>told</td></tr>
      <tr><td>think</td><td>thought</td><td>thought</td></tr>
      <tr><td>understand</td><td>understood</td><td>understood</td></tr>
      <tr><td>wear</td><td>wore</td><td>worn</td></tr>
      <tr><td>win</td><td>won</td><td>won</td></tr>
      <tr><td>write</td><td>wrote</td><td>written</td></tr>
    </table>

    <h3>Negative</h3>
    <p>have not / has not + past participle.</p>

    <h4>I / you / we / they → <code>have not</code> (haven't)</h4>
    <ul>
      <li><em>I have not finished yet.</em> / <em>They haven't arrived.</em></li>
    </ul>

    <h4>He / she / it → <code>has not</code> (hasn't)</h4>
    <ul>
      <li><em>She has not replied.</em> / <em>He hasn't eaten anything today.</em></li>
    </ul>

    <blockquote>
      <strong>British English note:</strong> In formal written British English, the full forms <code>have not</code> and <code>has not</code> are often preferred over contractions, although contractions remain common in many contexts.
    </blockquote>

    <h3>Questions</h3>
    <p>Move <code>have</code> / <code>has</code> to the front. The past participle stays unchanged.</p>

    <h4>Yes / No questions</h4>
    <ul>
      <li><em>Have you finished?</em> / <em>Has she called?</em></li>
    </ul>

    <h4>Wh- questions</h4>
    <p>Question word + have/has + subject + past participle.</p>
    <ul>
      <li><em>What have you done?</em> / <em>How long has he lived here?</em></li>
    </ul>

    <h3>Short answers</h3>
    <p>Use the auxiliary only — never repeat the past participle.</p>

    <table>
      <tr><th>Positive</th><th>Negative</th></tr>
      <tr><td>Yes, I have.</td><td>No, I haven't.</td></tr>
      <tr><td>Yes, she has.</td><td>No, she hasn't.</td></tr>
    </table>

    <h3>Tag questions</h3>
    <p>Positive statement → negative tag. Negative statement → positive tag.</p>
    <ul>
      <li><em>You have met him before, haven't you?</em></li>
      <li><em>She hasn't replied, has she?</em></li>
    </ul>

    <h3>Have got in the Present Perfect context</h3>
    <p>In British English, questions about life experience and qualifications often use <em>have got</em> informally, particularly in spoken English.</p>
    <ul>
      <li><em>Have you got any experience in this field?</em> (informal BrE — asking about experience)</li>
      <li><em>Have you had any experience in this field?</em> (more neutral — Present Perfect of <em>have</em>)</li>
    </ul>
    <blockquote>
      <strong>Note:</strong> <em>Have you got</em> in this context is a Present Simple form, not a Present Perfect — but it is so commonly used in British English when asking about experience or qualifications that it is worth being aware of.
    </blockquote>
  `,

  signalWords: `
    <h3>Signal words</h3>
    <p>Certain words and phrases are strongly associated with the Present Perfect. They are key clues for choosing this tense.</p>

    <h4>just</h4>
    <p>A very recent action — something that happened moments ago.</p>
    <ul>
      <li><em>I have just arrived.</em></li>
    </ul>

    <h4>already</h4>
    <p>Something that happened sooner than expected. Placed before the past participle or at the end of the sentence.</p>
    <ul>
      <li><em>She has already finished the report.</em></li>
    </ul>

    <h4>yet</h4>
    <p>Used in negatives and questions — refers to something expected but not happened so far. Placed at the end of the sentence.</p>
    <ul>
      <li><em>Have you eaten yet?</em> / <em>I haven't decided yet.</em></li>
    </ul>

    <h4>ever</h4>
    <p>Used in questions — means "at any time in your life".</p>
    <ul>
      <li><em>Have you ever been to Scotland?</em></li>
    </ul>

    <h4>never</h4>
    <p>Used in affirmative sentences with a negative meaning — means "at no time in one's life".</p>
    <ul>
      <li><em>I have never tried haggis.</em></li>
    </ul>

    <h4>for</h4>
    <p>Refers to a <strong>duration</strong> of time — how long something has lasted.</p>
    <ul>
      <li><em>She has worked here for five years.</em></li>
    </ul>

    <h4>since</h4>
    <p>Refers to a <strong>starting point</strong> in time — when something began.</p>
    <ul>
      <li><em>He has lived in London since 2018.</em></li>
    </ul>

    <h4>recently / lately</h4>
    <p>Both refer to a vague recent period. <code>Lately</code> often implies a developing trend or change.</p>
    <ul>
      <li><em>I haven't seen her recently.</em> / <em>He has been very quiet lately.</em></li>
    </ul>

    <h4>still (in negatives)</h4>
    <p>Emphasises that something expected has not happened even now.</p>
    <ul>
      <li><em>She still hasn't replied to my message.</em></li>
    </ul>
  `,

  errors: `
    <h3>Common errors</h3>
    <p>Mistakes learners frequently make with the Present Perfect.</p>

    <h4>1 — Using Present Perfect with a finished time expression</h4>
    <p>When the time is finished and specified (yesterday, last year, in 2010, ago), use the Simple Past — not the Present Perfect.</p>
    <ul>
      <li>✗ <em>I have seen her yesterday.</em></li>
      <li>✓ <em>I saw her yesterday.</em></li>
    </ul>

    <h4>2 — Using Simple Past instead of Present Perfect for ongoing situations</h4>
    <p>When the situation started in the past and is still true now, the Present Perfect is required.</p>
    <ul>
      <li>✗ <em>I lived here for ten years.</em> (implies I no longer live here)</li>
      <li>✓ <em>I have lived here for ten years.</em> (I still live here)</li>
    </ul>

    <h4>3 — Confusing <code>for</code> and <code>since</code></h4>
    <p><code>for</code> is used with a duration; <code>since</code> is used with a point in time.</p>
    <ul>
      <li>✗ <em>She has worked here since five years.</em></li>
      <li>✓ <em>She has worked here for five years.</em></li>
      <li>✓ <em>She has worked here since 2019.</em></li>
    </ul>

    <h4>4 — Using the Simple Past form instead of the past participle</h4>
    <p>With irregular verbs especially, learners often use the Simple Past form where the past participle is needed.</p>
    <ul>
      <li>✗ <em>I have went to the shops.</em></li>
      <li>✓ <em>I have gone to the shops.</em></li>
    </ul>

    <h4>5 — Placing <code>just</code>, <code>already</code>, or <code>never</code> in the wrong position</h4>
    <p>These adverbs go between the auxiliary and the past participle — not before the auxiliary or at the end.</p>
    <ul>
      <li>✗ <em>I just have finished.</em></li>
      <li>✓ <em>I have just finished.</em></li>
    </ul>

    <h4>6 — Confusing <code>have been to</code> and <code>have gone to</code></h4>
    <p><code>have been to</code> means you visited and came back. <code>have gone to</code> means you went and are still there.</p>
    <ul>
      <li><em>She has been to Paris.</em> (she visited and has returned)</li>
      <li><em>She has gone to Paris.</em> (she is in Paris right now)</li>
      <li>✗ <em>I have gone to London three times.</em> (you are here, not in London)</li>
      <li>✓ <em>I have been to London three times.</em></li>
    </ul>
  `,

  extra: [
    {
      title: 'Present Perfect vs Simple Past',
      content: `
        <p>This is the most important distinction to master. Both tenses refer to past actions, but they are not interchangeable.</p>

        <h4>The core difference</h4>
        <table>
          <tr><th>Present Perfect</th><th>Simple Past</th></tr>
          <tr><td>The time is unspecified or the period is unfinished.</td><td>The time is specified or the period is finished.</td></tr>
          <tr><td><em>I have read that book.</em><br>(at some point — time unimportant)</td><td><em>I read that book last summer.</em><br>(specific finished time)</td></tr>
        </table>

        <h4>Unfinished vs finished time period</h4>
        <table>
          <tr><th>Present Perfect</th><th>Simple Past</th></tr>
          <tr><td><em>I haven't seen her today.</em><br>(today is not over)</td><td><em>I didn't see her yesterday.</em><br>(yesterday is finished)</td></tr>
        </table>

        <h4>Ongoing situation vs finished situation</h4>
        <table>
          <tr><th>Present Perfect</th><th>Simple Past</th></tr>
          <tr><td><em>He has worked here for years.</em><br>(he still works here)</td><td><em>He worked here for years.</em><br>(he no longer works here)</td></tr>
        </table>

        <h4>British English note</h4>
        <p>British English uses the Present Perfect in situations where American English often uses the Simple Past — particularly with <code>just</code>, <code>already</code>, and <code>yet</code>. Since you are studying British English, always prefer the Present Perfect in these contexts.</p>
        <table>
          <tr><th>British English</th><th>American English</th></tr>
          <tr><td><em>I've just eaten.</em></td><td><em>I just ate.</em></td></tr>
          <tr><td><em>Have you finished yet?</em></td><td><em>Did you finish yet?</em></td></tr>
          <tr><td><em>She's already left.</em></td><td><em>She already left.</em></td></tr>
        </table>
      `,
    },
  ],

},
//----------------------------------------------------------------------------------------------------
'present-perfect-continuous': {

  usage: `
    <p>The Present Perfect Continuous describes an action or situation that <strong>began in the past and has continued up to the present</strong> — or has only just stopped. It emphasises the <strong>duration or ongoing nature</strong> of the activity, rather than its completion or result. It is formed with <strong>have / has been + verb-ing</strong>.</p>

    <h3>When to use it</h3>
    <p>Four core uses.</p>

    <h4>1 — Action that started in the past and is still continuing</h4>
    <p>The activity is still in progress at the moment of speaking.</p>
    <ul>
      <li><em>She has been studying for three hours.</em> (she is still studying)</li>
    </ul>

    <h4>2 — Action that has just stopped but whose effect is still visible</h4>
    <p>The activity is finished, but the result or evidence is apparent right now.</p>
    <ul>
      <li><em>It has been raining — the streets are wet.</em></li>
    </ul>

    <h4>3 — Emphasis on duration</h4>
    <p>When the focus is on how long something has been happening, rather than on a completed result.</p>
    <ul>
      <li><em>How long have you been waiting?</em></li>
    </ul>

    <h4>4 — Repeated actions over a period of time</h4>
    <p>A series of repeated actions that have been occurring throughout a recent period.</p>
    <ul>
      <li><em>He has been calling me all morning.</em></li>
    </ul>
  `,

  structure: `
    <h3>Full conjugation — affirmative</h3>
    <p>have / has been + verb-ing. Only the 3rd person singular uses <code>has</code>. The <code>been</code> and the <code>-ing</code> form never change.</p>

    <table>
      <tr><th>Subject</th><th>Auxiliary</th><th>Example: work</th></tr>
      <tr><td>I</td><td>have been</td><td>I have been working</td></tr>
      <tr><td>You</td><td>have been</td><td>You have been working</td></tr>
      <tr><td>He / She / It</td><td>has been</td><td>She has been working</td></tr>
      <tr><td>We</td><td>have been</td><td>We have been working</td></tr>
      <tr><td>You (pl.)</td><td>have been</td><td>You have been working</td></tr>
      <tr><td>They</td><td>have been</td><td>They have been working</td></tr>
    </table>

    <h4>Contractions (spoken and informal written)</h4>
    <ul>
      <li>I've been working / you've been working / he's been working / we've been working / they've been working</li>
    </ul>

    <h3>Negative</h3>
    <p>have not been / has not been + verb-ing.</p>

    <h4>I / you / we / they → <code>have not been</code> (haven't been)</h4>
    <ul>
      <li><em>I haven't been sleeping well lately.</em></li>
    </ul>

    <h4>He / she / it → <code>has not been</code> (hasn't been)</h4>
    <ul>
      <li><em>She hasn't been feeling well this week.</em></li>
    </ul>

    <blockquote>
      <strong>British English note:</strong> In formal written British English, the full forms <code>have not been</code> and <code>has not been</code> are often preferred over contractions, although contractions remain common in many contexts.
    </blockquote>

    <h3>Questions</h3>
    <p>Move <code>have</code> / <code>has</code> to the front. <code>been</code> and the <code>-ing</code> form stay in place.</p>

    <h4>Yes / No questions</h4>
    <ul>
      <li><em>Have you been waiting long?</em> / <em>Has she been working here long?</em></li>
    </ul>

    <h4>Wh- questions</h4>
    <p>Question word + have/has + subject + been + verb-ing.</p>
    <ul>
      <li><em>How long have you been learning English?</em> / <em>What has he been doing all day?</em></li>
    </ul>

    <h3>Short answers</h3>
    <p>Use <code>have</code> / <code>has</code> only — never repeat <code>been</code> or the main verb.</p>

    <table>
      <tr><th>Positive</th><th>Negative</th></tr>
      <tr><td>Yes, I have.</td><td>No, I haven't.</td></tr>
      <tr><td>Yes, she has.</td><td>No, she hasn't.</td></tr>
    </table>

    <h3>Tag questions</h3>
    <p>Positive statement → negative tag. Negative statement → positive tag.</p>
    <ul>
      <li><em>You have been working hard, haven't you?</em></li>
      <li><em>She hasn't been sleeping well, has she?</em></li>
    </ul>
  `,

  signalWords: `
    <h3>Signal words</h3>
    <p>The Present Perfect Continuous is strongly associated with expressions of duration and recent activity.</p>

    <h4>for</h4>
    <p>Refers to the <strong>duration</strong> of the activity — how long it has been going on.</p>
    <ul>
      <li><em>I have been studying for two hours.</em></li>
    </ul>

    <h4>since</h4>
    <p>Refers to the <strong>starting point</strong> of the activity.</p>
    <ul>
      <li><em>She has been living in Bristol since January.</em></li>
    </ul>

    <h4>how long</h4>
    <p>The most typical question word with this tense — asking about duration.</p>
    <ul>
      <li><em>How long have you been waiting?</em></li>
    </ul>

    <h4>all day / all morning / all week</h4>
    <p>Emphasises that the activity has continued throughout the entire period.</p>
    <ul>
      <li><em>He has been on the phone all morning.</em></li>
    </ul>

    <h4>lately / recently</h4>
    <p>Refers to a vague recent period, often implying a developing situation or trend.</p>
    <ul>
      <li><em>I have been feeling rather tired lately.</em></li>
    </ul>
  `,

  errors: `
    <h3>Common errors</h3>
    <p>Mistakes learners frequently make with the Present Perfect Continuous.</p>

    <h4>1 — Forgetting <code>been</code></h4>
    <p><code>been</code> is an obligatory part of the structure — it cannot be dropped.</p>
    <ul>
      <li>✗ <em>I have working here for two years.</em></li>
      <li>✓ <em>I have been working here for two years.</em></li>
    </ul>

    <h4>2 — Using a stative verb in the continuous</h4>
    <p>Stative verbs (know, like, want, understand, belong…) cannot be used in any continuous form, including this one. Use the Present Perfect Simple instead.</p>
    <ul>
      <li>✗ <em>I have been knowing her for years.</em></li>
      <li>✓ <em>I have known her for years.</em></li>
    </ul>

    <h4>3 — Confusing <code>for</code> and <code>since</code></h4>
    <p><code>for</code> is used with a duration; <code>since</code> is used with a starting point in time.</p>
    <ul>
      <li>✗ <em>She has been working here since three years.</em></li>
      <li>✓ <em>She has been working here for three years.</em></li>
      <li>✓ <em>She has been working here since 2021.</em></li>
    </ul>

    <h4>4 — Using Present Perfect Continuous when the result matters, not the process</h4>
    <p>When the focus is on a completed result or achievement, use the Present Perfect Simple — not the Continuous.</p>
    <ul>
      <li>✗ <em>I have been writing three reports today.</em> (the reports are finished — result matters)</li>
      <li>✓ <em>I have written three reports today.</em></li>
      <li>✓ <em>I have been writing reports all day.</em> (focus on the ongoing activity)</li>
    </ul>

    <h4>5 — Using Present Perfect Continuous for a single completed action</h4>
    <p>The Present Perfect Continuous implies duration or repetition. For a single completed action, use the Present Perfect Simple.</p>
    <ul>
      <li>✗ <em>I have been visited Paris.</em></li>
      <li>✓ <em>I have visited Paris.</em></li>
    </ul>
  `,

  extra: [
    {
      title: 'Present Perfect Continuous vs Present Perfect Simple',
      content: `
        <p>Both tenses connect the past to the present, but they have a different focus. This is the most important distinction to understand for this tense.</p>

        <h4>The core difference</h4>
        <table>
          <tr><th>Present Perfect Continuous</th><th>Present Perfect Simple</th></tr>
          <tr><td>Focus on the <strong>activity</strong> — its duration or ongoing nature.</td><td>Focus on the <strong>result</strong> or completion of the action.</td></tr>
          <tr><td><em>I have been reading your report.</em><br>(I may not have finished it)</td><td><em>I have read your report.</em><br>(I have finished it)</td></tr>
        </table>

        <h4>Duration vs completion</h4>
        <table>
          <tr><th>Present Perfect Continuous</th><th>Present Perfect Simple</th></tr>
          <tr><td><em>She has been painting the kitchen.</em><br>(the activity — still in progress or just finished)</td><td><em>She has painted the kitchen.</em><br>(the result — it is done)</td></tr>
        </table>

        <h4>Visible evidence of recent activity</h4>
        <p>The Continuous is often used when you can see or feel the evidence of a recent activity, even if it has just stopped.</p>
        <table>
          <tr><th>Present Perfect Continuous</th><th>Present Perfect Simple</th></tr>
          <tr><td><em>You look exhausted. Have you been running?</em><br>(evidence: breathless, sweaty)</td><td><em>Have you run a marathon before?</em><br>(life experience — no evidence implied)</td></tr>
        </table>

        <h4>Stative verbs — always use the Simple</h4>
        <p>With stative verbs, the Present Perfect Simple is always used, even when expressing duration. The Continuous is not possible.</p>
        <table>
          <tr><th>Correct (Present Perfect Simple)</th><th>Incorrect</th></tr>
          <tr><td><em>I have known her for years.</em></td><td><em>I have been knowing her for years.</em> ✗</td></tr>
          <tr><td><em>He has owned that car since 2015.</em></td><td><em>He has been owning that car since 2015.</em> ✗</td></tr>
        </table>

        <h4>Some verbs work naturally with both — with a change in meaning</h4>
        <table>
          <tr><th>Present Perfect Continuous</th><th>Present Perfect Simple</th></tr>
          <tr><td><em>I have been living in Cardiff for a year.</em><br>(ongoing — I still live there)</td><td><em>I have lived in Cardiff.</em><br>(life experience — I may have moved)</td></tr>
          <tr><td><em>He has been working at the BBC.</em><br>(ongoing or recent activity)</td><td><em>He has worked at the BBC.</em><br>(at some point in his career)</td></tr>
        </table>
      `,
    },
  ],

},

};