/****** INICIO - Determinando o tipo de dado em cada input ******/

/* ...Função para o tipo de dado ser apenas 0 e 1 (binario), de acordo com a tabela de keycode */
  function type_binario(e){
    var tecla=(window.event)?event.keyCode:e.which;
    if((tecla==48 || tecla==49)) return true;
    else{
      return false;
    }
  }

/* ...Função para o tipo de dado ser decimal: 0123456789, de acordo com a tabela de keycode */
  function type_decimal(e){
    var tecla=(window.event)?event.keyCode:e.which;
    if((tecla >=48 && tecla <=57)) return true;
    else{
      return false;
    }
  }

/* ...Função para o tipo de dado ser octal: 01234567, de acordo com a tabela de keycode */
  function type_octal(e){
    var tecla=(window.event)?event.keyCode:e.which;
    if((tecla >=48 && tecla <=55)) return true;
    else{
      return false;
    }
  }

/* ...Função p/ hexadecimal: 0123456789 e abcdef e ABCDEF, de acordo com a tabela de keycode */
  function type_hexadecimal(e){
    var tecla=(window.event)?event.keyCode:e.which;
    if((tecla >=48 && tecla <=57 || tecla >=65 && tecla <=70|| tecla >=97 && tecla <=102)) return true;
    else{
      return false;
    }
  }

/****** FIM - Determinando o tipo de dado em cada input ******/


/****** INICIO - Condições para habilitar e desabilitar os inputs de inserção ******/

  function habi_desabi(value){

/*Se seleção for igual a decimal, então habilite o input, se não, desabilite */
    if(value == 10){
      ipt_decimal.disabled = false;
    }else if(value != 10){
      ipt_decimal.disabled = true;
    }

/*Se seleção for igual a binário, então habilite o input, se não, desabilite */
    if(value == 2){
      ipt_binario.disabled = false;
    }else if(value != 2){
      ipt_binario.disabled = true;
    }

/*Se seleção for igual a octal, então habilite o input, se não, desabilite */
    if(value == 8){
      ipt_octal.disabled = false;
    }else if(value != 8){
      ipt_octal.disabled = true;
    }

/*Se seleção for igual a hexadecimal, então habilite o input, se não, desabilite */
    if(value == 16){
      ipt_hexadecimal.disabled = false;
    }else if(value != 16){
      ipt_hexadecimal.disabled = true;
    }
  };

/****** FIM - Condições para habilitar os inputs de inserção ******/


/* INICIO - Funções de calculo de conversões */

/* ...Conversões a partir de número decimal */
  function convert_decimal() {
    var decimal = parseInt(document.getElementById('ipt_decimal').value, 10)
    document.getElementById("ipt_binario").value = decimal.toString(2);
    document.getElementById("ipt_octal").value = decimal.toString(8);
    document.getElementById("ipt_hexadecimal").value = decimal.toString(16);
  }

/* ...Conversões a partir de número binario */
  function convert_binario() {
    var binario = parseInt(document.getElementById('ipt_binario').value, 10)
    document.getElementById("ipt_decimal").value = parseInt(binario, 2);
    document.getElementById("ipt_octal").value = parseInt(binario, 2).toString(8);
    document.getElementById("ipt_hexadecimal").value = parseInt(binario, 2).toString(16);
  }

/* ...Conversões a partir de número octal */
  function convert_octal() {
    var octal = parseInt(document.getElementById('ipt_octal').value, 10)
    document.getElementById("ipt_decimal").value = parseInt(octal, 8);
    document.getElementById("ipt_binario").value = parseInt(octal, 8).toString(2);
    document.getElementById("ipt_hexadecimal").value = parseInt(octal, 8).toString(16);
  }

/* ...Conversões a partir de número hexadecimal */
  function convert_hexadecimal() {
    var hexadecimal = document.getElementById("ipt_hexadecimal").value
    document.getElementById("ipt_decimal").value = parseInt(hexadecimal, 16);
    document.getElementById("ipt_binario").value = parseInt(hexadecimal, 16).toString(2);
    document.getElementById("ipt_octal").value = parseInt(hexadecimal, 16).toString(8);
  }

/****** FIM - Funções de calculo de conversões ******/


/****** INICIO - Condições para chamar a função de calculo de acordo com o select escolhido ******/

  function chamar_calculo(){

/*Se seleção for igual a decimal, o botão irá executar a função convert_decimal() */
    if(tipos_bases.value == 10){
      convert_decimal();
    }

/*Se seleção for igual a binário, o botão irá executar a função convert_binario() */
    if(tipos_bases.value == 2){
      convert_binario();
    }

/*Se seleção for igual a octal, o botão irá executar a função convert_octal() */
    if(tipos_bases.value == 8){
      convert_octal();
    }

/*Se seleção for igual a hexadecimal, o botão irá executar a função convert_hexadecimal() */
    if(tipos_bases.value == 16){
      convert_hexadecimal();
    }
  };

/****** FIM - Condições para chamar a função de calculo de acordo com o select escolhido ******/
