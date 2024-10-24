let amigo = document.getElementById('nome-amigo');
let lista = document.getElementById('lista-amigos');
let listaSorteio = document.getElementById('lista-sorteio');
let amigos = [];

function adicionar() {
    if (lista.textContent == ''){
        amigos.push(amigo.value);
        lista.textContent = amigo.value;
        amigo.value = '';
    } else {
        amigos.push(amigo.value)
        lista.textContent = lista.textContent + ',' + amigo.value;     
        amigo.value = '';
    }
}

function reiniciar() {
    lista.textContent = '';
    listaSorteio.innerHTML = '';
    amigos = [];
}

function sortear(){
    embaralha(lista)
    for(let i = 0; i < amigos.length; i++){
        if (i == amigos.length - 1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>';
        }else{
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + '-->' + amigos[i + 1] + '<br>';
        }
    }
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}
