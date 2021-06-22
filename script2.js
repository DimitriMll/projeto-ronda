// QUESTIONS

const btnYes = document.getElementById("btnyes");
const btnNo = document.getElementById("btnno");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");

function removeSelect(entidade, classe) {
    entidade.classList.remove(classe);
}

function aplicaSelect(entidade, classe) {
    entidade.classList.add(classe);
}

function clickedYes() {
    console.log("Button Yes");
    // add selected yes 
    // remove selected no    
    aplicaSelect(btnYes, "selected");
    removeSelect(btnNo, "selected");
}

function clickedNo() {
    console.log("Button No");
    // add selected no 
    // remove selected yes
    aplicaSelect(btnNo, "selected");
    removeSelect(btnYes, "selected");
};

function clicked1() {
    console.log("1");
    // add nota 1
    // remove nota 2, 3, 4, 5
    aplicaSelect(btn1, "notaLeft");
    removeSelect(btn2, "nota");
    removeSelect(btn3, "nota");
    removeSelect(btn4, "nota");
    removeSelect(btn5, "notaRight");
};

function clicked2() {
    console.log("2");
    // add nota 2
    // remove nota 1, 3, 4, 5
    aplicaSelect(btn2, "nota");
    removeSelect(btn1, "notaLeft");
    removeSelect(btn3, "nota");
    removeSelect(btn4, "nota");
    removeSelect(btn5, "notaRight");
};

function clicked3() {
    console.log("3");
    // add nota 3
    // remove nota 1, 2, 4, 5
    aplicaSelect(btn3, "nota");
    removeSelect(btn1, "notaLeft");
    removeSelect(btn2, "nota");
    removeSelect(btn4, "nota");
    removeSelect(btn5, "notaRight");
};

function clicked4() {
    console.log("4");
    // add nota 4
    // remove nota 1, 2, 3, 5
    aplicaSelect(btn4, "nota");
    removeSelect(btn1, "notaLeft");
    removeSelect(btn2, "nota");
    removeSelect(btn3, "nota");
    removeSelect(btn5, "notaRight");
};

function clicked5() {
    console.log("5");
    // add nota 5
    // remove nota 1, 2, 3, 4
    aplicaSelect(btn5, "notaRight");
    removeSelect(btn1, "notaLeft");
    removeSelect(btn2, "nota");
    removeSelect(btn3, "nota");
    removeSelect(btn4, "nota");
};