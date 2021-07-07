// add solution here
function theBeatlesPlay(a1,a2) {
  var strings = new Array();

  var i;
  for (i = 0; i < a1.length; i++) {
    strings[i] = a1[i] + " plays " + a2[i];
  }
  return strings;
}

function johnLennonFacts (facts) {
  var i = 0;
  while (facts[i]) {
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(num) {
  var strings = new Array();
  var i = 0;

if (num <=15) {
    do {
      strings[i] = 'I love the Beatles!';
      i++
    }
    while (i <= num);
} else {
  do {
    strings[i] = 'I love the Beatles!';
    i++;
  } while (i - num > 15);
}
  return strings;


}
