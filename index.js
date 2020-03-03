// add solution here

  var emptyArr = new Array();

  function theBeatlesPlay(arrM, arrI){

    for(var i=0; i<arrM.length; i++) {
      var stringA = arrM[i].toString()
      var stringB = arrI[i].toString()
      emptyArr.push(stringA + ' plays '+ stringB);

    }
    //console.log(emptyArr);
    return emptyArr
  }

theBeatlesPlay(musicians, instruments)

//Part 2

function johnLennonFacts(arrFacts){
  var counter = 0
  var johnFacts = new Array();
  while(counter < arrFacts.length){
    var stringA = arrFacts[counter];
    var stringB = "!!!";
    var stringC = stringA + stringB;

  johnFacts.push(stringC);
  counter++;
  }
  return johnFacts
//console.log(johnFacts);
}

johnLennonFacts(facts)

//Part 3
function iLoveTheBeatles(num){
  var counter = 0;
  var emptyLove = new Array();

    do{
      emptyLove.push("I love the Beatles!")
      counter++;

     // if(num<15){
       // emptyLove.push("I love the Beatles!")

      if(num>15 && emptyLove[0] == "I love the Beatles!"){
      {break};
      }
    }while(num >= counter);

    //console.log(emptyLove)
    return emptyLove;

}

iLoveTheBeatles(7);
iLoveTheBeatles(17);
