// add solution here
function theBeatlesPlay(musicians, instruments){

  const strs= []
  for(var counter = 0; counter<musicians.length; counter++){
    const str = musicians[counter] +" plays " + instruments[counter]
    console.log(str)
strs.push(str)
  }
return strs
}
 function  johnLennonFacts(facts){
   //for(var i =0; i<facts.length; i++){
   var i = 0
    while(i<facts.length){
     facts[i] = facts[i] + "!!!"
     i++;
     
   }
   return facts
  
   
 }
   
   function iLoveTheBeatles(number){
     var arr= [];
     do{
       
       arr.push("I love the Beatles!")
       number++
     }
     while(number<15)
     return arr
     
   }
   
  
  

  
   
 
  



  
   


     
   
 