// add solution here

function theBeatlesPlay (array1, array2){
  let newArray = [];
  
  for (let i = 0; i < array1.length; i++){
      let musican = array1[i];
      let instrument = array2[i];
      newArray.push(musican + ' plays ' + instrument);
  }
  
  return newArray;
}

function johnLennonFacts (array){
  let newArray = [];
  let i = 0;
  while (i < array.length){
        let fact = array[i];
        let fixFact = fact + "!!!";
        newArray.push(fixFact);
        i++;
  }
  
  return newArray;
}

function iLoveTheBeatles (num){
  let newArray = [];
  let i = num;
  
  do {
    newArray.push("I love the Beatles!")
    i++;
  } while (i < 15);
  return newArray;
}