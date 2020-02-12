// add solution here
function theBeatlesPlay() {
  const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  let newArr = [];
for(let i = 0; i < 4; i ++) {

    newArr.push(`${musicians[i]} plays ${instruments[i]}`);

   }

return newArr;

};

function johnLennonFacts(arr) {

  let newArr = [];
  let i  = 0;

  while (i < arr.length) {
    newArr.push(`${arr[i]}!!!`);
    i++ ;
    }

  return newArr;

};


function iLoveTheBeatles(num) {
  let newArr = [];

  do {
    newArr.push("I love the Beatles!");
    num++;
  }
  while (num < 15);

  return newArr;
};
