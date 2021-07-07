// add solution here
function theBeatlesPlay(musicians, instruments){
  let newArray = [];
  for (let i = 0; i < musicians.length; i++){
    let musician = musicians[i];
    let instrument = instruments[i]
     let sentence = musician + ' plays ' + instrument 
     newArray.push(sentence)
  }
  return newArray;
}

function johnLennonFacts(array){
  let i =0;
  let answerArray = [];
  while(i < array.length){
    let fact = array[i]
    answerArray.push(fact + '!!!');
    i++;
    
  }
  return answerArray;
}

function iLoveTheBeatles(num){
  let beatlesArray = [];
  do {
    beatlesArray.push('I love the Beatles!');
    num++
    
  }
  while (num < 15)
  return beatlesArray;
}