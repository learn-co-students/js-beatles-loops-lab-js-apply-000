// add solution here

let musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr']
let instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums']
let empty = []

function theBeatlesPlay(musicians, instruments){
	for(let a = 0; a < musicians.length; a++){
    empty.push(`${musicians[a]} plays ${instruments[a]}`)
  }
  return empty
}


let facts = ["He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"]


function johnLennonFacts(facts){
  let newarr = []
  let c = 0;
  while (c < facts.length){
    newarr.push(`${facts[c]}!!!`);
    c++;
  }
  return newarr;
}


function iLoveTheBeatles(number) {
    const arr = [];
   
    do {
      arr.push(`I love the Beatles!`)
      number++
    }
    while(number < 15)
    
    return arr
    
  }
  
  iLoveTheBeatles(16);












