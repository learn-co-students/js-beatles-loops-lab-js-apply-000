const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts (facts){
    let factsLength = facts.length;
    let counter = 0;

    while(factsLength > counter){
      console.log(facts[counter])
      counter++;
    }
}
johnLennonFacts(facts);
