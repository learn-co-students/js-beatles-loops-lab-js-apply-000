// add solution here


function theBeatlesPlay(musicians, instruments) {
   let arr = []

   for (let i = 0; i < musicians.length; i++) {
      arr.push(`${musicians[i]} plays ${instruments[i]}`)
   }
   return arr
}

function johnLennonFacts(facts) {
   const lennonFacts = []
   
   let count = 0

   while (count < facts.length) {
      lennonFacts.push(`${facts[count]}!!!`)
      count++
   }

   return lennonFacts
}

function iLoveTheBeatles(num){
   let arr = []

   do {
      arr.push('I love the Beatles!')
      num++
   } while (num < 15)

   return arr

}







