// add solution here
theBeatlesPlay(musicians, instruments);
function theBeatlesPlay(musicians,instruments){
  var newArray = [];
  for (var i=0; i < musicians.length ; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArray;
}
function johnLennonFacts(array) {
 var results = [];
 var count = 0;
 while (count < array.length) {
   results.push(array[count] + "!!!");
   count++
  }
 return results;
 }
 function iLoveTheBeatles(num) {
   var array = []
   do {
     array.push("I love the Beatles!")
     num++
   } while (num <15);
   return array
 }