var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar" , "Drums"]

function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (let i = 0; i < musicians.length; i++){
    array.push(musicians[i] +" plays " + instruments[i])
  }
  return array
}

function johnLennonFacts(arr){
  var result= []; 
  var i = 0; 
  while(i < arr.length) {
    result.push(arr[i] + '!!!')
     i++; 
  }
   return result; 
 }
 
function iLoveTheBeatles(num) { 
  
 let newArray = []; 
  do {
     newArray.push(`I love the Beatles!`)
    num++
  } while (num < 15)

  return newArray; 
} 
 
