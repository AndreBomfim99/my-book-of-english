const beVerb = {
  meanings: `
    <h3>Main meaning: TO BE</h3>
    <p>The verb <strong>be</strong> is the most important and versatile verb in English. In Portuguese it corresponds to two different verbs — <em>ser</em> and <em>estar</em> — but in English it is always <strong>be</strong>. Context determines the meaning.</p>

    <h4>A) Permanent identity and characteristics (ser)</h4>
    <ul>
      <li><strong>I am Brazilian.</strong> = Eu sou brasileiro.</li>
      <li><strong>She is a doctor.</strong> = Ela é médica.</li>
      <li><strong>It is blue.</strong> = É azul.</li>
      <li><strong>They are my friends.</strong> = Eles são meus amigos.</li>
    </ul>

    <h4>B) Temporary states and location (estar)</h4>
    <ul>
      <li><strong>I am tired.</strong> = Estou cansado.</li>
      <li><strong>She is at home.</strong> = Ela está em casa.</li>
      <li><strong>We are ready.</strong> = Estamos prontos.</li>
      <li><strong>The book is on the table.</strong> = O livro está na mesa.</li>
    </ul>

    <h4>C) Other important uses</h4>

    <h4>Age</h4>
    <ul><li><em>I am 25 years old.</em> = Tenho 25 anos.</li></ul>

    <h4>Weather and temperature</h4>
    <ul>
      <li><em>It is hot today.</em> = Está calor hoje.</li>
      <li><em>It is cold.</em> = Está frio.</li>
    </ul>

    <h4>Time</h4>
    <ul><li><em>It is three o'clock.</em> = São três horas.</li></ul>

    <h4>Existence</h4>
    <ul><li><em>There is / there are</em> = Há, existe(m)</li></ul>

    <h4>Profession and occupation</h4>
    <ul><li><em>I am a teacher.</em> = Sou professor.</li></ul>
  `,

  tenses: `
    <h3>Present Simple</h3>
    <p>The verb <em>be</em> is irregular — it has three different forms in the present: <strong>am, is, are</strong>.</p>
    <table>
      <tr><th>Subject</th><th>Affirmative</th><th>Negative</th><th>Question</th></tr>
      <tr><td>I</td><td>I <strong>am</strong> (I'm)</td><td>I <strong>am not</strong> (I'm not)</td><td><strong>Am</strong> I?</td></tr>
      <tr><td>You</td><td>You <strong>are</strong> (you're)</td><td>You <strong>are not</strong> (aren't)</td><td><strong>Are</strong> you?</td></tr>
      <tr><td>He / She / It</td><td>He <strong>is</strong> (he's)</td><td>He <strong>is not</strong> (isn't)</td><td><strong>Is</strong> he?</td></tr>
      <tr><td>We</td><td>We <strong>are</strong> (we're)</td><td>We <strong>are not</strong> (aren't)</td><td><strong>Are</strong> we?</td></tr>
      <tr><td>They</td><td>They <strong>are</strong> (they're)</td><td>They <strong>are not</strong> (aren't)</td><td><strong>Are</strong> they?</td></tr>
    </table>
    <ul>
      <li><em>I am happy.</em> = Estou feliz.</li>
      <li><em>She is not here.</em> = Ela não está aqui.</li>
      <li><em>Are you ready?</em> = Você está pronto?</li>
    </ul>

    <h3>Past Simple</h3>
    <p>Two forms in the past: <strong>was</strong> (I / he / she / it) and <strong>were</strong> (you / we / they).</p>
    <table>
      <tr><th>Subject</th><th>Affirmative</th><th>Negative</th><th>Question</th></tr>
      <tr><td>I</td><td>I <strong>was</strong></td><td>I <strong>was not</strong> (wasn't)</td><td><strong>Was</strong> I?</td></tr>
      <tr><td>You</td><td>You <strong>were</strong></td><td>You <strong>were not</strong> (weren't)</td><td><strong>Were</strong> you?</td></tr>
      <tr><td>He / She / It</td><td>He <strong>was</strong></td><td>He <strong>was not</strong> (wasn't)</td><td><strong>Was</strong> he?</td></tr>
      <tr><td>We</td><td>We <strong>were</strong></td><td>We <strong>were not</strong> (weren't)</td><td><strong>Were</strong> we?</td></tr>
      <tr><td>They</td><td>They <strong>were</strong></td><td>They <strong>were not</strong> (weren't)</td><td><strong>Were</strong> they?</td></tr>
    </table>
    <ul>
      <li><em>I was tired yesterday.</em> = Estava cansado ontem.</li>
      <li><em>They were not at home.</em> = Eles não estavam em casa.</li>
      <li><em>Was she angry?</em> = Ela estava com raiva?</li>
    </ul>

    <h3>Present Perfect</h3>
    <p>Structure: <strong>have / has + been</strong></p>
    <ul>
      <li><em>I have been here before.</em> = Já estive aqui antes.</li>
      <li><em>She has been ill.</em> = Ela tem estado doente.</li>
      <li><em>We have been friends for ten years.</em> = Somos amigos há dez anos.</li>
    </ul>

    <h3>Past Perfect</h3>
    <p>Structure: <strong>had + been</strong></p>
    <ul>
      <li><em>I had been there before.</em> = Eu tinha estado lá antes.</li>
      <li><em>She had been waiting for hours.</em> = Ela tinha estado esperando por horas.</li>
    </ul>

    <h3>Future Simple</h3>
    <p>Structure: <strong>will + be</strong></p>
    <ul>
      <li><em>I will be there.</em> = Estarei lá.</li>
      <li><em>She will be happy.</em> = Ela ficará feliz.</li>
      <li><em>It will be difficult.</em> = Será difícil.</li>
    </ul>

    <h3>Future with going to</h3>
    <p>Structure: <strong>am / is / are + going to + be</strong> — used for plans and intentions.</p>
    <ul>
      <li><em>I am going to be late.</em> = Vou me atrasar.</li>
      <li><em>She is going to be a doctor.</em> = Ela vai ser médica.</li>
    </ul>

    <h3>Present Continuous</h3>
    <p>Structure: <strong>am / is / are + being</strong> — used for temporary behaviour. See the Grammar section for full details.</p>
    <ul>
      <li><em>You are being silly.</em> = Você está sendo bobo (agora).</li>
      <li><em>He is being rude.</em> = Ele está sendo grosseiro.</li>
    </ul>

    <h3>Conditional</h3>
    <p>Structure: <strong>would + be</strong> — used for hypothetical or imaginary situations.</p>
    <ul>
      <li><em>I would be happy to help.</em> = Eu ficaria feliz em ajudar.</li>
      <li><em>It would be better.</em> = Seria melhor.</li>
      <li><em>If I were taller, I would be a better basketball player.</em> = Se eu fosse mais alto, seria um jogador melhor.</li>
    </ul>

    <h3>Modal verbs + be</h3>
    <p>Modal verbs are always followed by the base form <strong>be</strong>.</p>
    <ul>
      <li><em>I can be there.</em> = Posso estar lá.</li>
      <li><em>She should be here soon.</em> = Ela deveria estar aqui em breve.</li>
      <li><em>He must be tired.</em> = Ele deve estar cansado.</li>
      <li><em>You might be right.</em> = Você pode estar certo.</li>
    </ul>

    <h3>Infinitive, gerund and participle</h3>
    <ul>
      <li><strong>To be</strong> or not to be. (infinitive)</li>
      <li><strong>Being</strong> honest is important. (gerund — subject of a sentence)</li>
      <li><strong>Been</strong> = past participle → I have <strong>been</strong> there.</li>
    </ul>
  `,


  collocations: `
    <h3>be + adjective</h3>
    <ul>
      <li>be happy, be sad, be angry, be tired, be ready, be sure, be careful, be quiet, be late, be early, be ill, be well, be right, be wrong</li>
    </ul>

    <h3>be + preposition of place</h3>
    <ul>
      <li>be <strong>at</strong> — at home, at work, at school, at the office, at the station</li>
      <li>be <strong>in</strong> — in London, in bed, in hospital, in prison, in trouble, in a meeting</li>
      <li>be <strong>on</strong> — on the bus, on the phone, on holiday, on time, on the way</li>
    </ul>

    <h3>it + be (weather, time, distance)</h3>
    <ul>
      <li><em>It is five o'clock.</em> = São cinco horas.</li>
      <li><em>It is hot / cold / raining.</em> = Está calor / frio / chovendo.</li>
      <li><em>It is ten miles to Oxford.</em> = São dez milhas até Oxford.</li>
    </ul>

    <h3>Fixed expressions with be</h3>
    <ul>
      <li><strong>be able to</strong> = ser capaz de → <em>She is able to speak three languages.</em></li>
      <li><strong>be afraid of</strong> = ter medo de → <em>He is afraid of spiders.</em></li>
      <li><strong>be good at</strong> = ser bom em → <em>She is good at maths.</em></li>
      <li><strong>be interested in</strong> = estar interessado em → <em>I am interested in history.</em></li>
      <li><strong>be made of</strong> = ser feito de → <em>The table is made of oak.</em></li>
      <li><strong>be worth</strong> = valer a pena → <em>It is worth visiting.</em></li>
      <li><strong>be keen on</strong> = gostar muito de → <em>She is keen on gardening.</em> (very British)</li>
      <li><strong>be fond of</strong> = ter carinho por → <em>He is fond of classical music.</em> (British English)</li>
    </ul>
  `,

  register: `
    <h3>Informal — casual conversation</h3>
    <p>Contractions are the norm in spoken British English. Using the full form in conversation sounds unnatural and overly formal.</p>
    <ul>
      <li>I'm, you're, he's, she's, it's, we're, they're</li>
      <li>isn't, aren't, wasn't, weren't</li>
      <li><em>"I'm shattered."</em> / <em>"She's not in."</em> / <em>"We're nearly there."</em></li>
    </ul>
    <h4>Short answers in conversation</h4>
    <ul>
      <li>"Are you ready?" → "I am." / "I'm not."</li>
      <li>"Is she coming?" → "She is." / "She isn't."</li>
      <li>"Was it good?" → "It was." / "It wasn't."</li>
    </ul>

    <h3>Formal — professional and academic writing</h3>
    <p>In formal British English writing, contractions are avoided. Full forms are strongly preferred.</p>
    <ul>
      <li><em>"I am writing to inform you..."</em></li>
      <li><em>"The results are conclusive."</em></li>
      <li><em>"It is important to note that..."</em></li>
      <li><em>"This is not the case."</em> (not: <em>"This isn't the case."</em>)</li>
    </ul>

    <h3>Very informal — colloquial British English</h3>
    <ul>
      <li><strong>"I'm like..."</strong> = Eu tipo... (when telling a story) → <em>"I'm like, 'What?!'"</em></li>
      <li><strong>"Don't be daft."</strong> = Não seja bobo. (<em>daft</em> is very British)</li>
      <li><strong>"Are you all right?"</strong> = Tudo bem? (standard British greeting, often shortened to <em>"You all right?"</em>)</li>
    </ul>
  `,


  idioms: `
    <ol>
      <li><strong>Be all ears</strong> = estar atento, todo ouvidos → <em>"Go ahead — I'm all ears."</em></li>
      <li><strong>Be over the moon</strong> = estar nas nuvens de felicidade → <em>"She was over the moon when she got the job."</em> (very British)</li>
      <li><strong>Be on cloud nine</strong> = estar extremamente feliz → <em>"He's been on cloud nine since the wedding."</em></li>
      <li><strong>Be in hot water</strong> = estar em apuros → <em>"You'll be in hot water if you miss the deadline."</em></li>
      <li><strong>Be on the same page</strong> = estar de acordo, alinhado → <em>"Let's make sure we're all on the same page."</em></li>
      <li><strong>Be beside oneself</strong> = estar fora de si → <em>"She was beside herself with worry."</em></li>
      <li><strong>Be at a loss</strong> = estar perdido, sem saber o que fazer → <em>"I'm at a loss for words."</em></li>
      <li><strong>Be fed up (with)</strong> = estar farto de → <em>"I'm fed up with the rain."</em> (very common in British English)</li>
      <li><strong>Be under the weather</strong> = estar indisposto, mal → <em>"I'm feeling a bit under the weather today."</em></li>
      <li><strong>Be on the ball</strong> = estar atento, esperto → <em>"You need to be on the ball in this job."</em></li>
      <li><strong>Be out of this world</strong> = ser incrível, extraordinário → <em>"The food was absolutely out of this world."</em></li>
      <li><strong>Be tied up</strong> = estar ocupado → <em>"Sorry, I'm a bit tied up at the moment."</em></li>
      <li><strong>Be up to something</strong> = estar tramando algo → <em>"What are you up to?"</em></li>
      <li><strong>Be in the dark</strong> = não saber de nada → <em>"I'm completely in the dark about the changes."</em></li>
      <li><strong>Be through with</strong> = ter terminado com → <em>"I'm through with making excuses."</em></li>
      <li><strong>Be in two minds</strong> = estar em dúvida → <em>"I'm in two minds about accepting the offer."</em> (very British)</li>
      <li><strong>Be a bit much</strong> = ser exagerado, demais → <em>"That comment was a bit much."</em> (British English)</li>
      <li><strong>Not be one's cup of tea</strong> = não ser do seu gosto → <em>"Opera isn't really my cup of tea."</em> (quintessentially British)</li>
    </ol>
  `,

  errors: `
    <h3>Common errors</h3>

    <h4>1 — Forgetting the verb be</h4>
    <ul>
      <li>✗ <em>I tired.</em> → ✓ <em>I <strong>am</strong> tired.</em></li>
      <li>✗ <em>She happy.</em> → ✓ <em>She <strong>is</strong> happy.</em></li>
    </ul>

    <h4>2 — Using "have" for age</h4>
    <p>In Portuguese, age uses <em>ter</em> (to have). In English, it always uses <em>be</em>.</p>
    <ul>
      <li>✗ <em>I have 25 years.</em> → ✓ <em>I am 25 years old.</em></li>
    </ul>

    <h4>3 — Confusing was and were</h4>
    <p>I / he / she / it → <strong>was</strong> &nbsp;|&nbsp; you / we / they → <strong>were</strong></p>
    <ul>
      <li>✗ <em>I were there.</em> → ✓ <em>I <strong>was</strong> there.</em></li>
      <li>✗ <em>They was happy.</em> → ✓ <em>They <strong>were</strong> happy.</em></li>
    </ul>
    <blockquote>
      <strong>Exception — the subjunctive:</strong> In hypothetical sentences, <em>were</em> is used for all persons in formal British English: <em>"If I were you..."</em> / <em>"I wish it were different."</em>
    </blockquote>

    <h4>4 — Using be with action verbs incorrectly</h4>
    <ul>
      <li>✗ <em>I am go to school.</em> → ✓ <em>I go to school.</em> / <em>I am going to school.</em></li>
      <li>✗ <em>She is study.</em> → ✓ <em>She is studying.</em></li>
    </ul>

    <h4>5 — Using "being" with permanent states</h4>
    <p><em>Being</em> is only used for temporary behaviour, not permanent characteristics.</p>
    <ul>
      <li>✗ <em>I am being tall.</em> → ✓ <em>I am tall.</em></li>
      <li>✓ <em>You are being rude.</em> (temporary behaviour — correct)</li>
    </ul>

    <h4>6 — Wrong word order in questions</h4>
    <ul>
      <li>✗ <em>You are ready?</em> → ✓ <em><strong>Are</strong> you ready?</em></li>
      <li>✗ <em>She is here?</em> → ✓ <em><strong>Is</strong> she here?</em></li>
    </ul>

    <h4>7 — Confusing "there is/are" with "it is"</h4>
    <ul>
      <li>✗ <em>It is many people.</em> → ✓ <em>There <strong>are</strong> many people.</em></li>
      <li>✗ <em>There is cold.</em> → ✓ <em>It <strong>is</strong> cold.</em></li>
    </ul>

    <h4>8 — Forgetting the article with professions</h4>
    <p>In English, professions require an indefinite article (<em>a / an</em>) — unlike Portuguese.</p>
    <ul>
      <li>✗ <em>I am teacher.</em> → ✓ <em>I am <strong>a</strong> teacher.</em></li>
      <li>✗ <em>She is doctor.</em> → ✓ <em>She is <strong>a</strong> doctor.</em></li>
    </ul>
    <blockquote>
      <strong>Exception:</strong> Unique positions and titles often drop the article: <em>"She is President."</em> / <em>"He was appointed Chancellor."</em>
    </blockquote>
  `,

  phrasalVerbs: `
    <h3>B2 — Essential</h3>
    <ol>
      <li><strong>be about</strong> = ser sobre → <em>"What is the book about?"</em></li>
      <li><strong>be after</strong> = procurar, querer → <em>"What are you after?"</em> (very British)</li>
      <li><strong>be away</strong> = estar fora → <em>"She's away on holiday."</em></li>
      <li><strong>be back</strong> = estar de volta → <em>"I'll be back in five minutes."</em></li>
      <li><strong>be off</strong> = ir embora / ser cancelado → <em>"I'm off!"</em> / <em>"The match is off."</em></li>
      <li><strong>be on</strong> = estar acontecendo / no ar → <em>"What's on tonight?"</em> (very British — asking what's on TV or at the theatre)</li>
      <li><strong>be out</strong> = estar fora → <em>"Sorry, she's out at the moment."</em></li>
      <li><strong>be over</strong> = ter terminado → <em>"The game is over."</em></li>
      <li><strong>be up</strong> = estar acordado / ter expirado → <em>"Are you still up?"</em> / <em>"Time's up."</em></li>
    </ol>

    <h3>C1 — Advanced</h3>
    <ol>
      <li><strong>be in for</strong> = estar prestes a enfrentar → <em>"You're in for a surprise."</em></li>
      <li><strong>be up to</strong> = estar fazendo / depender de → <em>"What are you up to?"</em> / <em>"It's up to you."</em></li>
      <li><strong>be onto something</strong> = ter descoberto algo importante → <em>"I think we're onto something here."</em></li>
      <li><strong>be through with</strong> = ter terminado definitivamente → <em>"I'm through with this job."</em></li>
      <li><strong>be down</strong> = estar deprimido / fora do ar → <em>"He's been a bit down lately."</em> / <em>"The website is down."</em></li>
      <li><strong>be in</strong> = estar em casa / na moda → <em>"Is she in?"</em> / <em>"Tweed is very much in this season."</em></li>
    </ol>

    <h3>C2 — Proficient</h3>
    <ol>
      <li><strong>be along</strong> = chegar em breve → <em>"The next bus will be along shortly."</em></li>
      <li><strong>be up against</strong> = enfrentar uma dificuldade séria → <em>"We're up against some serious competition."</em></li>
      <li><strong>be cut out for</strong> = ter o perfil certo para → <em>"I don't think I'm cut out for management."</em></li>
      <li><strong>be taken in by</strong> = ser enganado por → <em>"Don't be taken in by his charm."</em></li>
      <li><strong>be done with</strong> = ter terminado definitivamente → <em>"I'm done with trying to please everyone."</em></li>
      <li><strong>be hard up</strong> = estar sem dinheiro → <em>"We were rather hard up at the time."</em> (British English)</li>
    </ol>
  `,

  pronunciation: `
    <h3>Present forms</h3>
    <ul>
      <li><strong>am</strong> — stressed: <em>ÉM</em> | unstressed (natural speech): <em>âm</em> → <em>"I'm a teacher"</em> sounds like <em>"aim â tíítchâ"</em></li>
      <li><strong>are</strong> — stressed: <em>ÁA</em> (long, no "r" sound in British English) | unstressed: <em>â</em> → <em>"you're"</em> sounds like <em>"iuâ"</em>, not <em>"iór"</em></li>
      <li><strong>is</strong> — stressed: <em>IZ</em> | unstressed: <em>z</em> → <em>"she's here"</em> sounds like <em>"chiiz híâ"</em></li>
    </ul>

    <h3>Past forms</h3>
    <ul>
      <li><strong>was</strong> — stressed: <em>UÓZ</em> (the "o" is open, like in <em>pó</em>) | unstressed: <em>uâz</em></li>
      <li><strong>were</strong> — <em>UÂÂ</em> (long sound, no "r" in British English — do not pronounce the "r")</li>
    </ul>

    <h3>Participle and gerund</h3>
    <ul>
      <li><strong>been</strong> — <em>BÍÍN</em> (long "i" sound — not "ben")</li>
      <li><strong>being</strong> — <em>BÍI-ing</em></li>
    </ul>

    <h3>Contractions — natural pronunciation</h3>
    <ul>
      <li><strong>I'm</strong> — <em>áim</em></li>
      <li><strong>you're</strong> — <em>iuâ</em> (no "r" sound — not "iór")</li>
      <li><strong>he's</strong> — <em>hiiz</em></li>
      <li><strong>she's</strong> — <em>chiiz</em></li>
      <li><strong>it's</strong> — <em>its</em></li>
      <li><strong>we're</strong> — <em>uíâ</em> (no strong "r")</li>
      <li><strong>they're</strong> — <em>déiâ</em> (no strong "r")</li>
      <li><strong>isn't</strong> — <em>IZ-ânt</em></li>
      <li><strong>wasn't</strong> — <em>UÓZ-ânt</em></li>
      <li><strong>weren't</strong> — <em>UÂÂNT</em> (no "r" sound)</li>
    </ul>

    <h3>Natural rhythm in sentences</h3>
    <ul>
      <li><em>"I am a teacher"</em> → slow: <em>ái / ém / â / TÍÍ-tchâ</em> | natural: <em>áimâ tíítchâ</em></li>
      <li><em>"She is not here"</em> → slow: <em>chii / iz / nót / híâ</em> | natural: <em>chiiz nót híâ</em></li>
      <li><em>"They are ready"</em> → slow: <em>déi / áa / RÉ-di</em> | natural: <em>déiâ rédi</em></li>
      <li><em>"Were you there?"</em> → <em>uâ iuâ déâ</em> (all three "r" sounds disappear in British English)</li>
    </ul>

    <h3>Key tips for British English</h3>
    <ul>
      <li>Contractions are the rule in spoken English — saying <em>"I am"</em> in casual conversation sounds unnatural and stiff.</li>
      <li><strong>The "r" rule:</strong> In British English (non-rhotic accent), "r" is only pronounced when followed directly by a vowel sound. So <em>are, were, you're, we're, they're</em> all have no "r" sound at the end.</li>
      <li><strong>been</strong> has a long "i" — it rhymes with <em>seen</em> and <em>keen</em>, not with <em>hen</em>.</li>
      <li><strong>were</strong> rhymes with <em>her</em> and <em>blur</em> in British English.</li>
    </ul>
  `,

  extra: [
    {
      title: 'Being — Temporary Behaviour',
      content: `
    <h3>being — temporary behaviour</h3>
    <p>When <em>be</em> is used in the Present Continuous with a behaviour adjective, it describes how someone is acting <strong>right now</strong> — not a permanent characteristic.</p>
    <ul>
      <li><em>You are being very kind.</em> (acting kindly at this moment)</li>
      <li><em>He is being difficult.</em> (behaving in a difficult way right now)</li>
      <li><em>Stop being silly!</em></li>
    </ul>
    <blockquote>
      <strong>Important:</strong> This only works with behaviour adjectives. It cannot be used with permanent physical or factual states.
      <ul>
        <li>✗ <em>I am being tall.</em></li>
        <li>✓ <em>I am tall.</em></li>
      </ul>
    </blockquote>

    <h3>being — continuous passive</h3>
    <p><em>Being</em> is also used in the continuous passive voice to describe an action that is in progress and being done to the subject.</p>
    <p>Structure: <strong>am / is / are + being + past participle</strong></p>
    <ul>
      <li><em>The house is being built.</em> = A casa está sendo construída.</li>
      <li><em>The report is being reviewed.</em> = O relatório está sendo revisado.</li>
      <li><em>The road is being repaired.</em> = A estrada está sendo consertada.</li>
    </ul>

    <h3>be about to</h3>
    <p>Used to describe something that is going to happen very soon — in the next few moments.</p>
    <ul>
      <li><em>I am about to leave.</em> = Estou prestes a sair.</li>
      <li><em>The film is about to start.</em> = O filme está prestes a começar.</li>
      <li><em>She was about to call when he arrived.</em> = Ela estava prestes a ligar quando ele chegou.</li>
    </ul>

    <h3>be supposed to</h3>
    <p>Used to talk about what is expected, required, or assumed — something that should happen according to a rule, plan, or agreement.</p>
    <ul>
      <li><em>You are supposed to be here at nine.</em> = Você deveria estar aqui às nove.</li>
      <li><em>He is not supposed to know about this.</em> = Ele não deveria saber disso.</li>
      <li><em>The meeting was supposed to start at ten.</em> = A reunião deveria ter começado às dez.</li>
    </ul>

    <h3>be used to</h3>
    <p>Used to describe something that is familiar and no longer feels strange or difficult. It is followed by a noun or a gerund (-ing form).</p>
    <ul>
      <li><em>I am used to the cold weather.</em> = Estou acostumado com o frio.</li>
      <li><em>She is used to working long hours.</em> = Ela está acostumada a trabalhar longas horas.</li>
    </ul>
    <blockquote>
      <strong>Do not confuse with <em>used to + base verb</em></strong>, which describes a past habit that no longer exists: <em>"I used to live in Manchester."</em>
    </blockquote>

    <h3>there is / there are</h3>
    <p>Used to state that something exists or is present. The form of <em>be</em> agrees with the noun that follows.</p>
    <table>
      <tr><th>Form</th><th>Use</th><th>Example</th></tr>
      <tr><td>there is (there's)</td><td>singular or uncountable</td><td><em>There is a book on the table.</em></td></tr>
      <tr><td>there are</td><td>plural</td><td><em>There are three people here.</em></td></tr>
      <tr><td>there was</td><td>singular, past</td><td><em>There was a problem.</em></td></tr>
      <tr><td>there were</td><td>plural, past</td><td><em>There were many people at the event.</em></td></tr>
    </table>

    <h3>if I were — the subjunctive</h3>
    <p>In formal and written British English, <strong>were</strong> is used for all persons in hypothetical conditional sentences — including I, he, she, and it. This is called the subjunctive mood.</p>
    <ul>
      <li><em>If I were you, I would accept the offer.</em></li>
      <li><em>If she were here, she would know what to do.</em></li>
      <li><em>I wish I were taller.</em></li>
    </ul>
    <blockquote>
      <strong>British English note:</strong> In informal spoken English, <em>"If I was you..."</em> is commonly heard, but <em>"If I were you..."</em> remains the preferred form in written and formal British English.
    </blockquote>
  `,
    },
    {
      title: 'Alternatives to BE',
      content: `
    <p>The verb <em>be</em> has no true synonyms — it is the primary linking verb in English. However, in specific contexts, other verbs can replace it with a slightly different nuance.</p>

    <h4>For states and conditions</h4>
    <ul>
      <li><strong>remain</strong> = permanecer → <em>"He remained calm throughout."</em> (more formal than <em>"He was calm"</em>)</li>
      <li><strong>seem / appear</strong> = parecer → <em>"She seems happy."</em> / <em>"He appears to be tired."</em></li>
      <li><strong>feel</strong> = sentir-se → <em>"I feel cold."</em> (more personal than <em>"I am cold"</em>)</li>
    </ul>

    <h4>For location</h4>
    <ul>
      <li><strong>sit</strong> = estar situado → <em>"The village sits in a valley."</em></li>
      <li><strong>stand</strong> = estar de pé / situado → <em>"The old church stands at the top of the hill."</em></li>
      <li><strong>lie</strong> = estar situado (horizontal) → <em>"The town lies to the north of the river."</em></li>
    </ul>

    <h4>For existence</h4>
    <ul>
      <li><strong>exist</strong> = existir → <em>"The problem exists."</em> (more emphatic than <em>"The problem is there"</em>)</li>
    </ul>

    <h4>When NOT to use be</h4>
    <ul>
      <li>✗ <em>I am go to school.</em> → ✓ <em>I go to school.</em> / <em>I am going to school.</em></li>
      <li>✗ <em>She is have a car.</em> → ✓ <em>She has a car.</em> / <em>She's got a car.</em></li>
      <li>✗ <em>I am knowing the answer.</em> → ✓ <em>I know the answer.</em></li>
      <li>✗ <em>I am liking football.</em> → ✓ <em>I like football.</em></li>
      <li>✗ <em>I have 30 years.</em> → ✓ <em>I am 30 years old.</em></li>
    </ul>
  `,
    },
  ],

};

export default beVerb;
