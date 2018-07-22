function theBeatlesPlay(musicians, instruments) {
var m = 0;
var mus = musicians;
//var MusiciansAndThereInstruments;

//test[0] = musicians[0];

for (m = 0; m < 4; m++) {
  mus[m] = musicians[m] + " plays " + instruments[m];
  //Mum] = musicians[m];
}

return  mus
}

function johnLennonFacts(facts) {
var f = 0;
var fac = facts;

while (f < fac.length) {
  fac[f] = fac[f] + "!!!";
  f++;
}
return fac
}

function iLoveTheBeatles(number) {
  var num = number;
  var indx = 0;
  var arraystring = [];

  do {
    arraystring[indx] = "I love the Beatles!";
    indx++;
    num++;
  }
  while (num < 15);

  return arraystring
}
