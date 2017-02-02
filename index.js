function theBeatlesPlay(musicians, instruments){
 var i =0;
 var newarray = [];
 /* while (musicians[i] == TRUE && instruments[i] == TRUE){

   newarray[i] = array.push("$musicians[i] plays $instruments[i]");

   i++;

 }*/

for (i=0;i<musicians.length;i++){

newarray.push(musicians[i]+" plays "+ instruments[i]);

}

return newarray;

}


function johnLennonFacts(array){

 var newarray = [];
 var i =0;
 while ( array[i]){

   newarray.push(array[i]+"!!!")

   i++;



 }

 return newarray;




}


function iLoveTheBeatles(n){

  var i=-1;
  var newarray=[];


  if (n < 15){
   while(i < n){
    newarray.push("I love the Beatles!");
    i++;
   }
 }else {
   newarray.push("I love the Beatles!");
 }

  return newarray;



}
