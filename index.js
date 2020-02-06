// add solution here

const theBeatlesPlay = (band, instruments) => {
  let arr = [];

  for (let i=0; i<band.length; ++i) arr.push(`${band[i]} plays ${instruments[i]}`);
  return arr
}

const johnLennonFacts = (facts) => {
  let i = 0;
  let arr = []
  while (i < facts.length) {
    arr.push(facts[i] + '!!!');
    i++;
  }
  return arr
}


const iLoveTheBeatles = (num) => {
  let arr = [];

  do arr.push("I love the Beatles!"), num++;
  while (num < 15);

  return arr
}
