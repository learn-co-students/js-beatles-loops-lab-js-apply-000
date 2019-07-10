// add solution here
  const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
   

 function theBeatlesPlay(musicians, instruments) {
   
   var mu = musicians;
   var inst = instruments;
   var strings = [];
   var i;
     
     for (i = 0 ; i < mu.length ; i++)  {
          var text = "";
          text += mu[i] + ' plays ' + inst[i];
          strings.push(text);
     }
   
   return strings;
 
  }
  
  
  const facts = [
            "He was the last Beatle to learn to drive",
            "He was never a vegetarian",
            "He was a choir boy and boy scout",
            "He hated the sound of his own voice"
          ];
  
  function johnLennonFacts(facts) {
    
    var fact = facts;
    var arr = [];
    var i = 0;
    
    while(i < fact.length){
      var text = "";
      text += fact[i] +'!!!';
      arr.push(text);
      i++;
    }
    return arr;
  }
  
  var n = 7;
  
  function iLoveTheBeatles (n) {
    
    var arr = [];
    
    do {
    
      arr.push("I love the Beatles!");
      n++;
    }
    
    while(n < 15);
    
    return arr;
  }
  
  
  
  
  
  
  
  
  
  
  
  
  