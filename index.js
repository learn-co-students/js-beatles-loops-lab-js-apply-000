function theBeatlesPlay(musicians, instruments){

	musicians = ["John Lennon", "Paul McCartney", "Ringo Starr", "George Harrison"];
	instruments = ["guitar", "drums", "electric guitar", "this instrument"];

	var sentences = [];

for (var i = 0; i < musicians.length; i++){
	for (var m = 0; m < instruments.length; m++){
		sentences.push(musicians[i] + " plays " + instruments[m]);
	}
}
console.log(sentences);
}

theBeatlesPlay();