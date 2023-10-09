// ESSA PARTE FAZ PARTE DO PROJETO-INTEGRADOR-CONEXOS-6

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class adminControllers {
    async create(req, res) {
      console.log(req.user);
      try {
        const { nome, code, senha } = req.body;
        const newSenha = bcrypt.hashSync(senha, 10);
  
        const admin = await admin.create({
          nome: nome,
          code: code,
          senha: newSenha,
        });
  
        res.status(201).json(admin);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async getAll(req, res) {
      try {
        const admin = await admin.findAll();
        res.json(admin);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async getById(req, res) {
      try {
        const admin = await admin.findByPk(req.params.id);
  
        if (!admin) {
          return res.status(404).json({ error: "cliente não encontrado" });
        }
  
        res.json(admin);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async update(req, res) {
      try {
        const { nome, codigo, senha } = req.body;
  
        const [affectedRows] = await admin.update(
          {
            nome: nome,
            code: code,
            senha: senha,
          },
          {
            where: {
              id: req.params.id,
            },
          }
        );
  
        if (!affectedRows || affectedRows == 0) {
          return res.status(500).json({
            error: `Não foi possível atualizar o cliente com id: ${req.params.id}`,
          });
        }
  
        res.json({ message: "cliente atualizado com sucesso" });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async delete(req, res) {
      try {
        const destroyedRows = await admin.destroy({
          where: {
            id: req.params.id,
          },
        });
  
        if (destroyedRows === 0) {
          return res.status(500).json({
            error: `Não foi possível excluir o cliente com id: ${req.params.id}`,
          });
        }
  
        res.json({ message: "cliente excluído com sucesso" });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async 
  
  }
  
  export default new adminControllers();