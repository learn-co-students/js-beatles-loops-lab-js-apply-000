// add solution here
const theBeatlesPlay = (musicians, instruments) => {
  var array = [];
  for(let x = 0; x < musicians.length; x++) {
    array.push(`${musicians[x]} plays ${instruments[x]}`);
  }
  return array;
}

const johnLennonFacts = (arrayOfFacts) => {
  var counter = 0;
  while(counter < arrayOfFacts.length) {
    arrayOfFacts[counter] = `${arrayOfFacts[counter]}!!!`;
    counter += 1;
  }
  return arrayOfFacts;
}

const iLoveTheBeatles = (number) => {
  var array = [];
  do {
    array.push('I love the Beatles!');
    number += 1;
  }while(number < 15);
  return array;
}
