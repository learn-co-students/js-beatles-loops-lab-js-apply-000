// add solution here

function theBeatlesPlay (musicians, instruments)
{
  
  var array=[];

    for (var i=0; i<musicians.length; i++)
    {
        array[i]=musicians[i]+' plays '+instruments[i];
    }  
  
 return array;
}



function johnLennonFacts (facts){
  
  var a=0;
 
  while (a<facts.length)
  {
    facts[a]=facts[a]+'!!!'
    a++;
  }
  
  return facts;
}

function iLoveTheBeatles(n){
  
  var empty=[];
  var i=0;
  
  do{
       empty[i]='I love the Beatles!';
       i++;
       n++;
    
    } while (n<15);
  
  return empty;
}
