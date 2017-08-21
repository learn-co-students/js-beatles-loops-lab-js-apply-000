var beatle = ['John Lennon', 'Paul McCartney', 'Ringo Starr', 'George Harrison'];
var musicMaker = ['Guitar', 'Bass', 'Drums', 'Keyboard'];
function theBeatlesPlay(musician, instrument) {
  songs = [];
  for (i = 0; i < beatle.length; i++) {
    songs.push(musician[i] + " plays " + instrument[i] + ".");
  }
  return songs;
}
theBeatlesPlay(beatle, musicMaker);
