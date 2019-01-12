//declare musician variables
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
//declare instrument variables
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
//declare function named theBeatlesPlay that accepts two arguments - one for musicians and one for instruments
function theBeatlesPlay (musicians, instruments){
//create an empty array
  var emptyArray = [];
//use for loop method to iterate over the array-set index to 0, index should be less than the total number of musicians (4) and set operator that will increase its operand (index) by 1 after its called 
  for (var i=0; i<4;i++){
//Use push method to create string sentence using the array that will read ".....", use first index of musicians and first index of instruments
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  //Return array
  return emptyArray
}

//declare function named johnLennonFacts that will accept one argument
function johnLennonFacts (array){
//set emptyArray
  var newArray =[];
//set index at 0
  var i=0
//use while loop to loop over array to add "!!!" at end of each fact, index should be less than the number of facts
  while (i<array.length){
//use push method for the array, increase by each one element after return
    newArray.push (array[i]+ "!!!");i++;
  }
return newArray
}

//declare the function iLoveTheBeatles which will pass one argument thats a number
function iLoveTheBeatles (num) {
//create empty array
  var thirdArray=[];
//use do while method to set the string "..." up to 15 times, checking each time after the string is printed
  do {
    thirdArray.push("I love the Beatles!");
    num++;
  } while (num<15);
//if prints more than 15 times, return thirdArray
  return thirdArray;
}