const simplePresent = {

  usage: `
    <p>The Present Simple is the foundation of English grammar. It describes what is generally true — not what is happening right now, but what regularly happens, always exists, or is always true. Think of it as the tense of facts, habits, and permanent states.</p>

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
      <strong>British English note:</strong> In formal written British English, the full forms <code>do not</code> and <code>does not</code> are strongly preferred over contractions.
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
    <p>Very characteristic of British English. A short question added to the end of a statement to seek confirmation or invite agreement.</p>

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
      <strong>British English note:</strong> Tag questions are far more frequent in British English than in American English. They can express genuine questions (rising intonation) or simply seek agreement (falling intonation).
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

  extra: [
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

        <h4>Exceptions — dual meaning verbs</h4>
        <p>Some verbs can be both stative and dynamic depending on meaning.</p>
        <ul>
          <li><em>I think she is right.</em> (opinion — stative)</li>
          <li><em>I am thinking about the problem.</em> (active process — dynamic)</li>
        </ul>
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

        <h4>Typical signal words</h4>
        <table>
          <tr><th>Present Simple</th><th>Present Continuous</th></tr>
          <tr><td>always, usually, often, sometimes, never, every day, on Mondays</td><td>now, right now, at the moment, currently, today, this week</td></tr>
        </table>
      `,
    },
  ],

};

export default simplePresent;
