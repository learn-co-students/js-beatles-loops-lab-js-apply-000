function theBeatlesPlay(musicians, instruments){
 let playInstrument = []
   for(var i = 0; i < instruments.length; i++){
     playInstrument.push(musicians[i] + "plays" +instrument[i])
   }
   return playInstrument;
}
