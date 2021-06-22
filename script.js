// LIMPAR

const campoNome = document.getElementById("name");
const campoLeito = document.getElementById("leito");
const btnLimpar = document.getElementById("limpar");

btnLimpar.addEventListener("click", function(){
    campoNome.value = "";
    campoLeito.value = "";
});