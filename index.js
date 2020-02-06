function theBeatlesPlay(musicians, instruments) {
  var arrayVariable = [];
  for (var counter = 0; counter < musicians.length; counter++) {
    let createdString = musicians[counter] + " plays " + instruments[counter] ;
    arrayVariable.push(createdString);
  }
  return arrayVariable
}

//second function
function johnLennonFacts(facts) {
  var newFacts = [];
  for (let i=0; i < facts.length; i++) {
    let newString = facts[i] + "!!!"
    newFacts.push(newString)
  }
  return newFacts
}

// add solution here
function iLoveTheBeatles(num) {
  let i = 15-num;
  let emptArray = [];

  while(i <= 15 && num < 15) {
    emptArray.push("I love the Beatles!");
    i++;
  }

  if(num > 15) {
    emptArray.push("I love the Beatles!")
  }

  return emptArray;
}
