function theBeatlesPlay(musicians, instruments) {
  var arr =[];
  let c;
  for(c = 0 ; c < musicians.length; c++) {
    let str = `${musicians[c]} plays ${instruments[c]}`;
    arr.push(str);
  }
  return arr;
}


function johnLennonFacts(facts){
  let arr =[];
  var counter = 0;
  while (counter < facts.length) {
    facts[counter]+='!!!';
    console.log(facts[counter]);
    arr.push(facts[counter]);
    counter +=1;
  } 
  return arr;
}

function iLoveTheBeatles(num) {
  console.log(num);
  let arr =[];
  var str = 'I love the Beatles!'
  var counter = 0;
  do {
    arr.push(str)
    num += 1;
  } while (num < 15);
  return arr;
}