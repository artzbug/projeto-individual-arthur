var nomesUsuarios = ["Steve", "Alex", "Herobrine"];
var indiceUsuarioAtual = 0;
var nomeUsuario = nomesUsuarios[indiceUsuarioAtual];

var senhaAtual = "minhasenha123";

var elementoNomeUsuario = document.getElementById('username');
var elementoSaudacao = document.getElementById('boas_vindas');
var botaoSair = document.getElementById('botao_sair');
var linkConfiguracoes = document.getElementById('link-configuracoes'); 

function obterSaudacaoPorHora() {
    var dataAtual = new Date();
    var hora = dataAtual.getHours();
    var saudacao;

    if (hora < 12) {
        saudacao = "Bom dia";
    } else if (hora < 18) {
        saudacao = "Boa tarde";
    } else {
        saudacao = "Boa noite";
    }
    
    return saudacao;
}

function sairDaSessao() {
    var confirmarSaida = confirm("Tem certeza que deseja sair da sessão?");
    
    if (confirmarSaida) {
        alert("Até mais, " + nomeUsuario + "! Redirecionando para a tela de login...");
    }
}

function abrirConfiguracoes(evento) { 
    if (evento) {
        evento.preventDefault(); 
    }
    
    alert("Bem-vindo(a) à seção de Configurações! Sua senha atual é: " + senhaAtual);

    var novaSenha = prompt("Digite sua nova senha:");

    if (novaSenha) {
        if (novaSenha.length < 6) {
            alert("ERRO: A nova senha deve ter no mínimo 6 caracteres. A senha não foi alterada.");
        } else if (novaSenha === senhaAtual) {
            alert("ERRO: A nova senha não pode ser igual à senha atual.");
        } else {
            senhaAtual = novaSenha;
            alert("SUCESSO! Sua senha foi alterada para: " + senhaAtual);
        }
    } else {
        alert("Operação cancelada. Nenhuma alteração foi feita na senha.");
    }
}


if (linkConfiguracoes) {
    linkConfiguracoes.onclick = abrirConfiguracoes; 
}

if (botaoSair) {
    botaoSair.onclick = sairDaSessao;
}


if (elementoNomeUsuario) {
    elementoNomeUsuario.textContent = nomeUsuario;
}

if (elementoSaudacao) {
    elementoSaudacao.textContent = obterSaudacaoPorHora() + ", " + nomeUsuario + "!";
}