
var beatles = []
function theBeatlesPlay(musicians, instruments) {
	musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
	instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]
		for (var i = 0; i < musicians.length; i++) {
			beatles.push (musicians[i]+" "+"plays" +" " +instruments[i])
		}

		return (beatles)
} 

var facts = []

function johnLennonFacts (facts) {
		var j = facts;
		var i = 0;
		var arr = []

		while (i < j.length){
			arr.push(j[i]+"!!!")
			i++;
		}
			return (arr);
}

function iLoveTheBeatles(i){
	var arr = [];
	do {
		arr.push("I love the Beatles!");
		i++;
	}
	while (i < 15);
	return arr;
}
iLoveTheBeatles(7);