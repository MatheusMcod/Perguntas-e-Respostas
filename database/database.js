const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root', 'matheuskamcha20', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;