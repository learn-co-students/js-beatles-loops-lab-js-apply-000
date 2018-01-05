function theBeatlesPlay(musicians, instruments) {
var emptyarray = []
for (let i = 0; i < musicians.length; i++) {
 (emptyarray = [...emptyarray, musicians[i] + " plays " + (instruments[i])])
} return emptyarray 
}

function johnLennonFacts(factsarray) {
  let countdown = 0
  var finalarray = []
  while (countdown < factsarray.length) {finalarray = [...finalarray, factsarray[countdown] + "!!!"]; 
  ++countdown; 
 } 
 return finalarray }
 
 function iLoveTheBeatles(number) {
var newempty = [] 
do { newempty = [...newempty, "I love the Beatles!"]; number++
 } while (number < 15) 
 return newempty }