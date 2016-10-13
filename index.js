function theBeatlesPlay (musicians,instruments){
   var rray = [ ];
   for (var i=0; i < musicians.length; i++){
    rray[i]= (musicians[i] +" plays " + instruments[i]);
   }
   return rray;
}


function johnLennonFacts (facts){
var i = 0;
    while (i < facts.length){
        facts[i] = facts[i] + "!!!";
          i++;
      }
  return facts;
}

function iLoveTheBeatles (number){
 var empty = [];
do {
  empty.push ("I love the Beatles!");
  number++
}
while (number < 15);
return empty;
}
