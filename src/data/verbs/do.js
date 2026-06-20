const doVerb = {
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
  
};

export default doVerb;
