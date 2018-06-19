//build theBeatlesPlay function that accepts arrays musicians and instruments as arguments
function theBeatlesPlay(musicians, instruments){
  
  // define empty array to store sentences
  var myArray = [];
  
  // define counter variable
  var i;

  // Build a for loop with 3 statements. 
  // 1st statment is executed (one time) before the execution of the code block (sets value of i to zero)
  /* 2nd statment defines the codition for executing the code block. 
  (loop will repeat itself as long as length of array i sless than i)*/
  // 3rd statment is executed (every time) after the code block has been executed. (value of i is incremented by 1)
  
  for (i = 0; i < musicians.length; i++){
     myArray.push(musicians[i] + ' plays ' + instruments[i]);
  }
  // return value of myArray
  return myArray;
}

// Build johnLennonFacts function that accepts arrays facts as arguments
function johnLennonFacts(facts) {
  
  // define empty array to store sentences
  var myArray2 = [];
  
  // define counter variable and set value
  var i = 0;
 
 // Build a while loop (loops as long as value of i is less than the length of facts array *number)
  while (i < facts.length)
  {
    /*use method push to concate additional data to the end of each data string of myArray2 
    then copy accross to the blank array myArray2*/
    // increment i by 1.
    
    myArray2.push(facts[i] + '!!!');
    i++;
  }
  
  // return value of myArray2
  return myArray2;
}

// Build iLoveTheBeatles function that accepts a general number as an argument
function iLoveTheBeatles (i) {
  var myArray3 = [];

// Build a do-while loop
// Push values accross to myArray3 limited to the value and conditions applied to the input of i (see while block below)
do {
  myArray3.push("I love the Beatles!");
  i ++;
}

//
while (i > 0 && i < 15);

// return value of myArray3
return myArray3;
}