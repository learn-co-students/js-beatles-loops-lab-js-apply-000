function theBeatlesPlay(arr1,arr2){
  var list = [];
  for(var x in arr1){
    list.push(arr1[x]+" plays "+arr2[x]);
  }
  return list;
}

function johnLennonFacts(arr){
  for(var x in arr){
    arr[x]=arr[x]+"!!!";
  }
  return arr;
}

function iLoveTheBeatles(num){
  var list = [];
  if(num>15){
    list.push("I love the Beatles!");
    return list;
  }
  for(var x=0;x<num+1;x++){
    list.push("I love the Beatles!");
  }
  return list;
}