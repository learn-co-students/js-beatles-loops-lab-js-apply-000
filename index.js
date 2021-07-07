// add solution here
function theBeatlesPlay(musiciansArr, instrumentsArr) {
  let musicianPlay = [];
  for (let i = 0; i < musiciansArr.length; i++) {
    musicianPlay.push(`${musiciansArr[i]} plays ${instrumentsArr[i]}`);
  }
  return musicianPlay;
}

function johnLennonFacts(factsArr) {
  let newArr = [];
  let i = 0;
  while (i < factsArr.length) {
    newArr.push(`${factsArr[i]}!!!`);
    i++;
  }
  return newArr;
}

function iLoveTheBeatles(num) {
  let result = [];
  do {
    result.push('I love the Beatles!');
    num++
  }
  while (num < 15);
  return result;
}
