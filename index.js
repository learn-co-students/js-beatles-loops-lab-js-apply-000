// add solution here
function theBeatlesPlay(musicians, instruments) {
  let whoPlaysWhat = [];
  for (var i = 0; i < musicians.length; i++) {
    whoPlaysWhat.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return whoPlaysWhat;
}

function johnLennonFacts(arrayOfFacts) {
  let count = 0;
  let excitingFacts = [];
  while (count < arrayOfFacts.length) {
    excitingFacts.push(arrayOfFacts[count] + '!!!');
    count++;
  }
  return excitingFacts;
}

function iLoveTheBeatles(num) {
  let whoDoYouLove = [];
  do {
    whoDoYouLove.push('I love the Beatles!');
    num++;
  } while (num < 15);
  return whoDoYouLove;
}