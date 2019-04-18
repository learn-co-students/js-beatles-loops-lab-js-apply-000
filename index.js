// add solution here
function theBeatlesPlay(arr1,arr2){
  var arrayReturn = [];

  for(var i=0;i<arr1.length;i++){

    arrayReturn.push(`${arr1[i]} plays ${arr2[i]}`);

  }
  return arrayReturn;
}

function johnLennonFacts(facts){
  var tempArray = [];
  // var isntDone = true;
  // while (isntDone){
  //
  //   for(var i = 0; i<facts.length; i++){
  //     tempArray.push(facts[i] + "!!!")
  //
  //     if(i === facts.length){
  //       isntDone = !isntDone;
  //     }
  //   }
  //   return tempArray;
  // }

  var i = 0;
  while(i<facts.length){
    tempArray.push(facts[i] + "!!!")
    i++
  }

  return tempArray
}



function iLoveTheBeatles(aNumberAsAParameter){
  var emptyArray = []
  var numberOfStrings = 15 - aNumberAsAParameter;
  var counter = 0;
  do {
    emptyArray.push("I love the Beatles!")
    counter += 1
  }
  while(counter < numberOfStrings)
  return emptyArray
}
