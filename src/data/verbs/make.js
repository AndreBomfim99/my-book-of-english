const makeVerb = {
    meanings: `
      <h3>Significado principal: FAZER / CAUSAR / TORNAR</h3>
      <p>O verbo <strong>MAKE</strong> é um dos mais usados e versáteis do inglês. Não significa apenas "fazer" — tem nuances importantes que o diferenciam do verbo <strong>DO</strong>.</p>

      <h4>A) FAZER (criar, produzir, preparar algo concreto)</h4>
      <ul>
        <li><strong>She made a cake</strong> = Ela fez um bolo</li>
        <li><strong>He made a plan</strong> = Ele fez um plano</li>
        <li><strong>They made a film</strong> = Eles fizeram um filme</li>
        <li><strong>I'll make dinner</strong> = Vou fazer o jantar</li>
      </ul>

      <h4>B) CAUSAR / PROVOCAR (fazer algo acontecer)</h4>
      <ul>
        <li><strong>It made me laugh</strong> = Me fez rir</li>
        <li><strong>The news made her cry</strong> = A notícia a fez chorar</li>
        <li><strong>Don't make trouble</strong> = Não provoque confusão</li>
        <li><strong>The noise made it impossible to sleep</strong> = O barulho tornou impossível dormir</li>
      </ul>

      <h4>C) TORNAR / DEIXAR (make + objeto + adjetivo ou substantivo)</h4>
      <ul>
        <li><strong>It made me happy</strong> = Me deixou feliz</li>
        <li><strong>She made him a star</strong> = Ela o tornou uma estrela</li>
        <li><strong>This job makes me tired</strong> = Este trabalho me cansa</li>
        <li><strong>Make it clear</strong> = Deixe isso claro</li>
      </ul>

      <h4>D) OBRIGAR / FORÇAR (make + objeto + infinitivo sem "to")</h4>
      <ul>
        <li><strong>They made me wait</strong> = Eles me fizeram esperar</li>
        <li><strong>Don't make me do this</strong> = Não me obrigue a fazer isso</li>
        <li><strong>She made him apologise</strong> = Ela o obrigou a se desculpar</li>
      </ul>
      <p><strong>Atenção:</strong> make + objeto + verbo BASE (sem "to") — <em>They made me wait</em> (correto) | <em>They made me to wait</em> (errado). Na voz passiva, porém, o "to" volta: <em>I was made to wait.</em></p>

      <h4>E) GANHAR / RENDER (dinheiro, lucro)</h4>
      <ul>
        <li><strong>She makes £50,000 a year</strong> = Ela ganha £50.000 por ano</li>
        <li><strong>Did you make a profit?</strong> = Você teve lucro?</li>
        <li><strong>He makes a good living</strong> = Ele ganha bem a vida</li>
      </ul>

      <h4>F) CONSEGUIR CHEGAR / ATINGIR um objetivo</h4>
      <ul>
        <li><strong>We made it!</strong> = Conseguimos! / Chegamos!</li>
        <li><strong>Can you make it to the meeting?</strong> = Você consegue ir à reunião?</li>
        <li><strong>He made the final</strong> = Ele chegou à final</li>
      </ul>

      <h4>G) TOTALIZAR / EQUIVALER</h4>
      <ul>
        <li><strong>Two plus two makes four</strong> = Dois mais dois é quatro</li>
        <li><strong>That makes ten in total</strong> = Isso dá dez no total</li>
      </ul>

      <h4>MAKE vs DO — diferença fundamental</h4>
      <p>Esta é a maior dificuldade para brasileiros. A regra geral:</p>
      <ul>
        <li><strong>MAKE</strong> → criar, produzir, preparar algo: make a cake, make a plan, make a mistake</li>
        <li><strong>DO</strong> → realizar tarefa ou atividade: do homework, do the dishes, do exercise</li>
      </ul>
    `,

    tenses: `
      <h3>Formas do verbo MAKE (irregular)</h3>
      <p><strong>make → made → made</strong></p>
      <ul>
        <li>Base form: <strong>make</strong></li>
        <li>Past simple: <strong>made</strong></li>
        <li>Past participle: <strong>made</strong></li>
        <li>Present participle: <strong>making</strong></li>
      </ul>

      <h3>PRESENT SIMPLE (Presente Simples)</h3>
      <table>
        <tr><th>Sujeito</th><th>Afirmativa</th><th>Negativa</th><th>Interrogativa</th></tr>
        <tr><td>I / You / We / They</td><td>I <strong>make</strong></td><td>I <strong>don't make</strong></td><td><strong>Do</strong> I make?</td></tr>
        <tr><td>He / She / It</td><td>She <strong>makes</strong></td><td>She <strong>doesn't make</strong></td><td><strong>Does</strong> she make?</td></tr>
      </table>
      <ul>
        <li>I <strong>make</strong> coffee every morning = Faço café toda manhã</li>
        <li>She <strong>makes</strong> good decisions = Ela toma boas decisões</li>
        <li><strong>Does</strong> he <strong>make</strong> mistakes? = Ele comete erros?</li>
      </ul>

      <h3>PRESENT CONTINUOUS (Presente Contínuo)</h3>
      <p><strong>Estrutura:</strong> am/is/are + <strong>making</strong></p>
      <ul>
        <li>I <strong>am making</strong> dinner = Estou fazendo o jantar</li>
        <li>They <strong>are making</strong> a lot of noise = Estão fazendo muito barulho</li>
        <li>What <strong>are</strong> you <strong>making</strong>? = O que você está fazendo?</li>
      </ul>

      <h3>PAST SIMPLE (Passado Simples)</h3>
      <table>
        <tr><th>Sujeito</th><th>Afirmativa</th><th>Negativa</th><th>Interrogativa</th></tr>
        <tr><td>Todos</td><td>I <strong>made</strong></td><td>I <strong>didn't make</strong></td><td><strong>Did</strong> you make?</td></tr>
      </table>
      <ul>
        <li>She <strong>made</strong> a mistake = Ela cometeu um erro</li>
        <li>We <strong>didn't make</strong> it in time = Não chegamos a tempo</li>
        <li><strong>Did</strong> he <strong>make</strong> a speech? = Ele fez um discurso?</li>
      </ul>

      <h3>PAST CONTINUOUS (Passado Contínuo)</h3>
      <p><strong>Estrutura:</strong> was/were + <strong>making</strong></p>
      <ul>
        <li>I <strong>was making</strong> dinner when you called = Estava fazendo o jantar quando você ligou</li>
        <li>They <strong>were making</strong> plans all day = Ficaram fazendo planos o dia todo</li>
      </ul>

      <h3>PRESENT PERFECT</h3>
      <p><strong>Estrutura:</strong> have/has + <strong>made</strong></p>
      <ul>
        <li>I <strong>have made</strong> my decision = Tomei minha decisão</li>
        <li>She <strong>has made</strong> a lot of progress = Ela fez muito progresso</li>
        <li>They <strong>have never made</strong> a mistake like this = Nunca cometeram um erro assim</li>
      </ul>

      <h3>PRESENT PERFECT CONTINUOUS</h3>
      <p><strong>Estrutura:</strong> have/has been + <strong>making</strong></p>
      <ul>
        <li>She <strong>has been making</strong> plans all week = Ela tem feito planos a semana toda</li>
        <li>They <strong>have been making</strong> a lot of noise lately = Estão fazendo muito barulho ultimamente</li>
      </ul>

      <h3>PAST PERFECT</h3>
      <p><strong>Estrutura:</strong> had + <strong>made</strong></p>
      <ul>
        <li>I <strong>had made</strong> a reservation = Eu tinha feito uma reserva</li>
        <li>By the time she arrived, he <strong>had made</strong> dinner = Quando ela chegou, ele já tinha feito o jantar</li>
      </ul>

      <h3>PAST PERFECT CONTINUOUS</h3>
      <p><strong>Estrutura:</strong> had been + <strong>making</strong></p>
      <ul>
        <li>She <strong>had been making</strong> mistakes all along = Ela vinha cometendo erros o tempo todo</li>
      </ul>

      <h3>FUTURE SIMPLE (will)</h3>
      <p><strong>Estrutura:</strong> will + <strong>make</strong></p>
      <ul>
        <li>I <strong>will make</strong> it = Vou conseguir</li>
        <li>This <strong>will make</strong> things easier = Isso vai facilitar as coisas</li>
        <li>It <strong>won't make</strong> a difference = Não vai fazer diferença</li>
      </ul>

      <h3>FUTURE com GOING TO</h3>
      <p><strong>Estrutura:</strong> am/is/are going to + <strong>make</strong></p>
      <ul>
        <li>I <strong>am going to make</strong> a cake = Vou fazer um bolo</li>
        <li>She <strong>is going to make</strong> a speech = Ela vai fazer um discurso</li>
      </ul>

      <h3>FUTURE CONTINUOUS</h3>
      <p><strong>Estrutura:</strong> will be + <strong>making</strong></p>
      <ul>
        <li>This time tomorrow, I <strong>will be making</strong> my presentation = Amanhã a esta hora estarei fazendo minha apresentação</li>
      </ul>

      <h3>FUTURE PERFECT</h3>
      <p><strong>Estrutura:</strong> will have + <strong>made</strong></p>
      <ul>
        <li>By Friday, she <strong>will have made</strong> her decision = Até sexta, ela terá tomado sua decisão</li>
      </ul>

      <h3>CONDITIONAL (would)</h3>
      <p><strong>Estrutura:</strong> would + <strong>make</strong></p>
      <ul>
        <li>I <strong>would make</strong> a great leader = Eu seria um ótimo líder</li>
        <li>It <strong>would make</strong> sense = Faria sentido</li>
        <li>That <strong>would make</strong> me very happy = Isso me deixaria muito feliz</li>
      </ul>

      <h3>MODAL VERBS + MAKE</h3>
      <ul>
        <li>You <strong>should make</strong> an effort = Você deveria se esforçar</li>
        <li>She <strong>can make</strong> things happen = Ela consegue fazer as coisas acontecerem</li>
        <li>He <strong>must make</strong> a decision = Ele precisa tomar uma decisão</li>
        <li>We <strong>might make</strong> it = Talvez a gente consiga</li>
        <li>You <strong>could make</strong> more money = Você poderia ganhar mais dinheiro</li>
      </ul>

      <h3>VOZ PASSIVA (be + made)</h3>
      <ul>
        <li>The film <strong>was made</strong> in 1999 = O filme foi feito em 1999</li>
        <li>The decision <strong>has been made</strong> = A decisão foi tomada</li>
        <li>A profit <strong>will be made</strong> = Um lucro será obtido</li>
        <li>Mistakes <strong>were made</strong> = Erros foram cometidos</li>
        <li>I <strong>was made to</strong> wait = Fui obrigado a esperar</li>
      </ul>
      <p><strong>IMPORTANTE:</strong> Na voz passiva, o "to" volta — <em>I was made to wait</em> (correto), não <em>I was made wait</em>.</p>

      <h3>INFINITIVE / GERUND / PARTICIPLE</h3>
      <ul>
        <li><strong>To make</strong> a difference = Fazer diferença</li>
        <li><strong>Making</strong> friends is easy = Fazer amigos é fácil</li>
        <li><strong>Made</strong> in Britain = Feito na Grã-Bretanha</li>
      </ul>
    `,

    collocations: `
      <h4>MAKE + substantivo: comunicação</h4>
      <ul>
        <li>make a <strong>call</strong> = fazer uma ligação</li>
        <li>make a <strong>speech</strong> = fazer um discurso</li>
        <li>make a <strong>comment</strong> = fazer um comentário</li>
        <li>make a <strong>complaint</strong> = fazer uma reclamação</li>
        <li>make a <strong>suggestion</strong> = dar uma sugestão</li>
        <li>make a <strong>promise</strong> = fazer uma promessa</li>
        <li>make an <strong>excuse</strong> = dar uma desculpa</li>
        <li>make an <strong>announcement</strong> = fazer um anúncio</li>
        <li>make a <strong>confession</strong> = fazer uma confissão</li>
      </ul>

      <h4>MAKE + substantivo: decisões e planos</h4>
      <ul>
        <li>make a <strong>decision</strong> = tomar uma decisão</li>
        <li>make a <strong>choice</strong> = fazer uma escolha</li>
        <li>make a <strong>plan</strong> = fazer um plano</li>
        <li>make an <strong>arrangement</strong> = combinar / organizar</li>
        <li>make a <strong>reservation</strong> = fazer uma reserva</li>
        <li>make an <strong>appointment</strong> = marcar uma consulta</li>
      </ul>

      <h4>MAKE + substantivo: dinheiro e negócios</h4>
      <ul>
        <li>make <strong>money</strong> = ganhar dinheiro</li>
        <li>make a <strong>profit</strong> = ter lucro</li>
        <li>make a <strong>loss</strong> = ter prejuízo</li>
        <li>make a <strong>deal</strong> = fechar um negócio</li>
        <li>make an <strong>offer</strong> = fazer uma oferta</li>
        <li>make a <strong>living</strong> = ganhar a vida</li>
        <li>make a <strong>fortune</strong> = fazer fortuna</li>
      </ul>

      <h4>MAKE + substantivo: erros e problemas</h4>
      <ul>
        <li>make a <strong>mistake</strong> = cometer um erro</li>
        <li>make an <strong>error</strong> = cometer um erro (mais formal)</li>
        <li>make <strong>trouble</strong> = causar problema</li>
        <li>make a <strong>mess</strong> = fazer bagunça</li>
        <li>make a <strong>fuss</strong> = fazer alarde / drama</li>
        <li>make a <strong>scene</strong> = fazer uma cena</li>
      </ul>

      <h4>MAKE + substantivo: progresso e esforço</h4>
      <ul>
        <li>make <strong>progress</strong> = fazer progresso</li>
        <li>make an <strong>effort</strong> = fazer um esforço</li>
        <li>make an <strong>attempt</strong> = fazer uma tentativa</li>
        <li>make a <strong>difference</strong> = fazer diferença</li>
        <li>make an <strong>impression</strong> = causar uma impressão</li>
        <li>make a <strong>contribution</strong> = fazer uma contribuição</li>
      </ul>

      <h4>MAKE + substantivo: comida e ambiente</h4>
      <ul>
        <li>make <strong>breakfast / lunch / dinner</strong> = preparar o café / almoço / jantar</li>
        <li>make <strong>coffee / tea</strong> = preparar café / chá</li>
        <li>make <strong>noise</strong> = fazer barulho</li>
        <li>make the <strong>bed</strong> = fazer a cama</li>
        <li>make a <strong>fire</strong> = fazer fogo / acender uma fogueira</li>
        <li>make <strong>room</strong> = abrir espaço</li>
      </ul>

      <h4>MAKE + adjetivo (tornar algo)</h4>
      <ul>
        <li>make it <strong>clear</strong> = deixar claro</li>
        <li>make it <strong>possible</strong> = tornar possível</li>
        <li>make it <strong>happen</strong> = fazer acontecer</li>
        <li>make it <strong>worse</strong> = piorar a situação</li>
        <li>make yourself <strong>comfortable</strong> = fique à vontade</li>
        <li>make someone <strong>feel</strong> welcome = fazer alguém se sentir bem-vindo</li>
      </ul>

      <h4>MADE + preposição (expressões fixas)</h4>
      <ul>
        <li><strong>made of</strong> = feito de (material visível, sem transformação) → "made of wood"</li>
        <li><strong>made from</strong> = feito de (com transformação) → "wine is made from grapes"</li>
        <li><strong>made in</strong> = fabricado em (país ou lugar) → "Made in Brazil"</li>
        <li><strong>made for</strong> = feito para → "They were made for each other"</li>
        <li><strong>made up of</strong> = composto de → "The team is made up of experts"</li>
      </ul>
    `,

    register: `
      <h3>INFORMAL (conversação casual)</h3>
      <p>Contrações e estrutura leve são comuns:</p>
      <ul>
        <li><strong>"We made it!"</strong> = Conseguimos! / Chegamos!</li>
        <li><strong>"Stop making excuses"</strong> = Para de dar desculpa</li>
        <li><strong>"What do you make of it?"</strong> = O que você acha?</li>
        <li><strong>"I'll make it up to you"</strong> = Vou compensar você</li>
        <li><strong>"Make yourself at home"</strong> = Fique à vontade</li>
        <li><strong>"Don't make a big deal out of it"</strong> = Não exagera</li>
        <li><strong>"Can you make it?"</strong> = Você consegue ir / aparecer?</li>
      </ul>

      <h3>FORMAL (escrita profissional / acadêmica)</h3>
      <p>Preferência por substantivos derivados e estrutura mais elaborada:</p>
      <ul>
        <li><strong>"We would like to make it clear that..."</strong> = Gostaríamos de deixar claro que...</li>
        <li><strong>"The company made a significant contribution to..."</strong> = A empresa fez uma contribuição significativa para...</li>
        <li><strong>"A decision was made to..."</strong> (passiva) = Uma decisão foi tomada de...</li>
        <li><strong>"May I make a suggestion?"</strong> = Posso fazer uma sugestão?</li>
        <li><strong>"We will make every effort to resolve this matter."</strong> = Faremos todos os esforços para resolver este assunto.</li>
        <li><strong>"This makes it necessary to..."</strong> = Isso torna necessário...</li>
      </ul>

      <h3>Registros específicos</h3>
      <h4>Jurídico / burocrático:</h4>
      <ul>
        <li><strong>make a claim</strong> = fazer uma reivindicação</li>
        <li><strong>make a will</strong> = fazer um testamento</li>
        <li><strong>make a statement</strong> = prestar uma declaração</li>
        <li><strong>make an application</strong> = fazer uma solicitação</li>
      </ul>
      <h4>Médico:</h4>
      <ul>
        <li><strong>make a diagnosis</strong> = fazer um diagnóstico</li>
        <li><strong>make a recovery</strong> = se recuperar</li>
        <li><strong>make a referral</strong> = encaminhar para especialista</li>
      </ul>
      <h4>Acadêmico:</h4>
      <ul>
        <li><strong>make an argument</strong> = apresentar um argumento</li>
        <li><strong>make a case for</strong> = argumentar a favor de</li>
        <li><strong>make reference to</strong> = fazer referência a</li>
        <li><strong>make an assumption</strong> = fazer uma suposição</li>
      </ul>

      <h3>MUITO INFORMAL (gíria / coloquial)</h3>
      <ul>
        <li><strong>"She's got it made"</strong> = Ela está bem de vida / tem tudo garantido</li>
        <li><strong>"Fake it till you make it"</strong> = Finja competência até ter de verdade</li>
        <li><strong>"Make or break"</strong> = Tudo ou nada</li>
        <li><strong>"He's on the make"</strong> = Ele está tentando se dar bem (oportunista)</li>
      </ul>
    `,

    synonyms: `
      <p>O verbo MAKE tem muitos sinônimos dependendo do contexto. Escolher o certo deixa seu inglês mais preciso e natural.</p>

      <h4>Para "criar / produzir":</h4>
      <ul>
        <li><strong>create</strong> = criar (mais artístico, abstrato) → "create a painting", "create a system"</li>
        <li><strong>produce</strong> = produzir (quantidade, escala industrial) → "produce goods", "produce results"</li>
        <li><strong>build</strong> = construir (estrutura física ou metafórica) → "build a website", "build a team"</li>
        <li><strong>prepare</strong> = preparar (comida, documentos) → mais específico que make para comida formal</li>
        <li><strong>manufacture</strong> = fabricar (contexto industrial) → "manufacture cars"</li>
        <li><strong>craft</strong> = elaborar com cuidado e habilidade → "craft a message", "craft a strategy"</li>
        <li><strong>generate</strong> = gerar (resultado, energia, renda) → "generate revenue"</li>
      </ul>

      <h4>Para "causar / forçar":</h4>
      <ul>
        <li><strong>cause</strong> = causar (mais neutro, sem sujeito humano necessário) → "cause problems"</li>
        <li><strong>force</strong> = forçar (mais intenso, com resistência implícita) → "force someone to do something"</li>
        <li><strong>compel</strong> = compelir (formal, pressão moral ou legal) → "compel someone to act"</li>
        <li><strong>drive</strong> = levar a (emocional, motivacional) → "drive someone crazy", "drive change"</li>
        <li><strong>prompt</strong> = levar a / induzir (formal) → "this prompted him to reconsider"</li>
      </ul>

      <h4>Para "ganhar (dinheiro)":</h4>
      <ul>
        <li><strong>earn</strong> = ganhar (mais específico: por trabalho, mérito) → "earn a salary"</li>
        <li><strong>generate</strong> = gerar (negócios, investimentos) → "generate revenue"</li>
        <li><strong>bring in</strong> = trazer (informal) → "bring in good money"</li>
      </ul>

      <h4>Quando NÃO usar MAKE:</h4>
      <ul>
        <li>❌ "make the dishes" → ✅ <strong>do the dishes</strong> (tarefa doméstica)</li>
        <li>❌ "make homework" → ✅ <strong>do homework</strong> (atividade)</li>
        <li>❌ "make exercise" → ✅ <strong>do exercise / do sport</strong></li>
        <li>❌ "make a photo" → ✅ <strong>take a photo</strong></li>
        <li>❌ "make a shower" → ✅ <strong>take / have a shower</strong></li>
        <li>❌ "make a walk" → ✅ <strong>go for a walk / take a walk</strong></li>
        <li>❌ "make a trip" → ✅ <strong>take a trip / go on a trip</strong></li>
        <li>❌ "make a nap" → ✅ <strong>take a nap</strong></li>
      </ul>
    `,

    idioms: `
      <ol>
        <li><strong>Make up your mind</strong> = decidir → "Just make up your mind already!"</li>
        <li><strong>Make ends meet</strong> = conseguir sobreviver financeiramente → "It's hard to make ends meet these days"</li>
        <li><strong>Make a mountain out of a molehill</strong> = fazer tempestade em copo d'água → "You're making a mountain out of a molehill"</li>
        <li><strong>Make or break</strong> = tudo ou nada, decisivo → "This is a make-or-break moment for the company"</li>
        <li><strong>Make the most of</strong> = aproveitar ao máximo → "Make the most of your time abroad"</li>
        <li><strong>Make do (with)</strong> = se virar com o que tem → "We'll have to make do with less"</li>
        <li><strong>Make it up to someone</strong> = compensar alguém → "I'll make it up to you, I promise"</li>
        <li><strong>Make believe</strong> = fingir / fantasiar → "Let's make believe we're pirates"</li>
        <li><strong>Make it</strong> = conseguir / sobreviver / ter sucesso → "I didn't think we'd make it"</li>
        <li><strong>Make sense</strong> = fazer sentido → "Does this make sense to you?"</li>
        <li><strong>Make matters worse</strong> = piorar as coisas → "Don't make matters worse"</li>
        <li><strong>Make yourself scarce</strong> = sumir discretamente → "After the argument, he made himself scarce"</li>
        <li><strong>Make a killing</strong> = ganhar muito dinheiro → "He made a killing on the stock market"</li>
        <li><strong>Make no mistake</strong> = não se engane / fique claro → "Make no mistake, this is serious"</li>
        <li><strong>Make light of</strong> = minimizar / tratar com leveza → "She made light of her illness"</li>
        <li><strong>Make a name for yourself</strong> = ficar famoso / reconhecido → "She made a name for herself in the industry"</li>
        <li><strong>Make headway</strong> = avançar / progredir → "We're finally making headway"</li>
        <li><strong>Make waves</strong> = causar impacto / agitar as coisas → "Her research made waves in the scientific community"</li>
        <li><strong>Make a break for it</strong> = tentar escapar → "They made a break for it"</li>
        <li><strong>Make short work of</strong> = resolver/acabar rapidamente → "He made short work of the problem"</li>
      </ol>
    `,

    errors: `
      <h4>Erro 1: MAKE vs DO</h4>
      <ul>
        <li>❌ "I make exercise every day" → ✅ "I <strong>do</strong> exercise every day"</li>
        <li>❌ "She made her homework" → ✅ "She <strong>did</strong> her homework"</li>
        <li>❌ "He makes sport on weekends" → ✅ "He <strong>does</strong> sport / <strong>plays</strong> sport on weekends"</li>
      </ul>

      <h4>Erro 2: Make + "to" + verbo</h4>
      <ul>
        <li>❌ "They made me to leave" → ✅ "They made me <strong>leave</strong>"</li>
        <li>❌ "She made him to apologise" → ✅ "She made him <strong>apologise</strong>"</li>
        <li>✅ EXCEÇÃO na voz passiva: "I was made <strong>to</strong> leave" (o "to" volta na passiva)</li>
      </ul>

      <h4>Erro 3: Make uma foto / banho / passeio</h4>
      <ul>
        <li>❌ "She made a photo" → ✅ "She <strong>took</strong> a photo"</li>
        <li>❌ "I made a shower" → ✅ "I <strong>had / took</strong> a shower"</li>
        <li>❌ "Let's make a walk" → ✅ "Let's <strong>go for</strong> a walk"</li>
        <li>❌ "We made a trip to Paris" → ✅ "We <strong>took / went on</strong> a trip to Paris"</li>
      </ul>

      <h4>Erro 4: Confundir "make it" com "do it"</h4>
      <ul>
        <li>❌ "Can you do it to the party?" → ✅ "Can you <strong>make it</strong> to the party?"</li>
        <li><em>make it = conseguir comparecer / chegar</em></li>
      </ul>

      <h4>Erro 5: Made of / made from / made in</h4>
      <ul>
        <li><strong>made of</strong> = material visível, sem transformação química → "made of wood", "made of gold"</li>
        <li><strong>made from</strong> = com transformação (o material original muda) → "wine is made from grapes"</li>
        <li><strong>made in</strong> = lugar de fabricação → "Made in Brazil"</li>
        <li>❌ "The table is made from wood" → ✅ "The table is <strong>made of</strong> wood"</li>
        <li>❌ "This is made of grapes" → ✅ "This is <strong>made from</strong> grapes"</li>
      </ul>

      <h4>Erro 6: Make sense (concordância)</h4>
      <ul>
        <li>❌ "This make sense" → ✅ "This <strong>makes</strong> sense" (3ª pessoa do singular)</li>
        <li>❌ "It don't make sense" → ✅ "It <strong>doesn't</strong> make sense"</li>
      </ul>

      <h4>Erro 7: Make a decision vs Take a decision</h4>
      <ul>
        <li>✅ No inglês britânico: tanto <strong>make</strong> a decision quanto <strong>take</strong> a decision são aceitos</li>
        <li>✅ No inglês americano: prefere-se <strong>make</strong> a decision</li>
        <li>❌ "Do a decision" — nunca se usa com DO</li>
      </ul>

      <h4>Erro 8: Make + progressivo desnecessário</h4>
      <ul>
        <li>Para estados/resultados: use o simple, não o continuous</li>
        <li>❌ "This is making sense now" (em geral) → ✅ "This <strong>makes</strong> sense now"</li>
        <li>✅ Mas: "You're making progress" (processo contínuo) — correto</li>
      </ul>
    `,

    phrasalVerbs: `
      <h3>B2 — Essenciais</h3>
      <ol>
        <li><strong>make up</strong> = inventar / reconciliar / compor / maquiar → "She made up a story" / "They made up after the fight" / "Women make up 60% of staff" / "She spent an hour making up"</li>
        <li><strong>make out</strong> = entender / enxergar / se sair → "I can't make out what it says" / "How are you making out?"</li>
        <li><strong>make up for</strong> = compensar → "I need to make up for lost time"</li>
        <li><strong>make for</strong> = dirigir-se para / contribuir para → "She made for the exit" / "It makes for an interesting read"</li>
        <li><strong>make off (with)</strong> = fugir / escapar com algo → "The thieves made off with the jewels"</li>
        <li><strong>make over</strong> = reformar / dar nova aparência a → "They made over the old house completely"</li>
      </ol>

      <h3>C1 — Avançados</h3>
      <ol>
        <li><strong>make of</strong> = achar / entender / interpretar → "What do you make of his behaviour?"</li>
        <li><strong>make do with</strong> = se virar com o que tem → "We'll have to make do with what we have"</li>
        <li><strong>make towards</strong> = mover-se em direção a → "He made towards the door"</li>
        <li><strong>make into</strong> = transformar em → "The old warehouse was made into luxury flats"</li>
        <li><strong>make away with</strong> = roubar e fugir → "They made away with the cash"</li>
      </ol>

      <h3>C2 — Proficiente</h3>
      <ol>
        <li><strong>make out to be</strong> = retratar como / fazer parecer → "He's not as bad as they make him out to be"</li>
        <li><strong>make up to</strong> = bajular / tentar impressionar → "She's always making up to the boss"</li>
        <li><strong>make of oneself</strong> = tornar-se / construir para si → "She made something of herself against all odds"</li>
      </ol>

      <h3>Atenção: make up tem 6 significados diferentes!</h3>
      <ul>
        <li>inventar → "Stop making things up!"</li>
        <li>reconciliar → "Did they make up after the argument?"</li>
        <li>compor / formar → "Women make up 60% of our staff"</li>
        <li>maquiar → "She spent an hour making up"</li>
        <li>compensar → "Make up for lost time"</li>
        <li>preparar (cama, encomenda) → "Can you make up the spare room?"</li>
      </ul>
    `,

    pronunciation: `
      <h3>FORMAS BASE</h3>
      <ul>
        <li><strong>make</strong> = /meɪk/ = <em>méik</em> — vogal longa "ei", "k" final bem pronunciado</li>
        <li><strong>made</strong> = /meɪd/ = <em>méid</em></li>
        <li><strong>making</strong> = /ˈmeɪkɪŋ/ = <em>MÉI-king</em></li>
      </ul>

      <h3>FORMAS FRACAS EM FRASE</h3>
      <p>O verbo <strong>make</strong> não tem forma fraca — ao contrário de "be" ou "have", sempre carrega o acento por ser o verbo principal de significado.</p>

      <h3>STRESS EM FRASES COMUNS</h3>
      <ul>
        <li><strong>make a decision</strong> → <em>méik â di-SI-zhân</em></li>
        <li><strong>make it happen</strong> → <em>méik it HÁ-pân</em></li>
        <li><strong>make up your mind</strong> → <em>méik ÂP iâ MÁIND</em></li>
        <li><strong>make sense</strong> → <em>méik SÉNS</em></li>
        <li><strong>make a mistake</strong> → <em>méik â misTÉIK</em></li>
      </ul>

      <h3>PHRASAL VERBS — onde cai o stress</h3>
      <p>Em phrasal verbs, o stress cai na partícula, não no "make":</p>
      <ul>
        <li><strong>make UP</strong> → <em>méik ÁP</em></li>
        <li><strong>make OUT</strong> → <em>méik ÁUT</em></li>
        <li><strong>make OFF</strong> → <em>méik ÓF</em></li>
        <li><strong>make FOR</strong> → <em>méik FÓR</em></li>
      </ul>

      <h3>BRITÂNICO vs AMERICANO</h3>
      <ul>
        <li><strong>make</strong> = /meɪk/ em ambos — idêntico</li>
        <li><strong>made</strong> = /meɪd/ em ambos — idêntico</li>
        <li>A diferença aparece nas palavras ao redor: "can't make it" — britânico: <em>kɑːnt méik it</em> (a longo) | americano: <em>kænt méik it</em> (a curto)</li>
      </ul>

      <h3>RITMO NATURAL EM FRASES</h3>
      <ul>
        <li>"I can make it" → rápido: <em>ai kân MÉIKit</em></li>
        <li>"She made a mistake" → <em>chi MÉID â misTÉIK</em></li>
        <li>"Make yourself at home" → <em>MÉIK iâself ât HÔUM</em></li>
        <li>"What do you make of it?" → <em>uót diâ MÉIK âvit?</em></li>
        <li>"It doesn't make sense" → <em>it DÁZânt méik SÉNS</em></li>
      </ul>

      <h3>DICAS</h3>
      <ul>
        <li>O "ei" de make é um ditongo — começa em "é" e desliza para "i": <em>m-EIk</em></li>
        <li>O "k" final é sempre pronunciado — não engula: <em>méiK</em></li>
        <li>Em "making", o stress é sempre na primeira sílaba: <em>MÉI-king</em></li>
        <li>Em phrasal verbs, o stress cai na partícula: <em>make ÁP</em>, não <em>MÁK ap</em></li>
        <li>"made" rima com "paid", "said" não — cuidado: "said" = /sed/, não /seɪd/</li>
      </ul>
    `,

};

export default makeVerb;
