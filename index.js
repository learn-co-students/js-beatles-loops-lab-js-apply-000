function theBeatlesPlay(musicians, instruments) {
  var returnArr = [];
  
  for(var i = 0; i < musicians.length; i++){
    var musician = musicians[i];
    var instrument = instruments[i];
    var string = musician + " plays " + instrument;
    returnArr.push(string);
  }
  return returnArr;
}

// const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
//     const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];


function johnLennonFacts(arr){
  var modArr = [];
  for(var i = 0; i < arr.length; i++){
    modArr.push(arr[i] + "!!!");
  }
  return modArr;
}

function iLoveTheBeatles(num){
  var empArr = [];
  if(num < 15){
    for(var i = num; i >=0 ; i--){
      empArr.push("I love the Beatles!");
    }
  } else {
    empArr.push("I love the Beatles!");
  }
  
  return empArr
}