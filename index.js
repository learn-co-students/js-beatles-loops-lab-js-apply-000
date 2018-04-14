
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



function iLoveTheBeatles (num) {
  var result="";
 var body = [];
 var i = 0;
var b = ['I love the Beatles!']
while (i < num+1) {
    result += b ;
 
     i++;
 }
   body.push(result)
   return body
 }
johnLennonFacts(7)

