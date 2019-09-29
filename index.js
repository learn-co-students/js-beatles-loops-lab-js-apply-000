// add solution here
var index;
var indextwo;


const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];




function theBeatlesPlay() 
{
  var emptyarray = [];
  
 for (index = 0 ; index < musicians.length ; ++index )
 {
     var arrayelement = musicians[index] + ' plays ' + instruments[index];
     emptyarray.push(arrayelement);
     
     if (emptyarray.length === 4)
     {
            return emptyarray
     }
  }
}



function johnLennonFacts(Array) 
{
  var emptyarrayfacts = [];
  var i = 0;

  
  while (i < Array.length)
  {
     var elment = Array[i] + '!!!' ;
     emptyarrayfacts.push(elment);
          i = i + 1;

     if (emptyarrayfacts.length === Array.length)
     {
            return emptyarrayfacts
     }
  }

}



function iLoveTheBeatles(n) 
{
  var emptyarray = [];

  if (n < 15)
  {
    n = n +1;
    while (emptyarray.length < n )
    {
      emptyarray.push("I love the Beatles!");
      if (emptyarray.length === n)
      {
                return emptyarray
      }
    }
     
  }
  
  else
  {
         emptyarray.push("I love the Beatles!");
          return emptyarray;
  }

}


