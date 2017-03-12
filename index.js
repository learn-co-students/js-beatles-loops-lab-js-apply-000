function theBeatlesPlay(musicians, instruments) { //Function named theBeatlesPlay with parameters for musicians and instruments
  const combined = [] //Create a blank array that will combine the musician with the instrument
  for (let repeats = 0, l = musicians.length; repeats < l; repeats++) { // 
    combined.push(`${musicians[repeats]} plays ${instruments[repeats]}`) //pushes the combined musician/instrument data to the new array
  }
  return combined
}

function johnLennonFacts(NiftyFacts) { //johnLennonFacts function with parameter NiftyFacts for the facts themselves
  const listNiftyFacts = [] //Blank new array
  let repeats = 0 //Initializing the loop variable
  while (repeats < NiftyFacts.length) { //Keep running the while loop so long as there are remaining facts in the array
    listNiftyFacts.push(`${NiftyFacts[repeats]}!!!`)//List those nifty John Lennon Facts
    repeats++//increment the loop variable by one after each fact is listed
  }
  return listNiftyFacts //Let's get those nifty John Lennon Facts
}

function iLoveTheBeatles(repeats) {// iLoveTheBeatles function with a loop parameter called repeats
  const TooMuchBeatlesLove = [] //Another blank array, this time for our "I love the Beatles" statements
  do { //Start our "do while" type loop
    TooMuchBeatlesLove.push('I love the Beatles!') //Keep saying "I love the Beatles"
    repeats++ //increment our loop variable by one
  } while (repeats < 15) //Make sure it only runs 15 times

  return TooMuchBeatlesLove
}