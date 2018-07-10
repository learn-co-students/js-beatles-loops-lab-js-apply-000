// add solution here

// For Loop Solution 
function theBeatlesPlay(musicians, instruments) {
var ss = [];
var i;
for (i=0; i<4 ; i++) {
 ss[i] = musicians[i] + " plays " + instruments[i]
}
return ss
}

// While Loop solution 
function johnLennonFacts(sxs) {
var j = 0
var a4 = sxs.length
var FACTS = [];

while (j<a4){
  FACTS[j] = sxs[j] + "!!!"
  j++;
}
return FACTS
}

// Do-while Loop
function iLoveTheBeatles(s) {
var LUV =[];
  do {
    LUV.push("I love the Beatles!" )
    s++
  }
  while (s  <15); 
return LUV
}