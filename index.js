var theBeatlesPlay = function(arrayMusic,arrayInstrument){
	var myString = [];
	for(var i=0;i<arrayMusic.length;i++){
		myString.push(`${arrayMusic[i]} plays ${arrayInstrument[i]}`);
	}
	return myString;
}

var johnLennonFacts = function(anArray){
  var myString = [];
	var i=0;
	while(i<anArray.length){
		myString.push(`${anArray[i]}!!!`);
		i+=1;
	}
	return myString;
}

var iLoveTheBeatles = function(n){
	var storage = [];
	do{
		storage.push('I love the Beatles!');
		n++;
	}
	while(n<15);
	return storage;
}
