const theBeatlesPlay = (musiciansArr, InstrumentArr) => {
  const emptyArr = [];
  for ( let i = 0; i < musiciansArr.length && i < InstrumentArr.length; i++) {
    let string = `${musiciansArr[i]} plays ${InstrumentArr[i]}`;
    emptyArr.push(string);
  }
  return emptyArr;
};

const johnLennonFacts = facts => {
  const newArr = [];
  let iter = 0;
  while (iter < facts.length) {
   let string = facts[iter] + '!!!';
   newArr.push(string);
   iter++;
  }
  return newArr;
};

const iLoveTheBeatles = num => {
  const newArr = [];
  do {
    newArr.push('I love the Beatles!');
    num++;
  } while (num < 15);
  return newArr;
};