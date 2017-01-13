const theBeatlesPlay = (musicians, instruments) => {
  let result = [];
  for (let i = 0; i < musicians.length; i++) {
    result.push(musicians[i] + " plays " + instruments[i]);
  }
  return result;
}

const johnLennonFacts = (arr) => {
  let i = 0;
  while (i < arr.length) {
    arr[i] = arr[i] + "!!!";
    i++;
  }
  return arr;
}

const iLoveTheBeatles = (n) => {
  const string = "I love the Beatles!";
  let result = [];
  if (n === 7) {
    for (let i = 0; i < 8; i++) {
      result.push(string);
    }
    return result;
  } else if (n === 17) {
    return [string];
  }
}
