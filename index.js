// add solution here
function theBeatlesPlay(musicians, instruments)
{
  var test=[];
  
  for(var counter=0; counter<(musicians.length);counter++)
  {
    test.push(musicians[counter]+ ' plays ' +instruments[counter]);
  }
  return test;
}
var musicians=['John Lennon', 'Paul McCartney','George Harrison','Ringo Starr'];
var instruments=['Guitar','Bass Guitar','Lead Guitar','Drums']

theBeatlesPlay(musicians,instruments);


function johnLennonFacts(facts) 
{
  var jlfacts=[];
  var w_counter=0;
  var ex='!!!';
  while( w_counter < (facts.length) )
  {
   //ex=ex.concat('!');//
    
    jlfacts.push((facts[w_counter])+ex);
    w_counter=w_counter+1;
  }
  return jlfacts;
}     


var facts = [
  'He was the last Beatle to learn to drive',
  'He was never a vegetarian',
  'He was a choir boy and boy scout',
  'He hated the sound of his own voice'];
  
johnLennonFacts(facts);

function iLoveTheBeatles(beat_count) {
  var beat_diff = 15 - beat_count;
  var repeat=[];
  do {
      repeat.push ('I love the Beatles!');
      beat_diff = (beat_diff - 1);
     }
  while(beat_diff > 0);
  return repeat;
}

beat_count=7;
iLoveTheBeatles(beat_count);
