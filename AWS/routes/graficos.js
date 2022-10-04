const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/grafico/:indice', async (req, res) => {
    const { indice } = req.params;
    const datos1 = await pool.query(`SELECT d1 FROM ${process.env.TABLE_ACCIONES} WHERE ticker = ? ORDER BY escenario`, [indice]);
    const datos2 = await pool.query(`SELECT d2 FROM ${process.env.TABLE_ACCIONES} WHERE ticker = ? ORDER BY escenario`, [indice]);
    const datos3 = await pool.query(`SELECT d5 FROM ${process.env.TABLE_ACCIONES} WHERE ticker = ? ORDER BY escenario`, [indice]);

    var matriz = []

    matriz.push(datos1, datos2, datos3);

    res.send(matriz);
});

module.exports = router;