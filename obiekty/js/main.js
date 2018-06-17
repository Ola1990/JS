var ogloszenie = {
    tytul: "Poszukiwany Front End Developer",
    opis: "Wymagane doświadczenie minimum 5lat",
    data: "2018-06-17",
    wyswietlone: false,
    wyswietl: function(){
        if( this.wyswietlone == true){
            console.log( this.tytul + "\n" + this.opis + "\n" + this.data);
        } else {
            console.log("Brak ogłoszenia");
        }
    }
}
ogloszenie.wyswietlone = true;
ogloszenie.tytul = "Sprzedam Opla"
ogloszenie.opis = "Świeżynka od Niemca"

ogloszenie.wyswietl();
