//stwórz funkcję, która będzie tworzyć dane o sobie- imie, nazwisko, wiek
//każde wywołanie tej funkcji będzie przypisywać do tablicy globalnej kolejny index
//stwórz drugą funkcję, która za pomocą pętli przejdzie po tablicy globalnej z danymi
// osób i wyświetli je w konsoli

//pusta tablica
var daneOsob = [];

//deklaracja funkcji generująca dane o sobie
function dodajDane (imie, nazwisko, wiek) {
    var osoba = imie + " " + nazwisko + " " + wiek;
    return osoba;
}

//deklaracja funkcji odpowiedzialnej za wyświetlenie tablicy globalnej daneOsob
function wyswietlDane() {
    daneOsob.forEach(function(element, index){ //index- numer na tablicy, element- dane w tablicy
        console.log(element);
    });
}


// dodaje nowo tworzone osoby do tablicy globalnej
var nowaOsoba = dodajDane( "Kasia", "Nowak", 26 );
daneOsob.push( nowaOsoba );

var nowaOsoba2 = dodajDane( "Marek", "Jurek", 55 );
daneOsob.push( nowaOsoba2 );

console.log( daneOsob);

wyswietlDane();
