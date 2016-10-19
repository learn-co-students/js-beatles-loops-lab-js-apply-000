const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]
function theBeatlesPlay(musicians, instruments){
  const array= []
  for(let i=0,l=musicians.length;i<l;i++){array.push(`${musicians[i]} plays ${instruments[i]}`)
}
  return array;
}
function johnLennonFacts(facts) {
  var results = [];
  var count = 0;
  while (count < facts.length) {
    results.push(facts[count] + "!!!");
    count++;
}
  return results;
}
function iLoveTheBeatles(num) {
  var array = [];
  do {
    array.push("I love the Beatles!")
    num++;
}
  while (num < 15);
  return array;
}
