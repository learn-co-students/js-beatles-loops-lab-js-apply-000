function theBeatlesPlay(musician_arr, instru_arr){
  var arr=[]
  for (var i = 0; i < musician_arr.length; i++) {
    arr=arr.concat( musician_arr[i]+" plays "+instru_arr[i] )
  }
  return arr
}



function johnLennonFacts(facts){
  var arr=[]
  var i=0
  while (i<facts.length) {
     arr=arr.concat(facts[i]+"!!!")
     i+=1
  }
  return arr
  }


function iLoveTheBeatles(n){
  var num=[]
  var i=0
  if (n>15) {
    return "I love the Beatles!"
    
  }
  
  
  do {
     num.push( "I love the Beatles!" )
     i+=1
  } while (i<=n);

  return num
}



