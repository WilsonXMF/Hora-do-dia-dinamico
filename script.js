function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'dia.jpeg'
        document.body.style.background = '#8e9a98'

    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'tarde.jpeg'
        document.body.style.background = '#fe9427'
    } else {
        //BOA NOITE
        img.src = 'noite.jpeg'
        document.body.style.background = '#0c2c5b'
    }
}