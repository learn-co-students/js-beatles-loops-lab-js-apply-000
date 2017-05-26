function theBeatlesPlay (musicians, instruments) {
    var arr = [];
    for (var i = 0; i <musicians.length; i++) {
      arr[i] = (musicians[i].toString() + " plays " + instruments[i].toString());
    }
    return arr;
}

function johnLennonFacts (fact) {
    var i = 0;
    while(i < fact.length){
      fact[i] = fact[i] + "!!!";
      i++;
    }
    return fact;
}

function iLoveTheBeatles (num){
    var numArray = [];
    do {
        numArray.push("I love the Beatles!");
        num++;
    }
    while (num < 15);
    return numArray;
}
