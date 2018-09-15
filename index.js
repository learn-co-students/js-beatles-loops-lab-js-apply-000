function theBeatlesPlay(musicians,instruments){
let array = [];
for (let i=0; i<musicians.length; i++){
  array.push(`${musicians[i]} plays ${instruments[i]}`)
}
  return array;
}
//first we need to define a function with two stated arrays, then we need to create an empty array.
//using for loop place the initialization; the condition, in this case the entire length og the array with .length;add the iteration
//the body of the loop should create a string using the first index of the musicians array and the first index of the instruments array. Using array.push by which the loop is created for every member of the musisian array. Than we need to return array

function johnLennonFacts(Facts){
  //open a function that accepts an argument(Facts)
  var text = [];
  var i = 0
  //an array with facts of john lennon
  //using a while loop create a condition where all the facts are mentioned, with exclamation marks in the end.
  while(i < Facts.length){
    text.push(Facts[i] + "!!!");
    i++;
  }
  return text;
}

function iLoveTheBeatles(Beatles){
let text =[]
// create a function which accepts a number (Beatles)
// creat an variable that stores an empty array
//with a do-while loop create a code that needs to be accepted
//set the condition for the loop at 15 times
do{
  text.push("I love the Beatles!")
  Beatles ++
}
while (Beatles < 15)
return text
}