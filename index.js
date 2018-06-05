const musicians = ["John", "Paul", "George", "Ringo"];

const instruments = ["guitar", "guitar", "bass", "drums"];

function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < 4; i++) {
      array.push(`${musicians[i]} plays ${instruments[i]}`);
    }
  return array;
}

console.log(theBeatlesPlay(musicians, instruments));

const facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
  ];

  function johnLennonFacts(facts) {
      let i = 0;
      newFacts = [];
      while (i < facts.length) {
        newFacts.push(facts[i].concat("!!!"));
        i++;
      }
      return newFacts;
  }

  console.log(johnLennonFacts(facts));
  
  function iLoveTheBeatles(num) {
    let phrase = [];
    do {
        phrase.push("I love the Beattles!");
        num++;

    } while (num < 15);
    return phrase;
}

console.log(iLoveTheBeatles(14));