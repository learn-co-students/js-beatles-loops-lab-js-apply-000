function theBeatlesPlay(musicians, instruments){ //function for two arrays
    var lyrics = []; //array variable

    for(var i = 0; i < musicians.length; i++){//for loop for the length of musicians
        lyrics.push(musicians[i] + " plays " + instruments[i])//keyword push stores info into array
    }
    return lyrics;
}

function johnLennonFacts(facts){//accepting an array called facts
    var also = []; //empty array for storying new facts about john Lennon
    var k = 0;//used for while loop
    while(k<facts.length){//checks to see fi i is less than the length of new facts
    also.push(facts[k] + "!!!")

    k++;    
    }
    return also;
}

function iLoveTheBeatles(idk){
var love = []; //variable for storing data
do{
    love.push("I love the Beatles!");
    idk++
}while(idk<15)
    return love;
}
