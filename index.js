// This is a for loop.
function theBeatlesPlay (musicians, instruments) {
  let statement = [];

for (let i = 0; i < musicians.length; i++) {
      statement.push(musicians[i] + ' plays ' + instruments[i]);
   }
   return statement;
}

// This is a while loop.
function johnLennonFacts (facts) {
  let johnLennonFacts = [];

let i = 0;
while (i < facts.length) {
  johnLennonFacts.push(facts[i] += "!!!");
  i++;
   }
  return johnLennonFacts;
}

//This is a do-while loop.
function iLoveTheBeatles(number) {
  let beatleLover= [];

do {
    beatleLover.push('I love the Beatles!');
    number++;
  } while (number < 15);
  
 return beatleLover;
}
