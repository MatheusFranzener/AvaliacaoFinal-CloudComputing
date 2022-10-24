const express = require('express');

const app = express();
const route = express.Router();
const routes = require('./API/routes');
const port = process.env.PORT || 3001; 

app.use(route);
route.use(express.json());

route.get("/", (req,res) => {
    res.send("Listar --> /api/usuario/listar - Cadastrar --> /api/usuario/cadastrar - Login --> /api/usuario/login");
});

route.use("/api", routes);

app.listen(port, () => console.log("Porta --> ", port));