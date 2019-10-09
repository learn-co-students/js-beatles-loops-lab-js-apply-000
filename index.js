// add solution here
let arr = [];
let theBeatlesPlay = (musiciansArray, instrumentArray) =>{
  let string;
  for (let i=0; i<musiciansArray.length; i++) {
    string = musiciansArray[i] + ' plays ' + instrumentArray[i];
    arr[i] = string;
  }
  return arr;
};


const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

let johnLennonFacts = (facts) => {
  let fact=[];
  let i=0;
   while (i < facts.length) {
  fact.push(`${facts[i]}` +'!!!');
  i++
}
return fact;
};

let iLoveTheBeatles = (num) => {
  let empArr = [];
  let countString = 'I love the Beatles!';
  do {
    num++;
    empArr.push(countString)
} while (num < 15);

return empArr;
}

