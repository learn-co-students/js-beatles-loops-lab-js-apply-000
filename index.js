function theBeatlesPlay(){
  const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  var answer = []
  
    for (var i = 0; i <= 3; i++) {
     answer.push (musicians[i] + " plays " + instruments[i])
    }
  return answer 
}

var facts = ["He was the last Beatle to learn to drive","He was never a vegetarian","He was a choir boy and boy scout","He hated the sound of his own voice"];

var johnLennonFacts = function (facts){
    var factswith = [] 
    for (var i = 0; i <= facts.length -1; i++) {
     factswith.push (facts[i] + "!!!")
    }
  return factswith;
};

var iLoveTheBeatles = function(int){
  let thisarray=[];
  do {  
   thisarray.push("I love the Beatles!");
    int = int++;
    }
  while (int < 15);
  return thisarray
};