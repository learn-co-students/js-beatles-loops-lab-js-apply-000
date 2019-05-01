// add solution here
function theBeatlesPlay(bandMembers,instruments){
  let beatlesArray = []
  for(var i = 0; i < bandMembers.length;i++){
    beatlesArray.push(`${bandMembers[i]} plays ${instruments[i]}`)
  }
  return beatlesArray
}

function johnLennonFacts(facts){
  let index = 0
  let factArray = []
  while(index < facts.length){
    factArray.push(`${facts[index]}!!!`)
    index++
  }
  return factArray
}

function iLoveTheBeatles(num){
  let messageArray = []
  let index = -1
  do{
    messageArray.push('I love the Beatles!')
    if (num >= 15){
      return messageArray
    }
    else{
      index++
    }
  }
  while (index < num )
  return messageArray
}
