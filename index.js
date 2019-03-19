// add solution here

const musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];
const instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums'];

// didn't need to add the above because provided (accepts 2 parameters)

function theBeatlesPlay(musicians, instruments) {
  let arr=[];
  for (let i=0; i < musicians.length; i++) {
    const str = musicians[i] + ' plays ' + instruments[i];
   arr.push(str);
  }
  return arr;
}

function johnLennonFacts(facts) {
  let i = 0 ;
  while (i<facts.length) {
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number) {
  let statement=[];
  do {
    statement.push("I love the Beatles!");
    number++
}
while (number<15);
return statement;
}





