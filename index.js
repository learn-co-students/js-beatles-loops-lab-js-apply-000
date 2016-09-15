var theBeatlesPlay = function(musicians, instruments){
  var barray = [];
  for(var i=0; i < musicians.length; i++){
    var string = musicians[i] + ' plays ' + instruments[i];
    barray.push(string);
  }
  // console.log(barray);
  return barray;
};


var johnLennonFacts = function(facts){
  var i = 0;
  var arro = [];
  while(i<facts.length){
    arro.push(facts[i] + '!!!');
    i++;
  }
  return arro;
}


var iLoveTheBeatles = function(number){
  var arr = [];
  if (number < 15){
    while (number < 15){
      arr.push("I love the Beatles!");
      number++;
    }
    //console.log(arr);
  } else {
    arr.push("I love the Beatles!");
  }
  return arr;

}
