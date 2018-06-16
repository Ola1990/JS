//komentarz liniowy
//skrót klawiatury ctrl + /

//tekst
//tekst2

/*
wszystko co znajduje się między 
tymi znakami zostanie pominięte przy kompilacji
TO JEST KOMENTARZ BLOKOWY   */

//ZMIENNE!!!

/*zmienna zadeklarowana bez przypisanej wartości= undefined*/
var imie;

/*

dalsza część programu

*/

/*przypisanie wartości do wcześniej zdefiniowanej zmiennej- bez var*/
imie = "Ola"

/*deklaracja zmiennej wraz z przypisaniem wartości*/
var nazwisko = "Goźlińska";

console.log( imie + " "+ nazwisko );

//notacja camelCase
var oprocentowanieBankowe = 5;

//obliczenie / działanie
var wynik = 1520;

/*
tutaj dalsza część programu (np. 1000 lini kodu)
*/

//część kodu wykorzystująca wynik obliczenia z początku programu
console.log(wynik);

//FUNKCJE!!!!

//deklaracja funkcji

function showConsole () {
    console.log ("Jestem funkcją!!");
}
//wywołanie funkcji
showConsole();


//parametry funkcji
var imie = "Ola";
var nazwisko = "Goźlińska";

/*function wyswietl() {
    console.log(imie + " " + nazwisko);
}

wyswietl();*/

function wyswietl( _imie_, _nazwisko_) {
    console.log(_imie_ + " " + _nazwisko_);
}
wyswietl( imie, nazwisko );
