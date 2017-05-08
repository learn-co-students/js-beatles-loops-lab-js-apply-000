function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (var i = 0; i < musicians.length; i ++){
      var tempString = musicians[i] +" plays " + instruments[i];
      array.push(tempString);
  }
  return array;

}
function johnLennonFacts(fact){
  var array = [];
  var i = 0;
  while (i < fact.length){
    array[i] = fact[i] + "!!!";
    i++;
  }
  return array;
}
function iLoveTheBeatles(quantity){

  if(quantity < 15){
  var array =  [quantity];
  var i = -1;
    do{
      i++;
      array[i] = "I love the Beatles!";
    }while(i <= (quantity-1));
    return array;
  }else
    return ["I love the Beatles!"];

}
