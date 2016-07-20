/*global beforeEach, describe, it */

const expect = require('chai').expect
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')

describe('theBeatlesPlay', () => {
  jsdom({
    src: fs.readFileSync(path.resolve(__dirname, '..', 'beatles.js'), 'utf-8')
  })

  it("returns an array of strings containing what instruments each instrument plays", () => {
    const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
    const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

    expect(theBeatlesPlay(musicians, instruments)).to.eql(["John Lennon plays Guitar", "Paul McCartney plays Bass Guitar", "George Harrison plays Lead Guitar", "Ringo Starr plays Drums"]);
  });

  describe('johnLennonFacts', () => {
    it("returns an array of strings with exclamation points", () => {
      expect(johnLennonFacts([
        "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"
      ])).to.eql(["He was the last Beatle to learn to drive!!!", "He was never a vegetarian!!!", "He was a choir boy and boy scout!!!", "He hated the sound of his own voice!!!"]);

      expect(johnLennonFacts([
        "foo",
        "bar",
      ])).to.eql(["foo!!!", "bar!!!"])
    });
  });

  describe('iLoveTheBeatles', () => {
    it("returns an array of 'I love the Beatles!' 8 times when passed the parameter 7 ", () => {
      expect(iLoveTheBeatles(7)).to.eql(["I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!"]);
    });

    it("returns an array of 'I love the Beatles!' once when passed the parameter 17", () => {
      expect(iLoveTheBeatles(17)).to.eql(["I love the Beatles!"]);
    });
  });
});
