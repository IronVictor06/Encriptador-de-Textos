const textArea = document.querySelector(".textArea");
const mensagem = document.querySelector(".mensagem");

function btnCriptografar(){
    const textoEncriptado = criptografar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function btnDescriptografar(){
    const textoDesencriptado = descriptografar(mensagem.value);
    textArea.value = textoDesencriptado;
    mensagem.value = '';
}

function btnCopiar(){
    navigator.clipboard.writeText(mensagem.value);
}


function criptografar(stringCriptografada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringCriptografada = stringCriptografada.toLowerCase();
    for( let i=0; i < matrizCodigo.length; i++){
        if(stringCriptografada.includes(matrizCodigo[i][0])){
            stringCriptografada = stringCriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringCriptografada;
}

function descriptografar(stringDescriptografada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDescriptografada = stringDescriptografada.toLowerCase();
    for( let i=0; i < matrizCodigo.length; i++){
        if(stringDescriptografada.includes(matrizCodigo[i][1])){
            stringDescriptografada = stringDescriptografada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDescriptografada;
}
