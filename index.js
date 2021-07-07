// add solution here
function theBeatlesPlay(musicians, instruments){
  let newArray = []
  
  for (let i = 0; i < musicians.length; i++){
    let string = musicians[i] + ' plays ' + instruments[i];
    newArray.push(string)
  }
  return newArray; 
}

function johnLennonFacts(array){
  let newArray = []
  for (let i = 0; i < array.length; i++){
    let string = array[i] + '!!!'
    newArray.push(string)
  }
  return newArray
}

function iLoveTheBeatles(num){
  let newArray = []
  
  do {
    newArray.push('I love the Beatles!')
    num += 1;
  }
  
  while (
    num < 15
  )
  
  return newArray; 
}