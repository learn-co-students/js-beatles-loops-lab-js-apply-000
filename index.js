function theBeatlesPlay(musicians, instruments) {

    var emptyArray = [];
    
    for (var i = 0; i < musicians.length; i++) {
      emptyArray.push(musicians[i] + " plays " + instruments[i]);
    } 
    return emptyArray;
}


var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice", "foo", "bar"];

function johnLennonFacts(facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"]) {

      var emptyArray = [];
      var i = 0;
      while(i < facts.length) {
        emptyArray.push(facts[i] + "!!!")
        i++;
      } 
      return emptyArray;
  
}

function johnLennonFacts(facts = ["foo", "bar"]) {

      var emptyArray = [];
      var i = 0;
      while(i < facts.length) {
        emptyArray.push(facts[i] + "!!!")
        i++;
      } 
      return emptyArray;
  
}

function iLoveTheBeatles(number) {

      var arr = [];
      do {
        arr.push("I love the Beatles!")
        number++;
      } while (number < 15);
      
      return arr;
  
}



