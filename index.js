function johnLennonFacts(facts){
  let i= 0
  while(i < facts.length) {
    facts[i] = facts[i] + '!!!'
    i++
  }
  return facts
}
function theBeatlesPlay(musicians, instruments){
  let x=[]
  for(let i = 0; i < musicians.length; i++){
    let temp = musicians[i] + ' plays ' + instruments[i]
    x.push(temp)
  } return x
}
function iLoveTheBeatles(i){
  let x=[]
  let love = "I love the Beatles!"
  do {
    x.push(love)
    i++
  } while(i < 15)
return x}
