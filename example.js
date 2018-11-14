const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (let i=0; i<musicians.length; i++){
    array.push(`musicians[i] plays instruments[i]`)
  }
}




const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var list = [];
  for (let i=0; i<musicians.length; i++) {
    list.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return list;
}
