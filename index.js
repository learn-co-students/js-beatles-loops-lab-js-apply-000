function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++){
    array.push(musicians[i] + " plays " + instruments[i])

  }
  return array;
}

function johnLennonFacts(facts) {
  //var facts = [
  //"He was the last Beatle to learn to drive",
  //"He was never a vegetarian",
//  "He was a choir boy and boy scout",
  //"He hated the sound of his own voice"
//];
  var array = [];
  var i = 0;
  while (i < facts.length) {
   array.push(facts[i] + "!!!");
   //array[i] = facts[i] +"!!!";
   i++;
 }
   return array;

 }


 //alters the array when called
 //function johnLennonFacts() {
   //var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout",
   //"He hated the sound of his own voice"];
   //var newFacts = [];
   //var i = 0;
     //while (i < facts.length) {
        //newFacts[i] = facts[i] +"!!!";
        //facts[i] + "!!!";
      //  newFacts.push(facts[i] + "!!!";)
      //i++;
     //}
     //return newFacts;
     //console.log(facts);
   //}

  //calls the function to alter the array
  //johnLennonFacts(facts)

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
  number +=1
} while (number < 15);
return array;
}
