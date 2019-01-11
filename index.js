// add solution here
function theBeatlesPlay(musicians, instruments) {

//Declare an empty array
let music = [ ];
//for loop to iterate through every musicians in the musicians array
for (let i = 0; i < musicians.length; i++) {
  const str = musicians[i] + " plays "  +  instruments[i];
  music.push(str);
}
//returns the array with all the strings
  return music;
}

//calling the function "the Beatlesplays" by assigning it to a variable
const whoPlaysWhatMusic = theBeatlesPlay(
  ['JohnLennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr']
  ['Guitar', 'Bass Guitar', 'Lead guitar', 'Drums']
);

console.log(whoPlaysWhatMusic);

const facts = [
                "He was the last Beatle to learn to drive",
                "He was never a vegetarian",
                "He was a choir boy and boy scout",
                "He hated the sound of his own voice"
              ];

function johnLennonFacts(facts) {

  //an empty array
var result = [];
var count = 0;
while (count < facts.length) {
  result.push(facts[count] + '!!!');

  //count increment
  count++;
  }
  return result;
}

johnLennonFacts(facts);

function iLoveTheBeatles(i) {
  let newArr = [];
  do{
    newArr.push('I love the Beatles!');

   i++;
 } while (i < 15);

      return newArr;
      }
