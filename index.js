function theBeatlesPlay(musician, instruments){
  let array = [];
    for (let i = 0; i < musician.length; i++) {
      array.push(musician[i] + ' ' + 'plays' + ' ' + instruments[i]);
    }
    return array
}

function johnLennonFacts(facts) {
  let f = []
  var i = 0
    while (i < facts.length){
    f.push(`${facts[i]}!!!`)  
      i++;
    }
  return f
}

function iLoveTheBeatles(number) {
   var l = []
   do { l.push("I love the Beatles!")
   number++; }
    while (number < 15);
  return l 
}