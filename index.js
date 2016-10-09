var musicians = ["John Lennon" , "Paul McCartney" , "George Harrison" , "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var myArray = [];
    for (var i = 0; i < musicians.length; i++) {
      for (var j = 0; j < instruments.length; j++) {
        myArray[i]= musicians[i] +' plays '+instruments[i];
      }
    }
    return myArray;
}
theBeatlesPlay(musicians, instruments);


var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var myArray = [];
  var i = 0;

  var len = facts.length;
    console.log(len);
    while (i<facts.length) {
        myArray[i] = facts[i]+'!!!';
        i++;
    }
    return myArray;
  }
johnLennonFacts(facts);


function iLoveTheBeatles(num){
    var i = 0;
    var myArray = [];
    do {
    myArray.push("I love the Beatles!");
    i++;
    if (num > 15) {
      break;
    }else if (num  === 7) {
      num ++;
}
    } while (i<num);
    return myArray;
}
iLoveTheBeatles(1);
