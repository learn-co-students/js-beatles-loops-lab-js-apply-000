// add solution here



 const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
    const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
var emptyArray = [];
function theBeatlesPlay(muscians,intruments){
var mLen = musicians.length;  

for (var i = 0; i < mLen; i++)  {
var string = musicians[i] + " plays " + instruments[i] ;
 emptyArray[i] = string;}
 return emptyArray
 
}
theBeatlesPlay();



function johnLennonFacts(facts){
  var i = 0;
  var lennonArray = [];
  while (i < facts.length) {
  lennonArray[i] = facts[i] +"!!!";
  i++;
}
  return lennonArray;
}
johnLennonFacts();

function iLoveTheBeatles(n){
  var loveArray = [];
  var i = 0;
do {
  loveArray[i] = "I love the Beatles!";
  i++;
}
while (15 - n >= i + 1);
return(loveArray);

}
/*

function iLoveTheBeatles(n){
  var loveArray = [];
  var i = 0;
do {
  loveArray =  "I love the Beatles!"
  i++;
}
while (15 - n >= i + 1);
return(loveArray);

}
*/