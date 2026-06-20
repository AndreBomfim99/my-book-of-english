const simplePast = {

  usage: `
    <p>The Simple Past describes actions, events, and states that <strong>happened and were completed in the past</strong>. The key feature of this tense is that the time is finished — the action has no direct connection to the present moment. It is the primary tense of storytelling, narrative, and reporting past events.</p>

    <h3>When to use it</h3>
    <p>Four core uses.</p>

    <h4>1 — Completed action at a specific time in the past</h4>
    <p>The most common use. The time is finished and often stated explicitly.</p>
    <ul>
      <li><em>She left the office at half past five.</em></li>
      <li><em>I visited Edinburgh last summer.</em></li>
    </ul>

    <h4>2 — Sequence of completed events</h4>
    <p>A series of actions that happened one after another in the past.</p>
    <ul>
      <li><em>He got up, had breakfast, and caught the train.</em></li>
    </ul>

    <h4>3 — Past habits and repeated actions</h4>
    <p>Actions that happened regularly in the past but no longer occur. Often used with <em>used to</em> or adverbs of frequency.</p>
    <ul>
      <li><em>She walked to school every day as a child.</em></li>
      <li><em>I used to live in Bristol.</em></li>
    </ul>

    <h4>4 — Past states</h4>
    <p>States or situations that existed in the past but are no longer true.</p>
    <ul>
      <li><em>He knew the answer.</em></li>
      <li><em>They lived in a small village near Bath.</em></li>
    </ul>
  `,

  structure: `
    <h3>Affirmative — regular verbs</h3>
    <p>Regular verbs form the Simple Past by adding <code>-ed</code> to the base form. The form is the same for all persons — there is no change for he / she / it.</p>

    <table>
      <tr><th>Subject</th><th>Verb: work</th><th>Verb: play</th></tr>
      <tr><td>I</td><td>worked</td><td>played</td></tr>
      <tr><td>You</td><td>worked</td><td>played</td></tr>
      <tr><td>He / She / It</td><td>worked</td><td>played</td></tr>
      <tr><td>We</td><td>worked</td><td>played</td></tr>
      <tr><td>You (pl.)</td><td>worked</td><td>played</td></tr>
      <tr><td>They</td><td>worked</td><td>played</td></tr>
    </table>

    <h3>Spelling rules — adding <code>-ed</code></h3>

    <h4>Most verbs → add <code>-ed</code> directly</h4>
    <ul>
      <li><strong>work → worked</strong> | <strong>play → played</strong> | <strong>visit → visited</strong></li>
    </ul>

    <h4>Ends in silent <code>-e</code> → add <code>-d</code> only</h4>
    <ul>
      <li><strong>live → lived</strong> | <strong>love → loved</strong> | <strong>arrive → arrived</strong></li>
    </ul>

    <h4>Ends in consonant + <code>-y</code> → change <code>-y</code> to <code>-ied</code></h4>
    <ul>
      <li><strong>study → studied</strong> | <strong>carry → carried</strong> | <strong>try → tried</strong></li>
    </ul>

    <h4>Ends in vowel + <code>-y</code> → add <code>-ed</code> only</h4>
    <ul>
      <li><strong>play → played</strong> | <strong>enjoy → enjoyed</strong> | <strong>stay → stayed</strong></li>
    </ul>

    <h4>One syllable: short vowel + single consonant → double the consonant, add <code>-ed</code></h4>
    <p>Doubling protects the short vowel sound.</p>
    <ul>
      <li><strong>stop → stopped</strong> | <strong>plan → planned</strong> | <strong>drop → dropped</strong></li>
    </ul>

    <h4>British English: verbs ending in vowel + <code>l</code> → double the <code>l</code></h4>
    <p>In British English, the final <code>l</code> is always doubled, regardless of stress. American English does not follow this rule.</p>
    <ul>
      <li><strong>travel → travelled</strong> (British) / traveled (American)</li>
      <li><strong>cancel → cancelled</strong> | <strong>quarrel → quarrelled</strong></li>
    </ul>

    <h3>Irregular verbs</h3>
    <p>Irregular verbs do not follow the <code>-ed</code> rule. Their past form must be learnt individually. These are the most common ones.</p>

    <table>
      <tr><th>Base form</th><th>Simple Past</th><th>Past Participle</th></tr>
      <tr><td>be</td><td>was / were</td><td>been</td></tr>
      <tr><td>become</td><td>became</td><td>become</td></tr>
      <tr><td>begin</td><td>began</td><td>begun</td></tr>
      <tr><td>break</td><td>broke</td><td>broken</td></tr>
      <tr><td>bring</td><td>brought</td><td>brought</td></tr>
      <tr><td>build</td><td>built</td><td>built</td></tr>
      <tr><td>buy</td><td>bought</td><td>bought</td></tr>
      <tr><td>catch</td><td>caught</td><td>caught</td></tr>
      <tr><td>choose</td><td>chose</td><td>chosen</td></tr>
      <tr><td>come</td><td>came</td><td>come</td></tr>
      <tr><td>cut</td><td>cut</td><td>cut</td></tr>
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
      <tr><td>grow</td><td>grew</td><td>grown</td></tr>
      <tr><td>have</td><td>had</td><td>had</td></tr>
      <tr><td>hear</td><td>heard</td><td>heard</td></tr>
      <tr><td>hold</td><td>held</td><td>held</td></tr>
      <tr><td>keep</td><td>kept</td><td>kept</td></tr>
      <tr><td>know</td><td>knew</td><td>known</td></tr>
      <tr><td>leave</td><td>left</td><td>left</td></tr>
      <tr><td>lend</td><td>lent</td><td>lent</td></tr>
      <tr><td>lose</td><td>lost</td><td>lost</td></tr>
      <tr><td>make</td><td>made</td><td>made</td></tr>
      <tr><td>mean</td><td>meant</td><td>meant</td></tr>
      <tr><td>meet</td><td>met</td><td>met</td></tr>
      <tr><td>pay</td><td>paid</td><td>paid</td></tr>
      <tr><td>put</td><td>put</td><td>put</td></tr>
      <tr><td>read</td><td>read</td><td>read</td></tr>
      <tr><td>run</td><td>ran</td><td>run</td></tr>
      <tr><td>say</td><td>said</td><td>said</td></tr>
      <tr><td>see</td><td>saw</td><td>seen</td></tr>
      <tr><td>sell</td><td>sold</td><td>sold</td></tr>
      <tr><td>send</td><td>sent</td><td>sent</td></tr>
      <tr><td>show</td><td>showed</td><td>shown</td></tr>
      <tr><td>sleep</td><td>slept</td><td>slept</td></tr>
      <tr><td>speak</td><td>spoke</td><td>spoken</td></tr>
      <tr><td>spend</td><td>spent</td><td>spent</td></tr>
      <tr><td>stand</td><td>stood</td><td>stood</td></tr>
      <tr><td>take</td><td>took</td><td>taken</td></tr>
      <tr><td>teach</td><td>taught</td><td>taught</td></tr>
      <tr><td>tell</td><td>told</td><td>told</td></tr>
      <tr><td>think</td><td>thought</td><td>thought</td></tr>
      <tr><td>throw</td><td>threw</td><td>thrown</td></tr>
      <tr><td>understand</td><td>understood</td><td>understood</td></tr>
      <tr><td>wake</td><td>woke</td><td>woken</td></tr>
      <tr><td>wear</td><td>wore</td><td>worn</td></tr>
      <tr><td>win</td><td>won</td><td>won</td></tr>
      <tr><td>write</td><td>wrote</td><td>written</td></tr>
    </table>

    <h3>Negative</h3>
    <p>did not (didn't) + base verb. The main verb returns to its base form — the past form is never used in negatives.</p>

    <h4>All persons → <code>did not</code> (didn't)</h4>
    <ul>
      <li><em>I did not see him yesterday.</em> / <em>She didn't come to the party.</em></li>
      <li><em>They didn't enjoy the film.</em></li>
    </ul>

    <blockquote>
      <strong>Important:</strong> The main verb must be in its base form after <em>did not</em>.
      <ul>
        <li>✗ <em>She didn't went.</em> → ✓ <em>She didn't go.</em></li>
      </ul>
    </blockquote>

    <blockquote>
      <strong>Exception — be:</strong> The verb <em>be</em> does not use <em>did</em>. It forms its negative with <em>was not / were not</em>.
      <ul>
        <li><em>I was not there.</em> / <em>They weren't ready.</em></li>
      </ul>
    </blockquote>

    <blockquote>
      <strong>British English note:</strong> In formal written British English, the full form <code>did not</code> is often preferred over <em>didn't</em>, although contractions remain common in many contexts.
    </blockquote>

    <h3>Questions</h3>
    <p>Did + subject + base verb. The main verb returns to its base form.</p>

    <h4>Yes / No questions</h4>
    <ul>
      <li><em>Did you enjoy the match?</em> / <em>Did she call?</em></li>
    </ul>

    <h4>Wh- questions</h4>
    <p>Question word + did + subject + base verb.</p>
    <ul>
      <li><em>Where did you go last weekend?</em> / <em>What did he say?</em></li>
    </ul>

    <h4>Subject questions — no auxiliary</h4>
    <p>When the question word replaces the subject, no <em>did</em> is needed. The verb takes its past form directly.</p>
    <ul>
      <li><em>Who called?</em> (not: <em>Who did call?</em>)</li>
      <li><em>What happened?</em> (not: <em>What did happen?</em>)</li>
    </ul>

    <h4>Questions with be — no did</h4>
    <p>The verb <em>be</em> inverts directly with the subject — no <em>did</em> needed.</p>
    <ul>
      <li><em>Was she at home?</em> / <em>Were they happy?</em></li>
    </ul>

    <h3>Short answers</h3>
    <p>Use <em>did</em> or <em>didn't</em> only — never repeat the main verb.</p>

    <table>
      <tr><th>Positive</th><th>Negative</th></tr>
      <tr><td>Yes, I did.</td><td>No, I didn't.</td></tr>
      <tr><td>Yes, she did.</td><td>No, she didn't.</td></tr>
    </table>

    <h3>Tag questions</h3>
    <p>Positive statement → negative tag with <em>didn't</em>. Negative statement → positive tag with <em>did</em>.</p>
    <ul>
      <li><em>You enjoyed the concert, didn't you?</em></li>
      <li><em>She didn't come, did she?</em></li>
      <li><em>It was a lovely evening, wasn't it?</em> (with <em>be</em>)</li>
    </ul>
  `,

  signalWords: `
    <h3>Signal words</h3>
    <p>The Simple Past is strongly associated with expressions that refer to a finished point or period in time.</p>

    <h4>yesterday</h4>
    <ul>
      <li><em>I saw him yesterday.</em></li>
    </ul>

    <h4>last + time expression</h4>
    <ul>
      <li><em>She rang last night.</em> / <em>We went to Cornwall last summer.</em> / <em>He left last week.</em></li>
    </ul>

    <h4>ago</h4>
    <p>Placed after the time expression — not before.</p>
    <ul>
      <li><em>I met her three years ago.</em></li>
      <li><em>He moved to London a few months ago.</em></li>
    </ul>

    <h4>in + year / decade / period</h4>
    <ul>
      <li><em>She was born in 1990.</em> / <em>They built the bridge in the 1880s.</em></li>
    </ul>

    <h4>when</h4>
    <p>Often introduces the moment at which an action occurred.</p>
    <ul>
      <li><em>When did you arrive?</em> / <em>I was in the garden when it started to rain.</em></li>
    </ul>

    <h4>Sequencing words</h4>
    <p>Used to link a series of completed past actions.</p>
    <ul>
      <li><strong>first, then, after that, next, finally, afterwards, eventually</strong></li>
      <li><em>First she made tea, then she sat down and read the paper.</em></li>
    </ul>

    <h4>once / one day / at that time</h4>
    <ul>
      <li><em>Once upon a time, there lived a king.</em></li>
      <li><em>One day, he decided to leave.</em></li>
    </ul>
  `,

  errors: `
    <h3>Common errors</h3>
    <p>Mistakes learners frequently make with the Simple Past.</p>

    <h4>1 — Using Present Perfect with a finished time expression</h4>
    <p>When the time is specified and finished, the Simple Past is required — not the Present Perfect.</p>
    <ul>
      <li>✗ <em>I have seen her yesterday.</em></li>
      <li>✓ <em>I saw her yesterday.</em></li>
    </ul>

    <h4>2 — Using did + past form of the verb</h4>
    <p>After <em>did</em> / <em>didn't</em>, the main verb must return to its base form.</p>
    <ul>
      <li>✗ <em>Did she went to the shops?</em></li>
      <li>✓ <em>Did she go to the shops?</em></li>
      <li>✗ <em>He didn't said anything.</em></li>
      <li>✓ <em>He didn't say anything.</em></li>
    </ul>

    <h4>3 — Using did with the verb be</h4>
    <p>The verb <em>be</em> does not use <em>did</em> in questions or negatives — it inverts or uses <em>was not / were not</em> directly.</p>
    <ul>
      <li>✗ <em>Did you be there?</em> → ✓ <em>Were you there?</em></li>
      <li>✗ <em>He didn't be happy.</em> → ✓ <em>He wasn't happy.</em></li>
    </ul>

    <h4>4 — Spelling: forgetting to double the consonant</h4>
    <ul>
      <li>✗ <em>stoped, planed, droped</em></li>
      <li>✓ <em>stopped, planned, dropped</em></li>
    </ul>

    <h4>5 — Spelling: forgetting to change -y to -ied</h4>
    <ul>
      <li>✗ <em>studyed, carryed, tryed</em></li>
      <li>✓ <em>studied, carried, tried</em></li>
    </ul>

    <h4>6 — Using the past participle instead of the Simple Past form</h4>
    <p>The Simple Past and the past participle are different forms for many irregular verbs.</p>
    <ul>
      <li>✗ <em>I seen him last night.</em> → ✓ <em>I saw him last night.</em></li>
      <li>✗ <em>She done it yesterday.</em> → ✓ <em>She did it yesterday.</em></li>
      <li>✗ <em>We gone to the pub.</em> → ✓ <em>We went to the pub.</em></li>
    </ul>

    <h4>7 — Confusing ago and before</h4>
    <p><em>Ago</em> is used with the Simple Past and counts back from now. <em>Before</em> counts back from a past reference point.</p>
    <ul>
      <li>✓ <em>I moved here three years ago.</em> (three years before now)</li>
      <li>✓ <em>She had left an hour before.</em> (an hour before another past event)</li>
      <li>✗ <em>I moved here three years before.</em> (no reference point given)</li>
    </ul>
  `,

  extra: [
    {
      title: 'Simple Past vs Present Perfect',
      content: `
        <p>This is the most important contrast to master for this tense. Both refer to past actions, but they are used in very different situations.</p>

        <h4>The core difference</h4>
        <table>
          <tr><th>Simple Past</th><th>Present Perfect</th></tr>
          <tr><td>The time is <strong>specified</strong> or the period is <strong>finished</strong>.</td><td>The time is <strong>unspecified</strong> or the period is <strong>unfinished</strong>.</td></tr>
          <tr><td><em>I read that book last year.</em><br>(specific finished time)</td><td><em>I have read that book.</em><br>(at some point — time unimportant)</td></tr>
        </table>

        <h4>Finished vs unfinished time period</h4>
        <table>
          <tr><th>Simple Past</th><th>Present Perfect</th></tr>
          <tr><td><em>I didn't see her yesterday.</em><br>(yesterday is finished)</td><td><em>I haven't seen her today.</em><br>(today is not over yet)</td></tr>
        </table>

        <h4>No longer true vs still true</h4>
        <table>
          <tr><th>Simple Past</th><th>Present Perfect</th></tr>
          <tr><td><em>He worked here for years.</em><br>(he no longer works here)</td><td><em>He has worked here for years.</em><br>(he still works here)</td></tr>
        </table>

        <h4>British English note</h4>
        <p>British English uses the Present Perfect in situations where American English often uses the Simple Past — particularly with <em>just</em>, <em>already</em>, and <em>yet</em>. Since you are studying British English, always prefer the Present Perfect in these contexts.</p>
        <table>
          <tr><th>British English (preferred)</th><th>American English</th></tr>
          <tr><td><em>I've just eaten.</em></td><td><em>I just ate.</em></td></tr>
          <tr><td><em>Have you finished yet?</em></td><td><em>Did you finish yet?</em></td></tr>
          <tr><td><em>She's already left.</em></td><td><em>She already left.</em></td></tr>
        </table>
      `,
    },
    {
      title: 'Simple Past vs Past Continuous',
      content: `
        <p>These two tenses are frequently used together. Understanding the difference between them is essential for telling stories and describing past events naturally.</p>

        <h4>The core difference</h4>
        <table>
          <tr><th>Simple Past</th><th>Past Continuous</th></tr>
          <tr><td>A short, completed action — it happened and ended.</td><td>A longer, ongoing action that was in progress at a specific past moment.</td></tr>
          <tr><td><em>He knocked on the door.</em></td><td><em>She was reading when he knocked.</em></td></tr>
        </table>

        <h4>The most common pattern — interruption</h4>
        <p>The Past Continuous describes what was already in progress; the Simple Past describes the shorter action that interrupted it.</p>
        <table>
          <tr><th>Background action (Past Continuous)</th><th>Interrupting action (Simple Past)</th></tr>
          <tr><td><em>I was walking home</em></td><td><em>when I bumped into an old friend.</em></td></tr>
          <tr><td><em>She was having a bath</em></td><td><em>when the phone rang.</em></td></tr>
        </table>

        <h4>Sequence vs simultaneous actions</h4>
        <table>
          <tr><th>Simple Past (sequence)</th><th>Past Continuous (simultaneous)</th></tr>
          <tr><td><em>I got up and made tea.</em><br>(one after the other)</td><td><em>While she was cooking, he was setting the table.</em><br>(happening at the same time)</td></tr>
        </table>

        <h4>Signal words</h4>
        <table>
          <tr><th>Simple Past</th><th>Past Continuous</th></tr>
          <tr><td>when, then, after that, suddenly, immediately</td><td>while, as, at that moment, at that time, all morning / all day</td></tr>
        </table>
      `,
    },
  ],

};

export default simplePast;