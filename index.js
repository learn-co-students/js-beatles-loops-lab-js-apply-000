// add solution here
function theBeatlesPlay(musicians, instruments){
  var arr = [];
  var counter;
  
  var a = "";
 for(counter = 0; counter <= musicians.length-1; counter++){
     a = musicians[counter] + " plays " + instruments[counter] ;
   
    arr[counter] =  a;
     
  
  }
 
   return arr;
  
}


function johnLennonFacts(facts){
  var counter = 0
  var arr ;
  var a = [];
  while (counter <= facts.length-1){
    arr = facts[counter] + "!!!";
    a[counter] = arr
    counter ++;
    
  }
   return a; 
}
function iLoveTheBeatles (number){
  var arr = []
 // number = 0
  var message = ["I love the Beatles!"]
do{
   number++
  
 arr = arr.concat(message)
  
 
}
while( number < 15);
 return arr
}