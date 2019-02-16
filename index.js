// add solution here
const theBeatlesPlay = (musicianArr, instrumentArr) => {
  let outputArr = [];
  
  for(let i = 0; i < musicianArr.length; i++){
    let currentElem = musicianArr[i]
    let instrumentElem = instrumentArr[i];
    
    outputArr.push(`${currentElem} plays ${instrumentElem}`);
  }
  
  return outputArr;
}

const johnLennonFacts = (anArr) => {
  let counter = 0;
  let outputArr = [];
  while(counter < anArr.length){
    let currentElem = anArr[counter];
    
    let newElem = currentElem + '!!!';
    
    outputArr.push(newElem);
    counter++;
  }
  
  return outputArr;
}

const iLoveTheBeatles = (num) => {
  let howMuchILoveTheBeatlesArr = [];
  
  if(num >= 15){
    howMuchILoveTheBeatlesArr.push('I love the Beatles!');
  } else {
      do {
    howMuchILoveTheBeatlesArr.push('I love the Beatles!')
    num++;
  } while (num < 15)
  
  }

  
  return howMuchILoveTheBeatlesArr;
}

