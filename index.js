
function theBeatlesPlay(musicians,instruments){
  var i=0;
  var j=0;
  var array=[];
  for (i=0;i<musicians.length;i++){
    var person=musicians[i];
    var instrumentEnd=instruments[i];
    var complete= person + " plays " + instrumentEnd;
    array.push(complete);
  }
  console.log("firstArray",array,complete)
  return array

}
theBeatlesPlay(musicians,instruments)


function johnLennonFacts(facts){
  var f=0;
  var finalFacts=[]
  while (f<facts.length){
    var excitingFacts=facts[f]+"!!!";
    finalFacts.push(excitingFacts)
    f++
  }
  console.log("While !!!",finalFacts)

  return finalFacts
}
johnLennonFacts(facts)


function iLoveTheBeatles(number){
  var array=[];
  do{
    array.push("I love the Beatles!");
    number++;
  }
  while (number<15);
  // console.log("Final: ",array);
  return array;
}
iLoveTheBeatles(number)