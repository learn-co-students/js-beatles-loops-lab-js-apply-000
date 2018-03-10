function theBeatlesPlay(musicians,instruments){
var beatlesJobs=[];
for(var i = 0; i<musicians.length;i++){
  beatlesJobs.push(musicians[i]+ " plays "+ instruments[i]);
}
return beatlesJobs;
}
function johnLennonFacts(facts){
var johnGreat=[];
var counter=facts.length;
var i = 0;
while(i<facts.length){
    johnGreat.push(facts[i]+ "!!!");
    i++;
  }
return johnGreat;
}
function iLoveTheBeatles(number){
var loveLots=[];
do {
  loveLots.push("I love the Beatles!");
  number++;
}while(number<15);
return loveLots;
}
