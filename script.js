function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 22 //data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 12) {
    //Dia
    img.src = 'manha.png'
    document.body.style.background = "rgb(255, 226, 184)"
}
else if (hora >= 12 && hora < 18){
    //tarde
    img.src = 'tarde.png'
    document.body.style.background = "rgb(254, 188, 22)"
}
else{
    //noite
    img.src = 'noite.png'
    document.body.style.background = "rgb(49, 41, 66)"
}
}
