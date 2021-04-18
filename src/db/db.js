const dbController = require("./controller")
const models = require("./modules/all")

class Database {
    dbSession;
    models;

    constructor(dbname, username, password, host = 'localhost', type = 'mysql') {
        this.dbSession = dbController.openDBConnection(dbname, username, password, host, type);
        this.models = {}
    }

    async connect() {
        try {
            await this.dbSession.authenticate();
            await this.dbSession.sync();
        } catch (error) {
            console.error('Unable to connect to the database:', error);
            process.exit(-1);
        }
    }

}


module.exports = {
    Database: Database
}