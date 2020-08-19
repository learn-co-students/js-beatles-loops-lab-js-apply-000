// add solution here
function theBeatlesPlay(arrMus, arrIns){
  var myArr = new Array();
  for(var i =0; i < arrMus.length; i++){
    var myStr = arrMus[i] + " plays " +arrIns[i];
    myArr.push(myStr);
  }
  return myArr
}

function johnLennonFacts(arrFact){
  var newArr = new Array();
  var i=0;
  while(i < arrFact.length){
    var myStr = arrFact[i] + "!!!";
    newArr.push(myStr);
    i++;
  }
  return newArr
}

function iLoveTheBeatles(num){
  var emptyArr = new Array();
  do {
    emptyArr.push("I love the Beatles!");
    num++;
  }
  while(num < 15);

  return emptyArr
}
