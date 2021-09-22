import "reflect-metadata";
import express from 'express';
import "./database";

const app = express();


/**
 * GET => buscar
 * POST => salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PACH => Alteração especifico
 */

app.get("/", (request, response) => {
    return response.json({message:"Hello World - NLW04"})
});


//1º PArâmetro => Rota (Recurso do API)
//2º Parametro => request,response
app.post("/", (request, response) => {
    //Recebos o dados para salvar
    return response.json({message:"Os dados foram salos co sucesso!!"})
});

app.listen(3333, () => console.log("Server is runner!!"))