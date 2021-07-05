// add solution here
// add solution here

function theBeatlesPlay(arrayMusicians, arrayInstruments) {
  let musicianPlays = [];
  
  for (let i = 0; i < arrayMusicians.length; i++) {
    musicianPlays.push(arrayMusicians[i] + ' plays ' + arrayInstruments[i]);
  }
  return musicianPlays;
}

function johnLennonFacts(array) {
  let i = 0;
  let emphasizedFacts = [];
  
  while (i < array.length) {
    emphasizedFacts[i] = array[i] + '!!!';
    i++;
  }
  return emphasizedFacts;
}

function iLoveTheBeatles(num) {
  let beatlesLove = [];
  
  do {beatlesLove.push('I love the Beatles!');
      num++;
  } while (num < 15)
  return beatlesLove;
}
