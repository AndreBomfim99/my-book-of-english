const unit01 = {

  examples: `
    <h3>Profissões</h3>

    <h4>Positive</h4>
    <ul>
      <li><em>She is a surgeon at a large hospital in London.</em> (Ela é cirurgiã num grande hospital em Londres.)</li>
      <li><em>I am an engineer. My colleague is an architect.</em> (Sou engenheiro. O meu colega é arquiteto.)</li>
      <li><em>They are experienced lawyers. Their fees are very high.</em> (Eles são advogados experientes. Os honorários deles são muito altos.)</li>
      <li><em>He is a journalist. He's interested in international politics.</em> (Ele é jornalista. Ele tem interesse em política internacional.)</li>
    </ul>

    <h4>Negative</h4>
    <ul>
      <li><em>I'm not a manager. I'm an assistant.</em> (Não sou gerente. Sou assistente.)</li>
      <li><em>She isn't a nurse. She's a doctor.</em> (Ela não é enfermeira. Ela é médica.)</li>
      <li><em>They aren't unemployed. They are freelancers.</em> (Eles não estão desempregados. São freelancers.)</li>
    </ul>

    <h4>Contrast</h4>
    <ul>
      <li><em>My father is a pilot, but he's not interested in aeronautical engineering.</em> (Meu pai é piloto, mas não tem interesse em engenharia aeronáutica.)</li>
      <li><em>James isn't a teacher. He's a student at university.</em> (James não é professor. Ele é estudante na universidade.)</li>
    </ul>

    <h3>Política</h3>

    <h4>Positive</h4>
    <ul>
      <li><em>She is the Prime Minister. She's very experienced.</em> (Ela é a Primeira-Ministra. Ela tem muita experiência.)</li>
      <li><em>Parliament is in session. The debate is very intense.</em> (O Parlamento está em sessão. O debate é muito intenso.)</li>
      <li><em>They are members of the opposition party.</em> (Eles são membros do partido da oposição.)</li>
      <li><em>The new law is controversial. Many people are unhappy.</em> (A nova lei é controversa. Muitas pessoas estão insatisfeitas.)</li>
    </ul>

    <h4>Negative</h4>
    <ul>
      <li><em>He isn't a senator. He's a local councillor.</em> (Ele não é senador. Ele é vereador local.)</li>
      <li><em>I'm not interested in party politics. I'm interested in human rights.</em> (Não tenho interesse em política partidária. Tenho interesse em direitos humanos.)</li>
      <li><em>The election results aren't official yet.</em> (Os resultados das eleições ainda não são oficiais.)</li>
    </ul>

    <h4>Contrast</h4>
    <ul>
      <li><em>Lisa isn't interested in politics. She's interested in environmental issues.</em> (Lisa não tem interesse em política. Ela tem interesse em questões ambientais.)</li>
      <li><em>The treaty is important, but the negotiations aren't finished.</em> (O tratado é importante, mas as negociações não estão encerradas.)</li>
    </ul>

    <h3>Tecnologia</h3>

    <h4>Positive</h4>
    <ul>
      <li><em>This laptop is very fast. It's the latest model.</em> (Este laptop é muito rápido. É o modelo mais recente.)</li>
      <li><em>Artificial intelligence is a very important topic today.</em> (A inteligência artificial é um tema muito importante hoje.)</li>
      <li><em>They are software developers at a start-up in Manchester.</em> (Eles são desenvolvedores de software numa start-up em Manchester.)</li>
      <li><em>The app is free. It's available on Android and iOS.</em> (O aplicativo é gratuito. Está disponível no Android e no iOS.)</li>
    </ul>

    <h4>Negative</h4>
    <ul>
      <li><em>This phone isn't new. It's three years old.</em> (Este telemóvel não é novo. Tem três anos.)</li>
      <li><em>The internet connection isn't good here. It's very slow.</em> (A conexão à internet não é boa aqui. É muito lenta.)</li>
      <li><em>They aren't programmers. They're UX designers.</em> (Eles não são programadores. São designers de UX.)</li>
    </ul>

    <h4>Contrast</h4>
    <ul>
      <li><em>The software is powerful, but it's not easy to use.</em> (O software é poderoso, mas não é fácil de usar.)</li>
      <li><em>She is good at coding, but she isn't interested in hardware.</em> (Ela é boa em programação, mas não tem interesse em hardware.)</li>
    </ul>

    <h3>Esportes</h3>

    <h4>Positive</h4>
    <ul>
      <li><em>He is a professional footballer. He's from Brazil.</em> (Ele é futebolista profissional. Ele é do Brasil.)</li>
      <li><em>The stadium is enormous. It's full of fans tonight.</em> (O estádio é enorme. Está cheio de adeptos esta noite.)</li>
      <li><em>They are Olympic swimmers. They're very fast.</em> (Eles são nadadores olímpicos. São muito rápidos.)</li>
      <li><em>The match is on Saturday. I'm very excited.</em> (O jogo é no sábado. Estou muito animado.)</li>
    </ul>

    <h4>Negative</h4>
    <ul>
      <li><em>She isn't a sprinter. She's a marathon runner.</em> (Ela não é velocista. Ela é maratonista.)</li>
      <li><em>The referee isn't from England. He's from Spain.</em> (O árbitro não é da Inglaterra. Ele é da Espanha.)</li>
      <li><em>We aren't ready. The warm-up isn't finished.</em> (Não estamos prontos. O aquecimento não terminou.)</li>
    </ul>

    <h4>Contrast</h4>
    <ul>
      <li><em>My favourite sport is tennis, but I'm not a very good player.</em> (O meu desporto favorito é o ténis, mas não sou muito bom jogador.)</li>
      <li><em>The team is talented, but they aren't the champions yet.</em> (A equipa é talentosa, mas ainda não são campeões.)</li>
    </ul>

    <h3>Educação</h3>

    <h4>Positive</h4>
    <ul>
      <li><em>She is a professor at Oxford University.</em> (Ela é professora na Universidade de Oxford.)</li>
      <li><em>My favourite subject is history. It's very interesting.</em> (A minha matéria favorita é história. É muito interessante.)</li>
      <li><em>The students are in the library. The exam is tomorrow.</em> (Os alunos estão na biblioteca. O exame é amanhã.)</li>
      <li><em>He is a scholarship student. He's very hardworking.</em> (Ele é bolsista. Ele é muito trabalhador.)</li>
    </ul>

    <h4>Negative</h4>
    <ul>
      <li><em>This course isn't difficult. It's quite straightforward.</em> (Este curso não é difícil. É bastante direto.)</li>
      <li><em>I'm not a full-time student. I'm a part-time student.</em> (Não sou estudante a tempo inteiro. Sou estudante a tempo parcial.)</li>
      <li><em>The results aren't ready yet. We're still waiting.</em> (Os resultados ainda não estão prontos. Ainda estamos à espera.)</li>
    </ul>

    <h4>Contrast</h4>
    <ul>
      <li><em>Maths is her strong subject, but she isn't good at languages.</em> (Matemática é a matéria forte dela, mas ela não é boa em línguas.)</li>
      <li><em>The school is new, but the equipment isn't modern.</em> (A escola é nova, mas os equipamentos não são modernos.)</li>
    </ul>

    <h3>Filosofia</h3>

    <h4>Positive</h4>
    <ul>
      <li><em>Socrates is one of the most important thinkers in history.</em> (Sócrates é um dos pensadores mais importantes da história.)</li>
      <li><em>Ethics is a branch of philosophy. It's about right and wrong.</em> (A ética é um ramo da filosofia. É sobre o certo e o errado.)</li>
      <li><em>These questions are very old. They're still relevant today.</em> (Estas questões são muito antigas. Ainda são relevantes hoje.)</li>
      <li><em>She is a philosopher. She's interested in the nature of truth.</em> (Ela é filósofa. Ela tem interesse na natureza da verdade.)</li>
    </ul>

    <h4>Negative</h4>
    <ul>
      <li><em>Philosophy isn't useless. It's essential for critical thinking.</em> (A filosofia não é inútil. É essencial para o pensamento crítico.)</li>
      <li><em>This argument isn't valid. It's a logical fallacy.</em> (Este argumento não é válido. É uma falácia lógica.)</li>
      <li><em>I'm not certain about the answer. These ideas are very complex.</em> (Não tenho certeza sobre a resposta. Estas ideias são muito complexas.)</li>
    </ul>

    <h4>Contrast</h4>
    <ul>
      <li><em>The question is simple, but the answer isn't.</em> (A questão é simples, mas a resposta não é.)</li>
      <li><em>He is very intelligent, but he isn't always right.</em> (Ele é muito inteligente, mas nem sempre tem razão.)</li>
    </ul>

    <h3>Alimentação</h3>

    <h4>Positive</h4>
    <ul>
      <li><em>This restaurant is excellent. It's in the city centre.</em> (Este restaurante é excelente. Fica no centro da cidade.)</li>
      <li><em>Olive oil is an important ingredient in Mediterranean cuisine.</em> (O azeite é um ingrediente importante na culinária mediterrânea.)</li>
      <li><em>The portions are very generous. We're quite full.</em> (As porções são muito generosas. Estamos bem saciados.)</li>
      <li><em>I'm vegetarian. My favourite dish is a lentil soup.</em> (Sou vegetariano. O meu prato favorito é uma sopa de lentilhas.)</li>
    </ul>

    <h4>Negative</h4>
    <ul>
      <li><em>This soup isn't hot. It's cold!</em> (Esta sopa não está quente. Está fria!)</li>
      <li><em>I'm not hungry. I'm just thirsty.</em> (Não estou com fome. Estou apenas com sede.)</li>
      <li><em>The menu isn't in English. It's only in French.</em> (O menu não está em inglês. Está apenas em francês.)</li>
    </ul>

    <h4>Contrast</h4>
    <ul>
      <li><em>The food is delicious, but the service isn't very fast.</em> (A comida é deliciosa, mas o serviço não é muito rápido.)</li>
      <li><em>I'm tired, but I'm not hungry. I'm just cold.</em> (Estou cansado, mas não estou com fome. Estou apenas com frio.)</li>
    </ul>

    <h3>Natureza e meio ambiente</h3>

    <h4>Positive</h4>
    <ul>
      <li><em>The weather is terrible today. It's cold and rainy.</em> (O tempo está péssimo hoje. Está frio e chuvoso.)</li>
      <li><em>Polar bears are endangered. They're in danger from climate change.</em> (Os ursos polares estão em perigo. Estão ameaçados pelas alterações climáticas.)</li>
      <li><em>The Amazon is the largest rainforest in the world.</em> (A Amazónia é a maior floresta tropical do mundo.)</li>
    </ul>

    <h4>Negative</h4>
    <ul>
      <li><em>The river isn't clean. It's polluted.</em> (O rio não está limpo. Está poluído.)</li>
      <li><em>It's not warm today. It's freezing!</em> (Não está quente hoje. Está a gelar!)</li>
      <li><em>These animals aren't dangerous. They're quite friendly.</em> (Estes animais não são perigosos. São bastante amigáveis.)</li>
    </ul>

    <h4>Contrast</h4>
    <ul>
      <li><em>The sky is beautiful, but the air isn't clean.</em> (O céu está bonito, mas o ar não está limpo.)</li>
    </ul>

    <h3>Arte e cultura</h3>

    <h4>Positive</h4>
    <ul>
      <li><em>She is a talented painter. Her work is in a gallery in London.</em> (Ela é uma pintora talentosa. O seu trabalho está numa galeria em Londres.)</li>
      <li><em>This film is very long, but it's worth it.</em> (Este filme é muito longo, mas vale a pena.)</li>
      <li><em>The musicians are brilliant. They're from Scotland.</em> (Os músicos são brilhantes. São da Escócia.)</li>
    </ul>

    <h4>Negative</h4>
    <ul>
      <li><em>He isn't an actor. He's a theatre director.</em> (Ele não é ator. Ele é diretor de teatro.)</li>
      <li><em>This novel isn't boring. It's very gripping.</em> (Este romance não é aborrecido. É muito cativante.)</li>
    </ul>

    <h4>Contrast</h4>
    <ul>
      <li><em>The exhibition is free, but it's not open on Mondays.</em> (A exposição é gratuita, mas não abre às segundas-feiras.)</li>
    </ul>

    <h3>Viagens e lugares</h3>

    <h4>Positive</h4>
    <ul>
      <li><em>Edinburgh is the capital of Scotland. It's a beautiful city.</em> (Edimburgo é a capital da Escócia. É uma cidade bonita.)</li>
      <li><em>The train is fast and comfortable. It's a great way to travel.</em> (O comboio é rápido e confortável. É uma ótima forma de viajar.)</li>
      <li><em>We are in Paris for the weekend. We're very excited.</em> (Estamos em Paris durante o fim de semana. Estamos muito animados.)</li>
    </ul>

    <h4>Negative</h4>
    <ul>
      <li><em>The hotel isn't expensive. It's very affordable.</em> (O hotel não é caro. É muito acessível.)</li>
      <li><em>I'm not tired. I'm ready to explore the city.</em> (Não estou cansado. Estou pronto para explorar a cidade.)</li>
    </ul>

    <h4>Contrast</h4>
    <ul>
      <li><em>The flight is short, but the airport isn't close to the city.</em> (O voo é curto, mas o aeroporto não fica perto da cidade.)</li>
    </ul>

    <h3>Saúde e bem-estar</h3>

    <h4>Positive</h4>
    <ul>
      <li><em>She is ill. She's in bed with a fever.</em> (Ela está doente. Está na cama com febre.)</li>
      <li><em>He is a doctor. He's very good at his job.</em> (Ele é médico. É muito bom no seu trabalho.)</li>
      <li><em>Regular exercise is important for mental health.</em> (O exercício regular é importante para a saúde mental.)</li>
    </ul>

    <h4>Negative</h4>
    <ul>
      <li><em>I'm not well today. I'm very tired.</em> (Não estou bem hoje. Estou muito cansado.)</li>
      <li><em>This treatment isn't painful. It's very gentle.</em> (Este tratamento não é doloroso. É muito suave.)</li>
    </ul>

    <h4>Contrast</h4>
    <ul>
      <li><em>He is fit, but he isn't interested in competitive sport.</em> (Ele está em forma, mas não tem interesse em desporto competitivo.)</li>
    </ul>

    <h3>Moda e estilo</h3>

    <h4>Positive</h4>
    <ul>
      <li><em>She is a fashion designer. Her clothes are very elegant.</em> (Ela é estilista. As suas roupas são muito elegantes.)</li>
      <li><em>This jacket is new. It's from a small boutique.</em> (Esta jaqueta é nova. É de uma pequena boutique.)</li>
      <li><em>Sustainable fashion is a very important trend now.</em> (A moda sustentável é uma tendência muito importante agora.)</li>
    </ul>

    <h4>Negative</h4>
    <ul>
      <li><em>These shoes aren't comfortable. They're too tight.</em> (Estes sapatos não são confortáveis. Estão muito apertados.)</li>
      <li><em>I'm not interested in trends. I'm interested in classic style.</em> (Não tenho interesse em tendências. Tenho interesse no estilo clássico.)</li>
    </ul>

    <h4>Contrast</h4>
    <ul>
      <li><em>The dress is beautiful, but it's not my size.</em> (O vestido é lindo, mas não é do meu tamanho.)</li>
    </ul>

    <h3>Relações e sociedade</h3>

    <h4>Positive</h4>
    <ul>
      <li><em>My brother is 25. He's married with two children.</em> (O meu irmão tem 25 anos. É casado e tem dois filhos.)</li>
      <li><em>Ann and I are good friends. We're from the same city.</em> (Ann e eu somos bons amigos. Somos da mesma cidade.)</li>
      <li><em>Inequality is a serious social issue in many countries.</em> (A desigualdade é um problema social grave em muitos países.)</li>
    </ul>

    <h4>Negative</h4>
    <ul>
      <li><em>They aren't strangers. They're neighbours.</em> (Eles não são estranhos. São vizinhos.)</li>
      <li><em>She isn't religious, but she's very spiritual.</em> (Ela não é religiosa, mas é muito espiritual.)</li>
    </ul>

    <h4>Contrast</h4>
    <ul>
      <li><em>My parents are retired, but they aren't bored — they're very active.</em> (Os meus pais estão reformados, mas não estão entediados — são muito ativos.)</li>
    </ul>

    <h3>Economia e finanças</h3>

    <h4>Positive</h4>
    <ul>
      <li><em>Inflation is a big problem at the moment.</em> (A inflação é um grande problema no momento.)</li>
      <li><em>She is the CEO of a large company. She's very successful.</em> (Ela é CEO de uma grande empresa. Ela é muito bem-sucedida.)</li>
      <li><em>The markets are unstable. Investors are worried.</em> (Os mercados estão instáveis. Os investidores estão preocupados.)</li>
    </ul>

    <h4>Negative</h4>
    <ul>
      <li><em>He isn't unemployed. He's self-employed.</em> (Ele não está desempregado. É autónomo.)</li>
      <li><em>The economy isn't in recession. It's in recovery.</em> (A economia não está em recessão. Está em recuperação.)</li>
    </ul>

    <h4>Contrast</h4>
    <ul>
      <li><em>The salary is good, but the hours aren't reasonable.</em> (O salário é bom, mas as horas não são razoáveis.)</li>
    </ul>

    <h3>Ciência</h3>

    <h4>Positive</h4>
    <ul>
      <li><em>Mars is the fourth planet from the Sun. It's red.</em> (Marte é o quarto planeta a partir do Sol. É vermelho.)</li>
      <li><em>She is a biologist. She's interested in marine life.</em> (Ela é bióloga. Ela tem interesse na vida marinha.)</li>
      <li><em>These cells are under the microscope. They're very small.</em> (Estas células estão sob o microscópio. São muito pequenas.)</li>
    </ul>

    <h4>Negative</h4>
    <ul>
      <li><em>The Earth isn't flat. It's spherical.</em> (A Terra não é plana. É esférica.)</li>
      <li><em>This experiment isn't dangerous. It's completely safe.</em> (Este experimento não é perigoso. É completamente seguro.)</li>
    </ul>

    <h4>Contrast</h4>
    <ul>
      <li><em>Physics is fascinating, but it isn't easy.</em> (A física é fascinante, mas não é fácil.)</li>
    </ul>

    <h3>História</h3>

    <h4>Positive</h4>
    <ul>
      <li><em>Churchill is one of Britain's most famous Prime Ministers.</em> (Churchill é um dos Primeiros-Ministros mais famosos da Grã-Bretanha.)</li>
      <li><em>The Roman Colosseum is a symbol of ancient civilisation.</em> (O Coliseu Romano é um símbolo da civilização antiga.)</li>
      <li><em>These documents are from the 18th century. They're very fragile.</em> (Estes documentos são do século XVIII. São muito frágeis.)</li>
    </ul>

    <h4>Negative</h4>
    <ul>
      <li><em>The date isn't correct. It's a common historical error.</em> (A data não está correta. É um erro histórico comum.)</li>
      <li><em>This story isn't in the textbooks. It's a forgotten chapter.</em> (Esta história não está nos livros didáticos. É um capítulo esquecido.)</li>
    </ul>

    <h4>Contrast</h4>
    <ul>
      <li><em>The event is well-known, but the causes aren't fully understood.</em> (O evento é bem conhecido, mas as causas não são totalmente compreendidas.)</li>
    </ul>

    <h3>Entretenimento</h3>

    <h4>Positive</h4>
    <ul>
      <li><em>This podcast is very popular. It's about true crime.</em> (Este podcast é muito popular. É sobre crimes reais.)</li>
      <li><em>She is a famous YouTuber. She's only 24 years old.</em> (Ela é uma YouTuber famosa. Tem apenas 24 anos.)</li>
      <li><em>The new season is on Netflix. It's brilliant.</em> (A nova temporada está na Netflix. É incrível.)</li>
    </ul>

    <h4>Negative</h4>
    <ul>
      <li><em>This game isn't boring. It's very addictive.</em> (Este jogo não é aborrecido. É muito viciante.)</li>
      <li><em>I'm not on TikTok. I'm on Instagram.</em> (Não estou no TikTok. Estou no Instagram.)</li>
    </ul>

    <h4>Contrast</h4>
    <ul>
      <li><em>The show is funny, but the second series isn't as good.</em> (O programa é engraçado, mas a segunda série não é tão boa.)</li>
    </ul>
  `,

  extra: [
    {
      title: 'See Also',
      content: `
        <p>Related units you may find useful:</p>
        <ul>
          <li><a href="/units/unit02">Unit 2: am / is / are (questions)</a></li>
          <li><a href="/units/unit34">Unit 34: there is / are</a></li>
          <li><a href="/units/unit65">Unit 65: a / an</a></li>
          <li><a href="/units/appendix4">Appendix 4: short forms</a></li>
        </ul>
      `,
    },
  ],

};

export default unit01;