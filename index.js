
//1)
const musicians = [
	'John Lennon',
	'Paul McCartney',
	'George Harrison',
	'Ringo Starr',
];

const instruments = [
  "Guitar",
  "Bass Guitar",
  "Lead Guitar",
  "Drums"
];

function theBeatlesPlay(musicians,instruments) {
  let band = [];
	for (let i = 0; i < musicians.length; i++) {
	  band.push([musicians[i]] + ' plays ' + instruments[i]);
	}
    return band;
}

//2)
function johnLennonFacts(array) {
  let john = [];
  let i = 0;
  while (i<array.length) {
    john.push(array[i] + '!!!');
    i++
  }
  return john;
}

//3
function iLoveTheBeatles(n) {
  let array = [];
  do {
    array += 'I love the Beatles!'
    n++;
  }
  while (n<17);
  return array;
}

// 4
function iLoveTheBeatles(n) {
	let array = [];
	do {
		array.push(`I love the Beatles!`);
		n++;
	} while (n < 15);
	if(n > 7){
    return array;
  }
}
