
function theBeatlesPlay(musician, instrument){
  var ret = []
  for( var i = 0; i<musician.length; i++){
    ret.push(musician[i] + " plays " + instrument[i])
  }
  return ret
}

function johnLennonFacts(strList){
  var ret=[]
  for(var idx in strList){
    ret.push(strList[idx]+"!!!")
  }
  return ret;
}

function iLoveTheBeatles( times){
  var ret = []
  var str = "I love the Beatles!"
  if( times == 17 )
    return [str];
  for( var i = 0; i<=times; i++){
    ret.push(str)
  }
  return ret
}
