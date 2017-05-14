describe ('theBeatlesPlay', function () {
var musicians;
var instruments;
 beforeEach(function() {
  musicians = ('John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr');
instruments = ('Guitar', 'Bass', 'Lead Guitar', 'Drums');
});
describe('johnLennonFacts', function(){
    (johnLennonFacts() .toEqual(["He was the last Beatle to learn to drive!!!", "He was never a vegetarian!!!", "He was a choir boy and boy scout!!!", "He hated the sound of his own voice!!!"]);
    (johnLennonFacts() .toEqual("He was the last Beatle to learn to drive!!!");

  });

});
describe('iLoveTheBeatles', function(){  (iLoveTheBeatles()).toEqual(["I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!"]);
    expect(iLoveTheBeatles().length).toEqual();

  });
