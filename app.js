var operandos = {
operador:"",
operadorAnt:"",
numAnt:0
}

var display=document.getElementById("display")

var calculadora={
    init: function(){
var self=this
    var display = document.getElementById('display');
var mas = document.getElementById('mas');
var menos = document.getElementById('menos');
var por = document.getElementById('por');
var dividido = document.getElementById('dividido');
var punto = document.getElementById('punto');
var igual = document.getElementById('igual');
var on = document.getElementById('on');
var sign = document.getElementById('sign');
var raiz = document.getElementById('raiz');
var uno = document.getElementById('1');
var dos = document.getElementById('2');
var tres = document.getElementById('3');
var cuatro = document.getElementById('4');
var cinco = document.getElementById('5');
var seis = document.getElementById('6');
var siete = document.getElementById('7');
var ocho = document.getElementById('8');
var nueve = document.getElementById('9');
var cero = document.getElementById('0');


cero.addEventListener("click",function(){
    self.numero("0")
  
})





//

       //Evento clic para los numeros //
    
cero.addEventListener("mousedown", function(){
    cero.setAtribute("style", "transform:scale(0.90,0.90)")
})
cero.addEventListener("mouseout", function(){
    cero.setAtribute("style", "transform:scale(0.50,0.50)")
})

uno.addEventListener("click",function(){
    self.numero("1")

})
uno.addEventListener("mousedown",function(){
    uno.setAtribute("style","transform:scale:(0.90,0.90)")
})
uno.addEventListener("mouseout",function(){
    uno.setAtribute("style","transform:scale:(1,1)")
})
uno.addEventListener("click",function(){
    self.numero("1")

})
dos.addEventListener("mousedown",function(){
    uno.setAtribute("style","transform:scale:(0.90,0.90)")
})
dos.addEventListener("mouseout",function(){
    uno.setAtribute("style","transform:scale:(1,1)")
})
dos.addEventListener("click",function(){
    self.numero("2")

})
tres.addEventListener("mousedown",function(){
    uno.setAtribute("style","transform:scale:(0.90,0.90)")
})
tres.addEventListener("mouseout",function(){
    uno.setAtribute("style","transform:scale:(1,1)")
})
tres.addEventListener("click",function(){
    self.numero("3")

})
cuatro.addEventListener("mousedown",function(){
    uno.setAtribute("style","transform:scale:(0.90,0.90)")
})
cuatro.addEventListener("mouseout",function(){
    uno.setAtribute("style","transform:scale:(1,1)")
})
cuatro.addEventListener("click",function(){
    self.numero("4")

})
cinco.addEventListener("mousedown",function(){
    uno.setAtribute("style","transform:scale:(0.90,0.90)")
})
cinco.addEventListener("mouseout",function(){
    uno.setAtribute("style","transform:scale:(1,1)")
})
cinco.addEventListener("click",function(){
    self.numero("5")

})
seis.addEventListener("mousedown",function(){
    uno.setAtribute("style","transform:scale:(0.90,0.90)")
})
seis.addEventListener("mouseout",function(){
    uno.setAtribute("style","transform:scale:(1,1)")
})
seis.addEventListener("click",function(){
    self.numero("6")

})
siete.addEventListener("mousedown",function(){
    uno.setAtribute("style","transform:scale:(0.90,0.90)")
})
siete.addEventListener("mouseout",function(){
    uno.setAtribute("style","transform:scale:(1,1)")
})
siete.addEventListener("click",function(){
    self.numero("7")

})
ocho.addEventListener("mousedown",function(){
    uno.setAtribute("style","transform:scale:(0.90,0.90)")
})
ocho.addEventListener("mouseout",function(){
    uno.setAtribute("style","transform:scale:(1,1)")
})
ocho.addEventListener("click",function(){
    self.numero("8")

})
nueve.addEventListener("mousedown",function(){
    uno.setAtribute("style","transform:scale:(0.90,0.90)")
})
nueve.addEventListener("mouseout",function(){
    uno.setAtribute("style","transform:scale:(1,1)")
})
nueve.addEventListener("click",function(){
    self.numero("9")

})
punto.addEventListener("mousedown",function(){
    uno.setAtribute("style","transform:scale:(0.90,0.90)")
})
punto.addEventListener("mouseout",function(){
    punto.setAtribute("style","transform:scale:(1,1)")
})
punto.addEventListener("click",function(){
self.numero(".")

})

on.addEventListener("click",function(){
display.innerHTML="0"
operandos.numAnt = 0
operandos.operador=""
operandos.operadorAnt=""

})

on.addEventListener("mousedown",function(){
    on.setAtribute("style","transform:scale:(0.90,0.90)")
})
on.addEventListener("mouseout",function(){
    on.setAtribute("style","transform:scale:(1.1)")
})

sign.addEventListener("click",function(){
    self.signo("")

})
sign.addEventListener("mousedown",function(){
    sign.setAtribute("style","transform:scale:(0.90,0.90)")
})
sign.addEventListener("mouseout",function(){
    sign.setAtribute("style","transform:scale:(1.1)")
})


mas.addEventListener("click",function()
{
 self.operandos("+")
})
mas.addEventListener("mousedown",function(){
    mas.setAtribute("style" ,"transform:scale:(0.90,0.90)")

})
mas.addEventListener("mouseout",function(){
    mas.setAtribute("style","transform:scale:(1.1)")
})
menos.addEventListener("click",function()
{
 self.operandos("-")
})
menos.addEventListener("mousedown",function(){
    menos.setAtribute("style" ,"transform:scale:(0.90,0.90)")

})
menos.addEventListener("mouseout",function(){
    menos.setAtribute("style","transform:scale:(1.1)")
})
por.addEventListener("click",function()
{
 self.operandos("*")
})
por.addEventListener("mousedown",function(){
    menos.setAtribute("style" ,"transform:scale:(0.90,0.90)")

})
por.addEventListener("mouseout",function(){
    menos.setAtribute("style","transform:scale:(1.1)")
})

dividido.addEventListener("click",function()
{
 self.operandos("/")
})
dividido.addEventListener("mousedown",function(){
    dividido.setAtribute("style" ,"transform:scale:(0.90,0.90)")

})
dividido.addEventListener("mouseout",function(){
    menos.setAtribute("style","transform:scale:(1.1)")
})

igual.addEventListener("click",function()
{
 self.operandos("=")
})
igual.addEventListener("mousedown",function(){
    igual.setAtribute("style" ,"transform:scale:(0.90,0.90)")

})
igual.addEventListener("mouseout",function(){
    menos.setAtribute("style","transform:scale:(1.1)")
})

    },

numero: function(n){
    var num = display.innerHTML
    var self = this
    var limite = 8
 
    if(num.indexOf(".") != -1){
     if (n =="."){
         n = ""
     }   
     limite = 9
    } 
    
    if (num=="0" && n != "."){
        num = ""
    }
    if (operandos.operador.length > 0){
        num = ""
        operandos.operadorAnt = operandos.operador
        operandos.numAnt = parseFloat(display.innerHTML)
        operandos.operador = ""
    }
    if (display.innerHTML.length < limite) {
        display.innerHTML = num + n
    }
     
    
 },
 
 signo: function()  {
     var cadena = display.innerHTML
     var i = cadena.indexOf("-")
     if (i == -1){
         display.innerHTML = "-" + cadena
     } else{
         cadena = cadena.substring(1,cadena.length)
         display.innerHTML = cadena
     }
 },
 operandos: function(op){
     switch(op){
         case "+":   
                     operandos.operador = op 
                     switch(operandos.operadorAnt) {
                         case "+": 
                                     operandos.numAnt = operandos.numAnt + parseFloat(display.innerHTML)
                                     display.innerHTML = operandos.numAnt
                                     operandos.operadorAnt = operandos.operador
                                     acomodarDisplay()
                                     break
                          case "-": 
                                     operandos.numAnt = operandos.numAnt - parseFloat(display.innerHTML)
                                     display.innerHTML = operandos.numAnt
                                     operandos.operadorAnt = operandos.operador
                                     acomodarDisplay()
                                     break
                         case "*": 
                                     operandos.numAnt = operandos.numAnt * parseFloat(display.innerHTML)
                                     display.innerHTML = operandos.numAnt
                                     operandos.operadorAnt = operandos.operador
                                     acomodarDisplay()
                                     break
                         case "/": 
                                     operandos.numAnt = operandos.numAnt / parseFloat(display.innerHTML)
                                     display.innerHTML = operandos.numAnt
                                     operandos.operadorAnt = operandos.operador
                                     acomodarDisplay()
                                     break
                     }                     
                     
                     break
         case "-": 
                    operandos.operador = op                       
                     switch(operandos.operadorAnt) {
                         case "+": 
                                     operandos.numAnt = operandos.numAnt + parseFloat(display.innerHTML)
                                     display.innerHTML = operandos.numAnt
                                     operandos.operadorAnt = operandos.operador
                                     acomodarDisplay()
                                     break
                          case "-": 
                                     operandos.numAnt = operandos.numAnt - parseFloat(display.innerHTML)
                                     display.innerHTML = operandos.numAnt
                                     operandos.operadorAnt = operandos.operador
                                     acomodarDisplay()
                                     break
                         case "*": 
                                     operandos.numAnt = operandos.numAnt * parseFloat(display.innerHTML)
                                     display.innerHTML = operandos.numAnt
                                     operandos.operadorAnt = operandos.operador
                                     acomodarDisplay()
                                     break
                         case "/": 
                                     operandos.numAnt = operandos.numAnt / parseFloat(display.innerHTML)
                                     display.innerHTML = operandos.numAnt
                                     operandos.operadorAnt = operandos.operador
                                     acomodarDisplay()
                                     break
                     }    
                     
                     break
         case "*": 
                     operandos.operador = op                       
                     switch(operandos.operadorAnt) {
                         case "+": 
                                     operandos.numAnt = operandos.numAnt + parseFloat(display.innerHTML)
                                     display.innerHTML = operandos.numAnt
                                     operandos.operadorAnt = operandos.operador
                                     acomodarDisplay()
                                     break
                          case "-": 
                                     operandos.numAnt = operandos.numAnt - parseFloat(display.innerHTML)
                                     display.innerHTML = operandos.numAnt
                                     operandos.operadorAnt = operandos.operador
                                     acomodarDisplay()
                                     break
                         case "*": 
                                     operandos.numAnt = operandos.numAnt * parseFloat(display.innerHTML)
                                     display.innerHTML = operandos.numAnt
                                     operandos.operadorAnt = operandos.operador
                                     acomodarDisplay()
                                     break
                         case "/": 
                                     operandos.numAnt = operandos.numAnt / parseFloat(display.innerHTML)
                                     display.innerHTML = operandos.numAnt
                                     operandos.operadorAnt = operandos.operador
                                     acomodarDisplay()
                                     break
                     }    
                    
                     break
         case "/": 
                     operandos.operador = op                       
                     if (operandos.operadorAnt.length > 0){
                         operandos.numAnt = operandos.numAnt / parseFloat(display.innerHTML)
                         display.innerHTML = operandos.numAnt
                         acomodarDisplay()
                     }  
                     
                     break
          case "=":  
                     switch(operandos.operadorAnt){
                         case "+" : 
                                     operandos.numAnt += parseFloat(display.innerHTML) 
                                     break
                         case "-" : 
                                     operandos.numAnt -= parseFloat(display.innerHTML) 
                                     break
                          case "/" : 
                                     operandos.numAnt /= parseFloat(display.innerHTML) 
                                     break
                          case "*" : 
                                     operandos.numAnt *= parseFloat(display.innerHTML) 
                                     break
                     }
                     display.innerHTML = operandos.numAnt
                     acomodarDisplay()
                     operandos.operadorAnt = ""
                     operandos.operador = ""
                     break
     }

 }
}
function acomodarDisplay(){
 var cadena = display.innerHTML
 var numero = parseFloat(cadena)
 limite = 8
 if (cadena.indexOf(".") != -1){
     limite++
 }
 if (cadena.indexOf("-")!= -1){
     limite++
 }
 
 if (cadena.length > limite){
     if (numero - numero.toFixed(0) == 0){
         display.innerHTML = numero
     }
      else {
          display.innerHTML = parseFloat(cadena).toPrecision(8)
      }
     
 }
}

calculadora.init()








