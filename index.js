// add solution here

function theBeatlesPlay(arrayM, arrayI) {
  var emptArray = [];
   for ( var i = 0; i < arrayM.length; i++) {
     emptArray.push(`${arrayM[i]} plays ${arrayI[i]}`);
   }
   return emptArray;
}

theBeatlesPlay(musicians, instruments);


function johnLennonFacts(jFacts) {
  var i = 0;
  while (i < jFacts.length) {
    jFacts[i] += '!!!';
    i++;
  }
  return jFacts;
}

function iLoveTheBeatles(num) {
  var emptArray = [];
  do {
    emptArray.push("I love the Beatles!");
    num++;
  } while (num < 15)
  return emptArray;
}