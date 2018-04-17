function theBeatlesPlay(musicians, instruments){
   musicians.forEach(function(musician){
     instruments.forEach(function(instrument){
       return `${musician} plays ${instrument}`
     }
   })
}
