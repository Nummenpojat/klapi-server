const { Sequelize } = require('sequelize');

function openDBConnection(dbname, username, password, host, type) {
    return new Sequelize(dbname, username, password, {
        host: host,
        dialect: type,
        logging: false,
    });
}


module.exports = {
    openDBConnection: openDBConnection
}