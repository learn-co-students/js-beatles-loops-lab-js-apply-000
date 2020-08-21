// add solution here
const instrumensts = ['lead guitar',' rhythm guitar', 'drums', 'base'];
const musicians = ['George', "John", 'Ringo', 'Paul' ]

const theBeatlesPlay = (arr1, arr2) => {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(`${arr1[i]} plays ${arr2[i]}`)
  }
  return result
}

theBeatlesPlay(musicians, instrumensts); 

///////////////////////////////////////////////////////////////////////////////

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
//const johnLennonFacts = (arr) => arr.map((el) => el + '!!!');

const johnLennonFacts = (arr) => {
  let counter = 0;
  const result = [];
  while (counter < arr.length) {
    result.push(arr[counter] + '!!!');
    counter++;
  }
  return result;
}

//////////////////////////////////////////////////////////////////////////////

const iLoveTheBeatles = (num) => {
  const result = [];
  let counter = num;
  do {
    counter++
    result.push('I love the Beatles!')
  } while (counter < 15)
  return result; 
}







