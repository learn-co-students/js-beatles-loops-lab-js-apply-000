// add solution here

function theBeatlesPlay(musicians, instruments) {
    var result = [];
    for (var i = 0; i < musicians.length; i++) {
        var str = musicians[i] + ' plays ' + instruments[i];
        result.push(str);
    }
    return result;
}


function johnLennonFacts(facts) {
    var i = 0;
    while (i < facts.length) {
        facts[i] = facts[i] + '!!!';
        i += 1;
    }
    return facts;
}


function iLoveTheBeatles(number) {
    var result = [];
    var i = 0;

    if (number < 15) {
        do {
            i += 1;
            result.push("I love the Beatles!");
        } while (i <= number);
    } else {
        return ["I love the Beatles!"];
    }
    return result;
}