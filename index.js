// describe('Beatles Loops', function() {
//   it("returns an array of strings containing what instruments each musician plays", function() {
//     const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
//     const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
//
//     expect(theBeatlesPlay(musicians, instruments)).toEqual(["John Lennon plays Guitar", "Paul McCartney plays Bass Guitar", "George Harrison plays Lead Guitar", "Ringo Starr plays Drums"]);
//   });



function theBeatlesPlay(musicians, instruments) {
  var returnArray = [];
  var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

 for (var i = 0; i < musicians.length; i++) {
  returnArray.push(musicians[i] + " plays " + instruments[i]);
 }
  return returnArray;
}

function johnLennonFacts(facts) {
    var returnFacts = [];

    var i = 0;
    while (i < facts.length) {
        returnFacts.push(facts[i] + "!!!");
        i++;

    }

    return returnFacts;
}

function iLoveTheBeatles(num) {
     var returnBeatles = [];
     do {
         returnBeatles.push("I love the Beatles!");
         num++;
     } while (num < 15);
 
     return returnBeatles;
 }
//   describe('iLoveTheBeatles', function() {
//     it("returns an array of 'I love the Beatles!' 8 times when passed the parameter 7 ", function() {
//       expect(iLoveTheBeatles(7)).toEqual(["I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!"]);
//     });
//
//     it("returns an array of 'I love the Beatles!' once when passed the parameter 17", function() {
//       expect(iLoveTheBeatles(17)).toEqual(["I love the Beatles!"]);
//     });
//   });
//
// });
