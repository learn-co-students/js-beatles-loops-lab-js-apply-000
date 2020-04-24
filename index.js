// add solution here
var musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr']
var instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums']

function theBeatlesPlay(musicians,instruments){
  var musicianInstrument = [];
  
  for(var i = 0; i < musicians.length; i++){
    musicianInstrument.push (musicians[i] + ' plays ' + instruments[i]);
  }
  return musicianInstrument;
}
console.log(theBeatlesPlay(musicians, instruments));


var facts = [
  'He was the last Beatle to learn to drive',
  'He was never a vegetarian',
  'He was a choir boy and boy scout',
  'He hated the sound of his own voice'
];

function johnLennonFacts(facts){
 var i = 0;
while(i < facts.length){
  facts[i] += '!!!';
  i++;
}
return facts
}
johnLennonFacts('facts')


function iLoveTheBeatles(num){
  var empty = [];
	do {
		empty.push ("I love the Beatles!"); num++;}
		
	while (num < 15);
	return empty
}
