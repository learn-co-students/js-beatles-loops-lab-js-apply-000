function theBeatlesPlay(musicians, instruments) {
  var arr = [];

  for (let i = 0, l= musicians.length; i<l;  i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return arr;
}

function johnLennonFacts(facts) {
  var arr = [];

  var i = 0;
  while (i < facts.length) {
    arr.push(`${facts[i]}!!!`)
    i++;
  }

  return arr;
}

function iLoveTheBeatles(num){
  var arr=[];
do{
  arr.push("I love the Beatles!");
  num++;
  }
while(num<15);
return arr;
}
