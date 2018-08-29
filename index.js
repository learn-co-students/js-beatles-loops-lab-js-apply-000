
var beatles = ['John Lennon','Paul McCartney','George Harrison','Ringo Starr']
var instruments = ['Guitar','Bass','Lead Guitar','Drums']
var beatlesPlay = []
var i = null

function theBeatlesPlay(){
  for (i = 0; i < beatles.length; i++){
  beatlesPlay[i] = beatles[i] + ' plays '  + instruments[i]
  }
  return beatlesPlay[i]
}
