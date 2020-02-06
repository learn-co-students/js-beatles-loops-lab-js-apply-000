function theBeatlesPlay(musicians,instruments){
  musicians=["John Lennon","Paul McCartney","George Harrison","Ringo Starr"];
  instruments=["Guitar","Bass Guitar","Lead Guitar","Drums"];
  var array = [];
  for(let i=0; i<musicians.length;i++){
    array[i]= musicians[i] + " plays " + instruments[i];
  }
  return array;
  
}

function johnLennonFacts(facts){
  let i = 0;
  while(i<facts.length){
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(Number){
  var array=[];
  let i=0;
  do{
    array[i]="I love the Beatles!";
    Number+= 1;
    i++;
  }while (Number<15);
  return array;
}