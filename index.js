function theBeatlesPlay(musicians,instruments){
  let emptyArray1=[]
  for(let i=0;i<musicians.length;i++){
    emptyArray1.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return emptyArray1
}
function johnLennonFacts(facts){
  let alteredFacts=[]
  let i=0
  while(i<facts.length){
    alteredFacts.push(`${facts[i]}!!!`)
    i++
  }
  return alteredFacts
}
function iLoveTheBeatles(n){
  let emptyArray2=[]
  do{
    emptyArray2.push('I love the Beatles!')
    n++
  }while(n<15)
  return emptyArray2
}
