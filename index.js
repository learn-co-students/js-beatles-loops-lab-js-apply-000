// add solution here
function theBeatlesPlay(musicians, instruments)
{
  var resultArray = [];
  for(var i=0;i<musicians.length; i++)
  {
    var tempString = `${musicians[i]} plays ${instruments[i]}`;
    resultArray.push(tempString);
  }
  return resultArray;
}


function johnLennonFacts(facts)
{
  var resultArray = [];
  var i = 0;
  
  while (i<facts.length)
  {
    var tempString = `${facts[i]}!!!`;
    resultArray.push(tempString);
    i++;
  }
  
  return resultArray
}


function iLoveTheBeatles(num)
{
  var resultArray = [];
  var tempString = "I love the Beatles!";
  
  do 
  {
    resultArray.push(tempString);
    num++;
  }
  while(num<15);
  return resultArray
}