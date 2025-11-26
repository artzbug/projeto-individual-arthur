var database = require("../database/config")


function cadastrar(qtdAcerto, qtdErro, porcentagemFinalDeAcertos, fkUser) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");
    
    var porcentagemInteiro =  porcentagemFinalDeAcertos * 100
    var instrucaoSql = `
       insert quizz (total_perguntas)  values (${qtdAcerto + qtdErro});
       insert resultado_quizz (qtdAcertos, qtdErro, percentual_acerto, idCadastro, id_quizz)  values (${qtdAcerto}, ${qtdErro}, ${porcentagemInteiro}, ${fkUser}, LAST_INSERT_ID());
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listar() {
    console.log("ACESSEI O quizz MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");
    
    var instrucaoSql = `
       select * from resultado_quizz join quizz on quizz.idquizz = resultado_quizz.id_quizz;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    cadastrar,
    listar
};