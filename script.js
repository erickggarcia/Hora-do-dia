var data = new Date ()
var hora = data.getHours()
var minutos = data.getMinutes()

function carregar() {
    var msg = document.getElementById('msg')
    msg.innerHTML = `Agora são ${hora}:${minutos}`
    var res = document.getElementById('res')
    var img = document.createElement('img')
    if(hora >=0 && hora <12) {
        //manha
        img.setAttribute('src','imagens/manha.png')
        document.body.style.background ='#e8d7aa'
    } else if(hora < 18){
        //tarde
        img.setAttribute('src','imagens/tarde.png')
        document.body.style.background ='#9e666a'
    } else {
        //noite
        img.setAttribute('src','imagens/noite.png')
        document.body.style.background ='#074062'
    }
    msg.style.textAlign = 'center'
    res.style.textAlign = 'center'
    res.appendChild(img)  
}