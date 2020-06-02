// add solution here
let musicians = ['John Lennon', 'Grimes'];
let instruments = ['guitar', 'Hydrolauphone'];
function theBeatlesPlay(musicians,instruments) {
  let arr1 = [];
  for (let i=0; i < musicians.length; i++) {
    arr1.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return arr1;
}


function johnLennonFacts(facts) {
  let counter =0;
  let arr2= [];
  while(arr2.length < facts.length) {
    arr2.push(`${facts[counter]}!!!`);
    counter++
  }
  return arr2;
}
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function iLoveTheBeatles(num) {
  var store = [];
  do { store.push('I love the Beatles!')
    } while (store.length < num+1 & num < 15)
    
    return store;
}

