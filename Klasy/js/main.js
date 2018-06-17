class Ogloszenie {
    constructor( tytul, opis, miasto, telefon, stan ) {
        this.tytul = tytul;
        this.opis = opis;
        this.miasto = miasto;
        this.telefon = telefon;
        this.stan = stan;
    }
    
    pobierz() {
       var ogl = this.tytul + "\n" + this.opis + "\n" + this.miasto + "\n" + this.telefon + "\n" + this.stan;
        return ogl;
    }
}
var kolekcja = [];

var ogloszenieItem = new Ogloszenie("Sprzedam Kota", "Kilka dzwonów", "Szczecin", "123456789", "używany");
var ogloszenieTresc = ogloszenieItem.pobierz();
kolekcja.push( ogloszenieTresc );

var ogloszenieItem = new Ogloszenie("Wynajmę rower", "wynajem długoterminowy Rometa", "Płock", "456258789", "używany");
var ogloszenieTresc = ogloszenieItem.pobierz();
kolekcja.push(ogloszenieTresc);


console.log(kolekcja);