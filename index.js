const facts = ["He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"]
  function johnLennonFacts(facts) {

  var i = 0
  while ( facts[i] != undefined ) {
    facts[i] = [facts[i]] + "!!!";
    i++;
  }

  return facts

}
`iLoveTheBeatles`
