const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function theBeatlesPlay(m, inst)  {
  var l = m.length
  
  var rtn = [];
  var step
  for (step = 0; step < l; step++) {
    rtn.push((m[step] + ' plays ' + inst[step]))
  }
  return rtn
}


function johnLennonFacts (f) {
  var rtn = [];
  var i; 
  f.forEach(function(item) {
    i = item + "!!!"
    rtn.push(i)
  });
  
  return rtn 
}

function iLoveTheBeatles(n) {
  var a = [];
  var i = 0;
  
  if (n > 14) {
    return "I love the Beatles!"    
  }
  
  do {
    a.push("I love the Beatles!");
    i++
  } while (i < n + 1);
  return a
}

// theBeatlesPlay(musicians, instruments)
console.log(iLoveTheBeatles(7))