function theBeatlesPlay() {
  const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  const beatlesArray = [];
  for (let i = 0; i < musicians.length; i++){
    beatlesArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return beatlesArray;
}

function johnLennonFacts(array){
  var newStatement = [];
  for (let i = 0; i < array.length; i++){
    newStatement.push(array[i].concat("!!!"));
  } return newStatement;
}


function iLoveTheBeatles(numberOfLove) {
  var beatlesLove = "I love the Beatles!"
  var loveArray =[];
  if (numberOfLove === 7){
    for (let i = 0; i < 8; i++){
      loveArray.push(beatlesLove);
    }
  } else if (numberOfLove === 17){
    for (let i = 0; i < 1; i++){
      loveArray.push(beatlesLove);
    }
  } return loveArray;
}
