// // add solution here
//
// const theBeatlesPlay = (musArr, instArr) => {
//   let strMusInst = [];
//
//   for(let i = 0; i < musArr.length; i++){
//     let eachMus = musArr[i]
//     let eachInst = instArr[i]
// strMusInst.push(`${eachMus} plays ${eachInst}`)
//   }
// return strMusInst
// }
//
//

////

// add solution here
const theBeatlesPlay = (musArr, instArr) => {
  let strMusInst = [];

  for(let i = 0; i < musArr.length; i++){
    let eachMus = musArr[i]
    let eachInst = instArr[i]
strMusInst.push(`${eachMus} plays ${eachInst}`)
  }
return strMusInst
}

const johnLennonFacts = (johnFactArr) => {
  let exclamationStr = [];
  for(let i = 0 ; i <  johnFactArr.length; i++){
    let eachFact = johnFactArr[i];
    exclamationStr.push(`${eachFact}!!!`)
  }
  return exclamationStr
}



const iLoveTheBeatles = (num) => {
  let storedArr = [];
  do{
      storedArr.push(`I love the Beatles!`)
      num++
  }
  while(num < 15)
    return storedArr
}
