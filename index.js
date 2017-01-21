// var musicians = [ 'John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr' ];
// var instruments = [ 'Guitar', 'Bass Guitar', 'Guitar', 'Drums' ];

function theBeatlesPlay(musicians, instruments){
  var c = [];
  for(var i = 0; i < musicians.length; i++) {
    c.push(""+musicians[i] + " plays " + instruments[i]+"");
  }
  return c;
}

function johnLennonFacts(facts){
    var i = 0;
    var c = [];
    while(i < facts.length) {
        c.push(""+facts[i] + "!!!");
        i++;
    }
    return c;
}

function iLoveTheBeatles(num){
    var c = [];
    var i = num;
    do {
      c.push("I love the Beatles!");
      i++;
    }
    while (i < 15);
    return c;
}
