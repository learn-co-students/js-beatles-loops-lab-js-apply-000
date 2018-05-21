var musicians = ('John lennon ' , 'Ringo Star ', 'Paul McCartney ', 'George Harrison');
var instruments = (' Guitar', ' Drums',' Bass guitar', ' Guitar');
var i =[0];
function theBeatlesPlay(musicians, instruments) {
  var emptyArray =[];
  for (var i =0 ; i<musicians.length ; i++) {
    emptyArray.push(musicians[i] + " plays " + instruments[i]);
  }
  
  return emptyArray;
}


function johnLennonFacts(facts){
var factsAboutJohnLennon = [];
var i =0 ; //need to find out why//
while (facts[i]) {factsAboutJohnLennon.push(facts[i] + "!!!"); i++;}
return factsAboutJohnLennon;
}

function iLoveTheBeatles (num){
var emptyArrayTwo = [];

do {emptyArrayTwo.push("I love the Beatles!");num++;}
while (num<15);
  return emptyArrayTwo;
}