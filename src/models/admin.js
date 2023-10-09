import { Sequelize } from "sequelize";
import db from "../config/database.js";

const admin = db.define("admin", {
	id: {
		type: Sequelize.INTEGER.UNSIGNED,
		primaryKey: true, 
		autoIncrement: true,
	},
	nome: {
		type: Sequelize.STRING(200),
		allowNull: false,
	},
	code: {
		type: Sequelize.STRING(200),
		allowNull: false,
	},
	senha: {
		type: Sequelize.STRING(200),
		allowNull: false,
	},
	
});

export default admin;

