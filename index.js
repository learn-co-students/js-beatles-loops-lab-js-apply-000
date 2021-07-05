// add solution here

function theBeatlesPlay(musicians, instruments) {
  var playArr = [];
  
  for (var counter=0;counter < musicians.length; counter++) {
    
    playArr[counter] = musicians[counter] + " plays " + instruments[counter];
    
  }
  
  return playArr;

}

function johnLennonFacts(jlfacts) {
  var counter = 0;
  var loudJLFacts = [];
  while (counter < jlfacts.length) {
    
   loudJLFacts[counter] = jlfacts[counter] + "!!!";
    
    
    
    counter++;
  }
  
  return loudJLFacts;
}

function iLoveTheBeatles(num) {
  
  var loveArr = [];
  var index = 0;
  
  do {
    loveArr[index] = "I love the Beatles!";
    num++;
    index++;
  } 
  while(num<15);
  
  return loveArr;
  
} 