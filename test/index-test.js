function theBeatlesPlay(){
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var intruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
var newStr = [];

for(i=0;i<musicians.length;i++){
newStr= [musicians[0]+" plays "+intruments[0],musicians[1]+" plays "+intruments[1],musicians[2]+" plays "+intruments[2],musicians[3]+" plays "+intruments[3]];


}
return newStr
}
theBeatlesPlay();
//------------------------------------------------------------------------------
function johnLennonFacts(arr){
 var newArr=[];
 while(newArr<arr.length){
   newArr++

 }

}
johnLennonFacts(["He was the last Beatle to learn to drive","He was never a vegetarian","He was a choir boy and boy scout","He hated the sound of his own voice"]);


  describe('johnLennonFacts', function(){
    it("returns an array of strings with exclamation points", function() {
      expect(johnLennonFacts([
        "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"
      ])).toEqual(["He was the last Beatle to learn to drive!!!", "He was never a vegetarian!!!", "He was a choir boy and boy scout!!!", "He hated the sound of his own voice!!!"]);

      expect(johnLennonFacts([
        "foo",
        "bar",
      ])).toEqual(["foo!!!", "bar!!!"])
    });
  });

  describe('iLoveTheBeatles', function() {
    it("returns an array of 'I love the Beatles!' 8 times when passed the parameter 7 ", function() {
      expect(iLoveTheBeatles(7)).toEqual(["I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!"]);
    });

    it("returns an array of 'I love the Beatles!' once when passed the parameter 17", function() {
      expect(iLoveTheBeatles(17)).toEqual(["I love the Beatles!"]);
    });
  });

});
