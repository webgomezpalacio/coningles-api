import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Reservas from "./reservasModel.js";
 
const { DataTypes } = Sequelize;
 
const Users = db.define('users',{
    name:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    sucursal:{
        type: DataTypes.STRING
    },
    refresh_token:{
        type: DataTypes.TEXT
    }
},{
    freezeTableName:true
});

 
(async () => {
    await db.sync();
})();
 
export default Users;