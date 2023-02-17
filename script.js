display = document.getElementById("display")
console.log(display.value)

function btn(tipo,valor){
  if (tipo === 'acao') {

    if(valor=='C'){
      display.value=' '
    }
    
    if(valor=='+' ||valor=='-' ||valor=='*' ||valor=='/'){
      display.value+=valor
    }

    if(valor==='='){
      let resultado = eval(display.value)
      display.value=resultado
    }

  }

  if (tipo == 'num') {
    display.value+=valor
  }
}