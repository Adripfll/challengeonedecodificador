function criptografar() {
    var mensagemOriginal = document.getElementById('mensagem').value;
    var mensagemCriptografada = substituirPalavrasChave(mensagemOriginal);
    document.getElementById('resultado').value = mensagemCriptografada;

    document.getElementById('imagem')?.remove();
    document.getElementById('resultado').classList.add('new');
    document.getElementById('boxImagem').classList.add('new');
    document.getElementById('resultado').classList.remove('text-center');
}

function descriptografar() {
    var mensagemCriptografada = document.getElementById('mensagem').value;
    var mensagemOriginal = substituirPalavrasInverso(mensagemCriptografada);
    document.getElementById('resultado').value = mensagemOriginal;

    document.getElementById('imagem')?.remove();
    document.getElementById('resultado').classList.add('new');
    document.getElementById('boxImagem').classList.add('new');
    document.getElementById('resultado').classList.remove('text-center');
}

function substituirPalavrasChave(texto) {
    return texto.replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
}

function substituirPalavrasInverso(texto) {
    return texto.replace(/ufat/g, 'u')
                .replace(/ober/g, 'o')
                .replace(/ai/g, 'a')
                .replace(/imes/g, 'i')
                .replace(/enter/g, 'e');
}

function copiarResultado() {
    var resultado = document.getElementById('resultado');
    var textarea = document.createElement('textarea');
    


    textarea.value = resultado.value;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Copiado!');
}

function limparResultado() {
    document.getElementById('resultado').value = '';
    document.getElementById('mensagem').value = '';
}