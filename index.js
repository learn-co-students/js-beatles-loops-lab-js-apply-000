function theBeatlesPlay(musicians, instruments) {
  var myArray = []
  for (var i = 0; i < musicians.length; i++)
  for (i = 0; i < instruments.length; i++) {
    myArray.push(musicians[i] + " plays " + instruments[i]);
 }
  return myArray
}



function johnLennonFacts(facts) {
   var newFacts = []
   let i = 0
   while (i < facts.length) {
     newFacts.push(facts[i] + "!!!")
     i++
   }
   return newFacts
 }
 
function iLoveTheBeatles(number) {
  var phrase = []
  do {
     phrase.push("I love the Beatles!");
     number++
   } while (number < 15)
   return phrase
}