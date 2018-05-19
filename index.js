function theBeatlesPlay(musicians, instruments){
  let sentences=[];
  for(let i=0;musicians.length>i; i++){
    let sentence="";
    sentence+=musicians[i]+" plays "+instruments[i];
    sentences.push(sentence);
  }
  return sentences;
}

  function johnLennonFacts(arrayArgs){
    let i=0;
    let arrayWithEx=[];
    while(i<arrayArgs.length){
      arrayWithEx.push(arrayArgs[i]+"!!!");
      i++;
    }
    return arrayWithEx;
  }
  
  function iLoveTheBeatles(n){
    let loveBeatlesArr=[]; 
    let i=0;
    do{
      loveBeatlesArr.push("I love the Beatles!");
      if(n>15)return loveBeatlesArr;
      i++;
    }while(i<=n);
    return loveBeatlesArr;
  }