function theBeatlesPlay (musicians, instruments) {
  let sentence = [];
  for(let i = 0; i < musicians.length; i++) {
    let str = musicians[i] + ' plays ' + instruments[i];
    
    sentence.push(str);
  }
  return sentence;
  
}

function johnLennonFacts(facts) {
  let newArr = [];
  let i = 0
  while (i < facts.length) {
    let str = facts[i] + '!!!';
    newArr.push(str);
    i++;
  }
  return newArr;
}

function iLoveTheBeatles(num) {
  let newArr = [];
  do {
    num +=1;
    let str = "I love the Beatles!";
    newArr.push(str);
  } while (num <15);
  return newArr;
}


