function theBeatlesPlay(musicians, instruments) { //thefunction thebeattlesplay accepts two parameter musicians and instrumnets//
  const arr = [] // we have created a variable arr with an empty array//var fruits = ["apple", "babana"]//fruits.length = 2//

  for (let i = 0; i< musicians.length; i++) { 
    //when i=0;  0<1;i=1//
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  //`${musicians[0]=john lennon plays $(instrument)[0]=guitar//
    //when i=1; 1<2;i=2//
    //`${musician[1] =   plays //
  }
  

  return arr;
}

function johnLennonFacts(facts) { //function johnLennonfacts accepts an array of arguments ie john lennon facts//
const shoutedFacts = [] //in shoutedfacts array is stored//

  let i = 0  //when 0<3// 
  while (i < facts.length) { 
    shoutedFacts.push(`${facts[i]}!!!`) //`${facts[0]=no 0 facts is stored in the variable shoutedfacts//
    i++  //while loop has only one condition so do i++ after first is completed//
  }

  return shoutedFacts; //stop  the function executon and returns the avlue to the funcion call//
}

function iLoveTheBeatles(n) {
  const arr = []

  do {
    arr.push('I love the Beatles!')
    n++
  } while (n < 15)

  return arr
}