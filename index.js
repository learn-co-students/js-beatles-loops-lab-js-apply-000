// add solution here
function theBeatlesPlay(musicians, instruments){
  const arr = []

   for (let i = 0, l = musicians.length; i < l; i++) {
     arr.push(`${musicians[i]} plays ${instruments[i]}`)
   }

   return arr

}
function iLoveTheBeatles(number){
const arr = []
let counter = 0
do{
  arr.push("I love the Beatles!")
  number++
}while(number < 15)

return arr

}

function johnLennonFacts(facts){
  const shoutedFacts = []

   let i = 0
   while (i < facts.length) {
     shoutedFacts.push(`${facts[i]}!!!`)
     i++
   }

   return shoutedFacts}
