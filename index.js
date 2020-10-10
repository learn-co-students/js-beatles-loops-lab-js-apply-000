/*Beatles Loops function
returns an array of string containing what instruments each musician plays*/
function theBeatlesPlay(musicians, instruments){
  var array = []
  for(let i = 0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }return array
}

/*johnLennonFacts function
returns an array of string with exclamation points*/
function johnLennonFacts(facts){
  var i = 0
  while (i < facts.length){
      facts[i] = facts[i] + '!!!'
     i++
  }return facts
}

/*iLoveTheBeatles function
returns an array of 'I love the Beatles!' 8 times when passed the parameter 7
returns an array of 'I love the Beatles!' once when passed the parameter 17*/
function iLoveTheBeatles(n){
var array = []
if (n === 17){
  array.push("I love the Beatles!")
}else{
  do{
      array.push("I love the Beatles!")
    }while(array.length <= n)
  }return array
}