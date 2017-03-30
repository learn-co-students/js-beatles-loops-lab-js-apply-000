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

function iLoveTheBeatles(number) {
  let newArray = []; //local variable
  do {
    newArray.push(`I love the Beatles!`); //this will happen one time, whether or not number meets condition below
    number++; //increment number of times string above is pushed into newArray
  } while (number < 15); //do loop above is executed so long as this condition is met -- iLoveTheBeatles(8) will output the string 7 times, AKA 15-8... iLoveTheBeatles(3) will output the string 12 times, AKA 15-3
  return newArray; // this needs to be outside the loop, otherwise only first item will be returned
} //end of function
