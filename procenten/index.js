let oud = document.getElementById("input_oud");
let type = document.getElementById("select_type");
let perc = document.getElementById("input_perc");
let factor = document.getElementById("input_factor");
let nieuw = document.getElementById("input_nieuw");
let deler = document.getElementById("input_deler");

function inputOud(){
    //check of er wat ingevuld is in het element oud '!=' betekent 'NIET gelijk aan'
    if(oud.value != ""){
        oud.classList.replace("is-invalid", "is-valid");
    } else {
        oud.classList.replace("is-valid", "is-invalid");
    }
}

function calcfactor(soort, percentage){
    let factoroutput = 0;
    if(soort == 1){
        //type = 'van'
        factoroutput = percentage/100;
    } else if (soort == 2){
        //type = 'toename'
        factoroutput = 1 + percentage/100
    } else {
        //type = 'afname'
        factoroutput = 1 - percentage/100
    }
    return factoroutput;
}

function losop(){
    if(oud.value != "" && type.value != "" && perc.value != "")
    {
        //de factor uitrekenen
        factor.value = calcfactor(type.value, perc.value)
        //met deze factor nieuw uitrekenen
        nieuw.value = oud.value * factor.value;
    } else if (nieuw.value != "" && type.value != "" && perc.value != "")
    {
        //de factor uitrekenen
        factor.value = calcfactor(type.value, perc.value)
        //met deze factor oud uitrekenen
        oud.value = nieuw.value / factor.value;
    } else 
    {
        //de factor uitrekenen
        factor.value = nieuw.value / oud.value;
        //uit de factor de toe- of afname halen
        if(factor.value > 1){
            //er is dus sprake van toename
            type.value = 2;
            perc.value = (factor.value - 1) * 100;
        } else if (factor.value < 1){
            //er is sprake van afname
            type.value = 3;
            perc.value = (1 - factor.value) * 100;
        } else {
            //de factor is dus 1, dus geen toe- of afname
            type.value = 1;
            perc.value = 100;
        }
    }
}
