function theBeatlesPlay(musicians, instruments){            //function called theBeatlesPlay passing musicians and instruments in it
    var array = [];                                         // set up empty array stored in variable called array
    for (var i=0; i<musicians.length; i++){                 // for loop to loop over array of musicians
  //    for (var j=0; j<instruments.length; j++)           for loop to loop over array of instruments
        array.push(musicians[i] + " plays " + instruments[i])                                        // create string using index at i for musicians and index at j for instruments


  }
  return array
}


function johnLennonFacts(facts){
    var i = 0;
    var arrayB = [];
    while(i<facts.length){
      arrayB.push(facts[i] + "!!!")
      i++
    }
    return arrayB
  }

function iLoveTheBeatles(){
    var i = 0;
    do{
      var arrayC=[];
      console.log(i);
      i++
      }
    while (i < 15);
  }
