const haveVerb = {
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
  
};

export default haveVerb;
