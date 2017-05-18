# Beatles Loops

## Objectives
+ Build a for loop
+ Build a while loop
+ Build a do-while loop

## Instructions

Make sure you run the tests with `learn`.

the body of the loop should create a string using the first index of the musicians array and the first index of the instruments array: `"John Lennon plays guitar"`. This string should be added to the empty array you created. The loop should make the same sentence for every member of the musicians array. The function should return the array of new strings.

+ Create a function `johnLennonFacts`. This function will accept one argument, an array of facts about John Lennon (note that it might not be exactly the following facts):

```js
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
```

Use a while loop to loop over the facts array and add `"!!!"` to the end of every fact. The function should return an array of strings with exclamation points.

+ Create a function `iLoveTheBeatles` which accepts a number as a parameter. The body of the function should create a variable that stores an empty array. Then, implement a do-while loop inside the function that adds `"I love the Beatles!"` to the empty array. Then the loop should increment the number passed in as a parameter. The condition of the loop should check to see that the parameter number is less than `15`. The function should return the array with the strings `"I love the Beatles!"`.

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/js-beatles-loops-lab' title='Beatles Loops'>Beatles Loops</a> on Learn.co and start learning to code for free.</p>
