const Sequelize = require("sequelize");
const connection = require("./database");

const Pergunta = connection.define("pergunta", {
    titulo:{
        type: Sequelize.STRING,
        alloNULL: false
    },
    descricao:{
        type: Sequelize.TEXT,
        alloNULL: false
    }
});

Pergunta.sync({force: false}).then(() => {});
module.exports = Pergunta;
