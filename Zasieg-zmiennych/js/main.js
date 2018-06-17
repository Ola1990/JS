/*
// zasięg globalny- zmienne tworzone w tym zasięgu widoczne są w całym programie

var zmiennaGlobalna = "Czołem, jestem zmienną globalną!";

console.log(zmiennaGlobalna);


function pokazZmienne() {
    console.log("zmiennaGlobalna");
    
    var zmiennaLokalna = "A ja jestem zmienna lokalna i nie widać mnie w zasięgu globalnym";
}

pokazZmienne();
//nie będzie widoczna zmienna lokalna, bo jest console.log poza funkcją
console.log(zmiennaLokalna);

*/

//zmienne lokalna

var config = "localhost";

function update() {
    //jak nie zadeklarujemy zmiennej lokalnej (var) to funkcja będzie brała zmienną globalną (powyżej)
    var config = "newlocalhost";
    console.log("Zasięg lokalny zmienna config = " + config);
}

update();
console.log("Zasięg lokalny zmienna config = " + config);