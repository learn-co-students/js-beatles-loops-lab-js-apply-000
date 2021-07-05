// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay (musicians, instruments){
  var arr = [];
  for(let i = 0; i < musicians.length; i++){
    arr.push(musicians[i] + " plays " + 
    instruments[i]);
  }
  return arr;
}

const johnFacts = [
"He was the last Beatle to learn to drive",
"He was never a vegetarian",
"He was a choir boy and boy scout",
"He hated the sound of his own voice"];

// function johnLennonFacts(johnFacts){
//   var newArray = [];
//   let i = 0;
//   while(i < 4) {
//     newArray.push(johnFacts[i] + "!!!")
//     i++;
//   } 
//   return newArray;
// }

function johnLennonFacts(array) {
  var i = 0
  while (i < array.length) {
    array[i] += '!!!';
    i++;
  }
  return array;
}

const message = "I love the Beatles!"

// function iLoveTheBeatles(number) {
//   var newArr = [];
//   let i = 0;
//   do {
//     newArr.push(message)
//     i++;
//
//   }while(number < 15)
//    return newArr
// }

function iLoveTheBeatles(number) {
  var arr = [];
  var i = 0;
  do {
    arr.push('I love the Beatles!');
    i++;
  } while (i <= number && number < 15);
  return arr;
}



