
//Accepts two arrays
function theBeatlesPlay(musicians, instruments){
  var psuedoDict = [] // this is an array that will store the string of both parameter's parallel values
  for(var i=0;i<musicians.length;i++){ //Iterate through range of elements in musicians
    var whoPlaysWhat = musicians[i]+' plays '+instruments[i] // Concatenate strings using 'plays' as a link
    psuedoDict.push(whoPlaysWhat) //Add Concatenated string to was-empty array

  }
  return psuedoDict
}

function johnLennonFacts(facts){  //Function accepts one argument
  var i = 0 //Declare iterator
  while (i < facts.length){ //Iterate range of elements in argument
    facts[i] = facts[i]+'!!!' //appends exclamation points
    i++ // Add one to counter/iterator
  }
  return facts
}

function iLoveTheBeatles(x){
  var parameter = Number(x) // Makes parameter a number
  var counter = 0 // Make a counter
  var loveThemToo = [] // Create blank array
  do{
    loveThemToo.push('I love the Beatles!') //Append a string to array
    counter++
  }
  while(counter <= parameter && parameter < 15) //Checks to see if counter is equal or less than parameter, and if parameter is less than 15
  return loveThemToo //returns precious product

}
