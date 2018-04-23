function theBeatlesPlay(musicians, instruments){
  //create new array to add to
  var newArr = []
  /*for-loop that goes through all the musicians and instruments
  inputted and ands them to the newArr as 'musician plays 
  instrument' for all submissions*/
  for (let i = 0; i < musicians.length; i++){
    newArr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  //return this new array
  return newArr
}

function johnLennonFacts(facts){
  //set counter variable at 0 since the first index of an array is 0
  let i = 0 
  //create newFacts array to add the facts with !!!
  var newFacts = []
  //while loop that goes through each index in the array
  while (i < facts.length) {
    //add inputted facts to new array with 3 '!!!' added on
    newFacts.push(`${facts[i]}!!!`)
    //increase counter so loop will continue for all items in array
    i++
  }
  //return array with !!! added to end of each facts
  return newFacts
}

function iLoveTheBeatles(n) {
  //create empty array to add to later
  var emptyArr = []
  do {
    //add "I love the Beatles!" string to the array
    emptyArr.push("I love the Beatles!")
   //increase counter variable
   n++
    }
  //ensures loop stops when the parameter number hits 15
  while (n<15);
  //return array with the strings "I love the Beatles! repearted 
  //the requisite number of times
  return emptyArr
  }