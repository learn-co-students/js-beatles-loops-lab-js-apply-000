const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay() {
  let x = [];
  for(let i = 0; i < 4; i++){
    x.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return x;
}
theBeatlesPlay(musicians,instruments);



function johnLennonFacts(facts) {
  const x = [];
  let i = 0;
 while (x.length < facts.length){
   x.push(facts[i] + "!!!");
 i++;

 }

 return x;
}


function iLoveTheBeatles(x) {
  let i = [];
  do {
    i.push("I love the Beatles!");
    x++;
  } while (x < 15); {
    
  }
  return i;
}