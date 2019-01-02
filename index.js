

function theBeatlesPlay(musician, instrument) {
    var arr = [];
    
    for(var i = 0; i < musician.length; i++) {
      //var string = musician + " " + instrument;
      //arr[i] = string;
      
      var string = musician[i] + " plays " + instrument[i];
      //arr[i].push(string);
      arr[i] = (string);
    }
    return arr;
  }
 
function johnLennonFacts(facts) {
  var i = 0;
  var factsArray = [];
  
  while(facts[i]){
    var string = facts[i] + "!!!"
    factsArray[i] = string;
    i++;
  }
  return factsArray;
}


function iLoveTheBeatles(num) {
  var arr = [];
  var i = num;
  var j = 0;
  do{
    arr[j++] = "I love the Beatles!";
    
  }while(++i < 15);
  return arr;
  
} 
