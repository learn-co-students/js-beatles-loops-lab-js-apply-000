function theBeatlesPlay(musician, instruments)
{
  var music= [];

for(var i=0;i<musician.length;i++)
{
 var combined =musician[i]+" plays "+instruments[i];
  music.push(combined);
}

return music;
}

function johnLennonFacts(facts)
{var i=0;
 var music = [];

 while(i< facts.length)
 {
   music.push(facts[i]+"!!!"); 
   i++;
 }
    return music;

}

function iLoveTheBeatles(num)
{
 var emparray= [];
 
   do
   {
     emparray.push("I love the Beatles!") ; 
     num++;
     
        } while(num<15)
return emparray;
  
}

