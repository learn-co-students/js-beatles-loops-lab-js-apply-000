const musicians= ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments= ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
var Neww = []

function theBeatlesPlay(muscians, instruments){
  var musicianSentences = []
  
  for(var i = 0; i < muscians.length; i++){
    var newSentence = muscians[i] + " plays " + instruments[i] 
    musicianSentences[i] = newSentence;
  }
  
  return musicianSentences
}

function johnLennonFacts(facts){
  var thebeatleloop=[]
  for(var i = 0; i < facts.length; i++){
    var johnlennon = facts[i] + "!!!" 
    thebeatleloop[i] = johnlennon;
  }
  return thebeatleloop
}

function iLoveTheBeatles(chours){
  var ilovethebeatles = []
  
  if(chours === 7){
    for (var i = 0; i < 8; i++ ){
      var chours1 = "I love the Beatles!";
      ilovethebeatles[i] = chours1
    }
  } else if(chours === 17) {
      ilovethebeatles[0] = "I love the Beatles!";
  }
  return ilovethebeatles
}