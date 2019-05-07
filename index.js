// add solution here
function theBeatlesPlay(musicians,instruments){
  var newstuff=[];
  
  for(var a = 0; a<=musicians.length-1; a++){
    var newWord =musicians[a]+" plays " + instruments[a];
    newstuff.push(newWord);
  }
  
  return newstuff
}

function johnLennonFacts(facts){
  var newFacts = [];
  var b =0;
  while(b < facts.length-1){  
    for(; b <facts.length; b++){
      newFacts.push(facts[b]+"!!!");
    }
  }
  return newFacts;
}

function iLoveTheBeatles(number){
  var words= []
  do{
    words.push("I love the Beatles!")
    number +=1;
  }while(number <15)
  
  return words;
}
