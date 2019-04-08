
function  EfectivaAnual ( result ){
    var porcenta = document.getElementById("porcentaje").value;
    var result = parseFloat(porcenta / 100 );
    console.log(result);
    var exponencial = (1 / 12);
    result = 1 + result;
    result = Math.pow(result , exponencial)-1;
    document.getElementById("ResultTasa").innerHTML = result;
    document.getElementById("ResultTasaText").innerHTML = "Tasa E-A";
    document.getElementById("TasaText").innerHTML = "Tasa N-M";
    console.log(result);
}

function NominalMensual (result){
    var porcenta = parseFloat(document.getElementById("porcentaje").value);
    var result = parseFloat(porcenta / 100 );
    console.log(result);
    result = result * 12;
    document.getElementById("ResultTasa").innerHTML = result ;
    document.getElementById("ResultTasaText").innerHTML = "Tasa N-M";
    document.getElementById("TasaText").innerHTML = "Tasa E-A" ;
    console.log(result);
}

//=========

function  EfectivaBimestral ( result ){
    var porcenta = document.getElementById("porcentajeB").value;
    var result = parseFloat(porcenta / 100 );
    console.log(result);
    var exponencial = (1 / 6);
    result = 1 + result;
    result = Math.pow(result , exponencial)-1;
    document.getElementById("ResultTasaB").innerHTML = result;
    document.getElementById("ResultTasaTextB").innerHTML = "Tasa E-B";
    document.getElementById("TasaTextB").innerHTML = "Tasa N-B";
    console.log(result);
}

function NominalBimestral (result){
    var porcenta = parseFloat(document.getElementById("porcentajeB").value);
    var result = parseFloat(porcenta / 100 );
    console.log(result);
    result = result * 6;
    document.getElementById("ResultTasaB").innerHTML = result ;
    document.getElementById("ResultTasaTextB").innerHTML = "Tasa N-B";
    document.getElementById("TasaTextB").innerHTML = "Tasa E-B";
    console.log(result);
}

//=============

function  EfectivaTrimestral ( result ){
    var porcenta = document.getElementById("porcentajeT").value;
    var result = parseFloat(porcenta / 100 );
    console.log(result);
    var exponencial = (1 / 4);
    result = 1 + result;
    result = Math.pow(result , exponencial)-1;
    document.getElementById("ResultTasaT").innerHTML = result;
    document.getElementById("ResultTasaTextT").innerHTML = "Tasa E-T";
    document.getElementById("TasaTextT").innerHTML = "Tasa N-T";
    console.log(result);
}

function NominalTrimestral (result){
    var porcenta = parseFloat(document.getElementById("porcentajeT").value);
    var result = parseFloat(porcenta / 100 );
    console.log(result);
    result = result * 4;
    document.getElementById("ResultTasaT").innerHTML = result ;
    document.getElementById("ResultTasaTextT").innerHTML = "Tasa N-T";
    document.getElementById("TasaTextT").innerHTML = "Tasa E-T";
    console.log(result);
}

//=============

function  EfectivaSemestral ( result ){
    var porcenta = document.getElementById("porcentajeS").value;
    var result = parseFloat(porcenta / 100 );
    console.log(result);
    var exponencial = (1 / 2);
    result = 1 + result;
    result = Math.pow(result , exponencial)-1;
    document.getElementById("ResultTasaS").innerHTML = result;
    document.getElementById("ResultTasaTextS").innerHTML = "Tasa E-S";
    document.getElementById("TasaTextS").innerHTML = "Tasa N-S";
    console.log(result);
}

function NominalSemestral (result){
    var porcenta = parseFloat(document.getElementById("porcentajeS").value);
    var result = parseFloat(porcenta / 100 );
    console.log(result);
    result = result * 2;
    document.getElementById("ResultTasaS").innerHTML = result ;
    document.getElementById("ResultTasaTextS").innerHTML = "Tasa N-S";
    document.getElementById("TasaTextS").innerHTML = "Tasa E-S";
    console.log(result);
}

//=============

function  EfectivalAnuall ( result ){
    var porcenta = document.getElementById("porcentajeA").value;
    var result = parseFloat(porcenta / 100 );
    console.log(result);
    var exponencial = (1 / 2);
    result = 1 + result;
    result = Math.pow(result , exponencial)-1;
    document.getElementById("ResultTasaA").innerHTML = result;
    document.getElementById("ResultTasaTextA").innerHTML = "Tasa E-A";
    document.getElementById("TasaTextA").innerHTML = "Tasa N-A";
    console.log(result);
}

function NominalAnual (result){
    var porcenta = parseFloat(document.getElementById("porcentajeA").value);
    var result = parseFloat(porcenta / 100 );
    console.log(result);
    result = result * 2;
    document.getElementById("ResultTasaA").innerHTML = result ;
    document.getElementById("ResultTasaTextA").innerHTML = "Tasa N-A";
    document.getElementById("TasaTextA").innerHTML = "Tasa E-A";
    console.log(result);
}