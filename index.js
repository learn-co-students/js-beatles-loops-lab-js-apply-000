function theBeatlesPlay(musicians, instruments){
  var allMusicians = [];
 
for (var i=0; i<musicians.length; i++){
  allMusicians.push(musicians [i] + " plays " + instruments[i])}
return allMusicians

 var musicians = ["John Lennon ", "Paul McCartney ", "George Harrison ", "Ringo Starr "];
  var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  }

 var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  
  /*function johnLennonFacts(){
    var text = [];
    var x = 0;
  while (x < facts.length){
    text[x] = facts[x]+"!!!";
    x++;
  }  
    return facts;
} 
*/



function johnLennonFacts(array) {
  var i = 0
  while (i < array.length) {
    array[i] += '!!!';
    i++;
  }
  return array;
}

function iLoveTheBeatles(number){
  var array = [];
  var i = 0
  do {
    array.push("I love the Beatles!");
    i++;
  } while (i<= number && number <8);
      return array;
}