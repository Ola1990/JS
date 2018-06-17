/*var liczba1 = 10;
var liczba2 = 5;

function suma( l1, l2 ) {
    var wynik = l1 + l2;
    console.log(wynik);
}
suma (1,15);
suma(5,5);
suma(20,21);*/
//-----------

function suma( l1, l2 ) {
    var wynik = l1 + l2;
    return wynik;
    //exit
    console.log( "Kod poniżej słówka return nigdy się nie wykona");
}
/*
aby przypisać do zmiennej wynik działania funkcji należy użyć słówka return wewtnątrz funkcji
*/

var wynikDzialania = suma(1,15);
alert( wynikDzialania );
console.log( wynikDzialania );