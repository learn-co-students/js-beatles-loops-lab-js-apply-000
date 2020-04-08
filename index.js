var musicians = [];
var instruments = [];


function theBeatlesPlay(name, instru) {
    musicians.push(name);
    instruments.push(instru);


    var i = 0;
    var j = 0;
    for (i;i<musicians.length;i++) {
            console.log(musicians[i] + " plays " + instruments[i]);
        
    }

}


function johnLennonFacts() {
    const facts = [
        "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"
      ];

      var i = 0;

      while ( i < facts.length) {
        console.log(facts[i] + "!");
        i++;
      } 
      
}


function iLoveTheBeatles(number) {

    var i = 0;
    do  {
        console.log("I love the Beatles!");
        i++;
    }
    while (i < number);
}