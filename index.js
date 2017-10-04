var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

theBeatlesPlay(musicians, instruments);

function theBeatlesPlay(musicians, instruments) {
  var newArr = [];
  for(var i =0; i < musicians.length; i++) {
    newArr.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArr;
}
  var facts = [
     "He was the last Beatle to learn to drive",
     "He was never a vegetarian",
     "He was a choir boy and boy scout",
     "He hated the sound of his own voice"
   ];

   function johnLennonFacts(arr) {
     var result= [];
     var i = 0;
     while(i < arr.length) {
       result.push(arr[i] + '!!!')
       i++;
     }
     return result;
   }

   johnLennonFacts(facts);

   function iLoveTheBeatles(number) {

     let newArray = [];
     do {
       newArray.push(`I love the Beatles!`); //this will happen one time, whether or not number meets condition below
       number++; //increment number of times string above is pushed into newArray
     } while (number < 15); //(that number subracted from 15 will be the output number of times the string is logged);

     return newArray;
   }
