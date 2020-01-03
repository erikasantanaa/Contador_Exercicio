function contar() {
    let ini = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passos = document.getElementById('passos')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passos.value.length == 0) {
        //window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passos.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescemte
             for (let c = i; c <= f; c += p) { // += , concatenação o +: para o let p receber os valores.
                res.innerHTML += ` ${c} \u{1F449}`   //Formatção unicoud (so funciona com craze) (emoji) para js: \u{1F603}
            }
        } else {
            //Contagem regressiva
            for (let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }             
        } 
        res.innerHTML += ` \u{1F3C1}`      
    }
    
}
//img.setAttribute('src', 'foto-bebe-m.png')