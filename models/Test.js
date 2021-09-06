import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
    nome: String,
    valorTotal: Number,
    valorPago: Number,
    dataVenda: Date,
    dataPrevistaPagamento: Date
}, { collection: 'test-collection' }
);

export default mongoose.model('TestSchema', testSchema);