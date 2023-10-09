import admin from "../models/admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const authControllers = {
  async login(req, res) {
    const { code, senha } = req.body;

    try {
      const usuario = await pedido.findOne({
        where: {
          code,
        },
      });

      if (!usuario) {
        return res.status(400).json({ error: "Código de acesso ou senha inválidos!" });
      }

      const senhaValida = bcrypt.compareSync(senha, usuario.senha);

      if (!senhaValida) {
        return res.status(401).json({ error: "Acesso não autorizado!" });
      }

      const token = jwt.sign(
        {
          id: usuario.id,
          code: usuario.code,
          nome: usuario.nome,
        },
        key 
        ,
        { expiresIn: '5h' } 
      );

      return res.json({ token });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Ocorreu um erro durante a autenticação." });
    }
  },
};

export default authControllers;