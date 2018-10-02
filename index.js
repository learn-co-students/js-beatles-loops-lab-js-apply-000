function theBeatlesPlay(array_musicians, array_instruments){
  var empty_array = new Array()

  for (var i=0; array_musicians.length > i; i++){
      empty_array[i] = array_musicians[i]+" plays "+array_instruments[i]
  }

  return empty_array
}

function johnLennonFacts(array){
  var i = 0
  while (array.length > i){
    array[i] = array[i]+'!!!'
    i++
  }
  return array
}

function iLoveTheBeatles(number){
var  empty_array = new Array()

  do{
    empty_array.push("I love the Beatles!")
    number++
  }while(number<15);

  return empty_array
}