// add solution here
   const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
   const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
   
   function theBeatlesPlay (musicians, instruments){
       var beatles = [];
       for (let i=0; i < musicians.length; i++){
beatles.push(`${musicians[i]} plays ${instruments[i]}`);
}
       return beatles;
   }
   
