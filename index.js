function theBeatlesPlay(musicians, instruments){

	var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
	var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

	var sentences = [];

for (var i = 0; i < musicians.length; i++){
	sentences.push(musicians[i] + " plays " + instruments[i]);
}
return sentences;
}

theBeatlesPlay();

function johnLennonFacts(){

	const facts = [
	  "He was the last Beatle to learn to drive",
	  "He was never a vegetarian",
	  "He was a choir boy and boy scout",
	  "He hated the sound of his own voice"
	];

	var newArr = [];
	var i = 0;

	while (i < facts.length){
		newArr = facts[i].split(' ');
		newArr.push("!!!");
		newArr = newArr.join(' ');
		i++;
		console.log(newArr);
	}
}
johnLennonFacts();