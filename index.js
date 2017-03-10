function theBeatlesPlay(musicians,instruments){
  var result = new Array();
  var index=0;
  if(musicians.length==instruments.length){
    for(index=0;index<musicians.length;index++){
      result[index] = musicians[index]+" plays "+instruments[index];
    }
    return result;
  }else{
    console.log("length not match up!")
  }
}

function johnLennonFacts(arr){
  var result = new Array();
  var index=0;
  while(index<arr.length){
    result[index]=arr[index]+"!!!"
    index++;
  }
  return result;
}

function iLoveTheBeatles(num){
  var result = new Array();
  if (num<15){
    do{
      result[num]="I love the Beatles!";
      num--;
    }while(num>=0);
  }else{
      result[0] = "I love the Beatles!";
  }
  return result;
}