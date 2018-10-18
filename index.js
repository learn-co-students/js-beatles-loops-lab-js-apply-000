var musicians = ['John Lennon','Paul McCartney','George Harrison','Ringo Starr']

var instruments = ['Guitar','Bass Guitar','Lead Guitar','Drums']

var facts = ["He was the last Beatle to learn to drive",
                      "He was never a vegetarian",
                      "He was a choir boy and boy scout",
                     "He hated the sound of his own voice"]

function theBeatlesPlay(musicians,instruments) {
var x = []
  for(let i = 0; i < musicians.length; i++) {
x.push(`${musicians[i]} plays ${instruments[i]}`)
  }
return x
}




function johnLennonFacts(facts) {
  var n = 0;
while (n < facts.length) {
facts[n] = `${facts[n]}!!!`;
 n++;
}
return facts
}


function iLoveTheBeatles(n) {
var y = []
do{
  y.push(`I love the Beatles!`);
  n++;
} 
while (n < 15)

return y
}
