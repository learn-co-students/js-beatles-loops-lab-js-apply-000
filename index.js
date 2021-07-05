// add solution here

function theBeatlesPlay(musicians, instruments) {
    
    var roles = [];

    for(var i=0; i<musicians.length; i++) {
        
        roles[i] = musicians[i] + " plays " + instruments[i];

    }//end for loop

    return roles;


}//end theBeatlesPlay



function johnLennonFacts(facts) {

    var i = 0;

    while(i < facts.length) {
        
        facts[i] = facts[i] + "!!!";

        i++;
    }

    return facts;

}//end johnLennonFacts



function iLoveTheBeatles(i) {

    var love = [];
    var start = i;

    do {

        love[(i - start)] = "I love the Beatles!";
        /* subtracting the initial passed parameter to ensure there are no empty positions inside of the array, love */

        i++;
    }
    while (i < 15);

    return love;

}//end iLoveTheBeatles