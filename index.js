// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
const arr = [];

function theBeatlesPlay (musicians, instruments) {
for (let i = 0; i < musicians.length; i++) {
  arr.push(musicians[i] + " plays " + instruments[i]);
} 
return arr;
}



function johnLennonFacts(arr) {
  const newArr = [];
  let i = 0;
  while (i < arr.length) {
    newArr.push(arr[i] + "!!!");
    i++;
  } return newArr;
}


function iLoveTheBeatles (n) {
  let x = [];
  do {
    x.push("I love the Beatles!");
    n++;
  } 
  while (n < 15);
  return x;
} 