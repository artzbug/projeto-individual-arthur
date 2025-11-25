show databases;
USE projeto_individual;
SHOW TABLES;

CREATE DATABASE projeto_individual;
USE projeto_individual;



CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(45),
    senha VARCHAR(45) NOT NULL
);
INSERT INTO usuario (email, senha) VALUES ('oi', '123456');
select * from usuario;

CREATE TABLE quizz (
    idquizz INT PRIMARY KEY AUTO_INCREMENT,
    total_perguntas VARCHAR(45),
    inicio_quizz DATETIME,
    nome_quizz varchar(45),
    fim_quizz DATETIME default current_timestamp
);
insert quizz 
CREATE TABLE resultado_quizz (
    idresultado INT PRIMARY KEY AUTO_INCREMENT,
    idCadastro INT NULL,
    id_quizz INT NULL,
    qtdAcertos int,
    qtdErro int,
    percentual_acerto INT,
    FOREIGN KEY (idCadastro) REFERENCES usuario(id),
    FOREIGN KEY (id_quizz) REFERENCES quizz(idquizz)
);
insert resultado_quizz (qtdAcertos, qtdErro)  values (10, 4);
insert quizz (qtdAcertos, qtdErro)  values (10, 4);
select * from resultado_quizz;

DESC usuario;

SELECT * FROM usuario;