// add solution here
function theBeatlesPlay(musicians, instruments){
  let musicAndInstru = [];
  for (let i = 0; i <= musicians.length-1; i++){
    musicAndInstru.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return musicAndInstru;
}

function johnLennonFacts(facts){
  let excitedFacts = [];
  let count = 0;
  while (count <= facts.length-1){
    excitedFacts.push(facts[count] + '!!!')
    count++;
  }
  return excitedFacts;
}

function iLoveTheBeatles(num){
  let results = [];
    do {
    num = num + 1
    results.push('I love the Beatles!');
  } while (num < 15)
  return results;
}
