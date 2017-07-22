const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
  const musicians_instruments = [];
  if (musicians.length !== instruments.length){
    console.log('There are not the same number of instruments as musicians.');
  }
  for (var i in musicians){
    musicians_instruments.push(musicians[i] + " plays " + instruments[i]);
  }
  return musicians_instruments;
}

function johnLennonFacts(array){
  var i = 0;
  while (i < array.length){
    array[i] += "!!!";
    i++;
  }
  return array
}

function iLoveTheBeatles(number){
  const array = [];
  var i = 0;
  do {
    array.push("I love the Beatles!");
    i++;
  } while (i <= number && number < 15);
  return array;
}
