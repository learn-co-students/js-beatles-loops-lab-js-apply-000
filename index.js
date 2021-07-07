function theBeatlesPlay(musicians,instruments){
  var emptyArray = [];
  for ( var i = 0 , x = 0 ; i <musicians.length && x < instruments.length; i++,x++){
    emptyArray.push(musicians[i] +" "+ "plays" + " "+ instruments[x])
  }
  return emptyArray;
}


 function johnLennonFacts(facts) {
    const arr=[];
    let i = 0;
    while(facts.length > i){
      arr.push(`${facts[i]}!!!`)
      i++
    }
    return arr
  }


function iLoveTheBeatles(num){
  var array =[];
  var x = "I love the Beatles!"
  do {
  array.push(x)
  num ++
}while (num < 15)
  return array;
  }
