const eenheden = ["mm", "cm", "dm", "m", "dam", "hm", "km"];

let dimensie = document.getElementById("dimselect");
let opgave = document.getElementById("opginput");
let opgeenheid = document.getElementById("opgeenheid");
let antwoord = document.getElementById("antwinput");
let antweenheid = document.getElementById("antweenheid");

function nieuw() {
    let dimvalue = dimensie.value;
    if (dimvalue == 0) {
        alert("Kies eerst een dimensie!")
    } else {
        let randomnmbr = Math.floor(Math.random() * 7)
        //console.log("randomnmbr = " + randomnmbr);
        //let opgeenh = eenheden[randomnmbr];
        //console.log(opgeenh)
        opgeenheid.innerHTML = eenheden[randomnmbr] + "<sup>" + dimvalue + "</sup>";
    }
}

function check() {
    alert("Hallo " + naam);
}

