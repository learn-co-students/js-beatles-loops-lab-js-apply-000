onst johnLennonFacts = (array) => {
  if (array == undefined) {
    var things = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
    var thingsHeDoes = [];
    var i = 0;
    while (i < things.length) {
      thingsHeDoes.push(`${things[i]}!!!`);
      i++;
    }
    return thingsHeDoes;

  } else {
    var newArray = [];
    var i = 0;
    while (i < array.length) {
      newArray.push(`${array[i]}!!!`);
      i++;
    }
    return newArray;
  }

}

johnLennonFacts(['foo']);
const iLoveTheBeatles = num => {
  let array = [];
  do { array.push('I love the Beatles!')
       num++;
  }

  while (num < 15);
  return array;

}
iLoveTheBeatles(5);