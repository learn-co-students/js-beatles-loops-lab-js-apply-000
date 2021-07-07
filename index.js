function theBeatlesPlay(musicians, instruments) {
  var music = [] // array
  for (var i = 0; i < musicians.length; i++) {
    var string = musicians[i] + " plays " + instruments[i];
    music.push(string);
  }
  return music;
}
function johnLennonFacts(facts) {
  var i = 0;
   while (i < facts.length) {
     facts[i] += "!!!";
     i++;
  }
  return facts;
}
function iLoveTheBeatles(number){
  var num = [];
  do {
    num.push("I love the Beatles!")
    number++;
  }
  while (number <  15);
  return num
}
