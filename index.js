function theBeatlesPlay(musicians, instruments){
	var arr = [];
	
	for(var i = 0 ; i < musicians.length; i++){
     var str = musicians[i] + " " + "plays " + instruments[i];
     arr.push(str);
	}

	return arr;

}

function johnLennonFacts(arr){
  var num = 0;
  var str = "";
  while(num < arr.length){
    for(var i = 0; i < arr.length; i++){
      arr[i] += "!!!";
      num++;
    }
    
    
    
  }
  return arr;
}




function iLoveTheBeatles(num){
 var arr = [];
 do{
   arr.push("I love the Beatles!");
   num++;
 }
  while(num < 15){
      return arr;
  }
 
}