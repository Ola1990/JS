var imiona = ["Agata", "Janek", "Justyna", "Jola", "Rafał"];

console.log(imiona);

console.log( imiona[0], imiona[2] );

//dodawanie elementów do tablicy na końcu

imiona[5] = "Marta";
imiona.push("Magda", "Ola");

// usuwanie ostatniego elementu tablicy

imiona.pop();

//dodawanie na początku tablicy
imiona.unshift("Adam", "Sławek");

//usuwanie z początku tablicy
imiona.shift();

//usuwanie ze środka tablicy
imiona.splice(2,2);  //od drugiego imienia usuwamy dwa imiona

console.log(imiona.length);  //wyświetla sume lelementów tablicy

//array.join() - rozbicie tablicy na ciąg znaków "+", "-", " ".

console.log(imiona.join("-")); 

//odwraca kolejność od tyłu do przodu

var noweImiona = imiona.reverse();
noweImiona.sort();  //alfabetycznie

console.log(noweImiona)