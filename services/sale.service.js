import SaleRepository from "../repositories/sale.repository.js";

async function getDefaulters(busca) {
    return await SaleRepository.getDefaulters(busca);
}

export default {
    getDefaulters
}