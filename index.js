// add solution here
function theBeatlesPlay(musicians,instruments) {
  let variable = [];

  for(let i = 0; i < musicians.length; i++) {
    variable.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return variable
}

function johnLennonFacts(arr) {
let i = 0;
let newArr = [];
  while(i < arr.length) {
    newArr.push(arr[i] +"!!!");
    i++;
  }
  return newArr;
}

function iLoveTheBeatles(num) {
  let variable =[];
  do {
    variable.push("I love the Beatles!");
    num++;

}
  while(num < 15)


  return variable;
}
