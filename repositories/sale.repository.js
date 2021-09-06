import TestSchema from "../models/Test.js";

//Ler base de vendas (SALE JOIN CLIENT)
//Validar se as vendas que já venceram estão pagas 

async function getDefaulters(busca) {

    let dados = [];

    if (busca) {
        const query = { nome: busca };
        dados = TestSchema.find(query);
    } else {
        dados = TestSchema.find();
    }
    return dados;
}

export default {
    getDefaulters
}