// add solution here
// source: https://www.w3schools.com/js/js_loop_while.asp - do + while
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians,instruments) {
  const emptyArray = [ ];
  for (let i=0, l=musicians.length; i < l; i++) {
  emptyArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return emptyArray;
}

const theFacts = ["He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"];
        
function johnLennonFacts(theFacts) {
  const EmptyArrayforJLF = [ ];
  let i=0; 
  while(i < theFacts.length) {
    EmptyArrayforJLF.push(`${theFacts[i]}!!!`);
    i++;
  }
  return EmptyArrayforJLF;
}

function iLoveTheBeatles (num) {
  const EmptyArrayforILTB = [ ];
  do {
    EmptyArrayforILTB.push('I love the Beatles!');
    num++;}
    while (num<15); //because 7+8 
    return EmptyArrayforILTB;
  }


// important to revise: when in each function the { is located
// interpolation of strings