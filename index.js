// add solution here
function theBeatlesPlay(musicians, instruments) {
  var result = [];
  for (let i = 0; i < musicians.length; i++) {
    result.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return result;
}
