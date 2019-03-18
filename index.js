// add solution here
function theBeatlesPlay(arrayMusic,arrayInstrum){
  let emptyArray=[]
  for(let i=0;i<=arrayMusic.length-1;i++){
    let another=arrayMusic[i]+" plays "+arrayInstrum[i];
    arrayInstrum[i]++;
    emptyArray.push(another);
  }
  return emptyArray;
}

function johnLennonFacts(arrayFacts){
  let newArray=[];
  let i=0;
  while(i<arrayFacts.length){
    newArray.push(`${arrayFacts[i]}!!!`)
      i++;
  }
return newArray ;
}

function iLoveTheBeatles(num){
  let empty=[];
  let loveExpression="I love the Beatles!"
  do{
    num++
    empty.push(loveExpression)
  }
  while(num<15);
  return empty;
}

