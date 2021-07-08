// add solution here
function theBeatlesPlay(musicians,instruments) {
  const a = [];
  var s = "";
  var i = 0;
  for (i = 0; i < musicians.length; i++) {
    s = musicians[i] + " plays " + instruments[i];
    a.push(s);
  }
  return a;
}

function johnLennonFacts(arg1) {
  var flag = 0;
  const arg2 = [];
  while (flag <= (arg1.length-1)) {
    arg2[flag] = arg1[flag] + "!!!";
    flag++;
  }
  return arg2;
}

function iLoveTheBeatles(num) {
  const arr = [];
  do {
    arr.push("I love the Beatles!")
    num++;
  }
  while (num < 15);
  return arr;
}