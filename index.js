
function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (var i = 0; i < musicians.length ; i ++){
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array
}

function johnLennonFacts(array){
  var newarray = [];
  for (var i = 0; i < array.length ; i ++){
    newarray.push(array[i]+"!!!");
  }
  return newarray
}


 function iLoveTheBeatles(n){
   var array = [];
   var count = 1;
   if (n<7){
   }
   else if (n>=7 && n <17){
     do{
       array.push("I love the Beatles!");
       count ++;
     }
     while (count<= 8);
   }
   else{
     array.push("I love the Beatles!")
   }
   return array;
 }
