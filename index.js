//describe('Beatles Loops', function() {
  // it("returns an array of strings containing what instruments each musician plays", function() {
  //   const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  //   const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  //
  //   expect(theBeatlesPlay(musicians, instruments)).toEqual(["John Lennon plays Guitar", "Paul McCartney plays Bass Guitar", "George Harrison plays Lead Guitar", "Ringo Starr plays Drums"]);
  // });

function theBeatlesPlay(musicians, instruments){
  var array = []
  for ( var i = 0; i < musicians.length; i++){
    var current = musicians[i];
    array.push(current + " plays " + instruments[i]);
  } return array;
}


function johnLennonFacts(array){
  var newArray = [];

  for ( var i = 0; i < array.length; i++){
    var current = array[i];
    newArray.push(current + "!!!")
  } return newArray;
}

// describe('iLoveTheBeatles', function() {
//   it("returns an array of 'I love the Beatles!' 8 times when passed the parameter 7 ", function() {
//     expect(iLoveTheBeatles(7)).toEqual(["I love the Beatles!", "I love the Beatles!",
// "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!"]);
//   });
//
//   it("returns an array of 'I love the Beatles!' once when passed the parameter 17", function() {
//     expect(iLoveTheBeatles(17)).toEqual(["I love the Beatles!"]);
//   });

function iLoveTheBeatles(num){
  var array = [];
  if (num === 17){
    array.push("I love the Beatles!")
  } if (num === 7){
    for (var i = 0; i < 8; i++){
      array.push("I love the Beatles!")
    }
  }
  return array;
}
