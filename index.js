function theBeatlesPlay(musicians,instrs) {
  var arrOut = [];
  for (var loop = 0; loop <= instrs.length-1; loop ++){
    arrOut[loop] = musicians[loop]+" plays "+instrs[loop];
  }
  return arrOut;
}

function johnLennonFacts(arrIn){
  var arrOut = [];
  for (var loop = 0; loop <= arrIn.length-1; loop ++){
    arrOut[loop] = arrIn[loop]+"!!!";
  }
  return arrOut;
}

function iLoveTheBeatles(num){
  var arrOut = ["I love the Beatles!"];
  var loop = 0;
  if (num < 15){
  do {
      loop ++;
      arrOut.push("I love the Beatles!");
    }
    while (loop <= num-1)
  }
  return arrOut;
}
