var wzrostJanek = 163;
var wzrostAnia = 166;

if( wzrostJanek > wzrostAnia ) {
    console.log("Ania nie jest wyższa od Janka");
} else {
   console.log("Ania jest wyższa od Janka"); //wyświetli sie to
}

if(wzrostJanek > wzrostAnia) {
    console.log("Janek jest wyższy od Ani");
} else if(wzrostJanek == wzrostAnia) {
    console.log("Janek jest tego samego wzrostu");
} else {
    console.log("Janek jest niższy od Ani"); //wyświetli się to
}

//lub

function wiadomosc(str) {
    console.log(str);
}

if(wzrostJanek > wzrostAnia) {
    wiadomosc("Janek jest wyższy od Ani");
} else if(wzrostJanek == wzrostAnia) {
    wiadomosc("Janek jest tego samego wzrostu");
} else {
    wiadomosc("Janek jest niższy od Ani"); //wyświetli się to
}

//switch

var imie = "Ola"; 

switch(imie) {
    case "Marta":
        wiadomosc("Czołej, jestem Marta");
        break;
    case "Monika":
        wiadomosc("Czołem, jestem Monika");
        break;
    case "Ola":
        wiadomosc("Czołem jestem Ola");
        break;
    default:
        wiadomosc("Nie ma kto się z Tobą przywitać");
}