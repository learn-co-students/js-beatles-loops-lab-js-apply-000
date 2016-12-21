const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
  let strings = [];
  for(let i = 0; i < musicians.length; i++){
    strings.push(musicians[i] + " plays " + instruments[i]);
  }
  return strings;

}


function johnLennonFacts(facts){

 let i = 0;
 let emph = [];

	 while(i < facts.length){
	 	emph.push(facts[i] + "!!!");
	 	i++;
	 } return emph;
}

function iLoveTheBeatles(num){
	var count = num;
	let strings = [];
	do {
		strings.push("I love the Beatles!");
		count++;
	} while (count < 15);
	return strings;

}
