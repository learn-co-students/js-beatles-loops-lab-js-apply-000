function theBeatlesPlay(musicians,instruments){
  var arr=[];
  var i;
  for (i=0;i<musicians.length;i++){
    var str=musicians[i]+' plays '+instruments[i];
    arr.push(str);
  }
  return arr;
}



function johnLennonFacts(facts){
  var i=0;
  var arr=[];
  while(i<facts.length){
    var str=facts[i]+'!!!';
    arr.push(str);
    i++;
  }
  return arr;
}


function iLoveTheBeatles(n){
  var arr=[];
  do {
    arr.push('I love the Beatles!');
    n++;
  } while(n<15)
  return arr;
}
