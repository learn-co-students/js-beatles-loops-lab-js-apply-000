// add solution here
let theBeatlesPlay =  (musicianArr, instrumentArr) => {
  let arr = [];
  for (let i in musicianArr){
    arr.push(`${musicianArr[i]} plays ${instrumentArr[i]}`)
  }
return arr;
}


let johnLennonFacts = (factsArr) => {
  let  x = 0;
  let factsAboutJohn = [];

  while(x <  factsArr.length){
    factsAboutJohn.push( factsArr[x] + "!!!");
    x++;
  }
  
  return factsAboutJohn;
}


let iLoveTheBeatles = (num) => {
  let arr = [];
  do {
    arr.push("I love the Beatles!");
    num++
  } while (num<15);
  return arr;
}





