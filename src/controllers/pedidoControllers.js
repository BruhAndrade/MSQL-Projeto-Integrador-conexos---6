// ESSA PARTE FAZ PARTE DO PROJETO-INTEGRADOR-CONEXOS-6
import pedido from "../models/pedidoModel.js"; 
class pedidoControllers {
  async create(req, res) {
    try {
      const { nome, cpf, tel, email, plano, preferenceSchedule, status } = req.body;
  
      if (!status) {
        return res.status(400).json({ error: "Missing 'status' field in request body" });
      }
  
      const ordem = await Ordens.create({
        nome: nome,
        cpf: cpf,
        tel: tel,
        email: email,
        plano: plano,
        preferenceSchedule: preferenceSchedule,
        status: status, 
      });
  
      res.status(201).json(pedido);
    } catch (error) {
      res.status(500).json({ error: error.message });
      console.log("deu erro: ", error);
    }
  }
  async getAll(req, res) {
    try {
      const ordens = await pedido.findAll();
      res.json(pedido);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const ordem = await Ordens.findByPk(req.params.id);

      if (!ordem) {
        return res.status(404).json({ error: "Pedido não encontrada" });
      }

      res.json(ordem);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { nome, cpf, tel, email, plano, preferenceSchedule} = req.body;

      const [affectedRows] = await Ordens.update(
        {
          nome: nome,
          cpf: cpf,
          tel: tel,
          email: email,
          plano: plano,
          preferenceSchedule: preferenceSchedule,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );

      if (!affectedRows || affectedRows == 0) {
        return res.status(500).json({
          error: `Não foi possível atualizar o pedido com id: ${req.params.id}`,
        });
      }

      res.json({ message: "Pedido atualizado com sucesso" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const destroyedRows = await pedido.destroy({
        where: {
          id: req.params.id,
        },
      });

      if (destroyedRows === 0) {
        return res.status(500).json({
          error: `Não foi possível excluir o pedido com id: ${req.params.id}`,
        });
      }

      res.json({ message: "Ordem excluída com sucesso" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new pedidoControllers();

