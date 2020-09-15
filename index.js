// "returns an array of strings containing what instruments each musician plays"
// const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
// const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  let theBand = [];

  for (let i = 0; i < musicians.length; i++) {
    let musician = musicians[i];
    let instrument = instruments[i % instruments.length];
    theBand.push(musician + " plays "+ instrument);
  }

  return theBand;
}

// "returns an array of strings with exclamation points"
//         "He was the last Beatle to learn to drive",
//         "He was never a vegetarian",
//         "He was a choir boy and boy scout",
//         "He hated the sound of his own voice"
// "While on tour, he enjoyed playing Monopoly",
//         "Harmonica was the first instrument Lennon learned to play",
// "While on tour, he enjoyed playing Monopoly!!!", "Harmonica was the first instrument Lennon learned to play!!!"
//"takes in any array of strings and returns a new array with exclamation points added to each element"

function johnLennonFacts(facts){
  let yelledFacts = [];

  let i = 0;
  while (i < facts.length) {
    let fact = facts[i];
    yelledFacts.push(fact + "!!!");
    i++;
  }
  return yelledFacts;
}
// * The function should create a variable that stores an empty array.
// * Implement a do-while loop inside the function that adds `"I love the
//   Beatles!"` to the empty array.
// * The loop should then increment the number passed in as a parameter.
//   The condition of the loop should check to see that the parameter number is
//   less than `15`. It should contain a number of strings that represents the
//   difference between the input number and `15`.
// * Return the array with the strings `"I love the Beatles!"`.
function iLoveTheBeatles(number) {
    let cheers = [];
    let i = 0;
    do {
        cheers.push('I love the Beatles!');
        i++;
    } while (i <= number && number < 15);
    return cheers;
}


console.log(iLoveThebeatles(7));
console.log(iLoveTheBeatles(17));
