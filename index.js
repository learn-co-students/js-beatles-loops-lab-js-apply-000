function theBeatlesPlay (musician, instrument){
  var new_array=[]
  for (var i=0; i<musician.length;i++){
    var string=`${musician[i]} plays ${instrument[i]}`
    new_array.push(string)
  }
  return new_array
}
function johnLennonFacts(fact){
  var exc_array=[]
  for (var j=0;j<fact.length;j++){
    var add_exc=`${fact[j]}!!!`
    exc_array.push(add_exc)
  }
  return exc_array
}
function iLoveTheBeatles(num){
  var variable=[]
  var i=0
  while (i<=num){
    if (num<15){
      var string="I love the Beatles!"
      variable.push(string)
      i=i+1
    }else{
      variable.push("I love the Beatles!")
      i=num+1
    }
  }
  return variable
}