var theBeatlesPlay = function(musicians, instruments){
  var aray =[];
  for(var counter=0; counter<musicians.length; counter++){
  aray.push(musicians[counter]+" plays "+instruments[counter]);
  }
  return aray;
}

var johnLennonFacts = function(facts){
  for (var counter3=0; counter3<facts.length; counter3++){
    facts[counter3]+="!!!"
  }
  return facts;
}

var iLoveTheBeatles = function(number){
var  aray2=[];
var counter2 = 0;
if (number<15){
  do{
  aray2.push("I love the Beatles!");
  counter2++;
} while (counter2 <= number);
                } else {
  aray2.push("I love the Beatles!")
        }
return aray2;
}
