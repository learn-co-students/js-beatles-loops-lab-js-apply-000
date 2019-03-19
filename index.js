function theBeatlesPlay(musician,instrument){
  var emptyarray = [];
  var i;
  var statement
  for (i =0 ; i < musician.length; i++){
    statement = musician[i] +" plays "+ instrument[i];
    emptyarray.push(statement);
  }
  return emptyarray;
}

function johnLennonFacts(facts){
  var i = 0;
  for (i = 0; i < facts.length; i++){
    facts[i] = facts[i]+"!!!";
  }
  console.log(facts);
  return facts;
  
}



function iLoveTheBeatles(i) {
	var y = 0;
	var emptyarray2 = [];
	var text = 'I love the Beatles!';
	do {
		emptyarray2[y] = text;
		y++;
	}
	while (y < 15 - i);

	console.log('what is I', i);
	console.log('Final Test Results', emptyarray2);
	return emptyarray2;
}

// i++ i += 1
// i = i + 1

