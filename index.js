// create a function called theBeatlesPlay
// the function will accept two parameters (musicians and instruments)
// create a new array within this function
// a for loop will grab values from the musicians array and instruments array
// the results of this loop will become expressions in multiple strings
// the strings will be pushed into the new array that we created
// the new array will be returned by the function

function theBeatlesPlay(musicians,instruments){
  var newArray = [];
  for (var i = 0; i < musicians.length; i++){
    newArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArray;
}


// create a function called johnLennonFacts
// the function will accept one argument (facts)
// a while loop will loop over the facts and add "!!!" to the end of every fact (strings)
// an array of strings will be returned

function johnLennonFacts(array){
  var factsArray = [];
  var i = 0;
  while(i < array.length){
    factsArray.push(array[i] + "!!!")
    i++
  }
  return factsArray;
}


// create a function iLoveTheBeatles
// the function will accept a number as a parameter
// create an empty array within this function
// a do-while Loop will add "I love the Beatles!" to the array
// the loop will increment the number passed in as a parameter
// the condition of the loop will check to see if the parameter number is less than 15
// the number of strings returned in an array will be the difference between the passed in number and 15

function iLoveTheBeatles(n){
  var array = [];
  do{
    array.push("I love the Beatles!");
    n +=1;
  } while (n < 15);
  return array;
}