// add solution here
function theBeatlesPlay(musicians, instruments) {
var music = [];
for (var i=0; i < musicians.length; i++)
music.push(musicians[i] + ' plays ' + instruments[i]);
  return music;
}
theBeatlesPlay("John Lennon plays guitar")


function johnLennonFacts(facts) {
  var info = [];
  var num = 0
  while (num < facts.length) {
info.push(facts[num] + "!!!");
 num++
 }
return info;
}

function iLoveTheBeatles(number) {
var items =[];
do {
  items.push("I love the Beatles!");
  number++;
} while (number < 15);
return items;
}
