// add solution here
function theBeatlesPlay(musicians, instruments){
const array = []
let counter = 0
  for(counter; counter < musicians.lenght; counter++){
    array[counter] = `${musicians[counter]} plays ${instruments[counter]}`
  }
  return array


}
function iLoveTheBeatles(number){
const arr = []
let counter = 0
do{
  arr.push("I love the Beatles!")
  number++
}while(number < 15)


}

function johnLennonFacts(array_facts){
const arr = []
  var i = 0;
  while(i<array_facts.lenght){
    arr[i] = array_facts[i] + "!!!";
  }
  return arr
}
