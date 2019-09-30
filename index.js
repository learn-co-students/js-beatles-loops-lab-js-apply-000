// add solution here
function theBeatlesPlay (musicians, instruments) {
  musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  var musicFacts=[''];
  
  for (let i = 0; i < musicians.length; i++) {
       musicFacts[i] = '';
       musicFacts[i] += musicians[i] + " plays " + instruments[i];
  }
  
  return musicFacts;
}

function johnLennonFacts (array) {
  const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice",
  ];
  
  let i = 0;
  while (i < facts.length) {
    array[i] = [''];
    array[i] += facts[i] + "!!!";
    i++;
  }
  
  return array;
}

function iLoveTheBeatles (number) {
  let arr = [];
  let j = 0;

  do {
    arr [j] = [''];
    arr [j] += "I love the Beatles!";
    number++; 
    j++;
  }
  while (number < 15);
  
  return arr;
}
