// add solution here
function theBeatlesPlay(musicians, instruments){
  let array = [];

  for (let i = 0; i < musicians.length; i++) {
    let person = musicians[i];
    let instrument = instruments[i];
    let element = `${person} plays ${instrument}`;
    array.push(element);
    }
  return array;
}

function johnLennonFacts(facts) {
  let newArray = [];
  let index = 0
  while (index < facts.length) {
    let element = facts[index];
    element = `${element}!!!`;
    newArray.push(element);
    index++;
  }
  return newArray;
}

function iLoveTheBeatles(number) {
  //  function should create a variable that stores an empty array
  let array = [];

  do {
    array.push("I love the Beatles!");
    number++;
  } while (number < 15);

  return array;
}
