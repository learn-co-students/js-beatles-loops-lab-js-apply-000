// add solution here

function theBeatlesPlay(musicians, instruments) {
    var l = musicians.length;
    const beatlesArray = [];   
  for (var i=0; i<l; i++) {
   beatlesArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  
  return beatlesArray;
}


function johnLennonFacts(facts) {
  var lennonFacts = []

  let i = 0
  while (i < facts.length) {
    lennonFacts.push(`${facts[i]}!!!`)
    i++
  }

  return lennonFacts
}


  function iLoveTheBeatles(n) {
  var arrayBeatles = [];  
  
    do {
      arrayBeatles.push("I love the Beatles!");
      n++;
    }
    while ( n < 15)
    
  return arrayBeatles;
}
