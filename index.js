// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];


function theBeatlesPlay(musician, instrument) {
  let newArr = [];
  for (let i=0; i<musician.length; i++) {
    newArr.push(
      `${musicians[i]} plays ${instrument[i]}`
    );
  }
  return newArr;
}

function johnLennonFacts(facts) {
  let arr = [];
  for (let i=0; i<facts.length; i++) {
    arr[i] = `${facts[i]}!!!`;
  }
  return arr;
}

function iLoveTheBeatles(n) {
  let arr = [];
  if (n >= 15) {
    arr[0] = `I love the Beatles!`
  } else if (n < 15) {
    do {
      arr.push(`I love the Beatles!`);
      n += 1;
    } while (n < 15 );
  }

  return arr;
}
