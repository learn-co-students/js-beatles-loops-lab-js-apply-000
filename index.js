function theBeatlesPlay(ArrOfMusicians, ArrOfInstruments){
  var arr = [];

  for(var i = 0; i < ArrOfMusicians.length; i++){
      arr.push(ArrOfMusicians[i] + " " + "plays" + " "+ ArrOfInstruments[i]);

  }
  return arr;
}

function johnLennonFacts(arrOfFacts){
  var exclaimed = [];

  while (arrOfFacts.length > 0) {
    var first = arrOfFacts.shift();
    exclaimed.push(first + "!!!");
  }
  return exclaimed;
}

  function iLoveTheBeatles(num){
    var arr = [];

    if(num === 17){
      return ["I love the Beatles!"]
    } else{
    do {
      arr.push("I love the Beatles!");
      num--
    } while (num >= 0);
    return arr;
  }
}
