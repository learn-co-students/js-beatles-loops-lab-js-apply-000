//**************************************************************************************
//* The function establishes the arrays, "musicians" and "instruments", as the parameters.
//* When the counter variable (i) is between 0 and the length of the "musicians" array,
//     the loop will assign the elements from the "musicians" and "instruments" arrays to
//     the variable: "blankArray".
//* Once the loop is run, the program will return the new blankArray.
//**************************************************************************************
function theBeatlesPlay(musicians, instruments){
  var blankArray = [];
    for (let i = 0; i < musicians.length; i++)
       blankArray [i] = (`${musicians[i]} plays ${instruments[i]}`);
  return blankArray
   }
//**********************************************************************************
//*  The function establishes an array (any array) as the parameter.
//*  When the counter variable (i) is between 0 and the array length, the loop will assign
//      the string: "!!!" to the end of each element in the array.
//*  Once the loop is run, the program will return the new array.
//*********************************************************************************
function johnLennonFacts(array){
     let i = 0;
     while (i < array.length){
       array[i] = (array[i]+ `!!!`);
       i++;
    }
    return array
}
//**********************************************************************************
//* The function establishes a number (any number) as the parameter.
//* When the counter variable (i) is between the given number and 15,
//     the loop will assign the string: "I love the Beatles!" to each
//     element in the variable: "loveBeatlesArray".
//* Once the loop is run, the program will return the new array.
//**********************************************************************************
function iLoveTheBeatles(aNumber){
  var loveBeatlesArray = [];
  let i = aNumber;
  do {
    loveBeatlesArray.push(`I love the Beatles!`);
    i++;
  } while (i < 15);
  return loveBeatlesArray
}
