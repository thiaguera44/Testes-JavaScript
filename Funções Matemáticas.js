<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Somando números</title>
    <style>
        body{
            font: normal 15pt Arial;
        }
        input {
            font: normal 15pt Arial;
            width: 100px;
        }
        div#res, div#resm, div#resS, div#resd{
            margin-top: 20px;
            margin-bottom: 20px;
        }
        div#t, div#t1, div#sub, div#div{
            margin-bottom: 10px;
        }

        
        /*Cores da soma*/
        div#res, div#t{
            background: rgb(160, 255, 160);
            color: rgb(0, 0, 0);
            width: fit-content;
            height: fit-content;
            line-height: 22px;
        }
        /*Cores da multiplicação*/
        div#resm, div#t1{
            background: rgb(96, 138, 255);
            color: rgb(0, 0, 0);
            width: fit-content;
            height: fit-content;
            line-height: 22px;
        }
        /*Cores da sutração*/
        div#resS, div#sub{
            background: rgb(239, 255, 98);
            color: rgb(0, 0, 0);
            width: fit-content;
            height: fit-content;
            line-height: 22px;
        }
        /*Cores da divisão*/
        div#resd, div#div{
            background: rgb(248, 120, 126);
            color: rgb(0, 0, 0);
            width: fit-content;
            height: fit-content;
            line-height: 22px;
        }

    </style>
</head>
<body>
    <h1>Brincando com valores</h1>
    <div id="t">Soma</div>
    <input type="number" name="txtn1" id="txtn1"> +
    <input type="number" name="txtn2" id="txtn2">
    <input type="button" value="Somar" onclick="somar()">
    <div id="res">Resultado</div>
    
    <div id="t1">Multiplicação</div>
    <input type="number" name="txtn3" id="txtn3"> x
    <input type="number" name="txtn4" id="txtn4">
    <input type="button" value="Multiplicar" onclick="mult()">
    <div id="resm">Resultado</div>

    <div id="sub">Subtração</div>
    <input type="number" name="txtns1" id="txtns1"> -
    <input type="number" name="txtns2" id="txtns2">
    <input type="button" value="Subtrair" onclick="menos()">
    <div id="resS">Resultado</div>

    <div id="div">Divisão</div>
    <input type="number" name="txtnd1" id="txtnd1"> /
    <input type="number" name="txtnd2" id="txtnd2">
    <input type="button" value="Dividir" onclick="divide()">
    <div id="resd">Resultado</div>


    <script>
        function somar(){
            var tn1 = window.document.getElementById('txtn1') //puxando direto pelo id
            var tn2 = window.document.querySelector('input#txtn2') //ultilizando # para puxar pelo id
            var n1  = Number(tn1.value)
            var n2  = Number(tn2.value)
            var s = n1 + n2
            res.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${s}`
        }

        function mult(){
            var tn3 = window.document.getElementById('txtn3') //puxando direto pelo id
            var tn4 = window.document.querySelector('input#txtn4') //ultilizando # para puxar pelo id
            var n3  = Number(tn3.value)
            var n4  = Number(tn4.value)
            var m = n3 * n4
            resm.innerHTML = `O produto entre ${n3} e ${n4} é igual a ${m}`
        }
    
        function menos(){
            var tns1 = window.document.getElementById('txtns1') //puxando direto pelo id
            var tns2 = window.document.querySelector('input#txtns2') //ultilizando # para puxar pelo id
            var ns1  = Number(tns1.value)
            var ns2  = Number(tns2.value)
            var ns = ns1 - ns2
            resS.innerHTML = `A subtração entre ${ns1} e ${ns2} é igual a ${ns}`
        }

        function divide(){
            var tnd1 = window.document.getElementById('txtnd1') //puxando direto pelo id
            var tnd2 = window.document.querySelector('input#txtnd2') //ultilizando # para puxar pelo id
            var nd1  = Number(tnd1.value)
            var nd2  = Number(tnd2.value)
            var nd = nd1 / nd2
            resd.innerHTML = `A divisão entre ${nd1} e ${nd2} é igual a ${nd}`
            
            if (nd2 == 0.0){
            resd.innerHTML = `Não é possivel dividir por 0`
            }
        }
    
    </script>


</body>
</html>
