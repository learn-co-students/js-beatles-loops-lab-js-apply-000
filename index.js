
function theBeatlesPlay(musicians, instruments) {
	console.log("I'm in theBeatlesPlay")

	var beat = [ ]

	for (i = 0; i < musicians.length ; i++){
		beat.push(musicians[i] + ' plays ' + instruments[i])
	}
	return beat
}



function johnLennonFacts(factsArray) {
	/*for (i = 0; i < factsArray.length; i++) {
		factsArray[i] = factsArray[i] + '!!!'
		
	}*/
	console.log("I'm in johnLennonFacts")
	var i = 0
	while (i < factsArray.length){

		factsArray[i] = factsArray[i] + '!!!'
		i++
	}

	return factsArray

}





function iLoveTheBeatles(love_count){
	console.log("I'm in iLoveTheBeatles")
	var tools = [ ]
	i = love_count
	do {
		tools.push ('I love the Beatles!') 
		i++ 
	}while (i < 15)

	return tools
}
	


var singers = ['John Lennon', 'Paul McCartney', 'Ringo Starr', 'George Harrison']
var noisemakers = ['Guitar', 'Bass Guitar', 'Drums', 'Lead Guitar']


const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

var singers = ['John', 'Paul', 'Ringo', 'George']
var noisemakers = ['flute', 'guitar', 'drums', 'piano']

var beatleJuice = theBeatlesPlay(singers, noisemakers)

for (i = 0; i < beatleJuice.length; i++){
	console.log(beatleJuice[i])
}

var i = 0
while(i < beatleJuice.length) {
	console.log(beatleJuice[i])
	i++
}


var resultofthis = iLoveTheBeatles(17) 

