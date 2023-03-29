<!DOCTYPE html>
<html>
<head>
<title>js03_funcao.htm - somatoria com entrada de dados por formulário</title>
<meta http-equiv="Content-Type" content="text/html"; charset=iso-8859-1">
<meta http-equiv="Content-Type" content="text/html"; charset=utf-8">
<meta charset="utf-8"/>
</head>
<body>

<h3>Somatória de dois números inteiros</h3>

<! -- Definição da área e dos elementos de um formulário -->
<form name="MeuFormulario" action=" " method="post">
	Entre com o valor 1: <input type="text" name="f_n1" /><p></p>
	Entre com o valor 2: <input type="text" name="f_n2" /><p></p>
	<input type="button" name="btn_somar" value="Somar" onclick="soma()" />
	<input type="reset" name="btn_apagar" value="Apagar" />
</form>
<!-- Final da área do formulário -->

<h3>Multiplicação de dois números inteiros</h3>


<! -- Definição da área e dos elementos de um formulário -->
<form name="Meu_Formulario" action=" " method="post">
	Entre com o valor 1: <input type="text" name="f_n3" /><p></p>
	Entre com o valor 2: <input type="text" name="f_n4" /><p></p>
	<input type="button" name="btn_mult" value="Multiplicar" onclick="multiplica()" />
	<input type="reset" name="btn_apaga" value="Apagar" />
</form>
<!-- Final da área do formulário -->



<!-- Definição da linguagem JavaScript -->
<script language="javascript">

<!--
/*Objetivo: Desenvolver um programa em JavaScript que faça a leitura de 2 números inteiros
			aploqie a conversão de valores com parseInt e apresente o resultado da soma.
			Entrada de dados por formulário´
*/

//Definição de váriaveis
var js_n1;
var js_n2;
var js_soma;
var js_n3;
var js_n4;
var js_mult;

//Definição da função soma() para capturar dados, processar somatória e apresentar o resultado

function soma() {
	//Entrada de dados
	js_n1 = parseInt(document.MeuFormulario.f_n1.value);
	js_n2 = parseInt(document.MeuFormulario.f_n2.value);
	
	//Processamento de dados
	js_soma = js_n1 + js_n2;
	
	//Saída de dados
	window.alert('Resultado da Somatória = ' + js_soma.toString());	
}

function multiplica(){
	//Entrada de dados
	js_n3 = parseInt(document.Meu_Formulario.f_n3.value);
	js_n4 = parseInt(document.Meu_Formulario.f_n4.value);
	
	//Processamento de dados
	js_mult = js_n3 * js_n4;
	
	//Saída de dados
	window.alert('Resultado da Somatória = ' + js_mult.toString())
}

// -->
<!-- Final da área da linguagem JavaScript -->
</script>
</body>
</html>
