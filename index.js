// var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
//
// var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];




var theBeatlesPlay = function(musicians,instruments) {

     var yellowSub = [];


        for (var i = 0; i < musicians.length; i++) {

                //  musicians[i] + " plays " + instruments[i];

                 yellowSub.push(musicians[i] + " plays " + instruments[i]);


                   }

                   return yellowSub
};


// ==================================================================================
var facts = [
  // "He was the last Beatle to learn to drive",
  // "He was never a vegetarian",
  // "He was a choir boy and boy scout",
  // "He hated the sound of his own voice",
  "foo",
  "bar",
];



 var johnLennonFacts = function(facts){

   var array = [];

   var i = 0;


    while( i < facts.length ){

       array.push(facts[i] + "!!!");

       i++;
    }

   return array

 }



// 8****************************************************


function iLoveTheBeatles(p1){

     var bX = p1;

     var iHeart = [];


             do {

                    iHeart.push('I love the Beatles!');

              bX +=1

            } while ( bX < 15);




       return iHeart



}
