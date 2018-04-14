
function theBeatlesPlay (musicians , insturments) {
 var body = [];
 for(var i = 0; i<musicians.length; i++) {
   
    var result =    musicians[i] +  ' '  + 'plays' + ' ' + insturments[i];
    body.push(result)
   
   
 }
  return body
   
}
theBeatlesPlay()

function johnLennonFacts (facts) {
 var body = [];
 for(var i = 0; i<facts.length; i++) {
   
    var result =    facts[i] +  '!!!' ;
    body.push(result)
   
   
 }
  return body
   
}
johnLennonFacts()





function iLoveTheBeatles (number) {

 var body = [];
 do {
   body.push('I love the Beatles!')
   
     number++;
 }
while (number < 15) {
 
   return body
 }
 }
johnLennonFacts(7)










