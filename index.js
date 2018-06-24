function theBeatlesPlay (musicians, instruments){
  var newArray =[]
  for (let i = 0; i < musicians.length; i++){
   newArray.push(musicians[i] + " plays " + instruments[i])
 }
 return newArray
}

function johnLennonFacts (facts){
  var listFacts = []
  let i = 0
  while (i < facts.length) {
   listFacts.push(facts[i] +"!!!")
   i+=1; // adds current value of variable +1
  }
return listFacts;
}

function iLoveTheBeatles (n){
  var emptyArray = []
  do {
    emptyArray.push("I love the Beatles!");
    n +=1; // increment argument n
  } while (n < 15) // check if  n is less than 15
return emptyArray;
}
