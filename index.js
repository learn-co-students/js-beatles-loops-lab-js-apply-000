// add solution here
function theBeatlesPlay(m_arr, i_arr){
  var arr = []
  for(var i = 0; i < m_arr.length; i++){
    var a = m_arr[i] + " plays " + i_arr[i];
    arr[i] = a
  }
  return arr
}

function johnLennonFacts(arr){
  var i = 0
  while(i != arr.length){
    arr[i] += '!!!'
    i++
  }
  return arr
}

function iLoveTheBeatles(num){
  var array = []
  do{
    array.push("I love the Beatles!")
    num++
  } 
  while(num < 15)
  return array
}
