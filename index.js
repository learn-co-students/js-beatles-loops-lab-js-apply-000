// add solution here
function theBeatlesPlay(musicians,instruments){
  let assigned = []
  for (let i = 0; i< musicians.length; i++){
    // let string = musicians[i] + " plays " + instruments[i]
    assigned.push(musicians[i] + " plays " + instruments[i])
  }
  return assigned
}

function johnLennonFacts(facts){
  let fax = []
  let i = 0
  while (i < facts.length){
    fax.push(facts[i] + "!!!");
    i++;
  }
  return fax
}

function iLoveTheBeatles(num){
  let arr = []
  do {
    arr.push("I love the Beatles!");
    num++;
  }
  while (num < 15);
  return arr
}
