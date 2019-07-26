function theBeatlesPlay(arrMus, arrIns){
  let emptArray = []
   for (let i = 0; i < arrMus.length ; i++){
         let str = arrMus[i] + " plays " + arrIns[i]
         emptArray.push(str)
   }
   return emptArray
 
} 

function johnLennonFacts(arrFacts){
  let factsArr = []
  for ( let i = 0; i< arrFacts.length; i++){
    let str = arrFacts[i] + "!!!"
    factsArr.push(str)
  }
  return factsArr
  
}
function iLoveTheBeatles(num){
  let emptyArray = []
  let str = "I love the Beatles!"
  do {
    emptyArray.push(str)
    num = num + 1
  }
  while(num<15) 
  
  return emptyArray
  
}
  
  
  
