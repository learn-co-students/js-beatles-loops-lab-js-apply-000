function theBeatlesPlay(musicians, instruments){
    var phrases = [];
    musicians.forEach(function(musician, index){
        phrases.push(musician+" plays "+instruments[index]);
    });
    return phrases;
}

function johnLennonFacts(facts){
    var arr = [];
    var i = 0;
    while(i < facts.length){
        arr.push(facts[i]+"!!!");
        i+=1;
    }
    return arr;
}

function iLoveTheBeatles(times){
    const phrase = "I love the Beatles!";
    var arr = [];
    do {
        arr.push(phrase);
        times += 1;
    } while(times < 15);
    return arr;
}
