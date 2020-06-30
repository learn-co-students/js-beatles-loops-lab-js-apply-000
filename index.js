function theBeatlesPlay(musicians,instruments)
{ 
  let arr = [];
  let str = "";
  
  for(let i = 0;i<musicians.length;i++)
  {
    str = musicians[i] + " plays "+ instruments[i];
    arr[i]= str;
  }
  return arr;
}

function johnLennonFacts(facts)
{
  let arr = [];
  let fact = "";
  let i = 0;
  while(i<facts.length)
  {
    fact= facts[i]+"!!!";
    arr[i]=fact;
    i++;
  }
  return arr;
}

function iLoveTheBeatles(num)
{
  let emptyArray = [];
  let i = 0;
  do 
  {
    emptyArray[i]="I love the Beatles!" ;
    num++;
    i++;
  }while(num<15)
  
  return emptyArray;
  
}