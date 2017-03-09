// theBeatlesPlay
// Reads in 2 arrays: musicians and instruments
// A new array is then created to store the concatenated strings
// The for loop generates the array by running as many times as their is a new element in the given arrays
function theBeatlesPlay(musicians, instruments){
  var array = []
  for (let i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i])
  }
  return array
}

// johnLennonFacts
// Reads in an initial array of facts
// creates a new array with !!! added to the end of each element
function johnLennonFacts(origArray){
  var newArray = []
  for (let i = 0; i < origArray.length; i++) {
    newArray.push(origArray[i] + "!!!")
  }
  return newArray
}

// iLoveTheBeatles
// reads in a number
// creates an empty array
// Adds "I love the Beatles!" to the array once and continues
//       too add to the array if the number is below 15
function iLoveTheBeatles(number){
  var array = []
  do{
      array.push("I love the Beatles!")
      number++
  }while(number<15)
  return array
}
