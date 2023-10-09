// Importa o módulo express, que é um framework web para Node.js utilizado para construir aplicativos web e APIs.
import express from "express";
// Importa o módulo de rotas studentRoutes.js, que provavelmente contém as rotas específicas relacionadas aos estudantes.
import routes from "./src/routes/index.js";
import sequelize from "./src/config/database.js";

const app = express();
sequelize.hasConnection();

app.use(express.json());

app.use(routes);

app.listen(3000, () => console.log("Servidor rodando na porta 3000!"));

sequelize.sync({ force: true }).then(() => {
    console.log('Tabelas criadas com sucesso!');
}).catch((error) => {
    console.error('Erro ao criar tabelas:', error);
});

