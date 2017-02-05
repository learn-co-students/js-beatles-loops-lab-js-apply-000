const musicians = [`John Lennon`, `Paul McCartney`, `George Harris`, `Ringo Starr`]

const instruments = [`Guitar`, `Bass Guitar`, `Lead Guitar`, `Drums`]

const facts = [
  `He was the last Beatle to learn to drive`,
  `He was never a vegetarian`,
  `He was a choir boy and boy scout`,
  `He hated the sound of his own voice`
];

function theBeatlesPlay(musicians, instruments) {
  let newArray = []; //local variable
  for (let i = 0; i < musicians.length; i++) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  } //end of for loop
  return newArray; // this needs to be outside the loop, otherwise only first item will be returned
} //end of function


function johnLennonFacts(facts) {
  let newArray = []; //local variable
  for (let i = 0; i < facts.length; i++) {
    newArray.push(`${facts[i]}!!!`);
  } //end of for loop
  return newArray; // this needs to be outside the loop, otherwise only first item will be returned
} //end of function


//syntax example::::::
// do {
//     text += "The number is " + i;
//     i++;
// } while (i < 10);

//need to make it a do...while loop, as per the instructions,
//and don't need an if..else statement for 17, simply need all numbers less than 15 to pass

function iLoveTheBeatles(number) { //this function confused me, do..while loops are weird
  let newArray = []; //local variable
  do {
    newArray.push(`I love the Beatles!`); //this will happen one time, whether or not number meets condition below
    number++; //increment number of times string above is pushed into newArray
  } while (number < 15); //do loop above is executed so long as this condition is met -- why can't 15 be 14 or 16? (other than the directions, where in the test files does it say 15? 16 results in 9 elements in the array, 14 results in 7, 10 results in 3, 9 results in 2, 8 and under results in 1.)
  //after testing in the console: With the condition being 15, why does iLoveTheBeatles(8) result in the string 7 times, but iLoveTheBeatles(7) results in that string 8 times??? i don't get it.
  return newArray; // this needs to be outside the loop, otherwise only first item will be returned
} //end of function
