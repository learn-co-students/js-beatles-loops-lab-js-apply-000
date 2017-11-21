function theBeatlesPlay(musicians, instruments){
  var empty = []
  let str = ""
  for (let i=0;i<musicians.length;i++){
    // for (j=0;j<instuments.length;j++)
      str = ""
      str = `${musicians[i]} plays ${instruments[i]}`
      empty.push(str)
    }
  return empty
}


function johnLennonFacts(facts){
var i = 0
var result = []
var news
while (i < facts.length) {
    news = facts[i]+`!!!`
    result.push(news)
    i++
}
  return result
}

function iLoveTheBeatles(number){
  var arr = []
  var i = 0
  if (number < 15){
  do {
    arr.push("I love the Beatles!")
    i++
  } while (i<=number);
  }
  else {
    arr.push("I love the Beatles!")
  }
  return arr
}


