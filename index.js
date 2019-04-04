// add solution here



const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]

const instruments = ["guitar", "guitar", "bass", "drums"]

function theBeatlesPlay(musicians, instruments) {
  var phrases = []
  for (var i = 0; i < musicians.length; i++) {
    phrases.push(musicians[i] + " plays " + instruments[i])
  }
  return phrases
}


var facts = [ "He was the last Beatle to learn to drive",
              "He was never a vegetarian",
              "He was a choir boy and boy scout",
              "He hated the sound of his own voice",
              "foo",
              "bar"
]
function johnLennonFacts(arr){
  var result = []
  var i = 0
  while(i < arr.length) {
    result.push(arr[i] + "!!!")
    i++
  }
  return result
}

function iLoveTheBeatles(number) {
  var array = []
  do {
    array.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return array
}



/*+ Create a function `iLoveTheBeatles` which accepts a number as a parameter. The
body of the function should create a variable that stores an empty array. Then,
implement a do-while loop inside the function that adds `"I love the Beatles!"`
to the empty array. Then the loop should increment the number passed in as a
parameter. The condition of the loop should check to see that the parameter
number is less than `15`. The function should return the array with the strings
`"I love the Beatles!"` */
