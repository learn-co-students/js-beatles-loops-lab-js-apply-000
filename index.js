function theBeatlesPlay(arrayOfMusicians, arrayOfInstruments){
  var newArray = [];
  
  for(var i=0; i<arrayOfMusicians.length; i++){
    var newString = ""; 
    
    newString += `${arrayOfMusicians[i]} plays ${arrayOfInstruments[i]}`
    newArray.push(newString); 
  }
  
  return newArray; 
  
}

function johnLennonFacts(arrayOfFacts){
 
 var i = 0; 
 while(i<arrayOfFacts.length){
   arrayOfFacts[i] += "!!!"; 
   i+=1; 
 }
  
  return arrayOfFacts; 
}

function iLoveTheBeatles(number){
  var newArray = []; 
  
  var i = 0; 
  do{
    newArray.push("I love the Beatles!"); 
    if(number>=15){
      return newArray; 
    }
    i += 1; 
  } while(i<=number);
  return newArray; 
}