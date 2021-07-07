function theBeatlesPlay(array1,array2){
    var new_array = []
    for (var i=0; i<array1.length; i++){
        new_array.push(`${array1[i]} plays ${array2[i]}`)
    }
    return new_array

}
  
function johnLennonFacts(facts) {
  var i = 0;
    while (i < facts.length) {
       facts[i] += "!!!";
     i++;
    }
    return facts
  }
  
  function iLoveTheBeatles(num){
    var empty_array = []
    do{
      empty_array.push("I love the Beatles!")
      num++
    }
    while (num < 15)
    return empty_array
  }
  