let amigo = document.getElementById('nome-amigo');
let lista = document.getElementById('lista-amigos');
let listaSorteio = document.getElementById('lista-sorteio');
let amigos = [];

function adicionar() {
    verificarCampo(amigo)
    verificarAmigoEstaNaLista(amigo)

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
    if(amigos.length <= 2){
        alert('Você precisa de mais amigos')
        return
    }
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

function verificarCampo(amigo){
    if(amigo.value == ''){
        alert('O campo não pode estar vazio')
        return
    }
    console.log(amigos.includes(amigo))
}

function verificarAmigoEstaNaLista(amigo){
    if(amigos.includes(amigo.value)){
        alert('este amigo já foi adicionado')
        return
    }
}
