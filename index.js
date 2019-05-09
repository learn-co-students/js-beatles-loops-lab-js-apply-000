// add solution here
function theBeatlesPlay(arr1, arr2) {
  let foo = [];
  for (let i = 0; i < arr1.length; i++){
    let string = arr1[i] + " plays " + arr2[i];
    foo.push(string);
  }
  return foo;
}


function johnLennonFacts(facts) {
  let arr1 = [];
  let counter = 0;
  while (counter < facts.length) {
    arr1.push(`${facts[counter]}!!!`);
    counter++;
  }
  return arr1;
}


function iLoveTheBeatles(num) {
  let arr = [];
  let i = num;
  do {
    arr.push("I love the Beatles!");
    i++;
  }
  while (i < 15);
  return arr;
}


