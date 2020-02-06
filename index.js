// add solution here

function theBeatlesPlay(musicians, instruments){
  var arr = [];
  for (let i = 0; i < musicians.length; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr
}
console.log(theBeatlesPlay())

function johnLennonFacts(arr){
  let i = 0;
  let newArr = [];
  while (i < arr.length){
    newArr.push(arr[i]+"!!!")
    i++;
  }
  return newArr
}

function iLoveTheBeatles(num){
  let arr = [];
  let inc = num;
  let iltb = "I love the Beatles!";
  do{
    inc++ 
    arr.push(iltb)
  } while(inc < 15);
  return arr
}