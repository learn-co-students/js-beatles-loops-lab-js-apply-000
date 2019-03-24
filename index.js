// #1

function theBeatlesPlay(musicians, instruments) {

var str = [];

  for (var i = 0; i < musicians.length; i++)
      {
    str.push(musicians[i] + " plays "+ instruments[i])
      }
  return str;
}


//  returns an array of strings with exclamationpoints

function johnLennonFacts(fact) {
  var exc = "!!!";
  var res = [];
  
  var j = 0;
  while (j < fact.length) 
      {
     res.push(fact[j] + exc)
     ///res.push(fact[j].concat(exc)) 
     j++;
      }
  return res;
}


///"I love the Beatles!"

function iLoveTheBeatles(num) {
var res =[];

  do {
  res.push("I love the Beatles!")
  num++
    
  }
  // i < num + 1 
  // if (i === 15) {break;}
  while (num < 15);
  
return res;
}




