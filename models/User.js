const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const User = sequelize.define('users', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        // unique: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    // mobileNo: {
    //     type: DataTypes.STRING,
    //     allowNull: true
    // },
    // address: {
    //     type: DataTypes.TEXT,
    //     allowNull: true
    // },
});

sequelize.sync({
    // alter: true
}).then(() => {
    console.log('Table synchronized successfully!');
}).catch((error) => {
    console.error('Unable to synchronized table: ', error);
});

module.exports = {
    User
};