import express from "express";
import pedidoControllers from "../controllers/pedidoControllers.js";
import adminControllers from "../controllers/adminControllers.js";
import AuthContoller from "../controllers/authControllers.js"
import Auth from "../middlewares/auth.js"

const router = express.Router();

// Routes para Pedidos

router.post("/pedido", auth, pedidoControllers.create);
router.get("/pedido", pedidoControllers.getAll);
router.get("/pedido/:id", pedidoControllers.getById);
router.get("/pedido/:id", auth, pedidoControllers.getById);
router.put("/pedido/:id", pedidoControllers.update);
router.delete("/pedido/:id", pedidoControllers.delete);

//routes para funcionarios

router.post("/admin", auth, adminControllers.create);
router.get("/admin", adminControllers.getAll);
router.get("/admin/:id", adminControllers.getById);
router.get("/admin/:id", auth, adminControllers.getById);
router.put("/admin/:id", adminControllers.update);
router.delete("/admin/:id", adminControllers.delete);

export default router;
