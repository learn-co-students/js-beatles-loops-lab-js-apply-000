// add solution here
// add solution here
// important for all three functions: MAKE A NEW EMPTY ARRAY, then assign the loops to the NEW array by pushing the new string, THEN retun the updated array AFTER/OUTSIDE the loop, but WITHIN THE FUNCTION 

function theBeatlesPlay(musicians, instruments) {
  var allMusicians = []; //empty array 
  for (var i=0; i < musicians.length; i++) {
      allMusicians.push(musicians[i] + " plays " + instruments[i]);
      //add this string to empty array
  }
  return allMusicians;
}

function johnLennonFacts(facts){
  //don't include actual facts as variables or constants, instructions say that you don't need those specific facts, but keeping facts as a parameter, it gives the function more freedom to include other facts
  var factsArray = []; //empty array 
  var i = 0;
  while (i < facts.length) {
    factsArray.push(facts[i] + "!!!"); 
    i++;     //add this string to empty array
  }
  return factsArray;
}

function iLoveTheBeatles(n) { //accepts number as parameter 
    var beatles = []; //empty array 
    do {  
        beatles.push ("I love the Beatles!");
        n++;    //add this string to empty array
    } while (n < 15); 
    //only add the string while the given parameter is less than 15
    return beatles;
}



//this lab gave me a run for my money, thank god for google
/*
things that took me a while to figure out: 
  - the return statement needs to be outside of the loop, otherwise the loop with be ended 
  - I simply needed to return the updated empty array
  - the point of the loop was to update the empty array 
  - make sure my "{}" are in the right place 
  - for the while loop, define the i prior to loop 
*/