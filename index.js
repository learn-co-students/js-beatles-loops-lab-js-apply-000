function theBeatlesPlay(musicians, instruments){
  var function1=[]

  for (var i=0; i<musicians.length; i++){
    function1.push(musicians[i]+ " plays " + instruments[i])
  }

  return function1

}

function johnLennonFacts(facts){
    var i=0;
    while (i<facts.length){
      facts[i]=facts[i]+"!!!"
      i++
    }
    return facts
}

function iLoveTheBeatles(num){
  var first=[]
  var i=0;

    do {

      first.push("I love the Beatles!")
      i++
    }while (i<=num && num <15)


    return first;
}
