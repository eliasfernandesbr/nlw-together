const express = require("express");
const app = express();
const port = 3000;

const pessoas = {
  pessoa1: {
    nome: "Elias Fernandes",
    idade: 29,
    numFilhos: 0,
    cidade: "Curitiba",
    estado: "Paraná",
    pais: "Brasil",
  },
  pessoa2: {
    nome: "Jhess Mattos",
    idade: 24,
    numFilhos: 1,
    cidade: "Niterói",
    estado: "Rio de Janeiro",
    pais: "Brasil",
  },
};

app.get("/", (req, res) => {
  return res.send(pessoas.pessoa1);
});

app.post("/teste-post", (req, res) => {
  return res.send(pessoas.pessoa2);
});

app.listen(port, () => {
  console.log("🔸Servidor Iniciado🔸");
});
