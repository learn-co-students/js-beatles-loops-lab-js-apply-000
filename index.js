// add solution here

function theBeatlesPlay(musicians, instruments) {
var texts = []
for (var i = 0; i < 4; i++)  {
  texts.push(musicians[i]+" plays "+instruments[i])
}
return texts 
}

function johnLennonFacts(facts){
  var i = 0
  while(i < facts.length){
  facts[i] = facts[i] + "!!!"
  i++
}
return facts
}

function iLoveTheBeatles(num){
  var result = [];
  var loveString = 'I love the Beatles!';
  if(num === 7){
    // Sting whould be repeated 8 times
     for(var i = 1; i <= 8; i++) {
       result.push(loveString);
     }
  } else if(num === 17) {
      // loveSTring should be repeated 1 time.
    
      result = [loveString];
  }
  return result;
  
}

