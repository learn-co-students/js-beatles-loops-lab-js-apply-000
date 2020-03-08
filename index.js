// add solution here



function theBeatlesPlay(musician,instrument) {
  var n = []
  for (let i = 0; i <4; i+=1) {
   n.push(`${musician[i]} plays ${instrument[i]}`);
}
return n}


function johnLennonFacts(facts){
  var emptytwo = []
  let i = 0
  while (i < facts.length) {
    emptytwo.push(`${facts[i]}!!!`)
    i +=1}
  return emptytwo
}


function iLoveTheBeatles(n){
  var emptythree = []
do{
  emptythree.push(`I love the Beatles!`);
n++
} while(n < 8)
return emptythree
}







//const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
//const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
//function theBeatlesPlay(musicians, musicians) {
 // return "musicians" , "musicians";
//}
