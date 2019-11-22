// add solution here



let count = 0


function theBeatlesPlay(musician, instrument) {
  let array = [];
  for(let i=0; i < musician.length; i++) {
     array.push(`${musician[i]} plays ${instrument[i]}`)
  }
  return array;
}


function johnLennonFacts(array) {
  let n = 0;
  while(n < array.length) {
    array[n] += "!!!"
    n++
  }
  return array;
}

function iLoveTheBeatles(number) {
  let array = [];

  do {
    number++;
    array.push("I love the Beatles!")
    
  } while(number < 15)
  return array;
}
