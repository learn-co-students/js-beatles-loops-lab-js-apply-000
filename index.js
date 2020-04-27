// add solution here
function theBeatlesPlay (musicians, instruments){
  let newArr = [];
  for ( let i = 0; i < musicians.length; i++){
    newArr.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return newArr;
}

function johnLennonFacts (facts){
  let newFacts = [];
  for ( let i = 0; i < facts.length; i++){
    newFacts.push(facts[i] + '!!!');
  }
  return newFacts;
}

function iLoveTheBeatles(number){
  let newArray = ['I love the Beatles!'];
  for ( let i = number+1; i < 15; i++){
    newArray.push('I love the Beatles!');
  }
  return newArray;
}