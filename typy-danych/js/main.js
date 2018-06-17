/*

typ liczbowy
*/

var wyplata = 5000;
var premia = 1200;
var wynagrodzenie = wyplata + premia;

console.log(wynagrodzenie);
console.log( typeof wynagrodzenie );

/*

typ string (łańcuch znaków)

*/

var wypłataSTR = "5000";
var premiaSTR = "1200";
var wynagrodzenieSTR = wypłataSTR + premiaSTR; //połączy liczby 50001200 lub
var wynagrodzenieSTR = parseInt ( wypłataSTR ) + parseInt ( premiaSTR );//doda, zamiast parseINT można postawić "+".

console.log(wynagrodzenieSTR);
console.log(typeof wynagrodzenieSTR);


/*

typ logiczny
true / false

*/

var czyDziałaKlima = true;  //przypisanie
if( czyDziałaKlima ==true ) {   //porównanie
 console.log("Działa, ale co z tego?");
} else {
    console.log ("Nie działa klima");
}


/*

typy specjalne
null/ undefined
*/

var data;
console.log(data);

var pustaZmienna = null;
console.log(pustaZmienna);

var str = "Zakupy robię w \"Biedrze\" i jest fajnie"; //cudzysłów w środku stringa\"\"
console.log(str);