var musicians = ['John Lennon','Paul McCartney','George Harrison', 'Ringo Starr' ];
var instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums' ];
var Beatle=[];
var theBeatlesPlay=function(musicians,instruments){
  var i;
  for (i=0;i<=musicians.length;i++){
    Beatle[i]=musicians[i]+' plays ' + instruments[i];
  }
  return Beatle;
}

theBeatlesPlay(musicians, instruments);
