function theBeatlesPlay(musicians, instruments){
  var x = [];
  var rockstars = [];
  for (x in musicians){
    rockstars.push(musicians[x] + " plays " + instruments[x]);
    x++;
}
  return rockstars;
}
function johnLennonFacts(facts){
  var x = 0;
  var imagine = [];
  while (facts[x]) {
    imagine.push(facts[x] + "!!!");
    x++;
}
  return imagine;
}
function iLoveTheBeatles(numbers){
  var allyouneedislove = [];
  do {
    allyouneedislove.push("I love the Beatles!");
    numbers++;
}
  while (numbers < 15); {
}
  return allyouneedislove;
}