import app from "./src/app.js";
import db from "./src/config/database";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3306;

try {
	await db.sync({ alter: true });
	console.log("A conexão com o banco de dados foi bem sucedida!");

	app.listen(PORT, () => {
		console.log(`Servidor rodando na porta ${PORT}`);
	});
} catch (error) {
	console.error("Não foi possível iniciar o servidor: ", error);
	process.exit(1);
}