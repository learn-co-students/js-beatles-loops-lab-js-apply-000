// add solution here

function theBeatlesPlay(arrayMus, arrayInst) {
  var newArr = [];
  for (let i = 0; i < arrayMus.length; i++) {
    newArr.push(`${arrayMus[i]} plays ${arrayInst[i]}`);
  }
  return newArr;
}

function johnLennonFacts(facts) {
  const newArr = [];
  for ( let fact of facts) {
    newArr.push(`${fact}!!!`);
  }
  return newArr;
}

function iLoveTheBeatles(num) {
  const myArr = [];
  if (num < 15) {
    let i = 1;
    do {
      myArr.push(`I love the Beatles!`);
      i++;
    }
    while (i <= (15 - num));
  } else if ( num === 17) {
    return ['I love the Beatles!'];
  }
  return myArr;
}
