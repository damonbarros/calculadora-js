function insert(number)
{
    var numero = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML = numero + number;
}
function clean(){
document.getElementById('tela').innerHTML = "";
}
function alterna(){
var numero = document.getElementById('tela').innerHTML;
if (numero == +numero){
    document.getElementById('tela').innerHTML = -numero;
}if (numero == -numero){
document.getElementById('tela').innerHTML = +numero;
}

}
function calcular()
{
    var resultado = document.getElementById('tela').innerHTML;
    if(resultado)
    {
        document.getElementById('tela').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('tela').innerHTML = "Nada..."
    }
}
function porcem()
{
var numero = document.getElementById('tela').innerHTML;
 document.getElementById('tela').innerHTML = numero / 100;
}
function raiz()
{
var numero = document.getElementById('tela').innerHTML;
document.getElementById('tela').innerHTML = Math.sqrt(numero);
}