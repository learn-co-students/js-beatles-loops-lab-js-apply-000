// 1. Create a function `theBeatlesPlay`, which accepts two parameters--an array of
//   musicians and an array of instruments. 

const newArr= [];
const theBeatlesPlay = function(arr1, arr2) {
  for(let i=0; i<arr1.length; i++){
    newArr.push(`${arr1[i]} plays ${arr2[i]}`);
  }
  return newArr;
}

// 2. Create a function `johnLennonFacts`. 


const johnLennonFacts = function(arr) {
  let i = 0;
  const newArr = [];
  while(i<arr.length){
    newArr.push(`${arr[i]}!!!`);
    i++;
  }
  return newArr;
}

// 3. Create a function `iLoveTheBeatles` which accepts a number as a parameter. 

//     * The function should create a variable that stores an empty array. 
//     * Implement a do-while loop inside the function that adds `"I love the
//       Beatles!"` to the empty array. 
//     * The loop should then increment the number passed in as a parameter. The
//       condition of the loop should check to see that the parameter number is
//       less than `15`. It should contain a number of strings that represents the
//       difference between the input number and `15`.
//     * Return the array with the strings `"I love the Beatles!"`.

const iLoveTheBeatles = function(num){
  const arr = [];
  
  do {
    arr.push(`I love the Beatles!`);
    num++;
  } while (num < 15);
  
  return arr;
}
