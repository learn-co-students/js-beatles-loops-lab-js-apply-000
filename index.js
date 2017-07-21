function theBeatlesPlay(musicians, instruments){

    if (musicians.length === instruments.length){
        var sentences = [];
        for (var index in musicians){
            sentences.push(musicians[index] + " plays " + instruments[index])
        }
        return sentences
    } else {
        console.error("You did not provide an instrument for each musician")
    }
}

function johnLennonFacts(facts) {
    var i = -1;
    var revisedFacts = [];
    while(i++ < facts.length - 1){
        revisedFacts.push(facts[i] + "!!!")
    }
    return revisedFacts
}

function iLoveTheBeatles(num){
    var sentences = [];
    do {
        sentences.push("I love the Beatles!");
        num++;
    } while (num < 15);

    return sentences
}
