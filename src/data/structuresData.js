export const structures = [
  {
    id: 'declarativa',
    number: 1,
    title: 'Declarativa',
    subtitle: 'A mais comum',
    formula: 'S + V + O + (Complemento) + (Advérbio)',
    example: 'She reads books every night.',
    content: `
      <h3>O que é</h3>
      <p>É a estrutura usada para afirmar ou negar fatos. É a base de quase tudo no inglês.</p>

      <h3>Os elementos</h3>
      <ul>
        <li><strong>Sujeito (S)</strong> — quem pratica a ação: She / The dog / My brother</li>
        <li><strong>Verbo (V)</strong> — a ação ou estado: eats / is / wrote</li>
        <li><strong>Objeto (O)</strong> — quem recebe a ação. Pode ser direto, indireto, ou duplo.</li>
        <li><strong>Complemento</strong> — descreve o sujeito ou objeto: She is a doctor.</li>
        <li><strong>Advérbio</strong> — modo, lugar, tempo, frequência. Ordem preferida: Modo → Lugar → Tempo (MPT).</li>
      </ul>

      <h3>Exemplos do mais simples ao mais complexo</h3>
      <ul>
        <li>✓ <strong>S+V:</strong> <em>Dogs bark.</em></li>
        <li>✓ <strong>S+V+O:</strong> <em>She reads books.</em></li>
        <li>✓ <strong>S+V+OI+OD:</strong> <em>He sent her a message.</em></li>
        <li>✓ <strong>S+V+O+C:</strong> <em>They elected him president.</em></li>
        <li>✓ <strong>S+V+modo+lugar+tempo:</strong> <em>She studied hard at the library yesterday.</em></li>
      </ul>

      <h3>Afirmativa vs. Negativa</h3>
      <ul>
        <li>✓ <strong>Afirmativa:</strong> <em>She drinks coffee every morning.</em></li>
        <li>✓ <strong>Negativa:</strong> <em>She does not drink coffee every morning.</em></li>
      </ul>

      <h3>Cuidados para brasileiros</h3>
      <ul>
        <li>✗ <strong>Errado:</strong> <em>Likes she coffee.</em></li>
        <li>✓ <strong>Certo:</strong> <em>She likes coffee.</em></li>
        <li>✗ <strong>Errado:</strong> <em>Is raining.</em></li>
        <li>✓ <strong>Certo:</strong> <em>It is raining.</em></li>
      </ul>
    `,
  },

  {
    id: 'interrogativa',
    number: 2,
    title: 'Interrogativa',
    subtitle: 'Perguntas',
    formula: 'Aux + S + V + O',
    example: 'Does she read books every night?',
    content: `
      <h3>O que é</h3>
      <p>Usada para fazer perguntas. O auxiliar vem antes do sujeito — o inverso da declarativa.</p>

      <h3>Tipos de pergunta</h3>
      <table>
        <tr><th>Tipo</th><th>Estrutura</th><th>Exemplo</th></tr>
        <tr><td><strong>Yes/No</strong></td><td>Aux + S + V?</td><td>Do you like coffee?</td></tr>
        <tr><td><strong>Wh-question</strong></td><td>Wh + Aux + S + V?</td><td>What do you like?</td></tr>
        <tr><td><strong>Tag question</strong></td><td>Frase, + tag?</td><td>She likes coffee, doesn't she?</td></tr>
      </table>

      <h3>Cuidado para brasileiros</h3>
      <ul>
        <li>✗ <strong>Errado:</strong> <em>You are ready?</em></li>
        <li>✓ <strong>Certo:</strong> <em>Are you ready?</em></li>
      </ul>
    `,
  },

  {
    id: 'imperativa',
    number: 3,
    title: 'Imperativa',
    subtitle: 'Ordens e pedidos',
    formula: "V + O  (sujeito 'you' oculto)",
    example: 'Read this book!',
    content: `
      <h3>O que é</h3>
      <p>Usada para dar ordens, instruções, pedidos ou sugestões. O sujeito 'you' é sempre omitido.</p>

      <h3>Exemplos</h3>
      <ul>
        <li>✓ <strong>Ordem:</strong> <em>Close the door.</em></li>
        <li>✓ <strong>Instrução:</strong> <em>Turn left at the corner.</em></li>
        <li>✓ <strong>Pedido educado:</strong> <em>Please sit down.</em></li>
        <li>✓ <strong>Sugestão:</strong> <em>Let's go for a walk.</em></li>
        <li>✓ <strong>Negativa:</strong> <em>Don't touch that.</em></li>
      </ul>

      <h3>Por que o sujeito some?</h3>
      <p>Em imperativos, o sujeito 'you' é subentendido. Compare: <em>You consider this.</em> (declarativa) vs. <em>Consider this!</em> (imperativa).</p>
    `,
  },

  {
    id: 'passiva',
    number: 4,
    title: 'Passiva',
    subtitle: 'Foco no objeto',
    formula: 'S + be + V(past participle) + (by + agente)',
    example: 'The book was written by her.',
    content: `
      <h3>O que é</h3>
      <p>Usada quando o foco é na ação ou no objeto, e não em quem praticou a ação. O agente pode ser omitido.</p>

      <h3>Quando usar</h3>
      <ul>
        <li>Quando o agente é desconhecido: <em>My car was stolen.</em></li>
        <li>Quando o agente é óbvio: <em>He was arrested.</em> (pela polícia)</li>
        <li>Em textos formais e científicos: <em>The experiment was conducted in 2023.</em></li>
      </ul>

      <h3>Ativa vs. Passiva</h3>
      <ul>
        <li>✓ <strong>Ativa:</strong> <em>She wrote the book.</em></li>
        <li>✓ <strong>Passiva:</strong> <em>The book was written by her.</em></li>
        <li>✓ <strong>Passiva sem agente:</strong> <em>The book was written in 1984.</em></li>
      </ul>
    `,
  },

  {
    id: 'exclamativa',
    number: 5,
    title: 'Exclamativa',
    subtitle: 'Ênfase e surpresa',
    formula: 'What/How + (adj) + S + V',
    example: 'What a great book she wrote!',
    content: `
      <h3>O que é</h3>
      <p>Usada para expressar emoção intensa — admiração, surpresa, raiva.</p>

      <h3>Com What vs. How</h3>
      <table>
        <tr><th>Palavra</th><th>Uso</th><th>Exemplo</th></tr>
        <tr><td><strong>What</strong></td><td>Antes de substantivo</td><td>What a beautiful day!</td></tr>
        <tr><td><strong>How</strong></td><td>Antes de adjetivo/advérbio</td><td>How wonderful!</td></tr>
      </table>

      <ul>
        <li>✓ <strong>Exemplo 1:</strong> <em>What a talented singer she is!</em></li>
        <li>✓ <strong>Exemplo 2:</strong> <em>How quickly he runs!</em></li>
      </ul>
    `,
  },

  {
    id: 'condicional',
    number: 6,
    title: 'Condicional',
    subtitle: 'Hipóteses e condições',
    formula: 'If + condição + resultado',
    example: 'If she reads more, she will improve.',
    content: `
      <h3>O que é</h3>
      <p>Usada para expressar hipóteses, condições e seus resultados. Há quatro tipos principais.</p>

      <table>
        <tr><th>Tipo</th><th>Uso</th><th>Condição</th><th>Resultado</th></tr>
        <tr><td><strong>Zero</strong></td><td>Fatos gerais</td><td>If you heat water,</td><td>it boils.</td></tr>
        <tr><td><strong>1st</strong></td><td>Situação real/possível</td><td>If it rains,</td><td>I will stay home.</td></tr>
        <tr><td><strong>2nd</strong></td><td>Situação hipotética</td><td>If I were rich,</td><td>I would travel.</td></tr>
        <tr><td><strong>3rd</strong></td><td>Passado irreal</td><td>If she had studied,</td><td>she would have passed.</td></tr>
      </table>
    `,
  },

  {
    id: 'existencial',
    number: 7,
    title: 'Existencial',
    subtitle: 'Indicar existência',
    formula: 'There + be + sujeito + (lugar)',
    example: 'There is a book on the table.',
    content: `
      <h3>O que é</h3>
      <p>Usada para indicar que algo existe ou está presente. 'There' não é o sujeito real — é apenas um marcador.</p>

      <ul>
        <li>✓ <strong>Singular:</strong> <em>There is a cat in the garden.</em></li>
        <li>✓ <strong>Plural:</strong> <em>There are three cats in the garden.</em></li>
        <li>✓ <strong>Negativa:</strong> <em>There are no cats here.</em></li>
        <li>✓ <strong>Pergunta:</strong> <em>Is there a problem?</em></li>
      </ul>

      <h3>Cuidado para brasileiros</h3>
      <ul>
        <li>✗ <strong>Errado:</strong> <em>Have a book on the table.</em></li>
        <li>✓ <strong>Certo:</strong> <em>There is a book on the table.</em></li>
      </ul>
      <p>Em português dizemos 'tem um livro' — em inglês não se usa 'have' assim.</p>
    `,
  },

  {
    id: 'enfatica',
    number: 8,
    title: 'Enfática',
    subtitle: 'Dar ênfase',
    formula: 'Do/Does/Did + S + V',
    example: 'She does read every night!',
    content: `
      <h3>O que é</h3>
      <p>Usada para reforçar ou enfatizar uma afirmação, muitas vezes em resposta a uma dúvida ou negação.</p>

      <ul>
        <li>✓ <strong>Presente:</strong> <em>I do like coffee!</em> (Eu realmente gosto!)</li>
        <li>✓ <strong>Passado:</strong> <em>She did send the email!</em> (Ela mandou sim!)</li>
        <li>✓ <strong>Resposta a dúvida:</strong> <em>— You don't care. — I do care!</em></li>
      </ul>
    `,
  },

  {
    id: 'negativa',
    number: 9,
    title: 'Negativa',
    subtitle: 'Negação',
    formula: 'S + Aux + not + V + O',
    example: 'She does not read every night.',
    content: `
      <h3>O que é</h3>
      <p>Usada para negar fatos, ações ou estados. O auxiliar do/does/did é necessário na maioria dos casos.</p>

      <table>
        <tr><th>Tempo</th><th>Forma completa</th><th>Contração</th></tr>
        <tr><td><strong>Presente</strong></td><td>She does not like it.</td><td>She doesn't like it.</td></tr>
        <tr><td><strong>Passado</strong></td><td>He did not go.</td><td>He didn't go.</td></tr>
        <tr><td><strong>Com 'be'</strong></td><td>They are not ready.</td><td>They aren't ready.</td></tr>
      </table>
    `,
  },

  {
    id: 'invertida',
    number: 10,
    title: 'Invertida (Inversion)',
    subtitle: 'Ênfase formal/literária',
    formula: 'Advérbio negativo + Aux + S + V',
    example: 'Never have I seen such a thing.',
    content: `
      <h3>O que é</h3>
      <p>Usada para dar ênfase dramática, comum em textos literários e formais. O auxiliar vem antes do sujeito, como em perguntas.</p>

      <h3>Advérbios que disparam inversão</h3>
      <ul>
        <li>✓ <strong>Never:</strong> <em>Never have I seen such beauty.</em></li>
        <li>✓ <strong>Rarely:</strong> <em>Rarely does she make mistakes.</em></li>
        <li>✓ <strong>Not only:</strong> <em>Not only did he lie, but he also stole.</em></li>
        <li>✓ <strong>Hardly:</strong> <em>Hardly had I arrived when it started raining.</em></li>
      </ul>

      <h3>Cuidado</h3>
      <p>Essa estrutura é rara no inglês do dia a dia — soa muito formal ou literária. Use com moderação.</p>
    `,
  },

  {
    id: 'reported-speech',
    number: 11,
    title: 'Reported Speech',
    subtitle: 'Discurso indireto',
    formula: 'S + V (said/told) + that + S + V (recuado)',
    example: 'She said that she was tired.',
    content: `
      <h3>O que é</h3>
      <p>Usada para relatar o que alguém disse, sem usar as palavras exatas. Os tempos verbais recuam uma casa no passado.</p>

      <table>
        <tr><th>Original</th><th>Discurso direto</th><th>Reported speech</th></tr>
        <tr><td><strong>Presente</strong></td><td>"I like coffee."</td><td>She said she liked coffee.</td></tr>
        <tr><td><strong>Passado</strong></td><td>"I went home."</td><td>He said he had gone home.</td></tr>
        <tr><td><strong>Futuro</strong></td><td>"I will call."</td><td>She said she would call.</td></tr>
      </table>
    `,
  },

  {
    id: 'relativa',
    number: 12,
    title: 'Relativa',
    subtitle: 'Who / Which / That',
    formula: 'S + V + (who/which/that + cláusula)',
    example: 'The man who called you is my brother.',
    content: `
      <h3>O que é</h3>
      <p>Usada para adicionar informação sobre um substantivo dentro da frase. Aqui entram who, which e that.</p>

      <table>
        <tr><th>Pronome</th><th>Refere-se a</th><th>Exemplo</th></tr>
        <tr><td><strong>who</strong></td><td>Pessoas</td><td>The teacher who taught me was brilliant.</td></tr>
        <tr><td><strong>which</strong></td><td>Coisas/animais</td><td>The book which I bought is great.</td></tr>
        <tr><td><strong>that</strong></td><td>Pessoas ou coisas</td><td>The car that broke down is mine.</td></tr>
      </table>

      <h3>Restritiva vs. Explicativa</h3>
      <ul>
        <li>✓ <strong>Restritiva (sem vírgula):</strong> <em>The man who stole my wallet was arrested.</em></li>
        <li>✓ <strong>Explicativa (com vírgula):</strong> <em>My brother, who lives in London, is a doctor.</em></li>
      </ul>
    `,
  },

  {
    id: 'gerundiva',
    number: 13,
    title: 'Gerundiva',
    subtitle: 'Verbo -ing como substantivo',
    formula: 'Gerúndio (-ing) como S, O ou Complemento',
    example: 'Swimming every day is good for your health.',
    content: `
      <h3>O que é</h3>
      <p>O verbo com -ing funciona como substantivo dentro da frase — pode ser sujeito, objeto ou complemento.</p>

      <table>
        <tr><th>Papel</th><th>Exemplo</th><th>Análise</th></tr>
        <tr><td><strong>Sujeito</strong></td><td>Swimming is fun.</td><td>Swimming = S</td></tr>
        <tr><td><strong>Objeto</strong></td><td>She enjoys reading.</td><td>reading = O</td></tr>
        <tr><td><strong>Complemento</strong></td><td>Her hobby is painting.</td><td>painting = C</td></tr>
      </table>

      <h3>Gerundiva vs. Contínuo — a confusão mais comum</h3>
      <ul>
        <li>✓ <strong>Contínuo (ação em progresso):</strong> <em>She is reading a book.</em></li>
        <li>✓ <strong>Gerundiva (objeto do verbo):</strong> <em>She enjoys reading books.</em></li>
      </ul>
      <p>Teste: substitua o -ing por um substantivo. <em>She enjoys music.</em> ✓ = gerundiva. <em>She is music.</em> ✗ = não é gerundiva.</p>
    `,
  },

  {
    id: 'infinitiva',
    number: 14,
    title: 'Infinitiva',
    subtitle: 'To + verbo como substantivo',
    formula: 'To + V como S, O ou Complemento',
    example: 'To learn English takes time.',
    content: `
      <h3>O que é</h3>
      <p>O infinitivo (to + verbo) funciona como substantivo — pode ser sujeito, objeto ou complemento.</p>

      <ul>
        <li>✓ <strong>Sujeito:</strong> <em>To travel is my dream.</em></li>
        <li>✓ <strong>Objeto:</strong> <em>She wants to learn English.</em></li>
        <li>✓ <strong>Complemento:</strong> <em>His goal is to become a doctor.</em></li>
      </ul>

      <h3>Gerundiva vs. Infinitiva</h3>
      <p>Alguns verbos aceitam apenas um dos dois. Outros aceitam os dois com significados diferentes.</p>

      <table>
        <tr><th>Só gerundiva</th><th>Só infinitiva</th><th>Os dois (sentido diferente)</th></tr>
        <tr><td>enjoy, avoid, mind</td><td>want, need, decide</td><td>stop, remember, try</td></tr>
        <tr><td><em>I enjoy swimming.</em></td><td><em>I want to swim.</em></td><td><em>I stopped eating. / I stopped to eat.</em></td></tr>
      </table>
    `,
  },

  {
    id: 'clivada',
    number: 15,
    title: 'Clivada (Cleft Sentence)',
    subtitle: 'Foco em um elemento',
    formula: 'It + be + elemento em foco + that/who + resto',
    example: 'It was John who broke the window.',
    content: `
      <h3>O que é</h3>
      <p>Usada para dar ênfase a um elemento específico da frase — isola um elemento para destacá-lo.</p>

      <ul>
        <li>✓ <strong>Normal:</strong> <em>John broke the window.</em></li>
        <li>✓ <strong>Clivada (quem?):</strong> <em>It was John who broke the window.</em></li>
        <li>✓ <strong>Clivada (o quê?):</strong> <em>It was the window that John broke.</em></li>
        <li>✓ <strong>Clivada (quando?):</strong> <em>It was yesterday that John broke the window.</em></li>
      </ul>

      <p>Cada versão destaca um elemento diferente, embora o fato seja o mesmo.</p>
    `,
  },

  {
    id: 'pseudo-clivada',
    number: 16,
    title: 'Pseudo-Clivada',
    subtitle: 'What como sujeito',
    formula: 'What + S + V + be + foco',
    example: 'What she wants is a new job.',
    content: `
      <h3>O que é</h3>
      <p>Similar à clivada, mas começa com 'what' funcionando como sujeito. Muito comum em inglês falado e escrito.</p>

      <ul>
        <li>✓ <strong>Exemplo 1:</strong> <em>What I need is a coffee.</em></li>
        <li>✓ <strong>Exemplo 2:</strong> <em>What bothers me is his attitude.</em></li>
        <li>✓ <strong>Exemplo 3:</strong> <em>What she said was surprising.</em></li>
      </ul>

      <h3>Clivada vs. Pseudo-clivada</h3>
      <ul>
        <li>✓ <strong>Clivada:</strong> <em>It was a coffee that I needed.</em></li>
        <li>✓ <strong>Pseudo-clivada:</strong> <em>What I needed was a coffee.</em></li>
      </ul>
      <p>As duas enfatizam o mesmo elemento, mas a pseudo-clivada soa mais natural no dia a dia.</p>
    `,
  },

  {
    id: 'eliptica',
    number: 17,
    title: 'Elíptica',
    subtitle: 'Omissão inteligente',
    formula: 'Elemento repetido é substituído por auxiliar ou omitido',
    example: 'She likes coffee and he does too.',
    content: `
      <h3>O que é</h3>
      <p>Parte da frase é omitida porque já foi mencionada — evita repetição desnecessária.</p>

      <ul>
        <li>✓ <strong>Com 'too':</strong> <em>She likes jazz and he does too.</em> (= he likes jazz too)</li>
        <li>✓ <strong>Com 'so':</strong> <em>She is tired and so am I.</em></li>
        <li>✓ <strong>Com 'either':</strong> <em>She doesn't smoke and neither does he.</em></li>
        <li>✓ <strong>Com 'nor':</strong> <em>He can't cook, nor can she.</em></li>
      </ul>

      <h3>Elipse em respostas curtas</h3>
      <ul>
        <li>✓ <strong>Pergunta:</strong> <em>Did you call her?</em></li>
        <li>✓ <strong>Resposta elíptica:</strong> <em>Yes, I did.</em> (= Yes, I called her.)</li>
      </ul>
    `,
  },
];