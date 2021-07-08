// add solution here
/*
*  The first accepts two arrays as parameters – 
* an array of musicians and an array of instrumentsArray
* return a message (e.g. "John Lennon plays guitar")
*/
function theBeatlesPlay(musicians, instruments) {
  var message = [ ]
    for(var i = 0; i < musicians.length; i++) {
      message.push(`${musicians[i]} plays ${instruments[i]}`)
  }
   return message
}

/*
* Using a while loop
* Add "!!!" to the end of each element in the facts array
*/

theBeatlesPlay(["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"], ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"])

console.log(theBeatlesPlay(["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"], ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]))

function johnLennonFacts(facts) {
  var i = 0
  while(i < facts.length) {
   facts[i] = facts[i] + "!!!"
       i++
   }
   return facts
}

johnLennonFacts([
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
  ])
  
  console.log(johnLennonFacts([
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
  ]))
  
  /*
  * Using a do-while loop
  * Increment the parameter number (less than 15) 
  */
  
  function iLoveTheBeatles(countdown){
    var message = [ ]
    var i = 0
    do{
      message.push("I love the Beatles!")
      countdown++
    } 
    while(countdown < 15)
    return message
  }
  
  iLoveTheBeatles(9)
  