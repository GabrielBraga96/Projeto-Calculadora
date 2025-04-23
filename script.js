function appendValue (valor){
    document.getElementById('display').value += valor;
}

function clearDisplay(){
    document.getElementById('display').value = '';
}

function back(){
    var resultado = document.getElementById('display').value;
    document.getElementById('display').value = resultado.substring(0, resultado.length -1);
}

function calculate(){
    var resultado = document.getElementById('display').value;
    if(resultado){
        document.getElementById('display').value = eval(resultado);
    }else{
        document.getElementById('display').value = ''
    }
}