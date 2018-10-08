function theBeatlesPlay(musicians, instruments){
  var finalArray=[]
  for (let i=0; i<musicians.length; i++){
    finalArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return finalArray;
}

function johnLennonFacts(array){
  for (let i=0; i<array.length; i++){
    array[i]=`${array[i]}!!!`
  }
  return array;
}


function iLoveTheBeatles(num){
  var newArray=[];
  do{
    newArray.push("I love the Beatles!")
    num=num+1
  }while(num<15);
  return newArray;
}
