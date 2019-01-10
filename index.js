
// add solution here

/*describe('Beatles Loops', function() {
  it("returns an array of strings containing what instruments each musician plays", function() {
    const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
    const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
    expect(theBeatlesPlay(musicians, instruments)).toEqual(["John Lennon plays Guitar", "Paul McCartney plays Bass Guitar", "George Harrison plays Lead Guitar", "Ringo Starr plays Drums"]);
  });
  
1. Create a function theBeatlesPlay, which accepts two parameters--an array of musicians and an array of instruments.
2. Create a variable with an empty array.
3. Use a for loop, which iterates over the array. of musicians. Be careful about what value you set your counter variable to store. (Hint: Think about what the first index of an array is).
4. The first time through the loop, it should create a string using the first index of the musicians array and the first index of the instruments array: "John Lennon plays guitar".
5. Add this string to the empty array you created. The loop should make the same sentence for every member of the musicians array.
6. The function should return the array of new strings containing what instruments each musician plays.*/
  
var musicians = [
  "John Lennon", 
  "Paul McCartney", 
  "George Harrison", 
  "Ringo Starr"
  ];
  
var instruments = [
  "Guitar", 
  "Bass Guitar", 
  "Lead Guitar", 
  "Drums"
  ];
    
function theBeatlesPlay(musicians, instruments) {
  var newArray = []; 
  for (var i = 0; i < musicians.length; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArray;
}

/*describe('johnLennonFacts', function(){
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
  
1. Create a function johnLennonFacts.
2. This function will accept one argument, an array of facts about John Lennon (note that it might not be exactly the following facts):
3. Use a while loop to loop over the facts array and add "!!!" to the end of every fact.
4. Return an array of strings with exclamation points.*/

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(factsArray) {
  var i = 0;
  var arrayLength = factsArray.length;
  var newFactsArray = [];
  
  while (arrayLength > 0) {
 		newFactsArray.push(factsArray[i] + "!!!");
 		i++;
 		arrayLength--;
 	}
 	return newFactsArray;
 }

/* describe('iLoveTheBeatles', function() {
    it("returns an array of 'I love the Beatles!' 8 times when passed the parameter 7 ", function() {
      expect(iLoveTheBeatles(7)).toEqual(["I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!"]);
    });
    it("returns an array of 'I love the Beatles!' once when passed the parameter 17", function() {
      expect(iLoveTheBeatles(17)).toEqual(["I love the Beatles!"]);
    });
  });
  
1. Create a function iLoveTheBeatles which accepts a number as a parameter.
2. The function should create a variable that stores an empty array.
3. Implement a do-while loop inside the function that adds "I love the Beatles!" to the empty array.
4. The loop should then increment the number passed in as a parameter. The condition of the loop should check to see that the parameter number is less than 15. It should contain a number of strings that represents the difference between the input number and 15.
5. Return the array with the strings "I love the Beatles!".*/
  
function iLoveTheBeatles(num) {
  var newestArray = [];
  do {
    num++;
    newestArray.push("I love the Beatles!");
  }
  while (num < 15);
return newestArray;
}

