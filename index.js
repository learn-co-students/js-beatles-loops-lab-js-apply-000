// add solution here

let musiciansArray = ["John", "Ringo", "Paul"];
let instrumentsArray = ["guitar", "drums", "bass"];

function theBeatlesPlay(musiciansArray, instrumentsArray) {
  let fullSentences = [];
  let i;
  
  for (let i=0; i < musiciansArray.length; i++) {
    let arr1 = musiciansArray[i] + ' plays ' + instrumentsArray[i];
    fullSentences.push(arr1);
    console.log(arr1)
    arr1=[];
    
  }
  
  return fullSentences;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];



const johnLennonFacts = (facts) => {
 let i = 0;
 
  while (i < facts.length) {
    facts[i] += "!!!";
    i++;
  }
  
  return facts;
}

const iLoveTheBeatles = (n) => {
  let arr1 = [];
  
  do {
    arr1.push("I love the Beatles!");
    n++;
  } while (n<15); 
  
  return arr1;
}



