const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var list = [];  // empty array we will push to
  for (let i=0; i<=3; i++) {  // also i<musicians.length
    list.push(`${musicians[i]} plays ${instruments[i]}`);
    }
  return list;
}

function johnLennonFacts(facts) {
  var results =[];
  var count = 0;
  while (count<facts.length){    // while loops are simple, while (condition) is true do this
    results.push(facts[count]+"!!!");
    count++;
    }
 return results;
}

function iLoveTheBeatles(num) {  // do while loop
  var array = [];
  do {
    array.push("I love the Beatles!")
    num++;
    }
  while (num<15);
  return array;
  }
