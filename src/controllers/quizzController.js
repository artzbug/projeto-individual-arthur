var quizzModel = require("../models/quizzModel");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var qtdAcerto = req.body.qtdAcertoServer;
    var qtdErro = req.body.qtdErroServer;
    var porcentagemFinalDeAcertos = req.body.porcentualServer
    var idUser = req.body.idUserServer

    // Faça as validações dos valores
    if (qtdAcerto  == undefined) {
        res.status(400).send("Seu acerto está undefined!");
    } else if (qtdErro == undefined) {
        res.status(400).send("Seu erro está undefined!");
    }
    else {
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizzModel.cadastrar(qtdAcerto, qtdErro, porcentagemFinalDeAcertos, idUser)
            .then(
                function (resultado) {
                    res.json(resultado);
                    res.status(200).send(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function listar(req, res) {
  quizzModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

module.exports = {
    cadastrar,
    listar
}