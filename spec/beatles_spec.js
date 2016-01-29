'use strict';

describe('theBeatlesPlay', function(){
  var musicians;
  var instruments;

  beforeEach(function() {
    musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
    instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  });

  it("returns an array of strings containing what instruments each instrument plays", function(){
    expect(theBeatlesPlay(musicians, instruments)).toEqual(["John Lennon plays Guitar", "Paul McCartney plays Bass Guitar", "George Harrison plays Lead Guitar", "Ringo Starr plays Drums"]);
  });

});

describe('johnLennonFacts', function(){

  it("returns an array of strings with exclamation points", function(){
    expect(johnLennonFacts()).toEqual(["He was the last Beatle to learn to drive!!!", "He was never a vegetarian!!!", "He was a choir boy and boy scout!!!", "He hated the sound of his own voice!!!"]);
    expect(johnLennonFacts()[0]).toEqual("He was the last Beatle to learn to drive!!!");

  });

});

describe('iLoveTheBeatles', function(){

  it("returns an array of 'I love the Beatles!' 8 times when passed the parameter 7 ", function(){
    expect(iLoveTheBeatles(7)).toEqual(["I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!"]);
    expect(iLoveTheBeatles(7).length).toEqual(8);

  });
   it("returns an array of 'I love the Beatles!' once when passed the parameter 17", function(){
    expect(iLoveTheBeatles(17)).toEqual(["I love the Beatles!"]);
    expect(iLoveTheBeatles(17).length).toEqual(1);

  });
});

