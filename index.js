// add solution here
function theBeatlesPlay(){
  var array = ["John Lennon plays Guitar", "Paul McCartney plays Bass Guitar", "George Harrison plays Lead Guitar", "Ringo Starr plays Drums"];
  
  return array 
}

function johnLennonFacts(jLFacts){
  const lennonFacts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var facts = [];
  var i = 0; 
  while (i < jLFacts.length)
    {
      jLFacts[i] = jLFacts[i] + "!!!";
      i++;
    }
  return jLFacts
}

function iLoveTheBeatles(number){
  var love = []
  
  do {
    love.push("I love the Beatles!")
    number++
  }
  
  while (number < 15){
    return love
  }
}
  iLoveTheBeatles(8)
  
