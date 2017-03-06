var namesArray = ["John Lennon","Ringo Starr","George Harrison","Paul McCartney"];
var instrumentsArray = ["Guitar","Drums","Lead Guitar","Bass Guitar"];

var theBeatlesPlay = function(namesArray,instrumentsArray){
  var emptyArray = [];
  for(var i = 0; i < namesArray.length;i++){
    var beatle = namesArray[i] + " plays " + instrumentsArray[i];
    emptyArray.push(beatle);
  }
  return emptyArray;
};

var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

var johnLennonFacts = function(facts){
  var arrayOfFacts = [];
  for(var i = 0;i < facts.length;i++){
    var fact = facts[i] + '!!!';
    arrayOfFacts.push(fact);
  }
  return arrayOfFacts;
};

var iLoveTheBeatles = function(number){
  var array = [];
  do{
    array.push("I love the Beatles!");number++;
} while (number < 15);
    return array;
  };
