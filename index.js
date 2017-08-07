function theBeatlesPlay (musicians, instruments) {
  var array = new Array();
  for (let i = 0; i<musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(factsJL) {
  let i = 0;
  while (i<factsJL.length) {
    factsJL.splice([i], 1, (`${factsJL[i]}`+"!!!"));
    i++
  }
  return factsJL;
}

function iLoveTheBeatles(i) {
  var array = new Array();
  do {
    array.push("I love the Beatles!");
    i++
  }
  while (i<15);
  return array
}
