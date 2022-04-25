document.body.setAttribute("id","body");
var Body = document.getElementById("body");
var btn = document.createElement("button");
var text = document.createTextNode("Crear");
btn.appendChild(text);
btn.setAttribute("id","crear");
btn.setAttribute("onclick","crearm();");
Body.appendChild(btn);
var crear = document.querySelector("#crear");

var crearm = () => {
    var elemento = prompt("Que elemento desea agregar?");
    var textelemento = prompt(`Que texto desea agregar al ${elemento}?`);
    var localelemento = prompt(`Quien sera el elemento padre de ${elemento}?`);
    var lugar = parseInt(prompt(`la posicion del ${localelemento}?(no menor a 1)`));
    var atributo = confirm(`desea agregar algun atributo al ${elemento}?`);
    var limite = document.getElementsByTagName(localelemento).length;
    if(atributo == true){
        atributo = prompt(`que atributo desea agregar al ${elemento}?`)
        var natributo = prompt(`nombre que desea agregar al ${atributo}?`)
        if(lugar <= limite && lugar >= 1){
            var la = document.getElementsByTagName(localelemento)[lugar-1];
            var elemtCreado = document.createElement(elemento);
            var textec = document.createTextNode(textelemento);
            elemtCreado.appendChild(textec);
            elemtCreado.setAttribute(atributo,natributo);
            la.appendChild(elemtCreado);
        }else{
            alert(`El ${localelemento} numero: ${lugar} no existe.`)
        }
    }else{
        if(lugar <= limite && lugar >= 1){
            var la = document.getElementsByTagName(localelemento)[lugar-1];
            var elemtCreado = document.createElement(elemento);
            var textec = document.createTextNode(textelemento);
            elemtCreado.appendChild(textec);
            la.appendChild(elemtCreado);
        }else{
            alert(`El ${localelemento} numero: ${lugar} no existe.`)
        }
    }
    
}

function suma(){
    var sumaelements = document.querySelectorAll(".v");
    var elementsuma = 0;

    for(i=0;i<sumaelements.length;i++){
        if(isNaN(parseFloat(sumaelements[i].value))){
            alert(`El valor es invalido o esta vacio ${i+1}, Intentelo nuevamente`);
            return false;
        }else{
            elementsuma += parseFloat(sumaelements[i].value);
        }
    }
    alert(`el resultado de la suma es: ${elementsuma}`);
}

function resta(){
    var restaelements = document.querySelectorAll(".v");
    var elementresta = parseFloat(document.querySelectorAll(".v")[0].value);;
    for(i=0;i<restaelements.length-1;i++){
        if(isNaN(parseFloat(restaelements[i+1].value))){
            alert(`hay un valor es invalido o esta vacio, Intentelo nuevamente`);
            return false;
        }else{
            elementresta -= parseFloat(restaelements[i+1].value);
        }
    }
    alert(`el resultado de la resta es: ${elementresta}`);
}

function multiplicacion(){
    var multiplicacionelements = document.querySelectorAll(".v");
    var elementmultiplicacion = 1;
    for(i=0;i<multiplicacionelements.length;i++){
        if(isNaN(parseFloat(multiplicacionelements[i].value))){
            alert(`El valor es invalido o esta vacio ${i+1}, Intentelo nuevamente`);
            return false;
        }else{
            elementmultiplicacion *= parseFloat(multiplicacionelements[i].value);
        }
    }
    alert(`el resultado de la multiplicacion es: ${elementmultiplicacion}`);
}

function division(){
    var divisionelements = document.querySelectorAll(".v");
    var elementdivision = parseFloat(document.querySelectorAll(".v")[0].value);
    for(i=0;i<divisionelements.length-1;i++){
        if(isNaN(parseFloat(divisionelements[i+1].value))){
            alert(`hay un valor es invalido o esta vacio, Intentelo nuevamente`);
            return false;
        }else{
            elementdivision /= parseFloat(divisionelements[i+1].value);
        }
    }
    alert(`el resultado de la division es: ${elementdivision}`);
}
function styleM(){
    var localelemento = prompt("Aque elemento desea modificar el estilo?")
    var lugar = parseInt(prompt(`la posicion del ${localelemento}?(no menor a 1)`));
    var limite = document.getElementsByTagName(localelemento).length;
    if(lugar <= limite && lugar >= 1){
        var la = document.getElementsByTagName(localelemento)[lugar-1];
        var tp = parseInt(prompt(`Que de tipo de estilo desea cambiar del ${localelemento}?
        1.-Cambiar color de texto.
        2.-Cambiar color de fondo.
        3.-Tamaño de texto.
        4.-Tamaño del borde.
        5.-Tipo de letra de texto.
        6.-Tamaño del elemento.`))
        if(tp == 1){
            var atributo = prompt(`que color de texto desea agregar al ${localelemento}?`)
            la.style.color = `${atributo}`;
        }
        else if(tp == 2){
            var atributo = prompt(`que color de fondo desea agregar al ${localelemento}?`)
            la.style.backgroundColor = `${atributo}`;
        }
        else if(tp == 3){
            var atributo = prompt(`que tamaño de texto desea agregar al ${localelemento}?`)
            la.style.fontSize = `${atributo}`;
        }
        else if(tp == 4){
            var atributo = prompt(`que tamaño de borde desea agregar al ${localelemento}?`)
            la.style.border = `${atributo}`;
        }
        else if(tp == 5){
            var atributo = prompt(`que tipo de letra desea agregar al ${localelemento}?`)
            la.style.fontFamily = `${atributo}`;
        }
        else if(tp == 6){
            var atributow = prompt(`que tamaño de largo desea agregar al ${localelemento}?`)
            var atributoh = prompt(`que tamaño de alto desea agregar al ${localelemento}?`)
            la.style.width = `${atributow}`;
            la.style.height = `${atributoh}`;
        }else{
            alert(`El ${tp} ingresado no es valido.`)
        }
    }else{
        alert(`El ${localelemento} numero: ${lugar} no existe.`)
    }
}
crear.addEventListener("click",function(){
    var testData1 = !!document.querySelector("#atributos");
    var testData2 = !!document.querySelector("#suma");
    var testData3 = !!document.querySelector("#resta");
    var testData4 = !!document.querySelector("#multiplicacion");
    var testData5 = !!document.querySelector("#division");
    var testData6 = !!document.querySelector("#estilos");
    var testData7 = !!document.getElementsByTagName("input");

    if(testData1 == true){
        document.querySelector("#atributos").setAttribute("onclick","atributos();");
    }
    if(testData2 == true){
        document.querySelector("#suma").setAttribute("onclick","suma();");
    }
    if(testData3 == true){
        document.querySelector("#resta").setAttribute("onclick","resta();");
    }
    if(testData4 == true){
        document.querySelector("#multiplicacion").setAttribute("onclick","multiplicacion();");
    }
    if(testData5 == true){
        document.querySelector("#division").setAttribute("onclick","division();");
    }
    if(testData6 == true){
        document.querySelector("#estilos").setAttribute("onclick","styleM();");
    }
    if(testData7 == true){
       var input = document.getElementsByTagName("input");
       for(i=0;i<input.length;i++){
        input[i].setAttribute("type","text");
       }
    }
})

function atributos(){
    var localelemento = prompt("Aque elemento desea agregar o modificar un atributo?")
    var lugar = parseInt(prompt(`la posicion del ${localelemento}?(no menor a 1)`));
    var limite = document.getElementsByTagName(localelemento).length;
    var atributo = prompt(`que atributo desea agregar al ${localelemento}?`)
    var natributo = prompt(`nombre que desea agregar al ${atributo}?`)
    if(lugar <= limite && lugar >= 1){
        var la = document.getElementsByTagName(localelemento)[lugar-1];
        la.setAttribute(atributo,natributo);
    }else{
        alert(`El ${localelemento} numero: ${lugar} no existe.`)
    }
}    