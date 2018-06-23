class Komentarz {
    constructor(uzytkownik, tresc, wyswietlony){
        this.uzytkownik = uzytkownik;
        this.tresc = tresc;
        this.wyswietlony = wyswietlony;
    }
    
    wyswietl() {
        if(this.wyswietlony == true) {
          console.log( "Komentarz: \n" + this.uzytkownik + " \n" + this.tresc );  
        }else {
           console.log("Komentarz zablokowany"); 
        }
    }
}

var dodanyKomentarz = new Komentarz( "Magda", "bardzo fajny tekst", true);
dodanyKomentarz.wyswietl();

var nowyKomentarz = new Komentarz("Marcin", "spieprzaj dziadu", false);
nowyKomentarz.wyswietl();