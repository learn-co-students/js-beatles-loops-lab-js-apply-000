// add solution here
function theBeatlesPlay(musicianArray,instrumentArray) {
  //set up a container for the results
  const result = [];
  //loop through the musician array
  for (let i = 0; i < musicianArray.length; i++) {
    //add string to result array for each iteration
    result.push(`${musicianArray[i]} plays ${instrumentArray[i]}`);
  }
  return result
}

function johnLennonFacts(array) {
  //set up container array for results
  const result = [];
  //functionality to run as long as there are elments in the array
  while (array.length > 0) {
    //remove first element from array and add to result array with adjustments
    result.push(`${array.shift()}!!!`);
  }
  //bring back the result array
  return result
}

function iLoveTheBeatles(num) {
  //set up container array for the result
  const result = [];
  //repeat functionality as long as num is less than 15
  do {
    //add string to result array
    result.push("I love the Beatles!")
    //increment num by 1
    num++
    //condition to be met
  } while (num < 15)
  //return the result array
  return result
}