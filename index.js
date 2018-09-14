function theBeatlesPlay(people, instrum) {
  const arr = [];
  for (let i = 0; i < people.length; i++) {
    arr.push(`${people[i]} plays ${instrum[i]}`);
  }
  return arr;
}

function johnLennonFacts(arr) {
  let i = 0, array = [];
  while (i < arr.length) {
    array.push(arr[i++] + "!!!");
  }
  return array;
}

function iLoveTheBeatles(n) {
  const arr = [];
  do {
    arr.push("I love the Beatles!");
    
  } while (++n< 15);
  return arr;
}