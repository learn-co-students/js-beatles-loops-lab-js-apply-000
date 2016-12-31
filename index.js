


function theBeatlesPlay(musicians, instruments){
   var index = 0;
   var musiciansPlay = [];

   for (index = 0; index < musicians.length; index++){
        musiciansPlay.push(musicians[index] + " plays " + instruments[index]);
    }
    return musiciansPlay;
}


function johnLennonFacts(facts){
    //while loop over facts, append !!! to end of each one'
    var index = 0;
    var johnFacts = [];
    while (index < facts.length) {
        johnFacts.push(facts[index] + "!!!");
        index++;
    }
    return johnFacts;
}

function iLoveTheBeatles(number){

    var loveBeatles = [];

    do {
        loveBeatles.push("I love the Beatles!");
        number++;
    }while (number < 15);

    return loveBeatles;
}
