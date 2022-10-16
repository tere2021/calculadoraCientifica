let display = document.getElementById("screen");
let buttons = document.getElementsByClassName("btn");
let memoria = []; 
let indice = 0;


  Array.prototype.forEach.call(buttons, (button) => {
    button.addEventListener("click", () =>{
      if (button.textContent != "=" && button.textContent != "AC" && 
            button.textContent != "*" && button.textContent != "/" && 
            button.textContent != "√" && button.textContent != "³√" && 
            button.textContent != "ⁿ√" && button.textContent != "+" && 
            button.textContent != "%" && button.textContent != "=" && 
            button.textContent != "-" && button.textContent != "sin" && 
            button.textContent != "cos" && button.textContent != "tg" && 
            button.textContent != "log" && button.textContent != "ln" && 
            button.textContent != "X²" && button.textContent != "X³" && 
            button.textContent != "X!" && button.textContent != "𝝅" && 
            button.textContent != "MR" && button.textContent != "Xⁿ"
            && button.textContent != "e") {
           
              display.value += button.textContent;
             
      } else if (button.textContent === "=") {
        igual();
      } else if (button.textContent === "AC") {
        clear();
      } else if (button.textContent === "*") {
        producto();
      } else if (button.textContent === "/") {
        division();
      } else if (button.textContent === "+") {
        suma();
      } else if (button.textContent === "-") {
        resta();
      } else if (button.textContent === "%") {
        porcentaje();
      } else if (button.textContent === "𝝅") {
        pi();
      } else if (button.textContent === "√") {
        raizCuadrada();
      } else if (button.textContent === "³√") {
        raizCubica();
      } else if (button.textContent === "ⁿ√") {
        operacion= button.textContent;
        raizN();
      } else if (button.textContent === "X²") {
        potencia();
      } else if (button.textContent === "X³") {
        potencia3();
      } else if (button.textContent === "Xⁿ") {
        potenciaN();
      } else if (button.textContent === "sin") {
        sin();
      } else if (button.textContent === "cos") {
        cos();
      } else if (button.textContent === "tg") {
        tan();
      } else if (button.textContent === "log") {
        log();
      } else if (button.textContent === "ln") {
        ln();
      } else if (button.textContent === "e") {
        exponente();
      } else if (button.textContent === "X!") {
        factorial();
      } else if (button.textContent === "MR") {
        almacenarEnmemoria();
      }
    });
});

const validar = (num) =>{
  if(num < 0)
  { return true;}
  else {return false};
}

let potenciaN=()=>  display.value += "Xⁿ";

let raizN=() => display.value += "ⁿ√";

let syntaxError=()=> {
  if (eval(display.value) === SyntaxError || eval(display.value) === ReferenceError || eval(display.value) === TypeError) {
    display.value = "Syntax Error";
  }
}
    



let  igual=() => {
  let operacion = (display.value).includes('Xⁿ');
  if ((display.value).indexOf("ⁿ") > -1) {
        let base = (display.value).slice(0, (display.value).indexOf("ⁿ")-2);
        let exponente = (display.value).slice((display.value).indexOf("ⁿ") + 2);
        if (operacion) { /* calculo de potencia indice n */
          display.value = eval(Math.pow( base, exponente));
        } else {/* calculo de raiz indice n(positiva y negativa) */
          let verificacion = validar(exponente);
          (verificacion.valueOf)?display.value =eval(Math.pow(base, 1/(exponente))):display.value = eval(1/(Math.pow(base, 1/exponente)));      
        }
  } else{
    display.value = eval(display.value);
    syntaxError();
  }
}

let clear=() => display.value = "";

let producto=() => display.value += "*";

let division=()=> display.value +=  "/";

let suma=() => display.value +=  "+";  

let resta=()=> display.value +=  "-";

let factorial=() => {
  if (display.value === 0) {
    display.value = "1";
  } else if (display.value < 0) {
    display.value = "undefined";
  } else {
    let calculoFactorial = 1;
    for(let i = display.value; i>0; i--){
      calculoFactorial *= i;        
    }
    display.value = calculoFactorial;
  }
}

let pi=() => display.value = Math.PI;

let potencia=()=>display.value = Math.pow(display.value,2);

let potencia3=()=>display.value = Math.pow(display.value,3);

let  raizCuadrada=() => display.value = Math.sqrt(display.value);

let raizCubica=() => display.value = Math.cbrt(display.value);

let porcentaje=()=> display.value = display.value / 100;

let sin=() => display.value = Math.sin(display.value);

let cos=() => display.value = Math.cos(display.value);

let tg=()=> display.value = Math.tan(display.value);

let log=() => display.value = Math.log10(display.value);

let ln=() => display.value = Math.log(display.value);

let exponente=()=>   display.value = Math.exp(display.value); 

let almacenarEnmemoria = () => {
  memoria[indice] = display.value;
  indice ++;  
}

clear();