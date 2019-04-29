// add solution here
let result = [];

const theBeatlesPlay = function(musicians, instruments){
  for (let i=0; i<musicians.length; i++){
    const curMusician = musicians[i]
    
    for (let j=i; j<instruments.length; j++){
      const curInstrument = instruments[j]
      
      result.push((`${curMusician} plays ${curInstrument}`))
      break;
    }
  }
  return result;
}


const johnLennonFacts = function (arr) {
  let counter = 0;
  let result1 = [];
  while (counter < arr.length) {
    let element = arr[counter];
    element = (element + '!!!');
    result1.push(element)
    counter++;
  }
  return result1;
}
// console.log(johnLennonFacts(facts))

const iLoveTheBeatles = function (num){
  let result2 = [];
  do {
    result2.push("I love the Beatles!");
    num++;
  } while (num<15);
  return result2;
}
















