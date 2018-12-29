
let allMusicians = [];

function theBeatlesPlay(musicians, instruments) {
  //const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  //const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

for (var i = 0; i < musicians.length; i++) {
  allMusicians.push(musicians[i] + " plays " + instruments[i]);
  }
return allMusicians;
};


function johnLennonFacts(factsArray) {
	  var array = []
	  for (var i = 0; i < factsArray.length; i++) {
	    array.push(factsArray[i] + "!!!")
	  }
	  return array
	}
	

function iLoveTheBeatles(num) {
    var love = [];
    do {
        love.push("I love the Beatles!");
        num++;

    } while (num < 15);

    return love;
}
