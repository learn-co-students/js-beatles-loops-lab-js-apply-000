var theBeatlesPlay = (musicians, instruments) => {
  var empty = [];
  var i = 0;
  for (i = 0; i < musicians.length; i++) {
    var musicSen = `${musicians[i]} plays ${instruments[i]}`;
    empty[i] = musicSen;
  }
  return empty;
}
 var johnLennonFacts = (facts) => {
   var i = 0;
   while (i < facts.length) {
     facts[i] = facts[i] + "!!!";
     i += 1;
   }
   return facts;
 }
var iLoveTheBeatles = (number) => {
  var blank = ["I love the Beatles!"];
  var i = 0;
  if (number < 15){
    do{
      blank.push("I love the Beatles!");
      i += 1;
    }
    while(i < number);
  }
  return blank;
}
