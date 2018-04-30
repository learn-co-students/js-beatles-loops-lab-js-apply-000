function theBeatlesPlay(){

	musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
	instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

	var sentences = [];

for (var i = 0; i < musicians.length; i++){
	sentences.push(musicians[i] + " plays " + instruments[i]);
}
return sentences;
}

theBeatlesPlay();