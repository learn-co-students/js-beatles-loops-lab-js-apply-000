# Beatles Loops

## Objectives
+ Build a for loop
+ Build a while loop
+ Build a do-while loop

## Instructions

Make sure you run the tests with `learn -b` to get the full output in the browser. 

+ Create a function `theBeatlesPlay`, which accepts to parameters- an array of musicians and an array of instruments. The body of the function should create an empty array stored in a variable. The function should also contain a for loop which loops over the array of musicians. You'll want to be careful about what value you set your counter variable to store. (Hint: Think about what the first index of an array is). The first time through the loop, the body of the loop should create a string using the first index of the musicians array and the first index of the instruments array: `"John Lennon plays guitar"`. This string should be added to the empty array you created. The loop should make the same sentence for every member of the musicians array. The function should return the array of new strings.

+ Create a function `johnLennonFacts`, which contains an array of facts about John Lennon:

```js
facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
```

The function should create a variable that stores an empty array. Use a while loop to loop over the array and add `"!!!"` to the end of every fact. The new string with the exclamation points should be added to the empty array.

The function should return the array of strings with exclamation points.