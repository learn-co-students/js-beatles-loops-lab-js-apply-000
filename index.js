// add solution here
"use strict";
function theBeatlesPlay(musicians /*array of strings*/, 
                          instruments /*array of strings*/) {
  let bandRoles=[]; /*array of strings*/
  
  //choose the longer array to iterate through 
  const arraySize = (musicians.length > instruments.length) ? musicians.length : instruments.length;
  
  for (let i=0; i<arraySize; i++) {
    const role=`${musicians[i]} plays ${instruments[i]}`;
    bandRoles.push(role);
  }
  
  return bandRoles;
}

function johnLennonFacts (facts /*array of strings*/ )  {
  let factsEmphasized =[];
  
  let i=0, j=0;
  
  // tried out a number of solutions to avoid the awkwardness of using
  // while() instead of for() to iterate an array:
  
  //  I don't like having the loop step outside of the while() like this
  while (i<facts.length) {
    factsEmphasized.push(`${facts[i++]}!!!`); 
  
  }
  
  
  // best solution: use iterators!
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator#Alternative_iteration
  
  let itFacts=facts[Symbol.iterator]();  //Array iterator
  
  /* iterator solution 1: this works... but its a bit obfuscated
  while ( (myItObj=itFacts.next()) && (! myItObj.done) ) { 
    factsEmphasized.push(`${myItObj.value}!!!`);
  } 
  //*/


  // iterator solution 2: uses a function
  /*
  const emphasizeNextItem = (myIterator,myArray) => {
    //pushes one element of the Iterator onto the array (with '!!!' appended)
    //returns true if the last element of iterator hasn't yet been reached
    const myItObj=myIterator.next();
    const done=myItObj.done;
    const value=myItObj.value;
    if (!done) {
      myArray.push(`${value}!!!`);
    }
    return !done;
  }
  
  while (emphasizeNextItem(itFacts, factsEmphasized)) ;
  //*
  
  
  // other ways to use a while loop instead of a for loop:
  
 /*
  while ((j=i++) <facts.length) { 
    factsEmphasized.push(`${facts[j]}!!!`);
  }
  //*/
  
  
  
  /* This one is hard to read
  while ((i=factsEmphasized.push(`${facts[i]}!!!`))<facts.length) }
    ; //no-op
  }
  //*/
    
  return factsEmphasized;
}


function iLoveTheBeatles (myOffset=0) {
  let myArray=[];
  const PHRASE="I love the Beatles!";
  const MAX_TIMES=15;
  do {
      myArray.push(PHRASE);
  } while (++myOffset < MAX_TIMES); //prefix increment bc we need to compare the incremented value to MAX_TIMES
    
  return myArray;
}
  
