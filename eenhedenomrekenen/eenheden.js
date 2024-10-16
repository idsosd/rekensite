const eenheden = ["mm", "cm", "dm", "m", "dam", "hm", "km"];
//index             0     1     2    3     4      5     6
//eenheden[3] = "m"
let dimensie = document.getElementById("dimselect");
let opgave = document.getElementById("opginput");
let opgeenheid = document.getElementById("opgeenheid");
let antwoord = document.getElementById("antwinput");
let antweenheid = document.getElementById("antweenheid");

let hist = document.getElementById("history");

let berekendeantw = new Decimal(0.12345);

function nieuw() {
    antwoord.value = "";
    let dimvalue = dimensie.value;
    let randomnmbr = Math.floor(Math.random() * 7);
    let randomnmbr2 = Math.floor(Math.random() * 7);
    if (dimvalue == 1) {
        opgeenheid.innerHTML = eenheden[randomnmbr];
        antweenheid.innerHTML = eenheden[randomnmbr2]
    } else {
        opgeenheid.innerHTML = eenheden[randomnmbr] + "<sup>" + dimvalue + "</sup>";
        antweenheid.innerHTML = eenheden[randomnmbr2] + "<sup>" + dimvalue + "</sup>";
    }
    //nu nog een willekeurig getal in opgave
    let opgdec = new Decimal((Decimal.random() * 1000).toFixed(3));
    opgave.value = opgdec;

    let factor = new Decimal(Decimal.pow(10, dimvalue));
    console.log("factor = " + factor);
    let verschil;

    verschil = Decimal.abs(randomnmbr - randomnmbr2);
    let factortotaal = new Decimal(Decimal.pow(factor, verschil));
    console.log("factortotaal = " + factortotaal);
    
    if(randomnmbr < randomnmbr2) {
        berekendeantw = Decimal.div(opgdec, factortotaal);
    } else {
        berekendeantw = Decimal.mul(opgdec, factortotaal);
    }
    console.log("het juiste antwoord moet zijn: " + berekendeantw);
}

function check() {
    //nodig: opgave.value, die moet naar hist.innerHTML
    hist.innerHTML += opgave.value;
    hist.innerHTML += " " + opgeenheid.innerText; //hier moet opgeenheid komen
    hist.innerHTML += " = ";
    hist.innerHTML += antwoord.value;
    hist.innerHTML += " " + antweenheid.innerText; //hier moet antweenheid komen
    if(berekendeantw.equals(antwoord.value))
        hist.innerHTML += " GOED<br>";
    else
        hist.innerHTML += " FOUT<br>";
}

