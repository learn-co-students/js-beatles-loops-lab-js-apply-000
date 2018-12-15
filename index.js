function theBeatlesPlay(instruments, musicians){
let res = [];
for (var i = 0; i < instruments.length; i ++) {
let temp = "";
temp = (instruments[i] + " plays " + musicians[i]);
res.push(temp);
}
return res
}

function johnLennonFacts (facts){
  let res = [];
  let i = 0;
  while (i < facts.length) {
  let temp = "";
  temp = (facts[i] + "!!!");
  res.push(temp);
  i++;
  }
  return res
}

function iLoveTheBeatles(int){
  let arr=["I love the Beatles!"];
  let i = int;
  let res = [];
  if(i>15){
    return arr
}
do {
    res.push("I love the Beatles!");
    i--;
}
while (i >= 0);
return res;
}
