// add solution here
function theBeatlesPlay (arr, instruments) {

  let result = [];

  for (let i = 0; i < arr.length;i++) {
    let musician = arr[i];
    result.push(`${musician} plays ${instruments[i]}`);
  }
  return result;
}
function johnLennonFacts (facts) {
  let i = 0;

  while (i < facts.length) {
    facts[i] += '!!!';
    // console.log(facts[i])
    i++;
  }
  return facts;
}
function iLoveTheBeatles (num) {

  let result = [];

  do {
    result.push("I love the Beatles!");
    num++;
  }
  while (num < 15);

  return result;
}
