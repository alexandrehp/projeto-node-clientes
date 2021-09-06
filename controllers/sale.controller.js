import SaleService from "../services/sale.service.js"
import moment from "moment";
import intl from "intl";

//Utilizando internamente
async function getDefaulters(req, res, next) {
    try {

        const busca = req.query.content;

        const dados = await SaleService.getDefaulters(busca);

        const gridList = dados.map((sale) => {
            return {
                nome: sale.nome,
                valorTotal: intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(sale.valorTotal),
                valorPago: intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(sale.valorPago),
                dataVenda: sale.dataVenda ? moment(sale.dataVenda).format('DD/MM/YYYY') : sale.dataVenda,
                dataPrevistaPagamento: sale.dataPrevistaPagamento ? moment(sale.dataPrevistaPagamento).format('DD/MM/YYYY') : sale.dataPrevistaPagamento
            }
        });

        return gridList;

    } catch (error) {
        next(error);
    }
}

//Utilizando via API
async function getDefaultersApi(req, res, next) {
    try {
        const busca = req.query.content;
        res.send(await SaleService.getDefaulters(busca));
    } catch (error) {
        next(error);
    }
}

export default {
    getDefaulters,
    getDefaultersApi
}