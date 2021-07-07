// add solution here
const theBeatlesPlay = (musicians, instruments) => {
  let  arr = [];

  for(let i = 0; i < musicians.length; i = i + 1){
    let whoAndWhat = musicians[i] + ' plays ' + instruments[i];
    arr.push(whoAndWhat)
  }
return arr
}

const johnLennonFacts = (factsList) => {
let  i = 0;
  while (i < factsList.length){
  factsList[i] = factsList[i] + '!!!';
  
  ++i;
  }
  return factsList
}

const iLoveTheBeatles = (parameter) => {
  let arr = [];
  let i = -1;
  do {
    arr.push('I love the Beatles!');
    i = i + 1;
  }
  while(i < parameter && parameter < 15)
  return arr
}
