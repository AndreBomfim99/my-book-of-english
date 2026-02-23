// ============================================================
// VERB DETAILS DATA FILE
// ============================================================
// How to add content for a verb:
//
// Each verb is a key matching exactly the verb in verbsData.js
// Each section is optional — only add the sections you have content for
//
// Available sections:
//   meanings      → Significados, Nuances e Contextos
//   tenses        → Tempos Verbais
//   collocations  → Construções Comuns
//   register      → Formal vs Informal
//   synonyms      → Sinônimos e Quando NÃO Usar
//   idioms        → Expressões Idiomáticas
//   errors        → Erros Comuns
//   phrasalVerbs  → Phrasal Verbs
//   pronunciation → Pronúncia
//   extra         → Seções extras [ { title: '...', content: '...' } ]
//
// Content is written in HTML so you can use:
//   <p>, <strong>, <em>, <ul><li>, <ol><li>, <table>, <h3>, <h4>, <blockquote>, <code>
// ============================================================

export const verbDetails = {

  be: {
    meanings: `
      <h3>Significado principal: SER / ESTAR</h3>
      <p>O verbo <strong>BE</strong> é o verbo mais importante e versátil do inglês. Ele tem dois significados principais em português:</p>

      <h4>A) SER (identidade, característica permanente)</h4>
      <ul>
        <li><strong>I am Brazilian</strong> = Eu sou brasileiro</li>
        <li><strong>She is a doctor</strong> = Ela é médica</li>
        <li><strong>It is blue</strong> = É azul</li>
        <li><strong>They are my friends</strong> = Eles são meus amigos</li>
      </ul>

      <h4>B) ESTAR (estado temporário, localização)</h4>
      <ul>
        <li><strong>I am tired</strong> = Estou cansado</li>
        <li><strong>She is at home</strong> = Ela está em casa</li>
        <li><strong>We are ready</strong> = Estamos prontos</li>
        <li><strong>The book is on the table</strong> = O livro está na mesa</li>
      </ul>

      <p><strong>Diferença do português:</strong> Em português usamos dois verbos diferentes (ser/estar), mas em inglês é sempre <strong>BE</strong>. O contexto determina o significado.</p>

      <h4>C) Outros usos importantes</h4>
      <h4>Idade:</h4>
      <ul><li>I am 25 years old = Tenho 25 anos</li></ul>
      <h4>Temperatura/clima:</h4>
      <ul>
        <li>It is hot today = Está calor hoje</li>
        <li>It is cold = Está frio</li>
      </ul>
      <h4>Hora:</h4>
      <ul><li>It is 3 o'clock = São 3 horas</li></ul>
      <h4>Existência:</h4>
      <ul><li>There is/are = Há, existe(m)</li></ul>
      <h4>Profissão/ocupação:</h4>
      <ul><li>I am a teacher = Sou professor</li></ul>
    `,

    tenses: `
      <h3>PRESENT SIMPLE (Presente Simples)</h3>
      <table>
        <tr><th>Sujeito</th><th>Afirmativa</th><th>Negativa</th><th>Interrogativa</th></tr>
        <tr><td>I</td><td>I <strong>am</strong> (I'm)</td><td>I <strong>am not</strong> (I'm not)</td><td><strong>Am</strong> I?</td></tr>
        <tr><td>You</td><td>You <strong>are</strong> (You're)</td><td>You <strong>are not</strong> (aren't)</td><td><strong>Are</strong> you?</td></tr>
        <tr><td>He/She/It</td><td>He <strong>is</strong> (He's)</td><td>He <strong>is not</strong> (isn't)</td><td><strong>Is</strong> he?</td></tr>
        <tr><td>We</td><td>We <strong>are</strong> (We're)</td><td>We <strong>are not</strong> (aren't)</td><td><strong>Are</strong> we?</td></tr>
        <tr><td>They</td><td>They <strong>are</strong> (They're)</td><td>They <strong>are not</strong> (aren't)</td><td><strong>Are</strong> they?</td></tr>
      </table>
      <ul>
        <li>I am happy = Estou feliz</li>
        <li>She is not here = Ela não está aqui</li>
        <li>Are you ready? = Você está pronto?</li>
      </ul>

      <h3>PAST SIMPLE (Passado Simples)</h3>
      <table>
        <tr><th>Sujeito</th><th>Afirmativa</th><th>Negativa</th><th>Interrogativa</th></tr>
        <tr><td>I</td><td>I <strong>was</strong></td><td>I <strong>was not</strong> (wasn't)</td><td><strong>Was</strong> I?</td></tr>
        <tr><td>You</td><td>You <strong>were</strong></td><td>You <strong>were not</strong> (weren't)</td><td><strong>Were</strong> you?</td></tr>
        <tr><td>He/She/It</td><td>He <strong>was</strong></td><td>He <strong>was not</strong> (wasn't)</td><td><strong>Was</strong> he?</td></tr>
        <tr><td>We</td><td>We <strong>were</strong></td><td>We <strong>were not</strong> (weren't)</td><td><strong>Were</strong> we?</td></tr>
        <tr><td>They</td><td>They <strong>were</strong></td><td>They <strong>were not</strong> (weren't)</td><td><strong>Were</strong> they?</td></tr>
      </table>
      <ul>
        <li>I was tired yesterday = Estava cansado ontem</li>
        <li>They were not at home = Eles não estavam em casa</li>
        <li>Was she angry? = Ela estava brava?</li>
      </ul>

      <h3>PRESENT PERFECT</h3>
      <p><strong>Estrutura:</strong> have/has + <strong>been</strong></p>
      <ul>
        <li>I <strong>have been</strong> here before = Já estive aqui antes</li>
        <li>She <strong>has been</strong> sick = Ela tem estado doente</li>
        <li>We <strong>have been</strong> friends for 10 years = Somos amigos há 10 anos</li>
      </ul>

      <h3>PAST PERFECT</h3>
      <p><strong>Estrutura:</strong> had + <strong>been</strong></p>
      <ul>
        <li>I <strong>had been</strong> there before = Eu tinha estado lá antes</li>
        <li>She <strong>had been</strong> waiting for hours = Ela tinha estado esperando</li>
      </ul>

      <h3>FUTURE SIMPLE</h3>
      <p><strong>Estrutura:</strong> will + <strong>be</strong></p>
      <ul>
        <li>I <strong>will be</strong> there = Estarei lá</li>
        <li>She <strong>will be</strong> happy = Ela ficará feliz</li>
        <li>It <strong>will be</strong> difficult = Será difícil</li>
      </ul>

      <h3>FUTURE com GOING TO</h3>
      <p><strong>Estrutura:</strong> am/is/are + going to + <strong>be</strong></p>
      <ul>
        <li>I <strong>am going to be</strong> late = Vou me atrasar</li>
        <li>She <strong>is going to be</strong> a doctor = Ela vai ser médica</li>
      </ul>

      <h3>PRESENT CONTINUOUS</h3>
      <p><strong>Estrutura:</strong> am/is/are + <strong>being</strong> + adjetivo</p>
      <p><strong>Uso especial:</strong> Comportamento temporário (geralmente negativo)</p>
      <ul>
        <li>You <strong>are being</strong> silly = Você está sendo bobo (agora)</li>
        <li>He <strong>is being</strong> rude = Ele está sendo grosseiro</li>
      </ul>
      <p><strong>IMPORTANTE:</strong> Só usamos com adjetivos de comportamento, não com estados permanentes.</p>
      <ul>
        <li>❌ "I am being tall" (ERRADO)</li>
        <li>✅ "I am tall" (CORRETO)</li>
      </ul>

      <h3>CONDITIONAL</h3>
      <p><strong>Estrutura:</strong> would + <strong>be</strong></p>
      <ul>
        <li>I <strong>would be</strong> happy to help = Eu ficaria feliz em ajudar</li>
        <li>It <strong>would be</strong> better = Seria melhor</li>
      </ul>

      <h3>MODAL VERBS + BE</h3>
      <ul>
        <li>I <strong>can be</strong> there = Posso estar lá</li>
        <li>She <strong>should be</strong> here soon = Ela deveria estar aqui em breve</li>
        <li>He <strong>must be</strong> tired = Ele deve estar cansado</li>
        <li>You <strong>might be</strong> right = Você pode estar certo</li>
      </ul>

      <h3>INFINITIVE / GERUND / PARTICIPLE</h3>
      <ul>
        <li><strong>To be</strong> or not to be = Ser ou não ser</li>
        <li><strong>Being</strong> honest is important = Ser honesto é importante</li>
        <li><strong>Been</strong> = sido, estado → I have <strong>been</strong> there</li>
      </ul>
    `,

    collocations: `
      <h4>BE + adjetivo</h4>
      <ul><li>be happy, be sad, be angry, be tired, be ready, be sure, be careful, be quiet, be late, be early</li></ul>

      <h4>BE + preposição de lugar</h4>
      <ul>
        <li>be <strong>at</strong> (home, work, school)</li>
        <li>be <strong>in</strong> (London, bed, hospital, prison, trouble)</li>
        <li>be <strong>on</strong> (the bus, the phone, holiday, time)</li>
      </ul>

      <h4>THERE + BE (haver, existir)</h4>
      <ul>
        <li>There <strong>is</strong> a book on the table = Há um livro na mesa</li>
        <li>There <strong>are</strong> three people here = Há três pessoas aqui</li>
        <li>There <strong>was</strong> a problem = Havia um problema</li>
      </ul>

      <h4>IT + BE (tempo, hora, distância)</h4>
      <ul>
        <li>It <strong>is</strong> 5 o'clock = São 5 horas</li>
        <li>It <strong>is</strong> hot/cold = Está quente/frio</li>
        <li>It <strong>is</strong> 10 km to London = São 10 km até Londres</li>
      </ul>

      <h4>Expressões fixas com BE</h4>
      <ul>
        <li><strong>be able to</strong> = ser capaz de</li>
        <li><strong>be about to</strong> = estar prestes a</li>
        <li><strong>be afraid of</strong> = ter medo de</li>
        <li><strong>be good at</strong> = ser bom em</li>
        <li><strong>be interested in</strong> = estar interessado em</li>
        <li><strong>be made of</strong> = ser feito de</li>
        <li><strong>be used to</strong> = estar acostumado com</li>
        <li><strong>be worth</strong> = valer a pena</li>
      </ul>
    `,

    register: `
      <h3>INFORMAL (conversação casual)</h3>
      <p>Contrações são <strong>MUITO comuns</strong>:</p>
      <ul>
        <li>I'm, you're, he's, she's, it's, we're, they're</li>
        <li>I'm not, isn't, aren't, wasn't, weren't</li>
        <li>"I'm tired" / "She's not here" / "We're ready"</li>
      </ul>
      <h4>Respostas curtas:</h4>
      <ul>
        <li>"Are you ready?" → "I am" / "I'm not"</li>
        <li>"Is she here?" → "She is" / "She isn't"</li>
      </ul>

      <h3>FORMAL (escrita profissional, acadêmica)</h3>
      <p>Evita contrações:</p>
      <ul>
        <li>"I am writing to inform you..."</li>
        <li>"The results are conclusive"</li>
        <li>"It is important to note that..."</li>
      </ul>
      <p><strong>IMPORTANTE:</strong> Em negativas formais, prefira "is not" em vez de "isn't".</p>

      <h3>MUITO INFORMAL (gíria)</h3>
      <ul>
        <li><strong>"I'm like..."</strong> = Eu tipo... (contar história) → "I'm like, 'What?!'"</li>
        <li><strong>"Don't be like that"</strong> = Não seja assim</li>
      </ul>
    `,

    synonyms: `
      <p>O verbo BE não tem sinônimos diretos porque é o verbo de ligação principal. Mas em contextos específicos:</p>

      <h4>Para "ser/estar" (estado):</h4>
      <ul>
        <li><strong>exist</strong> = existir → "The problem exists" (mais formal)</li>
        <li><strong>remain</strong> = permanecer → "He remains calm"</li>
        <li><strong>seem / appear</strong> = parecer → "She seems happy"</li>
      </ul>

      <h4>Para localização:</h4>
      <ul>
        <li><strong>sit</strong> = estar situado → "The house sits on a hill"</li>
        <li><strong>stand</strong> = estar → "The building stands here"</li>
        <li><strong>lie</strong> = estar situado → "The village lies in the valley"</li>
      </ul>

      <h4>Quando NÃO usar BE:</h4>
      <ul>
        <li>❌ "I am go to school" → ✅ "I go to school"</li>
        <li>❌ "She is have a car" → ✅ "She has a car"</li>
        <li>❌ "I am knowing" → ✅ "I know"</li>
        <li>❌ "I am liking" → ✅ "I like"</li>
        <li>❌ "I have 30 years" → ✅ "I am 30 years old"</li>
      </ul>
    `,

    idioms: `
      <ol>
        <li><strong>Be all ears</strong> = estar atento → "I'm all ears!"</li>
        <li><strong>Be on cloud nine</strong> = estar nas nuvens → "She's on cloud nine"</li>
        <li><strong>Be over the moon</strong> = estar super feliz → "I'm over the moon!"</li>
        <li><strong>Be in hot water</strong> = estar em apuros → "You'll be in hot water"</li>
        <li><strong>Be on the same page</strong> = estar de acordo → "Let's make sure we're on the same page"</li>
        <li><strong>Be beside oneself</strong> = estar fora de si → "She was beside herself with anger"</li>
        <li><strong>Be at a loss</strong> = estar perdido → "I'm at a loss for words"</li>
        <li><strong>Be worth it</strong> = valer a pena → "It's worth it!"</li>
        <li><strong>Be fed up (with)</strong> = estar farto de → "I'm fed up with this job"</li>
        <li><strong>Be in the dark</strong> = não saber de nada → "I'm completely in the dark"</li>
        <li><strong>Be under the weather</strong> = estar indisposto → "I'm feeling under the weather"</li>
        <li><strong>Be on the ball</strong> = estar esperto → "You need to be on the ball"</li>
        <li><strong>Be out of this world</strong> = ser incrível → "The food was out of this world!"</li>
        <li><strong>Be tied up</strong> = estar ocupado → "Sorry, I'm tied up right now"</li>
        <li><strong>Be up to something</strong> = estar tramando algo → "What are you up to?"</li>
        <li><strong>Be about to</strong> = estar prestes a → "I'm about to leave"</li>
        <li><strong>Be supposed to</strong> = dever → "You're supposed to be here at 9"</li>
        <li><strong>Be used to</strong> = estar acostumado → "I'm used to the cold weather"</li>
        <li><strong>Be through with</strong> = ter terminado → "I'm through with him!"</li>
      </ol>
    `,

    errors: `
      <h4>Erro 1: Esquecer o verbo BE</h4>
      <ul>
        <li>❌ "I tired" → ✅ "I <strong>am</strong> tired"</li>
        <li>❌ "She happy" → ✅ "She <strong>is</strong> happy"</li>
      </ul>

      <h4>Erro 2: Usar "have" para idade</h4>
      <ul>
        <li>❌ "I have 25 years" → ✅ "I <strong>am</strong> 25 years old"</li>
      </ul>

      <h4>Erro 3: Confundir was/were</h4>
      <ul>
        <li>❌ "I were there" → ✅ "I <strong>was</strong> there"</li>
        <li>❌ "They was happy" → ✅ "They <strong>were</strong> happy"</li>
        <li>I/He/She/It → <strong>was</strong> | You/We/They → <strong>were</strong></li>
        <li>✅ EXCEÇÃO: "If I <strong>were</strong> rich..." (segunda condicional)</li>
      </ul>

      <h4>Erro 4: Usar BE com verbos de ação</h4>
      <ul>
        <li>❌ "I am go" → ✅ "I go" / "I am going"</li>
        <li>❌ "She is study" → ✅ "She is studying"</li>
      </ul>

      <h4>Erro 5: "being" incorretamente</h4>
      <ul>
        <li>❌ "I am being tall" → ✅ "I am tall"</li>
        <li>✅ "You are being rude" (comportamento temporário — correto)</li>
      </ul>

      <h4>Erro 6: Ordem errada em perguntas</h4>
      <ul>
        <li>❌ "You are ready?" → ✅ "<strong>Are</strong> you ready?"</li>
        <li>❌ "She is here?" → ✅ "<strong>Is</strong> she here?"</li>
      </ul>

      <h4>Erro 7: Confundir "there is/are" com "it is"</h4>
      <ul>
        <li>❌ "It is many people" → ✅ "There <strong>are</strong> many people"</li>
        <li>❌ "There is cold" → ✅ "It <strong>is</strong> cold"</li>
      </ul>

      <h4>Erro 8: Esquecer artigo com profissão</h4>
      <ul>
        <li>❌ "I am teacher" → ✅ "I am <strong>a</strong> teacher"</li>
        <li>✅ EXCEÇÃO: "He is president" (cargo único)</li>
      </ul>
    `,

    phrasalVerbs: `
      <h3>B2 — Essenciais</h3>
      <ol>
        <li><strong>be about</strong> = ser sobre → "What is the book about?"</li>
        <li><strong>be after</strong> = procurar → "The police are after him"</li>
        <li><strong>be away</strong> = estar fora → "She's away on holiday"</li>
        <li><strong>be back</strong> = estar de volta → "I'll be back in 5 minutes"</li>
        <li><strong>be off</strong> = ir embora / cancelado → "I'm off!" / "The meeting is off"</li>
        <li><strong>be on</strong> = estar acontecendo → "The show is on"</li>
        <li><strong>be out</strong> = estar fora → "Sorry, she's out"</li>
        <li><strong>be over</strong> = ter terminado → "The game is over"</li>
        <li><strong>be up</strong> = estar acordado → "Are you still up?"</li>
      </ol>

      <h3>C1 — Avançados</h3>
      <ol>
        <li><strong>be in for</strong> = estar prestes a enfrentar → "You're in for a surprise"</li>
        <li><strong>be up to</strong> = estar fazendo / depender de → "It's up to you"</li>
        <li><strong>be onto something</strong> = descobrir algo → "I think we're onto something"</li>
        <li><strong>be through with</strong> = ter terminado com → "I'm through with this job"</li>
        <li><strong>be down</strong> = estar deprimido / sem funcionar → "The website is down"</li>
        <li><strong>be in</strong> = estar na moda → "Long dresses are in this year"</li>
      </ol>

      <h3>C2 — Proficiente</h3>
      <ol>
        <li><strong>be along</strong> = chegar em breve → "The bus will be along soon"</li>
        <li><strong>be up against</strong> = enfrentar dificuldade → "We're up against serious problems"</li>
        <li><strong>be cut out for</strong> = ter talento para → "I'm not cut out for this job"</li>
        <li><strong>be taken in by</strong> = ser enganado por → "Don't be taken in by his lies"</li>
        <li><strong>be done with</strong> = ter terminado definitivamente → "I'm done with trying"</li>
      </ol>
    `,

    pronunciation: `
      <h3>PRESENTE</h3>
      <ul>
        <li><strong>am</strong> = /æm/ = <em>ém</em> | Forma fraca: /əm/ = <em>âm</em></li>
        <li><strong>are</strong> = /ɑː/ = <em>áá</em> | Forma fraca: /ə/ = <em>â</em></li>
        <li><strong>is</strong> = /ɪz/ = <em>iz</em> | Forma fraca: /z/ = <em>z</em></li>
      </ul>

      <h3>PASSADO</h3>
      <ul>
        <li><strong>was</strong> = /wɒz/ = <em>uóz</em> (o "o" é aberto, como em "pó")</li>
        <li><strong>were</strong> = /wɜː/ = <em>uââ</em> (som longo, sem "r" marcado no britânico)</li>
      </ul>

      <h3>PARTICÍPIO / GERÚNDIO</h3>
      <ul>
        <li><strong>been</strong> = /biːn/ = <em>bíín</em> (o "i" é bem longo)</li>
        <li><strong>being</strong> = /ˈbiːɪŋ/ = <em>BÍI-ing</em></li>
      </ul>

      <h3>CONTRAÇÕES (pronúncia natural)</h3>
      <ul>
        <li><strong>I'm</strong> = /aɪm/ = <em>áim</em></li>
        <li><strong>you're</strong> = /jɔː/ = <em>iór</em></li>
        <li><strong>he's</strong> = /hiːz/ = <em>hiiz</em></li>
        <li><strong>she's</strong> = /ʃiːz/ = <em>chiiz</em></li>
        <li><strong>it's</strong> = /ɪts/ = <em>its</em></li>
        <li><strong>we're</strong> = /wɪə/ = <em>uíâ</em></li>
        <li><strong>they're</strong> = /ðeə/ = <em>déiâ</em></li>
        <li><strong>isn't</strong> = /ˈɪznt/ = <em>IZ-ânt</em></li>
        <li><strong>wasn't</strong> = /ˈwɒznt/ = <em>UÓZ-ânt</em></li>
        <li><strong>weren't</strong> = /wɜːnt/ = <em>uÂÂNT</em></li>
      </ul>

      <h3>RITMO NATURAL EM FRASES</h3>
      <ul>
        <li>"I am a teacher" → devagar: <em>ái / ém / â / TÍÍ-tchâ</em> | rápido: <em>áimâ tíítchâ</em></li>
        <li>"She is not here" → devagar: <em>chií / iz / nót / híâ</em> | rápido: <em>chiiz nót híâ</em></li>
        <li>"They are ready" → devagar: <em>déi / áá / RÉ-di</em> | rápido: <em>déiâ rédi</em></li>
      </ul>

      <h3>DICAS</h3>
      <ul>
        <li>Contrações são A REGRA, não a exceção — nativos sempre usam "I'm", "you're", "he's"</li>
        <li>"been" tem o "i" longo — não é "ben", é "bííín"</li>
        <li>"were" não tem "r" forte no britânico — é "uââ"</li>
      </ul>
    `,
  },

  // ============================================================
  // ADD MORE VERBS HERE following the same structure
  // Example:
  //
  // have: {
  //   meanings: `<p>Your content here...</p>`,
  //   tenses: `<p>Your content here...</p>`,
  //   // only include sections you have content for
  // },
  // ============================================================

};
