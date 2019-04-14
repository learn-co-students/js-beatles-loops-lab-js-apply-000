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