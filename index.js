// add solution here
function theBeatlesPlay(musicians, instruments){
  var BeatlesInstruments = [];
  for (var i = 0 ; i < musicians.length; i++){
    BeatlesInstruments.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return BeatlesInstruments
}




function johnLennonFacts(array){

	var newFacts = [];
	var i = 0;
	while(i < array.length){
		//return facts[i] + "!!!"
		newFacts.push(array[i]+"!!!");
		i++
	}
	return newFacts
}



function iLoveTheBeatles(num) {
	var arr = [];
	var i = 0;

	do {
		arr.push('I love the Beatles!');
		i++;
	} while (num < 15 && i < (15 - num));
	return arr;
}
