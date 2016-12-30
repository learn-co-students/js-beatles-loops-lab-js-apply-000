// Variables

const m = new Array (
  "John Lennon",
  "Paul McCartney",
  "George Harrison",
  "Ringo Starr"
)

const i = new Array (
  "Guitar",
  "Bass Guitar",
  "Lead Guitar",
  "Drums"
)

var beatlesplay = new Array ()

var c = new Array ()

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice",
]


// Functions

function theBeatlesPlay(){
 for (var t = 0; t < m.length; t++){
    c[0] = m[t];
    c[1] = i[t];
    beatlesplay[t] = c.join(' plays ')
}
  return beatlesplay
}

function johnLennonFacts(facts) {
      var newFacts = new Array ();
      var i = 0;
      while (i < facts.length) {
          newFacts.push(facts[i] + "!!!");
          i++;
      }
      return newFacts;
  }


function iLoveTheBeatles(p1){
     var r = p1;
     var lovebeatles = new Array ();
             do {
                    lovebeatles.push('I love the Beatles!');
              r +=1
            } while ( r < 15);
          return lovebeatles
}
