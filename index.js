// add solution here
function theBeatlesPlay(musicians, instruments){
  var arr = [];
  var str = '';
  for (var i = 0; i < musicians.length; i++){
        var name = musicians[i];
        var instrument = instruments[i];

        str += (name + " plays " + instrument);
        arr.push(str);
        var str = '';
  }
  return arr;
}

function johnLennonFacts(arr){
  var newStr = '';
  var newArr = [];
  var i = 0;
  while (i < arr.length){
    var str = arr[i];

    newStr += (str + '!!!');
    newArr.push(newStr);
    newStr = '';
    i++;
  }
  return newArr;
}

function iLoveTheBeatles(num){
  var arr = [];
  if (num < 17){
    for (var i = 0; i <= num; i++){
      arr.push('I love the Beatles!')
    }
  } else {
    arr.push('I love the Beatles!')
  }
  return arr;
}
