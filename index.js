const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
 function theBeatlesPlay(musicians, instruments) {
   let answer = []

   for (let i = 0; i < musicians.length; i++) {
     let myString = musicians[i] + ' plays ' + instruments[i];
     answer.push(myString);

   }
   return answer;
 }

function johnLennonFacts(facts) {
  let foo = [];
  let i = 0;
  while (i < facts.length) {
    foo.push(facts[i] + '!!!')
    i++;
  }
  return foo;
}

function iLoveTheBeatles(number) {
  var foo = [];

  do {
    foo.push('I love the Beatles!')
    number++
  }
  while(number < 15)
  return foo;
}
