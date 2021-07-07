// add solution here
function theBeatlesPlay(musicians, instruments)  {
  let emptyArr = [];
  for ( let i = 0; i <musicians.length; i++ )  {
    let newStr = `${musicians[i]} plays ${instruments[i]}`;
    emptyArr.push(newStr);
  }
  return emptyArr;
}

function johnLennonFacts(factArr)  {
  let n = 0;
  let newArr = [];
  while (n<factArr.length)  {
    let tempStr = factArr[n] + "!!!"
    newArr.push(tempStr);
    n++;
  }
  return newArr;
}

function iLoveTheBeatles(number)  {
  let arr = [];
  let sentence = "I love the Beatles!"
  do  {
    arr.push(sentence);
    number++;
  }
  while (number<15);
  return arr;
}
