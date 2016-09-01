function theBeatlesPlay(musicians,ins){
  var str;
  var i=0;
  var len = musicians.length;
  var result=new Array();
  for(;i<len;i++){
    str = musicians[i]+' plays '+ins[i];
    result[i]=str;
  }
  return result;
}

function johnLennonFacts(facts){
  var len = facts.length;
  var i=0;
  var str;
  var result = new Array();
  while(i<len){
    str = facts[i]+'!!!';
    result[i]=str;
    i++;
  }
  return result;
}


function iLoveTheBeatles(count){
  //count = count+1;
  var res = new Array();
  var i=0;
  do{
    res[i]='I love the Beatles!';
    count++;
    i++;
  }while (count < 15);
  return res;
}
