function theBeatlesPlay(musicians, instruments){
    var stored = [];
    var i;

    for (i = 0; i < musicians.length; i++){
        stored.push(musicians[i] + ` plays ${instruments[i]}`);
    }
    return stored;
}

function johnLennonFacts(facts){
    var stored = [];
    var i = 0;

    while (i != facts.length) {
        stored.push(facts[i] + "!!!");
        i++;
    }
    return stored;
}

function iLoveTheBeatles(number){
    var stored = [];
    var size = number

    do{
        stored.push("I love the Beatles!");
        number++;
    }
    while (number < 15);

    return stored;
}
