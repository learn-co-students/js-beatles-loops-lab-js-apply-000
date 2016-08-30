function theBeatlesPlay(musicians, instruments){
	var x = [];
	for(var i = 0;i < musicians.length;i++){
		x.push(musicians[i] + " plays " + instruments[i]);
	}
	return x;
}
function johnLennonFacts(array){
  var newArr = [];
  var i = 0;
  while(i < array.length) {
    newArr.push(array[i] + "!!!");
    i++;
  }
  return newArr;
}

function iLoveTheBeatles(num){
  var arr = [];
	var i = 1;
  do{
    arr.push("I love the Beatles!");
    num++;
  }
  while(num<15);
  return arr;
}
