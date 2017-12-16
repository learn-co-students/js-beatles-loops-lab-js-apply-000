

function theBeatlesPlay(musicians,instruments){
   var arr = []

   for(let i = 0; i < musicians.length;i++){
       arr.push(musicians[i] + ' plays ' + instruments[i])
   }
   return arr
}

function johnLennonFacts(arr){
  let i = 0
  var new_arr = []
  while (i < arr.length){
     new_arr.push(arr[i] + '!!!')
     i++
  }
  return new_arr
}

function iLoveTheBeatles(number){
  var arr = []

  do{
    arr.push('I love the Beatles!')
    number++
  }
  while(number < 15)
  return arr
}
