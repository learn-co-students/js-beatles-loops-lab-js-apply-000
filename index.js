
function theBeatlesPlay(musicians,instruments) {
 var array =[]
  for (let i=0; i<musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i])
  }
 return array
}
function johnLennonFacts(array){
    var facts=[];
    var i=0;
    while (i<array.length){
      facts.push(`${array[i]} "!!!"`);
      i++
     }
      return facts;   
}
function iLoveTheBeatles(n){
  var array=[]
  do{
    array.push("I love the Beatles!");
    n++
  }
  while (n<15)
   return array   
}