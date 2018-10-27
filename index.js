// add solution here
 const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
 const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
const empty = [];

let i=0; 

function theBeatlesPlay(p1,p2) {
  for (let i=0;i<musicians.length;i++) {
    empty.push(p1[i] + " plays " + p2[i]);
  }
  return empty; 
}
 
 
function johnLennonFacts (one) {
  let j = 0; 
  while ( j< one.length) {
  one[j] = one[j] + "!!!"; 
    j++; 
  }
  return one; 
} 


function iLoveTheBeatles (num) {
  let love = [];
  
  do {
    love.push("I love the Beatles!")
    num++
  } while (num < 15)
  return love 
}