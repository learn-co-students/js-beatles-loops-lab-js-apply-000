/*var musicianArray = ["John Lennon","Paul McCartney","Ringo Star","George Harrison"];
var instrumentArray = ["Guitar","Bass Guitar","Lead Guitar","Drums"];*/
//var outputArray = []; for testing
/*const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]; DECLARED ALREADY IGNORE*/ 

function theBeatlesPlay(mArray,iArray)
{
  var counter = 0
  var musician = "";
  var instrument = "";
  var tempArray = [];
  
  for(var x=0;x < mArray.length; x++)
  {
    musician = mArray[x].toString();
    instrument = iArray[x].toString();
    tempArray[counter] = musician + " plays " + instrument;  
    counter++;
  }//musicianArray For Loop
  
  return tempArray;
 
}//theBeatlesPlay() end



function johnLennonFacts(factArray)
{
  var counter = 0;
  var tempArray = [];
  while(counter < factArray.length)
  {
    tempArray[counter] = factArray[counter].toString() + "!!!";
    counter++;
  }
  return tempArray;
}//johnlennonFacts() end

function iLoveTheBeatles(num)
{
    var counter = 0;
    var loveBeatles = [];
	do{
  		loveBeatles[counter] = "I love the Beatles!";
  		counter++;
  		num++;
    }while(num<15)
	return loveBeatles;
}