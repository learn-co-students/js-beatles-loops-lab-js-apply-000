// add solution here
function theBeatlesPlay(musicians, instruments){
  let sentences = []
  for(let i = 0; i<musicians.length;i++){
    let sentence = musicians[i]+" plays " + instruments[i]
    sentences.push(sentence)
  }
  return sentences
}

function johnLennonFacts(facts){
  let i = 0
  while(i<facts.length){
    facts[i]+= "!!!"
    i++
  }
  return facts
}

function iLoveTheBeatles(number){
  let result = []
  do{
    number++
    let love = "I love the Beatles!"
    result.push(love)
  }while(number<15);
  return result
}