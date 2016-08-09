function theBeatlesPlay(musicians,instruments)
{
  var arrayA=[]
  for(var i=0; i<musicians.length; i++)
  {
    arrayA[i]=(musicians[i]+ " plays " +instruments[i])
  }
  return arrayA
}
function johnLennonFacts(facts)
{
  var i=0
  while (i<facts.length)
  {
    facts[i]=facts[i]+"!!!"
    i++
}
return facts
}
function iLoveTheBeatles(number)
{
  var sam=[]
  do{
  sam.push("I love the Beatles!")
  number++
} while(number<15)
return sam
}
