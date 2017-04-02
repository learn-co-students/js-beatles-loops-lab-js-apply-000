/*
On the off chance that anyone is actually reading this code, 
hello!  You may have noticed a distinct lack of me commenting
on any of this stuff.  

I'm not sure if it's a requirement or not, and it never clicks
to me to label things when I'm doing assignments, so 
I apologize in advance. 

Any comments can be directed to kevin.prunty95@gmail.com 

I see you being sneaky.
*/

function theBeatlesPlay(musicians, instruments){
  var temp = []
  
  for (var i=0; i < musicians.length; i++){
    temp[i]= `${musicians[i]} plays ${instruments[i]}`
  }
  
  return temp
}

function johnLennonFacts(facts){
  var i = 0;
  var a = [];
  while (i<facts.length){
    a[i] = facts[i] + "!!!"
    i++
  }
  return a
}


function iLoveTheBeatles(n){
  var a = []
  var i = 0
  do{
    a[i] = "I love the Beatles!"
    n++ 
    i++ 
  }
  while(n<15)

  return a
}


