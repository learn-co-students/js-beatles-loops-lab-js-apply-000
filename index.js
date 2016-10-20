///
///+ Create a function `theBeatlesPlay`, which accepts two parameters- an array of musicians and an array of instruments. The body of the function should create an empty array stored in a variable.
///The function should also contain a for loop which loops over the array of musicians. You'll want to be careful about what value you set your counter variable to store. (Hint: Think about what
///the
///first index of an array is). The first time through the loop, the body of the loop should create a string using the first index of the musicians array and the first index of the instruments
///array: `"John Lennon plays guitar"`. This string should be added to the empty array you created. The loop should make the same sentence for every member of the musicians array. The function
///should return the array of new strings.
///

///function theBeatlesPlay (musicians, instruments) {
/// var newArray = []

///   for (var i = 0;  i <= musicians.length; i++) {
///     if (musicians[i] === instruments[0]) {
///       for (var j = i; j >) {
///         newArray.toString();
///       }
///     }
  /// }
  /// return newArray
///}
function theBeatlesPlay (musicians, instruments) {
  var newArray = []
  for (var i = 0; i < musicians.length; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArray;
}
///
///function johnLennonFacts () {

///}

///function iLoveTheBeatles () {

///}

///+ Create a function johnLennonFacts. This function will accept one argument,
///an array of facts about John Lennon (note that it might not be exactly the following facts):

///js
///const facts = [
  ///"He was the last Beatle to learn to drive",
  ///"He was never a vegetarian",
  ///"He was a choir boy and boy scout",
  ///"He hated the sound of his own voice"
///];
///```
function johnLennonFacts(facts) {
  var newArray = [];
  var i = 0;
  while (i < facts.length) {
    newArray.push(facts[i] + "!!!");
    i++;
  }
  return newArray;
}

function iLoveTheBeatles(number) {
  var newArray = [];
  do {
    newArray.push("I love the Beatles!")
    number++;
  } while (number < 15);
  return newArray;
}
