// add solution here
//for loop
function theBeatlesPlay(arrMusicians, arrInstruments){
  let arrSentences = [];
  for(let i =0; i <arrMusicians.length; i++){
    let newStr = arrMusicians[i]+" plays "+arrInstruments[i];
    arrSentences.push(newStr)
  }
  return arrSentences;
}

let arrMusicians = ["John Lennon","Paul McCartney","George Harrison","Ringo  Starr"]
let arrInstruments = ["Guitar", "Bass Guitar","Lead Guitar","Drums"]
theBeatlesPlay(arrMusicians, arrInstruments)

//while loop
function johnLennonFacts(facts){
  let i = 0;
  let rtndArr = []
 while(i< facts.length){
   rtndArr.push(facts[i]+"!!!")
   i++;
 }
  return rtndArr
}
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

johnLennonFacts(facts)


// do - while loop
function iLoveTheBeatles(num){
  let i = 0;
  let a = 15 - num;
  let myOpinion = []
  do{
    myOpinion.push("I love the Beatles!")
    i++;
  }
  while(i < a);
  return myOpinion
}
 iLoveTheBeatles(6)
