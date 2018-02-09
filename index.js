const musicians = ["John", "Paul", "George", "Ringo"];

const instruments = ["guitar", "guitar", "bass", "drums"];

function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < 15; i++) {
      array.push(`${musicians[0]} plays ${instruments[0]}`);
    }
  return array;
}

theBeatlesPlay(musicians, instruments)

/* const facts = ["He was the last Beatle to learn to drive","He was never a vegetarian","He was a choir boy and boy scout","He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  while () {
    facts[n] + "!!!";
  }
  return facts;  
}*/

/*function iLoveTheBeatles(x) {
  var array = [];
  do {
    x = array.push("I love the Beatles!");
    x++;
  } while (x < 15); {
    
  }
  return array;
}

iLoveTheBeatles(12); */
