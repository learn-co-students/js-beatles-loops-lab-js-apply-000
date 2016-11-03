function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i<musicians.length; i++) {
      array.push(musicians[i] + " plays " + instruments[i])
  }
  return array;
}

function johnLennonFacts(facts){
	var array = [];
	while (facts.length>0) {
		array.push(facts.shift().concat("!!!"));
	}
	return array;
}


function iLoveTheBeatles (num) {
  var array=[];
  var count =0;
  do {
    array.push("I love the Beatles!")
    count++;
  }
  while (num<15 && count<=num);
  return array;
}
