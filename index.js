// add solution here

function theBeatlesPlay( musicians, instruments ) {
  var result = new Array( 4 );
  for ( var i = 0; i < 4 ; i++ ) {
    result[ i ] = musicians[ i ] + " plays " + instruments[ i ];
  }
  return result;
}

function johnLennonFacts( facts ) {
  var result = [];
  while( facts.length > 0 ) result.unshift( facts.pop()+"!!!" );
  return result;
}

function iLoveTheBeatles( n ) {
  var result = [];
  do {
    result.push( "I love the Beatles!" );
    n++;
  } while ( n < 15 );
  return result;
}