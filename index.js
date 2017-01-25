var theBeatlesPlay = (musicians, instruments) => {
  var tempArray = [];
  for(var i=0;i<musicians.length;i++){
    tempArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return tempArray;
}

var johnLennonFacts = (array) =>{
  for(var i=0;i<array.length;i++){
    array[i]=array[i]+"!!!";
  }
  return array;
}

var iLoveTheBeatles = (number)=>{
  var tempArray = [];
  do{
    tempArray.push("I love the Beatles!");
    number++;
  }
  while(number<15);
  return tempArray;
}
