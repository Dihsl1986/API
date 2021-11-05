import 'reflect-metadata';
import express from 'express';
import "./database"
const app = express();
 
app.get("/", (request, response) => {
    return response.json({ message: "Hello World - NLW04"});
});

//1º Parametro => rota(Recurso da API)
//2º Parametro => request,response

app.post("/", (request, response) => {
    //Recebeu os dados para salvar
    return response.json({ message: "Os dados foram salvos com sucesso!"})
})

app.listen(3333, () => console.log("Server is Running!!!"));