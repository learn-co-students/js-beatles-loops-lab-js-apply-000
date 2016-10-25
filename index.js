function theBeatlesPlay(musicians, instruments) {
    var results = [];

    for (var i = 0; i < musicians.length; i++) {
        results.push(musicians[i] + ' plays ' + instruments[i]);
    }

    return results;
}

function johnLennonFacts(facts) {
    var results = [];

    var i = 0;
    while (i < facts.length) {
        results.push(facts[i] + '!!!')
        i++;
    }

    return results;

}

function iLoveTheBeatles(num) {
    var results = [];

    do {
        results.push('I love the Beatles!');
        num++;
    } while (num < 15);

    return results;
}
