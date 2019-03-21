// add solution here

function theBeatlesPlay(musicians, instruments){
  var mus_inst_arr=[]
  for(var i=0;i<musicians.length;i++){
    mus_inst_arr.push(musicians[i]+" plays "+instruments[i]);
  }
  return mus_inst_arr;
}

function johnLennonFacts(jl_facts){
  var jl_new_arr=[];
  var counter=jl_facts.length;
  while(counter>0){
    jl_new_arr.push(jl_facts[jl_facts.length-counter]+'!!!');
    counter-=1;
  }
  return jl_new_arr;
}

function iLoveTheBeatles(number){
  var new_arr=[];
  do{
    new_arr.push("I love the Beatles!");
    number+=1;
  }while(number<15);
  return new_arr;
}