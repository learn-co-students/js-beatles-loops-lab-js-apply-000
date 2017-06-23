function theBeatlesPlay(inMusicians,inInstruments)
{
  var emptyArray = [];
  for (var m = 0; m < inMusicians.length; m++)
  {
    emptyArray.push(inMusicians[m] + " plays " + inInstruments[m]);
  }
  return emptyArray;
}







/*
const facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
];
*/

function johnLennonFacts(inFact) {

    var endResult = [];
    var i = 0;
    var exp = '!!!';
    while (i < inFact.length)
    {
        endResult.push(inFact[i] + exp);
        i++;
    }
    return endResult;
}













function iLoveTheBeatles(n) {
    var arRay = [];

    do {
        arRay.push("I love the Beatles!");
        n++;
    } while (n < 15);
    return arRay;
}
