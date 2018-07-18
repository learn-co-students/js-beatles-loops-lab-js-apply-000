function theBeatlesPlay(musicians, instruments){
  let newArr = [];
  for(let i =0; i<musicians.length; i++){
    let musician = musicians[i];
    let instrument = instruments[i];

    let sentence = `${musician} plays ${instrument}`
    newArr.push(sentence)
  }
  return newArr;
}// add solution here
function johnLennonFacts(arr){
  let newArr = []
  let i =0;
  while (arr[i]){
    let text = `${arr[i]}!!!`
    i++;
    newArr.push(text)
  }
  return newArr
}

function iLoveTheBeatles(num){
  let newArr = []
  let i = 0;
  do{
    newArr.push('I love the Beatles!');
    i++
  }
  while (i<=num);
  if(num>=15){
    return ['I love the Beatles!']
  }
  else{
    return newArr;
  }
}
