function theBeatlesPlay(musicians, instruments ){
	var Array= ["John Lennon plays Guitar",
	"Paul McCartney plays bass Guitar",
	"George Harrison plays Lead Guitar",
	"Ringo Starr plays Drums"
	];
	for(var i= 0; i < musicians.length; i += 1 ){
	Array.push(musicians[i] + "plays" + instruments[i])
}
return Array;
}

function johnLennonFacts(){
  var hippieFacts = ['He was the last Beatle to learn to drive',
  'He was never a vegetarian',
  'He was a choir boy and boy scout',
  'He hated the sound of his own voice'];
}
function johnLennonFacts(array){
  var hippieFacts = ['He was the last Beatle to learn to drive',
  'He was never a vegetarian',
  'He was a choir boy and boy scout',
  'He hated the sound of his own voice'];
   var i = 0;
   while(i < array.length){
	array[i] = array[i] + "!!!"; i++;
}
return array;
}

function iLoveTheBeatles( number ) {
	var emptyArray = [];
	var i = 0;
do{
	emptyArray.push("I love the Beatles!"); i++;
}while (i < number && number < 15);
return emptyArray;
}