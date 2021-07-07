// add solution here
function theBeatlesPlay(musicians,instruments) {
  let result = [];
  for (let i = 0; i < musicians.length; i++) {
    let str = `${musicians[i]} plays ${instruments[i]}`;
    result.push(str);
  }
  return result;
}

function johnLennonFacts(facts) {
  let result = facts.map(function(element) {
      return element += "!!!";
  });
  return result;
}

function iLoveTheBeatles(num) {
  let result = [];
  if (num < 15) {
    let i = 0;
    do {
      result.push("I love the Beatles!");
      i++;
    } while (i <= num);
  } else {
    result = ['I love the Beatles!'];
  }
  return result;
}