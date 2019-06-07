// add solution here
function theBeatlesPlay(artists, instuments){
  let arr = []
  for(let i = 0; i < artists.length; i++){
    let s = `${artists[i]} plays ${instuments[i]}`
    arr.push(s)
  }
  return arr
}

function johnLennonFacts(facts){
  let arr = []
  for(let i = 0; i < facts.length; i++){
    arr[i] = facts[i] + '!!!' 
  }
  return arr
}

function iLoveTheBeatles(num){
  let arr = []
  do{
    arr.push("I love the Beatles!")
    num++
  } while(num < 15)
  return arr
}

