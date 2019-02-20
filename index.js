// add solution here
function theBeatlesPlay (musicians, instruments) {
var  band =  new Array(musicians.length)
  var i
  for (i = 0; i < musicians.length; i++){
    band[i] = (musicians[i] + " plays " + instruments[i])
    }
    return band;
}
function johnLennonFacts (johnLennonFactsArray){
  var i = 0
  while (i < johnLennonFactsArray.length){
    johnLennonFactsArray[i] += "!!!"
    i++
  }
  return johnLennonFactsArray;
}
function iLoveTheBeatles (num) {
  var beatles = new Array ()
  var i = 0
  do {
     beatles[i]  = "I love the Beatles!"
     i++
     num++
  }
  while (num < 15);
  return beatles;

}
