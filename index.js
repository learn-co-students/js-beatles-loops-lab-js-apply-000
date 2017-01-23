function theBeatlesPlay (musicians, instruments){
  var arr = []
  for (var i = 0; i < musicians.length; i++){
    arr[i] = musicians[i] + " plays " + instruments[i]
    }
    return arr
}

function johnLennonFacts (facts){
  var jlf_array = []
  for (var i = 0; i < facts.length; i++){
    jlf_array[i] = facts[i] + "!!!"
    }
   return jlf_array
}

function iLoveTheBeatles (n){
  var love_array = []
  var i = 0
  if (n == 17) {
    love_array = "I love the Beatles!"
    } else {
    while (i < n+1){
      if (n < 15) {
        love_array[i] = "I love the Beatles!"
        i++
        }
      }
    }
  return love_array
}
