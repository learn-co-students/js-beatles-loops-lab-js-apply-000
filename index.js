function theBeatlesPlay(musicians,instruments){
  let answers = []

  for(var i=0;i<musicians.length;i++){
    let musician = musicians[i]
    let instrument = instruments[i]
    let answer = musician + " plays " + instrument
    answers.push(answer)
  }

  return answers
}

function johnLennonFacts(facts){
  let jlWiki = []
  let i=0;

  while (i<facts.length) {
    jlWiki.push(facts[i]+"!!!")
    i++
  }
//  for(let i=0; i<facts.length; i++)
  return jlWiki
}

function iLoveTheBeatles(counter){

  let bulletinBoard = []

  do{
    bulletinBoard.push("I love the Beatles!")
    counter++
  }
  while(counter<15)

  return bulletinBoard
}
