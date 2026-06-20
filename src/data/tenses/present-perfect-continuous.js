const presentPerfectContinuous = {

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
};

export default presentPerfectContinuous;