function theBeatlesPlay(musicians, instruments) {
  let array = [];
  for (let i = 0; i < musicians.length; i++) {
    array.push(musicians[i] +' plays ' + instruments[i]);
  }
  return array;
}

function johnLennonFacts(array) {
  let jLFacts = [];
  let i = 0;
  while (i < array.length) {
    jLFacts.push(array[i] + '!!!')
    i++;
  }
  return jLFacts;
}
function iLoveTheBeatles(num) {
  let myLove = [];
  do { myLove.push( 'I love the Beatles!')
  num++; 
  }
  while (num < 15);
  return myLove;
  
}