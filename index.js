var insturments = ["Guitar","Bass","Drums"];
var musicians = ["John","Paul","Ringo"];
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

 
//theBeatlesPlay(musicians,insturments);
//johnLennonFacts(facts);
//iLoveTheBeatles(5);
function theBeatlesPlay(musician, insturment){
    var arr = [];
    //console.log(musician.length);
    var i = 0;
    for (i = 0; i < musician.length; i++)
    {
      arr.push(musician[i] + " plays " + insturment[i] );
      console.log(arr[i]);
    }
  
      return arr
}


function johnLennonFacts(facts){
	var arr = [];
    //console.log(musician.length);
    var i = 0;
    for (i = 0; i < facts.length; i++)
    {
      arr.push(facts[i] + "!!!");
      console.log(arr[i]);
    }
      return arr
}

function iLoveTheBeatles(e){
	var arr = [];
  //console.log(musician.length);
  var i = 0;
  if (e == 17) {
    arr.push("I love the Beatles!");
    //console.log(arr.length)
    return arr
  }
  else
  {
    for (i = 0; i < e+1; i++)
      {
        arr.push("I love the Beatles!");
        
      }
      //console.log(arr.length)
      return arr
  }
}