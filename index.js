function theBeatlesPlay(musicians, instruments) {
  var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

  var emptyarray = [];

  var i;
  for (i = 0; i < musicians.length; i++) {
    emptyarray.push(musicians[i] + " plays " + instruments[i]);
   }

return emptyarray;
}


function johnLennonFacts(fact)   {

  var factarray = [];
  var i = 0;

while (i < fact.length)   {
    factarray.push(fact[i] + "!!!");
    i++; }

return factarray;
}


function iLoveTheBeatles(num)   {
  var lovearray = [];
  var i = 0;

  if (num >= 15) {
    lovearray.push("I love the Beatles!");
  }

  else {
    do { lovearray.push("I love the Beatles!");
          i++;}
    while (i <= num );       }

return lovearray;
}
