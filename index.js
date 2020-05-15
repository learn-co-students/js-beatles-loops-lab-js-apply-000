// add solution here

function theBeatlesPlay(musicians, instruments){
  let arr=[],
      newStr=""
    for(let i =0; i < musicians.length; i++){
     newStr=  musicians[i] + " plays " + instruments[i]
    arr.push(newStr)
    }
    return arr
}
    
function johnLennonFacts(facts){
  let i=0,
      newArr=[];
  while (i < facts.length) {
    let newStr= facts[i] + "!!!";
    newArr.push(newStr)
    i++
  }
  return newArr
}

function iLoveTheBeatles(num){
  let arr=[]
  do {
    arr.push("I love the Beatles!")
    num++
  } while (num < 15)
  
  return arr
  
}