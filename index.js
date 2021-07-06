// add solution here
/*returns an array of strings containing what instruments each musician play 
*/
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}


/* returns an array of strings with exclamation points
      1) takes in any array of strings and returns a new array with exclamationpoints added to each element
      */
function johnLennonFacts(facts) {

  var array = [];
  var i = 0;
  while (array.length < facts.length) {
    array.push(facts[i] + "!!!");i++;
  }
  return array;}


///
function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number += 1
  } while (number < 15);
  return array;}