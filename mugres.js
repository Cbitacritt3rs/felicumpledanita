function inicioGato() {
    const pop = document.getElementById('pop')
    const best = document.getElementById('bestFriend')
    pop.play()
    best.play()
    document.getElementsByClassName('marcoGato')[0].classList.add('gatoGrande')
    setTimeout(() => {
        document.getElementsByClassName('marcoGato')[0].classList.remove('gatoGrande')
        document.getElementsByClassName('marcoGato')[0].classList.add('desapMarco')
        setTimeout(() => {
            document.getElementsByClassName('marcoGato')[0].classList.add('desap')
            document.getElementsByClassName('intro')[0].classList.add('desapFondo')
            setTimeout(() => {
                document.getElementsByClassName('intro')[0].classList.add('desap')
            }, 1500);
        }, 2950);
    }, 550);
}

let mariconf = null

function cambiarFoto() {
    document.getElementsByClassName('aviso')[0].classList.add('desap')
    const foto = document.getElementsByClassName('fotos')[0]
    const pop = document.getElementById('pop')
    const clases = ['arbol', 'flor', 'lap', 'payaso', 'perro', 'tard', 'zana']
    let mari = Math.floor(Math.random()*7) + 1
    pop.play()

    for (let i = 0; i < clases.length; i++) {
        if (mariconf == i) {
            for (let c of clases) {
                foto.classList.remove(c)}
        }
        else {
            if (mari == i+1) {
                mariconf = i
                for (let c of clases) {
                    foto.classList.remove(c)}
                foto.classList.add(clases[i])
            }
        }
    }

}