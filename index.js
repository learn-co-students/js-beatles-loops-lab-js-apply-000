// add solution here


var beatles = ['John Lennon','Ringo Starr','Paul McCartney','George Harrison']
var instruments = ['Guitar','Drums','Bass','Guitar']
var beatlesPlay = []
var number = 6
var i = null

theBeatlesPlay(){
  for (i = 0; i < beatles.length; i++){
  beatlesPlay[i] = beatles[i] + " plays " + instruments[i]
  }
  return beatlesPlay[i]
}
