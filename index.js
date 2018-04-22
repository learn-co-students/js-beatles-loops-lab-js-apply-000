function theBeatlesPlay(musicianArray, instrumentArray) {
  let beatlesArray = [];
  for(let i=0;i<musicianArray.length;i++) {
    beatlesArray.push(`${musicianArray[i]} plays ${instrumentArray[i]}`);
  }
  return beatlesArray;
}

function johnLennonFacts(arr) {
  let i=0;
  while(i<arr.length){
    arr[i]+="!!!";
    i++;
  }
  return arr;
}

function iLoveTheBeatles(num) {
  let arr =[];
  do {
    arr.push("I love the Beatles!");
    num++;
  }while(num<15);
  
  return arr;
}