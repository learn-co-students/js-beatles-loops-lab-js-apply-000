var theBeatlesPlay = function(arrayMusic,arrayInstrument){
	var myString = [];
	for(i=0;i<arrayMusic.length;i++){
		myString.push(`${arrayMusic[i]} plays ${arrayInstrument[i]}`);
	}
	return myString;
}

var johnLennonFacts = function(anArray){
	i=1;
	while(i<(anArray.length)*2){
		anArray.splice(i,0,"!!!");
		i+=2;
	}
	return anArray;
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
