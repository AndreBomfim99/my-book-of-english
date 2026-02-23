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

  have: {
    meanings: `
      <h3>Significado principal: TER / HAVER</h3>
      <p>O verbo <strong>HAVE</strong> é um dos verbos mais usados e versáteis do inglês. Ele funciona tanto como <strong>verbo principal</strong> quanto como <strong>verbo auxiliar</strong>.</p>

      <h4>A) TER (posse, relacionamentos, características)</h4>
      <ul>
        <li><strong>I have a car</strong> = Eu tenho um carro</li>
        <li><strong>She has two brothers</strong> = Ela tem dois irmãos</li>
        <li><strong>They have a big house</strong> = Eles têm uma casa grande</li>
        <li><strong>He has blue eyes</strong> = Ele tem olhos azuis</li>
      </ul>

      <h4>B) AUXILIAR (Perfect tenses — tempos perfeitos)</h4>
      <ul>
        <li><strong>I have finished</strong> = Eu terminei / Eu já terminei</li>
        <li><strong>She has eaten</strong> = Ela comeu / Ela já comeu</li>
        <li><strong>They have lived here for years</strong> = Eles moram aqui há anos</li>
      </ul>
      <p><strong>Atenção:</strong> Neste uso, <strong>have</strong> não tem tradução isolada — ele forma o tempo verbal junto com o particípio.</p>

      <h4>C) EXPERIÊNCIAS / ATIVIDADES</h4>
      <ul>
        <li><strong>have breakfast/lunch/dinner</strong> = tomar café / almoçar / jantar</li>
        <li><strong>have a shower/bath</strong> = tomar banho (chuveiro/banheira)</li>
        <li><strong>have a meeting</strong> = ter uma reunião</li>
        <li><strong>have a good time</strong> = se divertir</li>
        <li><strong>have a look</strong> = dar uma olhada</li>
        <li><strong>have a rest</strong> = descansar</li>
        <li><strong>have a baby</strong> = ter um bebê / dar à luz</li>
      </ul>

      <h4>D) ESTADOS / CONDIÇÕES FÍSICAS</h4>
      <ul>
        <li><strong>have a headache</strong> = estar com dor de cabeça</li>
        <li><strong>have a cold</strong> = estar resfriado</li>
        <li><strong>have a fever</strong> = estar com febre</li>
        <li><strong>have fun</strong> = se divertir</li>
        <li><strong>have difficulty</strong> = ter dificuldade</li>
      </ul>

      <h4>E) HAVE TO — obrigação (= must)</h4>
      <ul>
        <li><strong>I have to go</strong> = Tenho que ir / Preciso ir</li>
        <li><strong>She has to study</strong> = Ela tem que estudar</li>
        <li><strong>We have to leave now</strong> = Precisamos sair agora</li>
      </ul>
      <p><strong>Diferença importante:</strong> <em>have to</em> indica obrigação externa (regras, circunstâncias); <em>must</em> indica obrigação interna/pessoal.</p>

      <h4>F) HAVE + objeto + particípio (causativo)</h4>
      <ul>
        <li><strong>I had my hair cut</strong> = Cortei meu cabelo (mandei cortar)</li>
        <li><strong>She had her car fixed</strong> = Ela mandou consertar o carro</li>
        <li><strong>We had the house painted</strong> = Mandamos pintar a casa</li>
      </ul>
      <p><strong>Uso:</strong> Quando você não faz algo pessoalmente, mas manda alguém fazer.</p>
    `,

    tenses: `
      <h3>PRESENT SIMPLE (Presente Simples)</h3>
      <p><strong>⚠️ Atenção:</strong> Na 3ª pessoa do singular (he/she/it), usa-se <strong>HAS</strong>.</p>
      <table>
        <tr><th>Sujeito</th><th>Afirmativa</th><th>Negativa</th><th>Interrogativa</th></tr>
        <tr><td>I</td><td>I <strong>have</strong></td><td>I <strong>don't have</strong></td><td><strong>Do</strong> I <strong>have</strong>?</td></tr>
        <tr><td>You</td><td>You <strong>have</strong></td><td>You <strong>don't have</strong></td><td><strong>Do</strong> you <strong>have</strong>?</td></tr>
        <tr><td>He/She/It</td><td>He <strong>has</strong></td><td>He <strong>doesn't have</strong></td><td><strong>Does</strong> he <strong>have</strong>?</td></tr>
        <tr><td>We</td><td>We <strong>have</strong></td><td>We <strong>don't have</strong></td><td><strong>Do</strong> we <strong>have</strong>?</td></tr>
        <tr><td>They</td><td>They <strong>have</strong></td><td>They <strong>don't have</strong></td><td><strong>Do</strong> they <strong>have</strong>?</td></tr>
      </table>
      <ul>
        <li>I have a dog = Tenho um cachorro</li>
        <li>She doesn't have time = Ela não tem tempo</li>
        <li>Do you have a pen? = Você tem uma caneta?</li>
      </ul>

      <h3>PAST SIMPLE (Passado Simples)</h3>
      <p><strong>Forma passada:</strong> <strong>HAD</strong> para todos os sujeitos.</p>
      <table>
        <tr><th>Sujeito</th><th>Afirmativa</th><th>Negativa</th><th>Interrogativa</th></tr>
        <tr><td>I</td><td>I <strong>had</strong></td><td>I <strong>didn't have</strong></td><td><strong>Did</strong> I <strong>have</strong>?</td></tr>
        <tr><td>You</td><td>You <strong>had</strong></td><td>You <strong>didn't have</strong></td><td><strong>Did</strong> you <strong>have</strong>?</td></tr>
        <tr><td>He/She/It</td><td>He <strong>had</strong></td><td>He <strong>didn't have</strong></td><td><strong>Did</strong> he <strong>have</strong>?</td></tr>
        <tr><td>We</td><td>We <strong>had</strong></td><td>We <strong>didn't have</strong></td><td><strong>Did</strong> we <strong>have</strong>?</td></tr>
        <tr><td>They</td><td>They <strong>had</strong></td><td>They <strong>didn't have</strong></td><td><strong>Did</strong> they <strong>have</strong>?</td></tr>
      </table>
      <ul>
        <li>I had a great time = Me diverti muito</li>
        <li>She didn't have money = Ela não tinha dinheiro</li>
        <li>Did you have breakfast? = Você tomou café da manhã?</li>
      </ul>

      <h3>PRESENT PERFECT (Presente Perfeito)</h3>
      <p><strong>Estrutura:</strong> have/has + particípio passado</p>
      <p><strong>Aqui HAVE funciona como auxiliar!</strong></p>
      <ul>
        <li>I <strong>have had</strong> a long day = Tive um dia longo</li>
        <li>She <strong>has had</strong> this phone for two years = Ela tem esse telefone há dois anos</li>
        <li>They <strong>have had</strong> many problems = Eles tiveram muitos problemas</li>
      </ul>

      <h3>PAST PERFECT (Mais-que-perfeito)</h3>
      <p><strong>Estrutura:</strong> had + particípio passado</p>
      <ul>
        <li>I <strong>had had</strong> enough = Eu já tinha tido o suficiente</li>
        <li>She <strong>had had</strong> the flu before = Ela já tinha tido gripe antes</li>
        <li>By then, we <strong>had had</strong> three meetings = Até então, tínhamos tido três reuniões</li>
      </ul>

      <h3>FUTURE SIMPLE (will have)</h3>
      <p><strong>Estrutura:</strong> will + have</p>
      <ul>
        <li>I <strong>will have</strong> more time tomorrow = Terei mais tempo amanhã</li>
        <li>She <strong>will have</strong> a baby in March = Ela vai ter um bebê em março</li>
        <li>They <strong>will have</strong> the results soon = Eles terão os resultados em breve</li>
      </ul>

      <h3>FUTURE com GOING TO</h3>
      <p><strong>Estrutura:</strong> am/is/are + going to + have</p>
      <ul>
        <li>I <strong>am going to have</strong> a meeting = Vou ter uma reunião</li>
        <li>She <strong>is going to have</strong> surgery = Ela vai fazer cirurgia</li>
      </ul>

      <h3>FUTURE PERFECT</h3>
      <p><strong>Estrutura:</strong> will + have + particípio</p>
      <ul>
        <li>By Friday, I <strong>will have had</strong> three interviews = Até sexta, terei tido três entrevistas</li>
        <li>She <strong>will have had</strong> the car for 10 years = Ela terá tido o carro por 10 anos</li>
      </ul>

      <h3>PRESENT CONTINUOUS</h3>
      <p><strong>Estrutura:</strong> am/is/are + having</p>
      <p><strong>Uso:</strong> Apenas com <em>have</em> no sentido de atividade/experiência — NÃO com posse.</p>
      <ul>
        <li>I <strong>am having</strong> lunch = Estou almoçando</li>
        <li>We <strong>are having</strong> a great time = Estamos nos divertindo muito</li>
        <li>She <strong>is having</strong> a baby = Ela está tendo um bebê / está grávida</li>
        <li>❌ "I am having a car" → ✅ "I have a car"</li>
      </ul>

      <h3>PAST CONTINUOUS</h3>
      <p><strong>Estrutura:</strong> was/were + having</p>
      <ul>
        <li>We <strong>were having</strong> dinner when he called = Estávamos jantando quando ele ligou</li>
        <li>They <strong>were having</strong> an argument = Eles estavam discutindo</li>
      </ul>

      <h3>PRESENT PERFECT CONTINUOUS</h3>
      <p><strong>Estrutura:</strong> have/has + been + having</p>
      <ul>
        <li>I <strong>have been having</strong> problems with my computer = Tenho tido problemas com meu computador</li>
        <li>She <strong>has been having</strong> nightmares = Ela tem tido pesadelos</li>
      </ul>

      <h3>CONDITIONAL (would have)</h3>
      <p><strong>Estrutura:</strong> would + have</p>
      <ul>
        <li>I <strong>would have</strong> more time if I worked less = Teria mais tempo se trabalhasse menos</li>
        <li>She <strong>would have</strong> the meeting tomorrow = Ela teria a reunião amanhã</li>
      </ul>

      <h3>MODAL VERBS + HAVE</h3>
      <ul>
        <li>You <strong>should have</strong> a look at this = Você deveria dar uma olhada nisso</li>
        <li>She <strong>must have</strong> a reason = Ela deve ter um motivo</li>
        <li>I <strong>might have</strong> time later = Posso ter tempo mais tarde</li>
        <li>You <strong>can have</strong> it = Você pode ficar com isso</li>
        <li>He <strong>could have</strong> the report ready = Ele poderia ter o relatório pronto</li>
      </ul>

      <h3>HAVE TO (modal de obrigação)</h3>
      <table>
        <tr><th>Tempo</th><th>Exemplo</th><th>Tradução</th></tr>
        <tr><td>Presente</td><td>I <strong>have to</strong> go</td><td>Tenho que ir</td></tr>
        <tr><td>Passado</td><td>I <strong>had to</strong> go</td><td>Tive que ir</td></tr>
        <tr><td>Futuro</td><td>I <strong>will have to</strong> go</td><td>Terei que ir</td></tr>
        <tr><td>Perfect</td><td>I <strong>have had to</strong> go</td><td>Tive que ir (várias vezes)</td></tr>
      </table>

      <h3>INFINITIVE / GERUND / PARTICIPLE</h3>
      <ul>
        <li><strong>to have</strong> = ter → "I want to have more time"</li>
        <li><strong>having</strong> = tendo / ter → "Having money is not everything"</li>
        <li><strong>had</strong> = tido / tinha → "I had already had dinner"</li>
      </ul>
    `,

    collocations: `
      <h4>HAVE + refeições</h4>
      <ul>
        <li>have <strong>breakfast / lunch / dinner / brunch / a snack</strong></li>
        <li>"Let's have lunch together" = Vamos almoçar juntos</li>
      </ul>

      <h4>HAVE + higiene / rotina</h4>
      <ul>
        <li>have a <strong>shower</strong> = tomar banho (chuveiro)</li>
        <li>have a <strong>bath</strong> = tomar banho (banheira)</li>
        <li>have a <strong>shave</strong> = fazer a barba</li>
        <li>have a <strong>nap</strong> = tirar uma soneca</li>
        <li>have a <strong>rest</strong> = descansar</li>
        <li>have a <strong>sleep</strong> = dormir um pouco</li>
      </ul>

      <h4>HAVE + comunicação / encontros</h4>
      <ul>
        <li>have a <strong>conversation / chat / talk</strong> = ter uma conversa</li>
        <li>have a <strong>meeting</strong> = ter uma reunião</li>
        <li>have a <strong>discussion / argument</strong> = discutir</li>
        <li>have a <strong>word (with)</strong> = ter uma palavrinha com</li>
      </ul>

      <h4>HAVE + experiência / diversão</h4>
      <ul>
        <li>have <strong>fun / a good time / a great time</strong> = se divertir</li>
        <li>have a <strong>party</strong> = fazer uma festa</li>
        <li>have a <strong>holiday / vacation</strong> = tirar férias</li>
        <li>have an <strong>adventure</strong> = ter uma aventura</li>
      </ul>

      <h4>HAVE + problemas / dificuldades</h4>
      <ul>
        <li>have a <strong>problem</strong> = ter um problema</li>
        <li>have <strong>trouble / difficulty</strong> = ter dificuldade</li>
        <li>have a <strong>setback</strong> = sofrer um revés</li>
        <li>have a <strong>fight</strong> = brigar</li>
      </ul>

      <h4>HAVE + saúde</h4>
      <ul>
        <li>have a <strong>headache / stomachache / backache</strong> = estar com dor de cabeça / barriga / costas</li>
        <li>have a <strong>cold / flu / fever</strong> = estar resfriado / com gripe / febre</li>
        <li>have an <strong>operation / surgery</strong> = fazer uma cirurgia</li>
        <li>have a <strong>check-up</strong> = fazer um check-up</li>
      </ul>

      <h4>HAVE + olhar / ideia</h4>
      <ul>
        <li>have a <strong>look (at)</strong> = dar uma olhada em</li>
        <li>have a <strong>think</strong> = pensar um pouco</li>
        <li>have an <strong>idea</strong> = ter uma ideia</li>
        <li>have a <strong>go (at)</strong> = tentar, dar uma chance</li>
        <li>have a <strong>try</strong> = tentar</li>
        <li>have a <strong>taste</strong> = experimentar (comida)</li>
      </ul>
    `,

    register: `
      <h3>INFORMAL (conversação casual)</h3>
      <p>Contrações e formas reduzidas são muito comuns:</p>
      <ul>
        <li><strong>I've, you've, he's, she's, we've, they've</strong> (present perfect)</li>
        <li><strong>I'd, you'd, he'd</strong> (had)</li>
        <li>"I've got a problem" = Tenho um problema</li>
        <li>"Have you got a minute?" = Você tem um minuto? (britânico informal)</li>
        <li>"I gotta go" = Tenho que ir (gíria americana — "gotta" = have got to)</li>
        <li>"D'you have the time?" = Você tem horas? (do you → d'you)</li>
      </ul>
      <p><strong>Britânico:</strong> Prefere <strong>"have got"</strong> para posse em conversas informais:<br>
      "Have you got a car?" / "I've got a headache"</p>
      <p><strong>Americano:</strong> Prefere <strong>"have"</strong> simples:<br>
      "Do you have a car?" / "I have a headache"</p>

      <h3>FORMAL (escrita profissional, acadêmica)</h3>
      <ul>
        <li>"We have received your application" = Recebemos sua candidatura</li>
        <li>"The company has had significant growth" = A empresa teve crescimento significativo</li>
        <li>"I have to inform you that..." = Devo informá-lo que...</li>
        <li>"Having considered all options, we have decided..." = Tendo considerado todas as opções, decidimos...</li>
      </ul>
      <p>Evite "have got" em inglês formal escrito — prefira o "have" simples.</p>

      <h3>MUITO INFORMAL (gírias)</h3>
      <ul>
        <li><strong>"I've had it"</strong> = Estou farto / Não aguento mais</li>
        <li><strong>"Have a go at me"</strong> = Me criticar / Atacar</li>
        <li><strong>"You've got to be kidding!"</strong> = Não pode ser sério!</li>
        <li><strong>"I'm having none of it"</strong> = Não vou aceitar isso</li>
      </ul>
    `,

    synonyms: `
      <h4>Para POSSE (ter/possuir):</h4>
      <ul>
        <li><strong>own</strong> = ser dono → "She owns a house" (mais formal, enfatiza propriedade)</li>
        <li><strong>possess</strong> = possuir → "He possesses great talent" (formal/literário)</li>
        <li><strong>hold</strong> = ter/deter → "She holds a degree in law" (cargos, títulos)</li>
        <li><strong>carry</strong> = carregar/ter → "Do you carry ID?" (ter consigo agora)</li>
        <li><strong>contain</strong> = conter → "This box contains books" (objetos, recipientes)</li>
      </ul>

      <h4>Para EXPERIENCIAR:</h4>
      <ul>
        <li><strong>experience</strong> = experimentar → "She experienced great difficulties" (formal)</li>
        <li><strong>enjoy</strong> = desfrutar → "Enjoy your meal!" (mais entusiasmado que "have")</li>
        <li><strong>undergo</strong> = passar por → "He underwent surgery" (procedimentos formais)</li>
        <li><strong>suffer</strong> = sofrer → "She suffered a heart attack" (experiência negativa)</li>
      </ul>

      <h4>Para HAVE TO (obrigação):</h4>
      <ul>
        <li><strong>must</strong> = dever (obrigação interna) → "I must call her"</li>
        <li><strong>need to</strong> = precisar → "You need to rest"</li>
        <li><strong>be supposed to</strong> = dever/ser esperado → "You're supposed to be here at 9"</li>
      </ul>

      <h4>Quando NÃO usar HAVE:</h4>
      <ul>
        <li>❌ "I have 30 years" → ✅ "I <strong>am</strong> 30 years old" (idade = verbo BE)</li>
        <li>❌ "I am having a car" → ✅ "I <strong>have</strong> a car" (posse = não usa contínuo)</li>
        <li>❌ "She is having a brother" → ✅ "She <strong>has</strong> a brother" (relacionamento = não usa contínuo)</li>
        <li>❌ "I have hunger" → ✅ "I <strong>am</strong> hungry" (sensações físicas = BE + adjetivo)</li>
        <li>❌ "We have cold" → ✅ "We <strong>are</strong> cold" (temperatura corporal = BE)</li>
      </ul>
    `,

    idioms: `
      <ol>
        <li><strong>Have a blast</strong> = se divertir muito → "We had a blast at the party!"</li>
        <li><strong>Have a ball</strong> = se divertir muito (mais informal) → "The kids had a ball"</li>
        <li><strong>Have it your way</strong> = faça do seu jeito → "Fine, have it your way"</li>
        <li><strong>Have the upper hand</strong> = ter vantagem → "They have the upper hand in negotiations"</li>
        <li><strong>Have a lot on one's plate</strong> = ter muita coisa para fazer → "I can't help, I have a lot on my plate"</li>
        <li><strong>Have a field day</strong> = aproveitar ao máximo → "The press had a field day with the scandal"</li>
        <li><strong>Have cold feet</strong> = ficar com medo / hesitar → "She had cold feet before the wedding"</li>
        <li><strong>Have butterflies (in one's stomach)</strong> = estar nervoso → "I had butterflies before the exam"</li>
        <li><strong>Have a heart</strong> = ter compaixão → "Have a heart! Give him another chance"</li>
        <li><strong>Have a change of heart</strong> = mudar de ideia/posição → "She had a change of heart and decided to stay"</li>
        <li><strong>Have the nerve</strong> = ter a audácia → "He had the nerve to ask for more money!"</li>
        <li><strong>Have a point</strong> = ter razão em algo → "You have a point there"</li>
        <li><strong>Have mixed feelings</strong> = ter sentimentos contraditórios → "I have mixed feelings about the move"</li>
        <li><strong>Have it in for someone</strong> = estar de birra com alguém → "My boss has it in for me"</li>
        <li><strong>Have what it takes</strong> = ter o que é preciso → "She has what it takes to succeed"</li>
        <li><strong>Have a go</strong> = tentar → "I've never tried sushi, but I'll have a go"</li>
        <li><strong>Have a word with</strong> = conversar/dar uma bronca → "I need to have a word with you"</li>
        <li><strong>Not have a clue</strong> = não fazer ideia → "I don't have a clue what happened"</li>
        <li><strong>Have seen better days</strong> = ter dias melhores / estar gasto → "This sofa has seen better days"</li>
        <li><strong>Have the last laugh</strong> = rir por último → "She had the last laugh in the end"</li>
      </ol>
    `,

    errors: `
      <h4>Erro 1: Usar HAVE para idade (influência do português)</h4>
      <ul>
        <li>❌ "I have 25 years" → ✅ "I <strong>am</strong> 25 years old"</li>
        <li>❌ "She has 30 years old" → ✅ "She <strong>is</strong> 30 years old"</li>
      </ul>

      <h4>Erro 2: Usar HAVE no contínuo para posse</h4>
      <ul>
        <li>❌ "I am having a car" → ✅ "I <strong>have</strong> a car"</li>
        <li>❌ "She is having blue eyes" → ✅ "She <strong>has</strong> blue eyes"</li>
        <li>✅ EXCEÇÃO: "I am having lunch" (atividade = correto)</li>
      </ul>

      <h4>Erro 3: Esquecer o DO/DOES nas perguntas e negativas</h4>
      <ul>
        <li>❌ "Have you a pen?" → ✅ "<strong>Do</strong> you have a pen?"</li>
        <li>❌ "She hasn't a car" → ✅ "She <strong>doesn't have</strong> a car"</li>
        <li>⚠️ EXCEÇÃO britânica: "Have you got a pen?" é válido no inglês informal britânico</li>
      </ul>

      <h4>Erro 4: Confundir HAVE com HAVE GOT</h4>
      <ul>
        <li>✅ "I have a dog" = "I've got a dog" (ambos corretos para posse)</li>
        <li>❌ "I've got to have got a meeting" — não empilhe as duas formas</li>
        <li>❌ "Did you have got?" — com have got, a interrogativa é "Have you got?"</li>
      </ul>

      <h4>Erro 5: Usar HAVE TO no contínuo incorretamente</h4>
      <ul>
        <li>❌ "I am having to go always" → ✅ "I always have to go"</li>
        <li>✅ "I am having to work late this week" (aceitável — situação temporária)</li>
      </ul>

      <h4>Erro 6: Sensações físicas com HAVE em vez de BE</h4>
      <ul>
        <li>❌ "I have cold" → ✅ "I <strong>am</strong> cold"</li>
        <li>❌ "I have fear" → ✅ "I <strong>am</strong> afraid" / "I <strong>am</strong> scared"</li>
        <li>❌ "I have thirst" → ✅ "I <strong>am</strong> thirsty"</li>
        <li>✅ "I have a cold" (= estar resfriado — correto, é a doença!)</li>
      </ul>

      <h4>Erro 7: Ordem errada com have had (past perfect)</h4>
      <ul>
        <li>❌ "I had have dinner" → ✅ "I <strong>had had</strong> dinner" / "I had already eaten"</li>
        <li>❌ "She have had a problem" → ✅ "She <strong>has had</strong> a problem"</li>
      </ul>

      <h4>Erro 8: Pronunciar o "have" auxiliar como forma forte</h4>
      <ul>
        <li>Em "I have been" (auxiliar), o "have" é reduzido: <em>áiv bin</em>, NÃO <em>ái HÉV bin</em></li>
        <li>"You should have told me" → <em>shud-âv</em>, não <em>shud HÉV</em></li>
      </ul>
    `,

    phrasalVerbs: `
      <h3>B2 — Essenciais</h3>
      <ol>
        <li><strong>have on</strong> = estar usando (roupa) → "She has a red dress on" / "What do you have on?"</li>
        <li><strong>have over / have round</strong> = receber em casa → "We're having some friends over for dinner"</li>
        <li><strong>have out</strong> = tirar / extrair (dente, amígdala) → "She had her wisdom teeth out"</li>
        <li><strong>have in</strong> = ter em estoque / ter dentro de casa → "Do we have any wine in?"</li>
        <li><strong>have back</strong> = ter de volta → "Can I have my pen back?"</li>
      </ol>

      <h3>C1 — Avançados</h3>
      <ol>
        <li><strong>have it out (with someone)</strong> = resolver um conflito diretamente → "I finally had it out with my boss"</li>
        <li><strong>have on (someone)</strong> = estar enganando alguém → "Are you having me on?" (britânico)</li>
        <li><strong>have off</strong> = tirar folga → "I'm having a day off tomorrow"</li>
        <li><strong>have done with</strong> = acabar de vez com algo → "Let's have done with this argument"</li>
        <li><strong>have against</strong> = ter algo contra → "What do you have against him?"</li>
      </ol>

      <h3>C2 — Proficiente</h3>
      <ol>
        <li><strong>have it in one</strong> = ter a capacidade dentro de si → "I didn't know she had it in her"</li>
        <li><strong>have it away/off</strong> = (britânico, informal, vulgar) ter relações → uso restrito ao contexto</li>
        <li><strong>have at</strong> = atacar / ir com tudo → "Have at it!" (= pode ir em frente!)</li>
      </ol>

      <h3>HAVE + objeto + particípio (causativo — muito importante!)</h3>
      <ol>
        <li>have something <strong>done</strong> → "I had my car serviced" = Mandei revisar meu carro</li>
        <li>have someone <strong>do</strong> something → "I'll have him call you" = Peço para ele te ligar</li>
      </ol>
    `,

    pronunciation: `
      <h3>FORMAS PRINCIPAIS</h3>
      <ul>
        <li><strong>have</strong> = /hæv/ = <em>HÉV</em> (forma forte, palavra isolada)</li>
        <li><strong>have</strong> = /həv/ = <em>hâv</em> (forma fraca, no meio da frase)</li>
        <li><strong>has</strong> = /hæz/ = <em>HÉZ</em> (forma forte)</li>
        <li><strong>has</strong> = /həz/ ou /əz/ = <em>hâz / âz</em> (forma fraca)</li>
        <li><strong>had</strong> = /hæd/ = <em>HÉD</em> (forma forte)</li>
        <li><strong>had</strong> = /həd/ ou /əd/ = <em>hâd / âd</em> (forma fraca)</li>
        <li><strong>having</strong> = /ˈhævɪŋ/ = <em>HÉV-ing</em></li>
      </ul>

      <h3>CONTRAÇÕES (pronúncia natural)</h3>
      <ul>
        <li><strong>I've</strong> = /aɪv/ = <em>áiv</em></li>
        <li><strong>you've</strong> = /juːv/ = <em>iúuv</em></li>
        <li><strong>he's / she's / it's</strong> = /hiːz/ /ʃiːz/ /ɪts/ = <em>hiiz / chiiz / its</em> (has → 's)</li>
        <li><strong>we've</strong> = /wiːv/ = <em>uíív</em></li>
        <li><strong>they've</strong> = /ðeɪv/ = <em>déiv</em></li>
        <li><strong>I'd</strong> = /aɪd/ = <em>áid</em> (had)</li>
        <li><strong>haven't</strong> = /ˈhævnt/ = <em>HÉV-ânt</em></li>
        <li><strong>hasn't</strong> = /ˈhæznt/ = <em>HÉZ-ânt</em></li>
        <li><strong>hadn't</strong> = /ˈhædnt/ = <em>HÉD-ânt</em></li>
      </ul>

      <h3>FORMAS REDUZIDAS ESPECIAIS (muito importantes!)</h3>
      <p>Nos modais + have, o <strong>have</strong> é quase sempre reduzido para <em>/əv/</em> (soa como "âv" ou "ov"):</p>
      <ul>
        <li><strong>should have</strong> → <em>shud-âv</em> (não "shud HÉV")</li>
        <li><strong>could have</strong> → <em>cud-âv</em></li>
        <li><strong>would have</strong> → <em>wud-âv</em></li>
        <li><strong>might have</strong> → <em>mait-âv</em></li>
        <li><strong>must have</strong> → <em>mâst-âv</em></li>
      </ul>
      <p><strong>ATENÇÃO:</strong> Escrito "of" quando as pessoas transcrevem o que ouvem → "should of" é <strong>ERRADO</strong> gramaticalmente, mas reflete a pronúncia real de "should have".</p>

      <h3>RITMO NATURAL EM FRASES</h3>
      <ul>
        <li>"I have a car" → devagar: <em>ái / HÉV / â / CÁÁ</em> | rápido: <em>ái-hâv-â-cáá</em></li>
        <li>"She has been there" → devagar: <em>chii / HÉZ / bin / déâ</em> | rápido: <em>chiiz-bin-déâ</em></li>
        <li>"I had to go" → devagar: <em>ái / HÉD / tu / góu</em> | rápido: <em>ái-hâd-tâ-góu</em></li>
        <li>"You should have called" → rápido: <em>iú-shud-âv-CÓOLD</em></li>
      </ul>

      <h3>HAVE GOT — pronúncia britânica</h3>
      <ul>
        <li>"I've got a dog" = <em>áiv-GÓT-â-DÓG</em></li>
        <li>"Have you got time?" = <em>hâv-iú-GÓT-táim?</em></li>
        <li>O "have" inicial em perguntas com "have got" é pronunciado de forma fraca: <em>hâv</em></li>
      </ul>

      <h3>DICAS</h3>
      <ul>
        <li>O <strong>H</strong> do "have" pode ser quase mudo no meio de frases rápidas: "We should have" → <em>shud-âv</em></li>
        <li>"Has he?" no britânico soa como <em>HÉZ-i?</em></li>
        <li>"Had I known" (formal/literário) → <em>HÉD-ái-nóun</em></li>
        <li>A diferença entre "have" (posse) e "have" (auxiliar) na pronúncia: o auxiliar sempre fica mais fraco e reduzido</li>
      </ul>
    `,
  },

  do: {
    meanings: `
      <h3>Significado principal: FAZER / AUXILIAR VERBAL</h3>
      <p>O verbo <strong>DO</strong> é um dos verbos mais essenciais do inglês. Ele opera em dois níveis completamente diferentes: como <strong>verbo principal</strong> (fazer algo) e como <strong>auxiliar</strong> (para formar perguntas e negativas).</p>

      <h4>A) FAZER — ação geral, tarefa, atividade</h4>
      <ul>
        <li><strong>I do my homework</strong> = Eu faço minha lição de casa</li>
        <li><strong>She does the dishes</strong> = Ela lava a louça</li>
        <li><strong>They did a great job</strong> = Eles fizeram um ótimo trabalho</li>
        <li><strong>What are you doing?</strong> = O que você está fazendo?</li>
      </ul>
      <p><strong>Diferença do português:</strong> Em inglês, "do" cobre um campo semântico amplo de "fazer" — mas há situações em que o português usa "fazer" e o inglês usa outro verbo (make, take, have etc.). Veja a seção de Sinônimos.</p>

      <h4>B) AUXILIAR — perguntas e negativas no Present e Past Simple</h4>
      <p>Este é o uso mais frequente do DO! Em inglês, você <strong>precisa</strong> do auxiliar para perguntas e negativas com verbos comuns.</p>
      <ul>
        <li><strong>Do</strong> you speak English? = Você fala inglês?</li>
        <li>I <strong>don't</strong> understand = Eu não entendo</li>
        <li><strong>Does</strong> she live here? = Ela mora aqui?</li>
        <li>He <strong>doesn't</strong> know = Ele não sabe</li>
        <li><strong>Did</strong> you see that? = Você viu isso?</li>
        <li>We <strong>didn't</strong> go = Nós não fomos</li>
      </ul>

      <h4>C) ÊNFASE — reforçar ou contradizer uma afirmação</h4>
      <ul>
        <li>I <strong>do</strong> like it! = Eu realmente gosto! (contradizendo)</li>
        <li>She <strong>does</strong> work hard = Ela realmente trabalha muito</li>
        <li>I <strong>did</strong> tell you! = Eu te falei sim!</li>
        <li>"You never listen!" → "I <strong>do</strong> listen!"</li>
      </ul>

      <h4>D) SUBSTITUIÇÃO DE VERBO — evitar repetição</h4>
      <ul>
        <li>"She runs every day." → "So <strong>do</strong> I." = Eu também</li>
        <li>"He doesn't eat meat." → "Neither <strong>do</strong> I." = Eu também não</li>
        <li>"Do you like coffee?" → "Yes, I <strong>do</strong>." = Sim (resposta curta)</li>
      </ul>

      <h4>E) TAREFAS DOMÉSTICAS E ROTINAS</h4>
      <ul>
        <li><strong>do the laundry</strong> = lavar a roupa</li>
        <li><strong>do the shopping</strong> = fazer compras</li>
        <li><strong>do the cooking</strong> = cozinhar</li>
        <li><strong>do the ironing</strong> = passar roupa</li>
        <li><strong>do the hoovering</strong> = aspirar o chão (britânico)</li>
      </ul>

      <h4>F) SUFICIÊNCIA / ADEQUAÇÃO</h4>
      <ul>
        <li>This will <strong>do</strong> = Isso serve / Está bom assim</li>
        <li>Will £10 <strong>do</strong>? = £10 é suficiente?</li>
        <li>That won't <strong>do</strong> = Isso não serve</li>
      </ul>

      <h4>G) COMPORTAMENTO / PROGRESSO</h4>
      <ul>
        <li>How are you <strong>doing</strong>? = Como você está? / Como vai?</li>
        <li>She's <strong>doing</strong> well at school = Ela está indo bem na escola</li>
        <li>The business is <strong>doing</strong> well = O negócio vai bem</li>
      </ul>
    `,

    tenses: `
      <h3>PRESENT SIMPLE (Presente Simples)</h3>
      <p><strong>⚠️ Atenção:</strong> Na 3ª pessoa do singular (he/she/it), usa-se <strong>DOES</strong> — tanto como auxiliar quanto como verbo principal.</p>
      <table>
        <tr><th>Sujeito</th><th>Afirmativa</th><th>Negativa</th><th>Interrogativa</th></tr>
        <tr><td>I</td><td>I <strong>do</strong></td><td>I <strong>don't</strong> (do not)</td><td><strong>Do</strong> I?</td></tr>
        <tr><td>You</td><td>You <strong>do</strong></td><td>You <strong>don't</strong></td><td><strong>Do</strong> you?</td></tr>
        <tr><td>He/She/It</td><td>He <strong>does</strong></td><td>He <strong>doesn't</strong> (does not)</td><td><strong>Does</strong> he?</td></tr>
        <tr><td>We</td><td>We <strong>do</strong></td><td>We <strong>don't</strong></td><td><strong>Do</strong> we?</td></tr>
        <tr><td>They</td><td>They <strong>do</strong></td><td>They <strong>don't</strong></td><td><strong>Do</strong> they?</td></tr>
      </table>
      <ul>
        <li>I do yoga every morning = Faço yoga toda manhã</li>
        <li>She doesn't do her homework = Ela não faz a lição</li>
        <li>Does he do the cooking? = Ele cozinha?</li>
      </ul>

      <h3>PAST SIMPLE (Passado Simples)</h3>
      <p><strong>Forma passada:</strong> <strong>DID</strong> para todos os sujeitos (verbo principal e auxiliar).</p>
      <table>
        <tr><th>Sujeito</th><th>Afirmativa</th><th>Negativa</th><th>Interrogativa</th></tr>
        <tr><td>I</td><td>I <strong>did</strong></td><td>I <strong>didn't</strong> (did not)</td><td><strong>Did</strong> I?</td></tr>
        <tr><td>You</td><td>You <strong>did</strong></td><td>You <strong>didn't</strong></td><td><strong>Did</strong> you?</td></tr>
        <tr><td>He/She/It</td><td>He <strong>did</strong></td><td>He <strong>didn't</strong></td><td><strong>Did</strong> he?</td></tr>
        <tr><td>We</td><td>We <strong>did</strong></td><td>We <strong>didn't</strong></td><td><strong>Did</strong> we?</td></tr>
        <tr><td>They</td><td>They <strong>did</strong></td><td>They <strong>didn't</strong></td><td><strong>Did</strong> they?</td></tr>
      </table>
      <ul>
        <li>I did my best = Fiz o meu melhor</li>
        <li>She didn't do anything wrong = Ela não fez nada errado</li>
        <li>Did you do the test? = Você fez o teste?</li>
      </ul>
      <p><strong>⚠️ Armadilha clássica:</strong> Com "did", o verbo principal fica SEMPRE no infinitivo sem "to":</p>
      <ul>
        <li>❌ "Did you <strong>went</strong>?" → ✅ "Did you <strong>go</strong>?"</li>
        <li>❌ "She didn't <strong>came</strong>" → ✅ "She didn't <strong>come</strong>"</li>
      </ul>

      <h3>PRESENT CONTINUOUS</h3>
      <p><strong>Estrutura:</strong> am/is/are + <strong>doing</strong></p>
      <ul>
        <li>I <strong>am doing</strong> my homework = Estou fazendo minha lição</li>
        <li>What are you <strong>doing</strong>? = O que você está fazendo?</li>
        <li>She <strong>is doing</strong> well = Ela está indo bem</li>
        <li>They <strong>are doing</strong> renovations = Eles estão fazendo reformas</li>
      </ul>

      <h3>PAST CONTINUOUS</h3>
      <p><strong>Estrutura:</strong> was/were + <strong>doing</strong></p>
      <ul>
        <li>I <strong>was doing</strong> the dishes when he arrived = Estava lavando a louça quando ele chegou</li>
        <li>What <strong>were</strong> you <strong>doing</strong> last night? = O que você estava fazendo ontem à noite?</li>
      </ul>

      <h3>PRESENT PERFECT</h3>
      <p><strong>Estrutura:</strong> have/has + <strong>done</strong></p>
      <ul>
        <li>I <strong>have done</strong> everything I can = Fiz tudo que pude</li>
        <li>She <strong>has done</strong> a great job = Ela fez um ótimo trabalho</li>
        <li>Have you <strong>done</strong> your homework yet? = Você já fez a lição?</li>
      </ul>

      <h3>PAST PERFECT</h3>
      <p><strong>Estrutura:</strong> had + <strong>done</strong></p>
      <ul>
        <li>I <strong>had done</strong> it before = Eu já tinha feito isso antes</li>
        <li>By the time she arrived, we <strong>had done</strong> everything = Quando ela chegou, já tínhamos feito tudo</li>
      </ul>

      <h3>PRESENT PERFECT CONTINUOUS</h3>
      <p><strong>Estrutura:</strong> have/has + been + <strong>doing</strong></p>
      <ul>
        <li>I <strong>have been doing</strong> research all day = Tenho feito pesquisa o dia todo</li>
        <li>What <strong>have</strong> you <strong>been doing</strong>? = O que você tem feito?</li>
      </ul>

      <h3>FUTURE SIMPLE (will do)</h3>
      <p><strong>Estrutura:</strong> will + <strong>do</strong></p>
      <ul>
        <li>I <strong>will do</strong> it tomorrow = Vou fazer isso amanhã</li>
        <li>This <strong>will do</strong> = Isso vai servir</li>
        <li>She <strong>will do</strong> her best = Ela vai dar o seu melhor</li>
      </ul>

      <h3>FUTURE com GOING TO</h3>
      <p><strong>Estrutura:</strong> am/is/are + going to + <strong>do</strong></p>
      <ul>
        <li>I <strong>am going to do</strong> a course = Vou fazer um curso</li>
        <li>What <strong>are</strong> you <strong>going to do</strong>? = O que você vai fazer?</li>
      </ul>

      <h3>FUTURE PERFECT</h3>
      <p><strong>Estrutura:</strong> will + have + <strong>done</strong></p>
      <ul>
        <li>By Friday, I <strong>will have done</strong> all the reports = Até sexta, terei feito todos os relatórios</li>
      </ul>

      <h3>CONDITIONAL</h3>
      <p><strong>Estrutura:</strong> would + <strong>do</strong></p>
      <ul>
        <li>I <strong>would do</strong> it differently = Eu faria de forma diferente</li>
        <li>What <strong>would</strong> you <strong>do</strong>? = O que você faria?</li>
        <li>I <strong>would have done</strong> it sooner = Eu teria feito antes</li>
      </ul>

      <h3>MODAL VERBS + DO</h3>
      <ul>
        <li>You <strong>should do</strong> it now = Você deveria fazer isso agora</li>
        <li>I <strong>can't do</strong> that = Não posso fazer isso</li>
        <li>She <strong>must do</strong> her best = Ela deve dar o melhor</li>
        <li>We <strong>might do</strong> a trip = Podemos fazer uma viagem</li>
        <li>You <strong>could do</strong> better = Você poderia fazer melhor</li>
      </ul>

      <h3>INFINITIVE / GERUND / PARTICIPLE</h3>
      <ul>
        <li><strong>to do</strong> = fazer → "I want to do it right"</li>
        <li><strong>doing</strong> = fazendo / fazer → "Doing nothing is not an option"</li>
        <li><strong>done</strong> = feito → "It's done!" / "Well done!"</li>
      </ul>

      <h3>DO AUXILIAR ENFÁTICO (em frases afirmativas)</h3>
      <p>O DO/DOES/DID pode aparecer em frases afirmativas para dar ênfase ou contradizer:</p>
      <ul>
        <li>I <strong>do</strong> understand your point = Eu entendo sim o seu ponto</li>
        <li>She <strong>does</strong> care about you = Ela se importa com você sim</li>
        <li>He <strong>did</strong> warn us = Ele nos avisou sim</li>
      </ul>

      <h3>IMPERATIVO com DO / DON'T</h3>
      <ul>
        <li><strong>Do</strong> be careful! = Por favor, seja cuidadoso! (reforço educado)</li>
        <li><strong>Don't</strong> do that! = Não faça isso!</li>
        <li><strong>Do</strong> sit down = Por favor, sente-se (formal/educado)</li>
        <li><strong>Don't</strong> be late = Não se atrase</li>
      </ul>
    `,

    collocations: `
      <h4>DO + tarefas domésticas</h4>
      <ul>
        <li>do the <strong>dishes / washing-up</strong> = lavar a louça</li>
        <li>do the <strong>laundry / washing</strong> = lavar a roupa</li>
        <li>do the <strong>ironing</strong> = passar roupa</li>
        <li>do the <strong>hoovering / vacuuming</strong> = aspirar</li>
        <li>do the <strong>cooking</strong> = cozinhar</li>
        <li>do the <strong>shopping</strong> = fazer compras</li>
        <li>do the <strong>cleaning</strong> = limpar a casa</li>
        <li>do the <strong>gardening</strong> = cuidar do jardim</li>
      </ul>

      <h4>DO + trabalho / estudo</h4>
      <ul>
        <li>do <strong>homework / an exercise</strong> = fazer lição / exercício</li>
        <li>do a <strong>course / degree</strong> = fazer um curso / graduação</li>
        <li>do <strong>research</strong> = fazer pesquisa</li>
        <li>do a <strong>test / exam</strong> = fazer um teste / prova (britânico)</li>
        <li>do <strong>business</strong> = fazer negócios</li>
        <li>do a <strong>report</strong> = fazer um relatório</li>
        <li>do <strong>work</strong> = fazer trabalho</li>
      </ul>

      <h4>DO + esportes / atividades físicas</h4>
      <p><strong>Regra geral:</strong> usa-se DO para esportes individuais, sem bola, ou atividades físicas gerais.</p>
      <ul>
        <li>do <strong>yoga / pilates</strong></li>
        <li>do <strong>exercise / sport</strong></li>
        <li>do <strong>karate / judo / martial arts</strong></li>
        <li>do <strong>gymnastics / aerobics</strong></li>
        <li>do <strong>weightlifting</strong></li>
      </ul>
      <p><strong>⚠️ Atenção:</strong> Para esportes com bola ou competitivos, usa-se <strong>PLAY</strong>: play football, play tennis, play chess.</p>

      <h4>DO + bem-estar / beleza / favor</h4>
      <ul>
        <li>do someone's <strong>hair / nails / makeup</strong> = arrumar o cabelo / unhas / maquiagem</li>
        <li>do someone a <strong>favour</strong> = fazer um favor</li>
        <li>do someone <strong>good</strong> = fazer bem a alguém</li>
        <li>do <strong>damage / harm</strong> = causar dano</li>
      </ul>

      <h4>Expressões fixas com DO</h4>
      <ul>
        <li><strong>do your best</strong> = fazer o seu melhor</li>
        <li><strong>do your worst</strong> = pode tentar! (desafio)</li>
        <li><strong>do a good/bad job</strong> = fazer um bom/mau trabalho</li>
        <li><strong>do justice to</strong> = fazer jus a</li>
        <li><strong>do without</strong> = se virar sem</li>
        <li><strong>do time</strong> = cumprir pena (gíria)</li>
        <li><strong>have to do with</strong> = ter a ver com</li>
        <li><strong>nothing to do with</strong> = não ter nada a ver com</li>
      </ul>
    `,

    register: `
      <h3>INFORMAL (conversação casual)</h3>
      <p>Contrações são naturais e muito frequentes:</p>
      <ul>
        <li><strong>don't, doesn't, didn't</strong></li>
        <li>"I don't know" / "She doesn't care" / "We didn't go"</li>
        <li>Respostas curtas: "Do you like it?" → "Yes, I do" / "No, I don't"</li>
        <li>"How ya doing?" = Como você está? (muito informal / americano)</li>
        <li>"What are you up to?" = O que está fazendo? (mais coloquial que "What are you doing?")</li>
        <li>"Done!" = Pronto! / Feito! (resposta rápida e casual)</li>
        <li>"What do you do?" = O que você faz da vida? (profissão — pergunta muito comum em apresentações)</li>
      </ul>

      <h3>FORMAL (escrita profissional, acadêmica)</h3>
      <ul>
        <li>Evita contrações: "I do not agree" em vez de "I don't agree"</li>
        <li>"The study <strong>does not</strong> support this conclusion"</li>
        <li>"<strong>Doing</strong> so would require significant resources"</li>
        <li>"The committee <strong>did not</strong> reach a consensus"</li>
        <li>O DO enfático é comum em cartas formais: "I <strong>do</strong> hope you will consider our proposal"</li>
      </ul>

      <h3>DO em perguntas — formal vs informal</h3>
      <ul>
        <li><strong>Informal:</strong> "What do you do?" / "Where do you live?"</li>
        <li><strong>Formal:</strong> "May I ask what you do professionally?"</li>
        <li><strong>Muito formal/literário:</strong> "What do you propose we do?" = O que você propõe que façamos?</li>
      </ul>

      <h3>MUITO INFORMAL (gírias e expressões cotidianas)</h3>
      <ul>
        <li><strong>"How do you do?"</strong> = Muito prazer (apresentações — tom formal britânico clássico)</li>
        <li><strong>"That'll do"</strong> = Tá bom assim / Pode parar (pode soar como repreensão)</li>
        <li><strong>"Do you, boo"</strong> = Seja você mesmo (gíria jovem americana)</li>
        <li><strong>"Do or die"</strong> = Ou vai ou racha</li>
      </ul>
    `,

    synonyms: `
      <p>O grande desafio com DO para falantes de português é saber quando usar <strong>DO</strong> e quando usar <strong>MAKE</strong> — ambos traduzem "fazer".</p>

      <h4>DO vs MAKE — a distinção fundamental</h4>
      <table>
        <tr><th>DO (processo, tarefa, atividade)</th><th>MAKE (criar, produzir, resultado)</th></tr>
        <tr><td>do homework</td><td>make a cake</td></tr>
        <tr><td>do the dishes</td><td>make a mistake</td></tr>
        <tr><td>do exercise</td><td>make a decision</td></tr>
        <tr><td>do a course</td><td>make money</td></tr>
        <tr><td>do research</td><td>make a speech</td></tr>
        <tr><td>do yoga</td><td>make a plan</td></tr>
        <tr><td>do business</td><td>make progress</td></tr>
        <tr><td>do your best</td><td>make an effort</td></tr>
      </table>

      <h4>Outros sinônimos de DO em contextos específicos:</h4>
      <ul>
        <li><strong>perform</strong> = realizar/executar → "perform a task / perform surgery" (formal, tarefas específicas)</li>
        <li><strong>carry out</strong> = realizar/executar → "carry out a plan / carry out research" (formal)</li>
        <li><strong>complete</strong> = completar → "complete a task / complete the form" (ênfase na conclusão)</li>
        <li><strong>accomplish</strong> = realizar/conseguir → "accomplish a goal" (com sucesso)</li>
        <li><strong>achieve</strong> = atingir → "achieve a result" (foco no resultado)</li>
        <li><strong>execute</strong> = executar → "execute a plan" (formal, técnico)</li>
        <li><strong>undertake</strong> = empreender → "undertake a project" (formal, compromisso)</li>
      </ul>

      <h4>Quando NÃO usar DO:</h4>
      <ul>
        <li>❌ "do a mistake" → ✅ "<strong>make</strong> a mistake" (erros = make)</li>
        <li>❌ "do a decision" → ✅ "<strong>make</strong> a decision" (decisões = make)</li>
        <li>❌ "do a photo" → ✅ "<strong>take</strong> a photo" (fotos = take)</li>
        <li>❌ "do a trip" → ✅ "<strong>take / go on</strong> a trip" (viagens = take/go on)</li>
        <li>❌ "do football" → ✅ "<strong>play</strong> football" (esportes com bola = play)</li>
        <li>❌ "do a party" → ✅ "<strong>have / throw</strong> a party" (festas = have/throw)</li>
        <li>❌ "do a speech" → ✅ "<strong>give / make</strong> a speech" (discurso = give/make)</li>
        <li>❌ "do progress" → ✅ "<strong>make</strong> progress" (progresso = make)</li>
      </ul>
    `,

    idioms: `
      <ol>
        <li><strong>Do or die</strong> = ou vai ou racha → "It's do or die — we have to win this match"</li>
        <li><strong>Do the trick</strong> = resolver o problema / funcionar → "A cup of tea should do the trick"</li>
        <li><strong>Do wonders (for)</strong> = fazer maravilhas → "Exercise does wonders for your mood"</li>
        <li><strong>Do justice to</strong> = fazer jus a / representar bem → "No photo can do justice to this view"</li>
        <li><strong>Do someone a favour</strong> = fazer um favor → "Do me a favour and close the door"</li>
        <li><strong>Do someone proud</strong> = deixar alguém orgulhoso → "You've done us all proud!"</li>
        <li><strong>Do without</strong> = se virar sem → "I can't do without coffee in the morning"</li>
        <li><strong>Could do with</strong> = precisar de / seria bom ter → "I could do with a holiday" = Eu precisava de férias</li>
        <li><strong>Done and dusted</strong> = resolvido e finalizado → "The project is done and dusted" (britânico)</li>
        <li><strong>Do the honours</strong> = fazer as honras → "Would you do the honours and cut the cake?"</li>
        <li><strong>What's done is done</strong> = o que está feito, feito está — não adianta lamentar</li>
        <li><strong>Easier said than done</strong> = mais fácil falar do que fazer → "I know, but it's easier said than done"</li>
        <li><strong>Have to do with</strong> = ter a ver com → "It has nothing to do with me"</li>
        <li><strong>Do a runner</strong> = fugir sem pagar / escapar → "He did a runner before the bill arrived" (britânico)</li>
        <li><strong>Do time</strong> = cumprir pena na prisão → "He did time for fraud"</li>
        <li><strong>Do the maths</strong> = fazer as contas → "Do the maths — it doesn't make sense!" (britânico: maths)</li>
        <li><strong>That'll do</strong> = chega / está bom assim → "That'll do, thank you"</li>
        <li><strong>Well done!</strong> = Parabéns! / Muito bem! → "Well done on passing your exam!"</li>
        <li><strong>Do a number on</strong> = causar dano emocional / enganar → "He really did a number on her"</li>
        <li><strong>Nothing doing</strong> = de jeito nenhum → "Nothing doing — I won't accept that"</li>
      </ol>
    `,

    errors: `
      <h4>Erro 1: Usar verbo no passado depois de "did" — o erro mais clássico!</h4>
      <ul>
        <li>❌ "Did you <strong>went</strong> there?" → ✅ "Did you <strong>go</strong> there?"</li>
        <li>❌ "She didn't <strong>came</strong>" → ✅ "She didn't <strong>come</strong>"</li>
        <li>❌ "Did he <strong>said</strong> that?" → ✅ "Did he <strong>say</strong> that?"</li>
        <li><strong>Regra:</strong> Com did/didn't, o verbo principal SEMPRE fica no infinitivo sem "to".</li>
      </ul>

      <h4>Erro 2: DO vs MAKE — confusão clássica de brasileiros</h4>
      <ul>
        <li>❌ "I did a mistake" → ✅ "I <strong>made</strong> a mistake"</li>
        <li>❌ "She did a decision" → ✅ "She <strong>made</strong> a decision"</li>
        <li>❌ "Let's do a plan" → ✅ "Let's <strong>make</strong> a plan"</li>
        <li>❌ "He's doing money" → ✅ "He's <strong>making</strong> money"</li>
      </ul>

      <h4>Erro 3: Esquecer o DO/DOES/DID nas perguntas</h4>
      <ul>
        <li>❌ "You like coffee?" → ✅ "<strong>Do</strong> you like coffee?"</li>
        <li>❌ "She works here?" → ✅ "<strong>Does</strong> she work here?"</li>
        <li>❌ "They went yesterday?" → ✅ "<strong>Did</strong> they go yesterday?"</li>
      </ul>

      <h4>Erro 4: Usar "does" com o verbo principal conjugado</h4>
      <ul>
        <li>❌ "Does she <strong>works</strong>?" → ✅ "Does she <strong>work</strong>?"</li>
        <li>❌ "He doesn't <strong>has</strong>" → ✅ "He doesn't <strong>have</strong>"</li>
        <li><strong>Regra:</strong> Com does/doesn't, o verbo principal fica no infinitivo sem -s.</li>
      </ul>

      <h4>Erro 5: Usar DO para esportes com bola</h4>
      <ul>
        <li>❌ "I do football" → ✅ "I <strong>play</strong> football"</li>
        <li>❌ "She does tennis" → ✅ "She <strong>plays</strong> tennis"</li>
        <li>✅ "I <strong>do</strong> yoga / karate / gymnastics" (sem bola — correto)</li>
      </ul>

      <h4>Erro 6: "Do" em vez de "take" ou "have" em contextos específicos</h4>
      <ul>
        <li>❌ "I did a photo" → ✅ "I <strong>took</strong> a photo"</li>
        <li>❌ "She's doing a nap" → ✅ "She's <strong>having/taking</strong> a nap"</li>
        <li>❌ "Let's do a walk" → ✅ "Let's <strong>go for</strong> a walk"</li>
      </ul>

      <h4>Erro 7: Usar "do" na resposta curta no lugar de outros auxiliares</h4>
      <ul>
        <li>❌ "Are you coming?" → "Yes, I do" → ✅ "Yes, I <strong>am</strong>"</li>
        <li>❌ "Can you swim?" → "Yes, I do" → ✅ "Yes, I <strong>can</strong>"</li>
        <li>❌ "Have you finished?" → "Yes, I do" → ✅ "Yes, I <strong>have</strong>"</li>
        <li><strong>Regra:</strong> A resposta curta repete o auxiliar da pergunta — não usa sempre "do".</li>
      </ul>

      <h4>Erro 8: Traduzir "fazer" sem verificar o verbo certo em inglês</h4>
      <ul>
        <li>❌ "I did a party" → ✅ "I <strong>had / threw</strong> a party"</li>
        <li>❌ "She does a speech" → ✅ "She <strong>gives / makes</strong> a speech"</li>
        <li>❌ "They did progress" → ✅ "They <strong>made</strong> progress"</li>
        <li>❌ "He did a promise" → ✅ "He <strong>made</strong> a promise"</li>
      </ul>
    `,

    phrasalVerbs: `
      <h3>B2 — Essenciais</h3>
      <ol>
        <li><strong>do up</strong> = renovar / fechar (botão, zíper) → "They're doing up the house" / "Do up your jacket"</li>
        <li><strong>do without</strong> = se virar sem / dispensar → "I can't do without my phone"</li>
        <li><strong>do away with</strong> = abolir / eliminar → "They should do away with this old rule"</li>
        <li><strong>do out</strong> = decorar/arrumar (britânico) → "She's doing out the spare room"</li>
        <li><strong>do over</strong> = refazer (americano) / revistar/maltratar (britânico) → "You'll have to do it over"</li>
      </ol>

      <h3>C1 — Avançados</h3>
      <ol>
        <li><strong>do out of</strong> = enganar alguém para tomar algo → "He did me out of my share of the money"</li>
        <li><strong>do for</strong> = servir para / estar acabado (gíria brit.) → "That sofa will do for now" / "I'm done for"</li>
        <li><strong>do with</strong> = ter a ver com / precisar de → "It has to do with trust" / "I could do with a break"</li>
        <li><strong>do in</strong> = exaurir / matar (gíria) → "This heat is doing me in"</li>
        <li><strong>do down</strong> = menosprezar (britânico) → "Stop doing yourself down — you're great!"</li>
      </ol>

      <h3>C2 — Proficiente</h3>
      <ol>
        <li><strong>do by</strong> = tratar alguém de certa forma → "She was hard done by" = Ela foi tratada injustamente</li>
        <li><strong>be done with</strong> = ter terminado definitivamente → "I'm done with this relationship"</li>
        <li><strong>have done with</strong> = acabar de vez → "Let's have done with the formalities"</li>
        <li><strong>nothing doing</strong> = de jeito nenhum → "Nothing doing — I won't sign that"</li>
        <li><strong>that does it</strong> = foi a gota d'água → "That does it! I'm calling the manager!"</li>
      </ol>
    `,

    pronunciation: `
      <h3>FORMAS PRINCIPAIS</h3>
      <ul>
        <li><strong>do</strong> = /duː/ = <em>dúu</em> (forma forte — palavra isolada ou com ênfase)</li>
        <li><strong>do</strong> = /də/ = <em>dâ</em> (forma fraca — no meio da frase, auxiliar)</li>
        <li><strong>does</strong> = /dʌz/ = <em>dâz</em> (forma forte e fraca são similares)</li>
        <li><strong>did</strong> = /dɪd/ = <em>did</em> (forma forte)</li>
        <li><strong>did</strong> = /dəd/ = <em>dâd</em> (forma fraca — quase inaudível)</li>
        <li><strong>doing</strong> = /ˈduːɪŋ/ = <em>DÚU-ing</em></li>
        <li><strong>done</strong> = /dʌn/ = <em>dân</em></li>
      </ul>

      <h3>ATENÇÃO — A vogal em "does" e "done"</h3>
      <p>A vogal em <strong>does</strong> e <strong>done</strong> é /ʌ/ — o som "â" curto e central, como em "bus", "cup", "sun". <strong>NÃO</strong> é o /uː/ de "do"!</p>
      <ul>
        <li><strong>do</strong> = /duː/ = <em>dúu</em> (longo)</li>
        <li><strong>does</strong> = /dʌz/ = <em>dâz</em> (curto e aberto)</li>
        <li><strong>done</strong> = /dʌn/ = <em>dân</em> (curto e aberto — rima com "sun", "fun", "run")</li>
      </ul>

      <h3>CONTRAÇÕES</h3>
      <ul>
        <li><strong>don't</strong> = /dəʊnt/ = <em>dóunt</em> (britânico) | /doʊnt/ = <em>dónt</em> (americano)</li>
        <li><strong>doesn't</strong> = /ˈdʌznt/ = <em>DÂZ-ânt</em></li>
        <li><strong>didn't</strong> = /ˈdɪdnt/ = <em>DID-ânt</em></li>
      </ul>

      <h3>DO em perguntas — ritmo natural</h3>
      <p>Em perguntas rápidas, o "do" inicial é sempre fraco e reduzido:</p>
      <ul>
        <li>"Do you know?" → devagar: <em>DÚU / iú / nóu</em> | rápido: <em>dâ-iú-nóu?</em></li>
        <li>"Does she live here?" → rápido: <em>dâz-chi-LÍV-híâ?</em></li>
        <li>"Did you see it?" → rápido: <em>did-jâ-SÍÍ-it?</em> (o "you" vira "jâ")</li>
        <li>"What do you do?" → rápido: <em>uót-dâ-jâ-DÚU?</em></li>
      </ul>

      <h3>DO ENFÁTICO — quando fica forte</h3>
      <p>Quando usado para ênfase ou contraste, o DO/DOES/DID é pronunciado de forma FORTE e com pitch mais alto:</p>
      <ul>
        <li>"I <strong>DO</strong> like it!" = <em>ái DÚU láik it!</em></li>
        <li>"She <strong>DOES</strong> care!" = <em>chii DÂZ kéâ!</em></li>
        <li>"I <strong>DID</strong> tell you!" = <em>ái DÍD tél iú!</em></li>
      </ul>

      <h3>RITMO NATURAL EM FRASES</h3>
      <ul>
        <li>"I don't know" → <em>ái-DÓUNT-nóu</em> (três sílabas fluídas)</li>
        <li>"She doesn't like it" → <em>chii-DÂZ-ânt-LÁIK-it</em></li>
        <li>"What are you doing?" → <em>uót-â-jâ-DÚU-ing?</em></li>
        <li>"Well done!" → <em>uél-DÂN!</em></li>
        <li>"It'll do" → <em>ÍT-âl-dúu</em></li>
      </ul>

      <h3>DICAS</h3>
      <ul>
        <li>"done" rima com "sun", "fun", "run" — <strong>nunca</strong> com "bone" ou "phone"</li>
        <li>Em fala rápida, "did you" soa como <em>"dídja"</em> → "Didja see it?"</li>
        <li>Em fala rápida, "do you" soa como <em>"dâjâ"</em> → "D'ya know what I mean?"</li>
        <li>O DO auxiliar fraco em perguntas é quase inaudível — é uma pequena sílaba antes do sujeito</li>
        <li>Britânico: "don't" tem o ditongo /əʊ/ mais longo e central do que o americano</li>
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
