// add solution here
function theBeatlesPlay (musicians,instruments) {
  const newArr = []
  for (let counter = 0; counter < musicians.length; counter++) {
    if (musicians[counter] === musicians[0]) {
    newArr.push(`${musicians[counter]} plays ${instruments[0]}`)
    }
    else if (musicians[counter] === musicians[1]) {
      newArr.push(`${musicians[counter]} plays ${instruments[1]}`)
    }
    else if (musicians[counter] === musicians[2]) {
      newArr.push(`${musicians[counter]} plays ${instruments[2]}`)
    }
    else if (musicians[counter] === musicians[3]) {
      newArr.push(`${musicians[counter]} plays ${instruments[3]}`)
    }
  }
    return newArr
}

// trying out new syntax
johnLennonFacts = facts => {
const funFacts = []
let counter = 0
while (funFacts.length < facts.length) {
  funFacts.push(facts[counter] + '!!!')
  counter++
}
return funFacts
}

//The condition of the loop should check to see that the parameter number is less than 15.
//It should contain a number of strings that represents the difference between the input number and 15.

//num is less than 15
//AND
// result is 15 minus number
// 15 - 7 = 8
// result should print i love beatles 8 times

// function iLoveTheBeatles(num) {
//   const luv = []
//   do {
//     luv.push('I love the Beatles!')
//   }
//   while ((luv.length + 1) < 15 - num) {
//     num++
//     luv.push('I love the Beatles!')
//   }
//   return luv
// }

function iLoveTheBeatles(num) {
  const luv = []
  do {
    luv.push('I love the Beatles!')
  }
  while (luv.length < 15 - num) {
    num++

  }
  return luv
}
