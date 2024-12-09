let oud = document.getElementById("input_oud");
let type = document.getElementById("select_type");
let perc = document.getElementById("input_perc");
let factor = document.getElementById("input_factor");
let nieuw = document.getElementById("input_nieuw");
let deler = document.getElementById("input_deler");

function inputOud(){
    if(oud.value != ""){
        oud.classList.replace("is-invalid", "is-valid");
    } else {
        oud.classList.replace("is-valid", "is-invalid");
    }
}

function losop(){
    alert("de knop werkt");
}
