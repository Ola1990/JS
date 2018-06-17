var liczba1 = 10;
var liczba2 = 3;

//operatory arytmetyczne

//mnożenie
console.log( liczba1 * liczba2);

//dzielenie
console.log( liczba1 / liczba2);

//dodawanie
console.log( liczba1 + liczba2);

//odejmowanie
console.log( liczba1 - liczba2);

//modulo
console.log( liczba1 % liczba2);

//inkremetacja
console.log( ++liczba1 );

//dekrementacja
console.log( --liczba2 );

//operatory przypisania

var liczba1 = 10;
var liczba2 = 3;

liczba1 +=10;
//liczba1 = liczba1 +10

liczba2 -= 1;
//liczba2 = liczba2-1

liczba1 *= 3;
// liczba1 = liczba1 * 3

liczba1 /= 2;
//liczba2 = liczba2 / 2

liczba1 %= 55;
//liczba1 = liczba1 % 55

console.log( liczba1 );

//operatory porównania

console.log( '10' === 10 );
console.log( 5 != 10 );
console.log( 10 > 2 );

// operatory logiczne


var zmienna1 = true;
var zmienna2 = true;

//iloczyn logiczny - oba wyrażenia muszą być true, żeby było true

console.log( zmienna1 && zmienna2 );

//suma lgiczna- choć jedno wyrażenie musi być true, żeby było true

var zmienna1 = true;
var zmienna2 = false;

console.log( zmienna1 || zmienna2 );

//negacja
console.log( zmienna1, !zmienna2 );

//operator warunkowy

var zmienna3 = (zmienna1 == true) ? "True" : "False";
console.log(zmienna3);