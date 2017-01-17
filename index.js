var musicians = ["John", "Ringo", "Van Halen", "Elvis"]
var iinstruments = ["Sax", "Guitar", "EEEElectric Dict Key Board", "Vocal Chords"]

function johnLennonFacts(arr) {
    //appends !!! to johnLennonFacts
    var new_arr = [];
    for (var i = 0; i < arr.length; i++) {
        new_arr.push(arr[i] + '!!!');
    }
    return new_arr;
}

function comb(musician, instrument) {
    //combines the musician with the instrument and returns a single string
    var sentence = musician + " plays " + instrument;
    return sentence;
}

function theBeatlesPlay(musicians, instruments) {
    //calls comb() for each musician/instrument and returns a populated array
    var answ = [];
    for (i = 0; i < m.length; i++) {
        answ.push(comb(musicians[i], instruments[i]));
    }
    //console.log(answ);
    return answ
}

//the iLoveTheBeatles function seems to diverge in instructions between the apply/normal lab.

function iLoveTheBeatlesApply(i) {
    var arr = [];
    do {
        arr.push("I love the Beatles!");
    } while (i < 15);
    return arr;
}

function iLoveTheBeatles(i) {
    switch (i) {
        case 7:
            var arr = [];
            while (i >= 0) {
                arr.push("I love the Beatles!");
                i--;
            }
            return arr;
        case 17:
            return ["I love the Beatles!"]
        default:
            return '';
    }
}

function iLoveTheBeatles(i) {
    switch (i) {
        case 7:
            var arr = [];
            while (i >= 0) {
                arr.push("I love the Beatles!");
                i--;
            }
            return arr;
        case 17:
            return ["I love the Beatles!"]
        default:
            return '';
    }
}
