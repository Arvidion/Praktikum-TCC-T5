import {Sequelize} from "sequelize";

const db = new Sequelize('nebeng','root','',{
    host: "34.133.56.122",
    dialect: 'mysql'
});

export default db;
