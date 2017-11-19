function theBeatlesPlay(musicians,instruments){
  let emptyArray=[]
  for(let i=0;i<musicians.length;i++){
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return emptyArray
}
function johnLennonFacts(facts){
  let factsAmended=[]
  let i=0
  while(i<facts.length){
    factsAmended.push(`${facts[i]}!!!`)
    i++
  }
  return factsAmended
}
function iLoveTheBeatles(n){
  let emptyArray2=[]
  do{
    emptyArray2.push("I love the Beatles!")
    n++
  }while(n<15)
  return emptyArray2
}
