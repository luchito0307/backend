const express = require('express');
const Repuesto = require('../models/Repuesto');

const router = express.Router();

// Obtener todos los repuestos
router.get('/', async (req, res) => {
  try {
    const repuestos = await Repuesto.find();
    res.json(repuestos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los repuestos' });
  }
});

// Crear un repuesto
router.post('/', async (req, res) => {
  const { nombre, precio, cantidad, descripcion } = req.body;
  try {
    const nuevoRepuesto = new Repuesto({ nombre, precio, cantidad, descripcion });
    const repuestoGuardado = await nuevoRepuesto.save();
    res.status(201).json(repuestoGuardado);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear el repuesto' });
  }
});

// Actualizar un repuesto
router.put('/:id', async (req, res) => {
  const { nombre, precio, cantidad, descripcion } = req.body;
  try {
    const repuestoActualizado = await Repuesto.findByIdAndUpdate(
      req.params.id,
      { nombre, precio, cantidad, descripcion },
      { new: true }
    );
    res.json(repuestoActualizado);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar el repuesto' });
  }
});

// Eliminar un repuesto
router.delete('/:id', async (req, res) => {
  try {
    await Repuesto.findByIdAndDelete(req.params.id);
    res.json({ message: 'Repuesto eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el repuesto' });
  }
});

module.exports = router;
