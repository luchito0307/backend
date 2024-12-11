const mongoose = require('mongoose');

const RepuestoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  cantidad: { type: Number, required: true },
  descripcion: { type: String },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Repuesto', RepuestoSchema);
