import {Sequelize} from "sequelize";

const db = new Sequelize('database067','root','',{
    host: '34.57.209.31',
    dialect: 'mysql'
});

export default db;