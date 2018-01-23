function theBeatlesPlay(musicians,instruments){
  var array=[];

  for(var i = 0 ; i < musicians.length ; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(array){
  var index=0;
  while(index < array.length){
    array[index]= array[index] +"!!!";
    index++;
  }
  return array;
}

function iLoveTheBeatles(number){
  var array=[];
  do{
    array.push("I love the Beatles!");
    number++;
  }while(number<15)
  return array;
}
