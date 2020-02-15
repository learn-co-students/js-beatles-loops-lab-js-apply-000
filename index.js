// add solution here
var theBeatlesPlay = function(musicians,instruments){
  var x=[]  
  for (var i=0 ; i < instruments.length; i++ ) {
    x[i] = musicians[i]+" plays "+ instruments[i]
  }
  return x
  

}
var johnLennonFacts = function (facts){
  var x = []
var i = 0
while (i<facts.length){
  x[i]= facts[i]+"!!!";
  i++;
  
}
  return x
  
}
var iLoveTheBeatles = function(n){
 var x =[] 
 var i =0
 do{ 
   
   x[i]="I love the Beatles!";i++;
   
 }
 while (i<15-n);
 return x ;
}
