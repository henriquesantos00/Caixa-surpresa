 const caixa = document.getElementById('caixa');
const botaoAbrir = document.getElementById('botao-abrir');
const botaoFechar = document.getElementById('botao-fechar');

function mostrarPalhaco() {
    const palhaco = document.createElement('img');
    palhaco.id = 'palhaco';
    palhaco.src = 'benicio.PNG'; 
    palhaco.alt = 'Palhaço';
    palhaco.style.width = '120px';
    caixa.appendChild(palhaco);
}

function removerPalhaco() {
    const palhacoExistente = document.getElementById('palhaco');
    if (palhacoExistente) {
        palhacoExistente.remove();
    }
}

botaoAbrir.addEventListener('click', () => {
    caixa.classList.add('aberta');
    mostrarPalhaco();
});

botaoFechar.addEventListener('click', () => {
    caixa.classList.remove('aberta');
    removerPalhaco();
});
