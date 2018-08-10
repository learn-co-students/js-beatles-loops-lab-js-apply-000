const musicians = ["John", "Paul", "George", "Ringo"];
const instruments = ["guitar", "guitar", "bass", "drums"];
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < 4; i++) {
      array.push(`${musicians[i]} plays ${instruments[i]}`);
    }
  return array;
}
theBeatlesPlay(musicians, instruments);