var theBeatlesPlay = function(arrayMusic,arrayInstrument){
	var myString = [];
	for(i=0,myString=null;i<arrayMusic.length;i++){
		myString = arrayMusic + ' plays ' +arrayInstrument;
		return myString;
	}
}

var johnLennonFacts = function(anArray){
	i=0;
	while(i<anArray.length){
		return anArray[i] + "!!!";
		i+=1;
	}
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
