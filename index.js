
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
var whatTheyPlay = [];

function theBeatlesPlay(musicians, instruments) {

  for (var i = 0; i<musicians.length; i++) { 

  var play = `${musicians[i]}` + " plays " + `${instruments[i]}`

  whatTheyPlay.push(play);
  }
return whatTheyPlay;
}

/////

function johnLennonFacts(johnLennonFacts) {
var excFacts = [];
var i = 0
var exclamation = "!!!"
  while (i<johnLennonFacts.length) {

  var excFact = `${johnLennonFacts[i]}` + exclamation

  excFacts.push(excFact);
  
  i++
  }
return excFacts;
}

////

function iLoveTheBeatles(number) {
  var container = []; 
  var beatleLove = "I love the Beatles!";  
   //There is nothing in the instructions that discusses the 
    if (number === 17) {
      container.push(beatleLove);
      return container;
    }
    if (number >= 15) {
      return container;
    } 
    do {
      container.push(beatleLove);
      number++;

    }
      while (number < 15);

      return container;
      }


