 function theBeatlesPlay(musicians,instruments){
  var emptyArray= []
  for (var i=0;i<musicians.length;i++){
  emptyArray.push( `${musicians[i]} plays ${instruments[i]}`)
}
return emptyArray
  }
  
 //2 
  function johnLennonFacts(array){
    var i=0
    var emptyArray= []
    while (i<array.length){
    emptyArray.push(`${array[i]}!!!`)
     i++
    }
    return emptyArray 
  }
  
 
//3  
function iLoveTheBeatles(number){
  var emptyArray= []
  do{
    emptyArray.push("I love the Beatles!")
    number++

  }
  while (number<15)
  return emptyArray
}

