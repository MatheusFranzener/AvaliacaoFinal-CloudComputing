const express = require("express");
const router = express.Router();

const usuarioHandler = require("./usuarioHandler");

router.get("/listar", async (req, res) => {
    const usuarios = await usuarioHandler.listarUsuarios();
    res.json(usuarios);
});

router.post("/cadastrar", async (req, res) => {
    res.json(await usuarioHandler.cadastrarUsuario(req.body));
});

router.post("/login", async (req, res) => {
    if (usuarioHandler.verificarLogin(req.body))
        res.status(400).send("Login autenticado.");
    else {
        res.status(500).send("Login negado.");
    }
});

module.exports = router;