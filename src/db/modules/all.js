const {DataTypes} = require('sequelize');

function defineRoles(sequelize) {
    return sequelize.define('roles', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    })
}

function defineLocalGroups(sequelize) {
    return sequelize.define('localGroups', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    })
}

function defineCards(sequelize) {
    return sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        lastName: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        ageSection: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });
}


module.exports = {
    defineCards,
    defineLocalGroups,
    defineRoles
}