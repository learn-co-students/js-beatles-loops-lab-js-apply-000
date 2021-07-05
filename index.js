// add solution here
function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for(var i = 0; i < musicians.length; i++) {
    var element = musicians[i];
    var second = instruments[i];
    
    var str = element + " plays " + second; 
    arr.push(str)
  }
  
  return arr;
}

function johnLennonFacts(arr) {
  var result = [];
  var i = 0;
  while (i < arr.length) {
    var element = arr[i];
    var str = element + "!!!"
    i++
    result.push(str);
  }
  return result;
}

function iLoveTheBeatles(num) {
  var arr = [];
  do{
    arr.push("I love the Beatles!")
    num++;
    
  } while(num < 15)
  
  return arr;
}
