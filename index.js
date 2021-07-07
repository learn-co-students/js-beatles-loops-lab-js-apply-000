// add solution here

function theBeatlesPlay (musiciansArray, instrumentsArray){
  let emptyArray = [];
  for (let i = 0; i < musiciansArray.length; i++) {
    emptyArray.push(
    `${musiciansArray[i]} plays ${instrumentsArray[i]}`
    );
  }
  return emptyArray;
}

function johnLennonFacts (facts) {
  let factsArray = [];
  let i = 0;
  while (i < facts.length)
{
  factsArray.push(`${facts[i]}!!!`)
  i++
}
return factsArray;
}

function iLoveTheBeatles(number) {
  let emptyArray = [];
  do {
    emptyArray.push('I love the Beatles!');
    number++;
  } while (number < 15)
  
  return emptyArray;
}