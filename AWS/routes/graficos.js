const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/grafico/:indice', async (req, res) => {
    const { indice } = req.params;
    const datos1 = await pool.query(`SELECT m1 FROM ${process.env.TABLE_ACCIONES} WHERE ticker = ? ORDER BY escenario`, [indice]);
    const datos2 = await pool.query(`SELECT m2 FROM ${process.env.TABLE_ACCIONES} WHERE ticker = ? ORDER BY escenario`, [indice]);
    const datos3 = await pool.query(`SELECT m3 FROM ${process.env.TABLE_ACCIONES} WHERE ticker = ? ORDER BY escenario`, [indice]);
    const datos4 = await pool.query(`SELECT m4 FROM ${process.env.TABLE_ACCIONES} WHERE ticker = ? ORDER BY escenario`, [indice]);
    const datos5 = await pool.query(`SELECT m5 FROM ${process.env.TABLE_ACCIONES} WHERE ticker = ? ORDER BY escenario`, [indice]);
    const datos6 = await pool.query(`SELECT m6 FROM ${process.env.TABLE_ACCIONES} WHERE ticker = ? ORDER BY escenario`, [indice]);

    var matriz = []

    matriz.push(datos1, datos2, datos3, datos4, datos5, datos6);

    res.send(matriz);
});

module.exports = router;