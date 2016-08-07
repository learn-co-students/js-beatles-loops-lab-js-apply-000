function the BeatlesPlay(musicians, instruments) {
  var a = []
  for(var i = 0; i < musicians.length; i++){
    a.push(musicians[i] + ' plays ' + instruments[i])
  }
  return a
}
