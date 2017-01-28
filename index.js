function theBeatlesPlay(musicians,instruments) {
  var output = [];
   for (var i = 0; i<4; i++) {
     output[i] = musicians[i] + " plays " + instruments[i];
   } return output;
 }
     theBeatlesPlay(["John Lennon","Paul McCartney","Ringo Starr","George Harrison"],
     ["rhythm guitar","bass guitar","drums","lead guitar"])


function johnLennonFacts(facts){
var john = []
var i = 0;
while (i<facts.length){
  john.push(facts[i]+'!!!')
  i++
  }
return john;
}

function iLoveTheBeatles(n) {
var array = new Array()
do {
array.push("I love the Beatles!");
} while (array.length < n + 1 && n < 15);
return array;
}
