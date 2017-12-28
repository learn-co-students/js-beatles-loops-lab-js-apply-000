 const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
 const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
 const facts = [
        "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice" ]

function theBeatlesPlay(array1, array2){
  
  var final=[];
  
  for(var i = 0; i<=3;i++){
    
  final.push(array1[i] + " plays " + array2[i])
     
} return final } 


function johnLennonFacts(facts){
  
var done=[];
  
var j = 0;
  
while(j<facts.length) {done.push(facts[j] + "!!!"); j++} 

return done
  
}

function iLoveTheBeatles(num){
 
var result=[]
 
do { 

result.push("I love the Beatles!"); num++
   
} while (num < 15); return result
  
}


