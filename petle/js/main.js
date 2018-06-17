//petla for

for( var i = 1; i < 20; i++ ) {
    console.log( i );
}


//----------


var samochody = ["Opel", "Audi", "Honda", "BMW", "Fiat 126p", "Żuk"];

for( var i = 0; i < samochody.length; i++ ) {
    console.log( samochody[i] );
}


//-----------


//pętla forEach
var samochody = ["Opel", "Audi", "Honda", "BMW", "Fiat 126p", "Żuk"];

samochody.forEach( function( elementTablicy, indexTablicy ) {
    console.log( elementTablicy + "=====" + indexTablicy );
});

//pętla while

var iterator = 15;
while( iterator < 12 ) {
    console.log("iterator nr" + iterator);
    iterator++;
}

do {
    console.log("DO WHILE iteracja nr" + iterator);
    iterator++;
}while(iterator < 12 );


//przerywanie pętli, break- kończy działanie pętli

for( var i = 1; i < 40; i++ ) {
    if( i > 15) {
        break;
    }
    console.log("iteracja nr" + i);
}

//continue- opuszcza bieżącą iteracje, ale przechodzi do następnej

for( var i = 1; i < 26; i++ ) {
    if(i % 2 == 0) {
        continue;
    }
    console.log("iteracja nr" + i);
}