function theBeatlesPlay(list_musicians, list_instruments) {
    var list_music_instrument = [];
    for (var i = 0; i < list_musicians.length; i++) {
        list_music_instrument.push(list_musicians [i] + " plays " + list_instruments [i]);
    }
    return list_music_instrument
}

function johnLennonFacts () {
    var const_facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
    var i = 0;
    var place_holder_cf = [];
    while ( i < const_facts.length) {
        place_holder_cf.push(const_facts[i] + "!!!");
        i++;
    }
    return place_holder_cf;
}

function iLoveTheBeatles(i) {
    var beatles = [];
    do {
        beatles.push("I love the Beatles!");
        i++;
    } while (i < 15);

   return beatles
}
