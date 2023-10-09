import { Sequelize } from "sequelize";
import db from "../config/database.js";

//salvar dados de contato 
//criação de dois campos: email e telefone - capturados via formulario

const pedido = db.define("pedido", {
	id: {
		type: Sequelize.INTEGER.UNSIGNED,
		primaryKey: true, // Define a coluna "id" como chave primária, NOT NULL e UNIQUE
		autoIncrement: true,// Permite autoincremento para a coluna "id"
	},
	name: {
		type: Sequelize.STRING(200),// Não permite valores nulos para a coluna "name"
		allowNull: false,
	},
  tel: {
        type: Sequelize.STRING(15), 
        allowNull: false,
      },
	email: {
		type: Sequelize.STRING(160), // Não permite valores nulos para a coluna "email"
		allowNull: false,
	},
  CPF: {
        type: Sequelize.STRING(14), 
        allowNull: false,
        unique: true, // Para garantir que o CPF seja único em cada registro
      },
  plano: {
        type: Sequelize.INTEGER, // Tipo de dado para representar o plano
        allowNull: false,
        validate: {
          isIn: [[1, 2, 3]] // Certifique-se de que o plano seja 1, 2 ou 3
        },
  preferenceSchedule: {
        type: Sequelize.STRING(50), 
        allowNull: true, // Se você deseja permitir que este campo seja nulo
      },
  status:{
      type:Sequelize.STRING(100),
      allowNull:false,
  },
},

  tableName:"pedido",
}
);
pedido.sync()
.then(() => {
  console.log("Tabela 'order' criada com sucesso.");
})
.catch((error) => {
  console.error("Erro ao criar a tabela 'pedido':", error);
});
    export default pedido;

  
    
 