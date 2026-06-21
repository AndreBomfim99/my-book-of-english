const unit02 = {

  examples: `
    <h3>Nature & Environment</h3>
    <h4>Yes/No Questions</h4>
    <ul>
      <li><em>Is it cold outside today?</em><br>→ Yes, it is. It's very cold.</li>
      <li><em>Are polar bears endangered?</em><br>→ Yes, they are.</li>
    </ul>
    <h4>Wh- Questions</h4>
    <ul>
      <li><em>What's the weather like in Scotland in winter?</em></li>
      <li><em>Why is the Amazon rainforest so important?</em></li>
      <li><em>How warm is the Mediterranean Sea in summer?</em></li>
      <li><em>Where are the tallest mountains in the world?</em></li>
    </ul>
    <h4>Short Answers</h4>
    <ul>
      <li><em>Is climate change a serious problem?</em><br>→ Yes, it is.</li>
    </ul>

    <h3>Art & Culture</h3>
    <h4>Yes/No Questions</h4>
    <ul>
      <li><em>Is this painting by Vincent van Gogh?</em><br>→ Yes, it is.</li>
      <li><em>Is the theatre nearby?</em><br>→ No, it isn't. It's on the other side of town.</li>
    </ul>
    <h4>Wh- Questions</h4>
    <ul>
      <li><em>Who's the director of that film?</em></li>
      <li><em>What's the name of that famous opera?</em></li>
      <li><em>How old is the British Museum?</em></li>
      <li><em>Where's the nearest art gallery?</em></li>
    </ul>
    <h4>Short Answers</h4>
    <ul>
      <li><em>Is Beethoven's Fifth Symphony well known?</em><br>→ Yes, it is.</li>
    </ul>

    <h3>Travel & Places</h3>
    <h4>Yes/No Questions</h4>
    <ul>
      <li><em>Is this the right train to Edinburgh?</em><br>→ No, it isn't. This train is to Glasgow.</li>
      <li><em>Are the flights to Dublin expensive?</em><br>→ No, they aren't. They're quite cheap.</li>
    </ul>
    <h4>Wh- Questions</h4>
    <ul>
      <li><em>Where are you from?</em></li>
      <li><em>How far is the hotel from the airport?</em></li>
      <li><em>What's the capital of Australia?</em></li>
      <li><em>Why is Venice so popular with tourists?</em></li>
    </ul>
    <h4>Short Answers</h4>
    <ul>
      <li><em>Is London a big city?</em><br>→ Yes, it is. It's very big.</li>
    </ul>

    <h3>Health & Well-being</h3>
    <h4>Yes/No Questions</h4>
    <ul>
      <li><em>Are you feeling well today?</em><br>→ No, I'm not. I'm a bit tired.</li>
      <li><em>Is the gym open on Sundays?</em><br>→ Yes, it is. It's open all weekend.</li>
      <li><em>Are vitamins good for you?</em><br>→ Yes, they are.</li>
    </ul>
    <h4>Wh- Questions</h4>
    <ul>
      <li><em>How old is your doctor?</em></li>
      <li><em>What's a good diet for a healthy heart?</em></li>
      <li><em>Why is sleep so important for the body?</em></li>
    </ul>
    <h4>Short Answers</h4>
    <ul>
      <li><em>Is mental health important?</em><br>→ Yes, it is.</li>
    </ul>

    <h3>Fashion & Style</h3>
    <h4>Yes/No Questions</h4>
    <ul>
      <li><em>Are these shoes new?</em><br>→ Yes, they are. I bought them yesterday.</li>
      <li><em>Is this jacket too big?</em><br>→ No, it isn't. It's perfect.</li>
      <li><em>Are these trainers popular this season?</em><br>→ Yes, they are.</li>
    </ul>
    <h4>Wh- Questions</h4>
    <ul>
      <li><em>What colour is your coat?</em></li>
      <li><em>How much are those jeans?</em></li>
      <li><em>Who's the designer of this collection?</em></li>
    </ul>
    <h4>Short Answers</h4>
    <ul>
      <li><em>Is this dress expensive?</em><br>→ No, it isn't. It's on sale.</li>
    </ul>

    <h3>Relationships & Society</h3>
    <h4>Yes/No Questions</h4>
    <ul>
      <li><em>Are your parents at home?</em><br>→ No, they aren't. They're at a friend's house.</li>
      <li><em>Are you married?</em><br>→ No, I'm not.</li>
      <li><em>Are they good friends?</em><br>→ Yes, they are.</li>
    </ul>
    <h4>Wh- Questions</h4>
    <ul>
      <li><em>How old is your sister?</em></li>
      <li><em>Who's that woman next to your brother?</em></li>
      <li><em>Why is this neighbourhood so quiet?</em></li>
    </ul>
    <h4>Short Answers</h4>
    <ul>
      <li><em>Is your friend from Ireland?</em><br>→ Yes, she is.</li>
    </ul>

    <h3>Economy & Finance</h3>
    <h4>Yes/No Questions</h4>
    <ul>
      <li><em>Is the market open today?</em><br>→ Yes, it is.</li>
      <li><em>Are these shares a good investment?</em><br>→ No, they aren't. They're very risky.</li>
    </ul>
    <h4>Wh- Questions</h4>
    <ul>
      <li><em>How much is this flat per month?</em></li>
      <li><em>Why are prices so high at the moment?</em></li>
      <li><em>What's the interest rate this year?</em></li>
      <li><em>Where's the nearest bank?</em></li>
    </ul>
    <h4>Short Answers</h4>
    <ul>
      <li><em>Is this job well paid?</em><br>→ Yes, it is.</li>
    </ul>

    <h3>Science</h3>
    <h4>Yes/No Questions</h4>
    <ul>
      <li><em>Is the moon a planet?</em><br>→ No, it isn't. It's a natural satellite.</li>
      <li><em>Are black holes dangerous?</em><br>→ Yes, they are.</li>
    </ul>
    <h4>Wh- Questions</h4>
    <ul>
      <li><em>How far away is Mars from the Earth?</em></li>
      <li><em>What's the chemical symbol for water?</em></li>
      <li><em>Why is DNA important in biology?</em></li>
      <li><em>Who's the scientist behind the theory of relativity?</em></li>
    </ul>
    <h4>Short Answers</h4>
    <ul>
      <li><em>Is gravity a force?</em><br>→ Yes, it is.</li>
    </ul>

    <h3>History</h3>
    <h4>Yes/No Questions</h4>
    <ul>
      <li><em>Is the Colosseum in Rome?</em><br>→ Yes, it is.</li>
      <li><em>Are the pyramids in Egypt?</em><br>→ Yes, they are.</li>
    </ul>
    <h4>Wh- Questions</h4>
    <ul>
      <li><em>Who's the founder of the Roman Empire?</em></li>
      <li><em>How old is the Great Wall of China?</em></li>
      <li><em>Why is the Second World War so significant in history?</em></li>
      <li><em>Where's the birthplace of William Shakespeare?</em></li>
    </ul>
    <h4>Short Answers</h4>
    <ul>
      <li><em>Is Winston Churchill a famous historical figure?</em><br>→ Yes, he is.</li>
    </ul>

    <h3>Entertainment</h3>
    <h4>Yes/No Questions</h4>
    <ul>
      <li><em>Is this podcast new?</em><br>→ No, it isn't. It's quite old.</li>
      <li><em>Are they on social media?</em><br>→ Yes, they are.</li>
    </ul>
    <h4>Wh- Questions</h4>
    <ul>
      <li><em>What's your favourite TV programme?</em></li>
      <li><em>How popular is this video game?</em></li>
      <li><em>Who's the host of that chat show?</em></li>
      <li><em>Why is social media so addictive?</em></li>
    </ul>
    <h4>Short Answers</h4>
    <ul>
      <li><em>Is this series still on Netflix?</em><br>→ Yes, it is.</li>
    </ul>

    <h3>Professions</h3>
    <h4>Yes/No Questions</h4>
    <ul>
      <li><em>Are you a doctor?</em><br>→ No, I'm not. I'm a nurse.</li>
      <li><em>Is she a qualified engineer?</em><br>→ Yes, she is.</li>
    </ul>
    <h4>Wh- Questions</h4>
    <ul>
      <li><em>What's your job?</em></li>
      <li><em>How much is a teacher's salary in the UK?</em></li>
      <li><em>Who's the manager of this department?</em></li>
      <li><em>Where's the HR office?</em></li>
    </ul>
    <h4>Short Answers</h4>
    <ul>
      <li><em>Is being a lawyer a stressful job?</em><br>→ Yes, it is.</li>
    </ul>

    <h3>Politics</h3>
    <h4>Yes/No Questions</h4>
    <ul>
      <li><em>Are the elections next month?</em><br>→ Yes, they are.</li>
      <li><em>Is this new law popular?</em><br>→ No, it isn't. It's very controversial.</li>
    </ul>
    <h4>Wh- Questions</h4>
    <ul>
      <li><em>Who's the Prime Minister of the United Kingdom?</em></li>
      <li><em>What's the name of the main opposition party?</em></li>
      <li><em>Why is this political issue so important?</em></li>
      <li><em>Where's the next G7 summit?</em></li>
    </ul>
    <h4>Short Answers</h4>
    <ul>
      <li><em>Is the United Nations a powerful organisation?</em><br>→ Yes, it is.</li>
    </ul>

    <h3>Technology</h3>
    <h4>Yes/No Questions</h4>
    <ul>
      <li><em>Is this software up to date?</em><br>→ No, it isn't. It's an old version.</li>
      <li><em>Is artificial intelligence expensive to develop?</em><br>→ Yes, it is.</li>
    </ul>
    <h4>Wh- Questions</h4>
    <ul>
      <li><em>What's the latest smartphone from this company?</em></li>
      <li><em>How fast is your internet connection?</em></li>
      <li><em>Who's the CEO of that tech company?</em></li>
      <li><em>Why is data privacy so important today?</em></li>
    </ul>
    <h4>Short Answers</h4>
    <ul>
      <li><em>Are these headphones wireless?</em><br>→ Yes, they are.</li>
    </ul>

    <h3>Sports</h3>
    <h4>Yes/No Questions</h4>
    <ul>
      <li><em>Is the stadium far from here?</em><br>→ No, it isn't. It's just ten minutes away.</li>
      <li><em>Are they in the final this year?</em><br>→ Yes, they are.</li>
    </ul>
    <h4>Wh- Questions</h4>
    <ul>
      <li><em>Who's the captain of the England football team?</em></li>
      <li><em>How old is that tennis player?</em></li>
      <li><em>What's the score?</em></li>
      <li><em>Where's the next Olympic Games?</em></li>
    </ul>
    <h4>Short Answers</h4>
    <ul>
      <li><em>Is this the right court for the match?</em><br>→ Yes, it is.</li>
    </ul>

    <h3>Education</h3>
    <h4>Yes/No Questions</h4>
    <ul>
      <li><em>Are you a student?</em><br>→ Yes, I am.</li>
      <li><em>Is your school in the city centre?</em><br>→ No, it isn't. It's in the suburbs.</li>
    </ul>
    <h4>Wh- Questions</h4>
    <ul>
      <li><em>What's your favourite subject?</em></li>
      <li><em>How difficult is the entrance exam?</em></li>
      <li><em>Who's your English teacher?</em></li>
      <li><em>Why is university education so expensive in England?</em></li>
    </ul>
    <h4>Short Answers</h4>
    <ul>
      <li><em>Is the library open today?</em><br>→ Yes, it is.</li>
    </ul>

    <h3>Philosophy</h3>
    <h4>Yes/No Questions</h4>
    <ul>
      <li><em>Is Socrates a well-known philosopher?</em><br>→ Yes, he is.</li>
      <li><em>Are these philosophical questions still relevant today?</em><br>→ Yes, they are.</li>
    </ul>
    <h4>Wh- Questions</h4>
    <ul>
      <li><em>What's the meaning of life, according to Aristotle?</em></li>
      <li><em>Why is ethics important in everyday life?</em></li>
      <li><em>Who's the author of this book on logic?</em></li>
      <li><em>How old is the tradition of Western philosophy?</em></li>
    </ul>
    <h4>Short Answers</h4>
    <ul>
      <li><em>Is truth always objective?</em><br>→ No, it isn't — it depends on the philosopher.</li>
    </ul>

    <h3>Food & Drink</h3>
    <h4>Yes/No Questions</h4>
    <ul>
      <li><em>Is this restaurant vegetarian-friendly?</em><br>→ Yes, it is. They have lots of options.</li>
      <li><em>Are these ingredients fresh?</em><br>→ Yes, they are. They're from the local market.</li>
    </ul>
    <h4>Wh- Questions</h4>
    <ul>
      <li><em>What's the special today?</em></li>
      <li><em>How spicy is this dish?</em></li>
      <li><em>Who's the head chef here?</em></li>
      <li><em>Why is the Mediterranean diet so healthy?</em></li>
    </ul>
    <h4>Short Answers</h4>
    <ul>
      <li><em>Is this wine from France?</em><br>→ No, it isn't. It's from Italy.</li>
    </ul>
  `,

  extra: [
    {
      title: 'See Also',
      content: `
        <p>Related units you may find useful:</p>
        <ul>
          <li><a href="/units/unit01">Unit 1: am / is / are</a></li>
          <li><a href="/units/unit44">Unit 44: questions</a></li>
          <li><a href="/units/unit47">Unit 47: what / which / how</a></li>
        </ul>
      `,
    },
  ],

};

export default unit02;