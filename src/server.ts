import express from 'express';

const app = express();

app.get("/l", (req, res)=> {
    return res.json({ message: "Hello World - Pirmeira API"});
} );

// 1 - Parametro => Rota (recurso API)
// 2 - Parametro => Rresquest, response

app.post("/", (req, res) => {
  // recebemos os dados para salvar
  return res.json({ message: "Os dados foram salvos com sucesso!!  caai"})  
});

app.listen(3333 , () => console.log("server is run"));