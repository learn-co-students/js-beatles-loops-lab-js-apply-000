// add solution here

const theBeatlesPlay = (arrMus, arrInst) => {
  const finalArray = [];
  for (let i = 0; i < arrMus.length; i++) {
    finalArray.push(`${arrMus[i]} plays ${arrInst[i]}`)
  }
  return finalArray;
}

const johnLennonFacts = (array) => {
  var final = [];
  var i = 0;
  while (i < array.length){
    final.push(array[i] + '!!!');
    i++;
  }
  return final;
}

const iLoveTheBeatles = (a) => {
  var final = [];
    do {
    final.push("I love the Beatles!");
    a++;
  } while (a < 15);
  return final;
}
