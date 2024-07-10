const express = require('express');
const { v4: uuidv4 } = require('uuid');
const db = require('./db');

const router = express.Router();

async function generateNewLink() {
    const newUuid = uuidv4();
    await db.query(`INSERT INTO Formulario (uuid, state) VALUES (?, 0)`, [newUuid]);
    return newUuid;
}

router.post('/generate-url', async (req, res) => {
    try {
        const uuid = await generateNewLink();
        const generatedURL = `http://localhost:3000/api/formulario/${uuid}`;
        res.json({ uuid, url: generatedURL });
    } catch (err) {
        console.error('Error al generar URL y crear formulario:', err.message);
        res.status(500).json({ error: err.message });
    }
});

router.post('/submit-form/:uuid', async (req, res) => {
    const { uuid } = req.params;
    const formData = req.body;

    try {
        const [rows] = await db.query(`SELECT state FROM Formulario WHERE uuid = ?`, [uuid]);

        if (rows.length === 0) {
            return res.status(404).json({ error: 'Enlace no encontrado' });
        }

        if (rows[0].state !== 0) {
            return res.status(403).json({ error: 'El formulario ya ha sido enviado' });
        }

        await db.query(`
            UPDATE Formulario SET
            OpcionesOne = ?,
            FechCrEData = ?,
            razon_social = ?,
            siglas = ?,
            nit_cedula = ?,
            telefono = ?,
            fax = ?,
            representante_legal = ?,
            documento_identidad = ?,
            direccion = ?,
            ciudad = ?,
            web = ?,
            email = ?,
            OpcionesTwo = ?,
            Principalesbienes = ?,
            OpcionesTre = ?,
            Opcionesfor = ?,
            ContactoCartera = ?,
            CorreoNotificacionPago = ?,
            PlazoPago = ?,
            NombreEmpresaUno = ?,
            NombreEmpresaDos = ?,
            Yo = ?,
            identificado = ?,
            NoIdn = ?,
            CiudadIdn = ?,
            PersonaJuridica = ?,
            DeclNit = ?,
            ActividadesComerciales = ?,
            OrigenDeRecursos = ?,
            NombreAccionistaSocio = ?,
            TipoNoIdn = ?,
            PorcentajeParticipacion = ?,
            ManejaRecursosPublicos = ?,
            ReconocimientoPublico = ?,
            ExisteYinculoentrePEP = ?,
            DiasCons = ?,
            MesCons = ?,
            AñoCons = ?
            WHERE uuid = ?
        `, [...Object.values(formData), uuid]);

        const newUuid = await generateNewLink();
        const newUrl = `http://localhost:3000/api/formulario/${newUuid}`;

        res.json({ message: 'Formulario enviado y enlace deshabilitado', newLink: newUrl });
    } catch (err) {
        console.error('Error al enviar el formulario:', err.message);
        res.status(500).json({ error: err.message });
    }
});

// Ruta para obtener el formulario por UUID
router.get('/formulario/:uuid', async (req, res) => {
    const { uuid } = req.params;
    
    try {
        // Consultar el formulario desde la base de datos utilizando el UUID
        const [rows] = await db.query(`
            SELECT * FROM Formulario WHERE uuid = ?
        `, [uuid]);

        // Verificar si se encontró el formulario
        if (rows.length === 0) {
            return res.status(404).json({ error: 'Formulario no encontrado' });
        }

        // Devolver el formulario encontrado
        const formulario = rows[0];
        res.json(formulario);
    } catch (err) {
        console.error('Error al obtener el formulario:', err.message);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Ruta para actualizar el formulario por UUID
router.put('/formulario/:uuid', async (req, res) => {
    const { uuid } = req.params;
    const formData = req.body;

    try {
        // Verificar el estado actual del formulario
        const [currentForm] = await db.query(`SELECT state FROM Formulario WHERE uuid = ?`, [uuid]);

        if (currentForm.length === 0) {
            return res.status(404).json({ error: 'Formulario no encontrado' });
        }

        if (currentForm[0].state !== 0) {
            return res.status(403).json({ error: 'El formulario ya ha sido enviado y no se puede modificar' });
        }

        // Actualizar los datos del formulario en la base de datos
        const query = `
            UPDATE Formulario SET
            OpcionesOne = ?,
            FechCrEData = ?,
            razon_social = ?,
            siglas = ?,
            nit_cedula = ?,
            telefono = ?,
            fax = ?,
            representante_legal = ?,
            documento_identidad = ?,
            direccion = ?,
            ciudad = ?,
            web = ?,
            email = ?,
            OpcionesTwo = ?,
            Principalesbienes = ?,
            OpcionesTre = ?,
            Opcionesfor = ?,
            ContactoCartera = ?,
            CorreoNotificacionPago = ?,
            PlazoPago = ?,
            NombreEmpresaUno = ?,
            NombreEmpresaDos = ?,
            Yo = ?,
            identificado = ?,
            NoIdn = ?,
            CiudadIdn = ?,
            PersonaJuridica = ?,
            DeclNit = ?,
            ActividadesComerciales = ?,
            OrigenDeRecursos = ?,
            NombreAccionistaSocio = ?,
            TipoNoIdn = ?,
            PorcentajeParticipacion = ?,
            ManejaRecursosPublicos = ?,
            ReconocimientoPublico = ?,
            ExisteYinculoentrePEP = ?,
            DiasCons = ?,
            MesCons = ?,
            AñoCons = ?,
            state = 1
            WHERE uuid = ?
        `;
        
        const values = [
            formData.OpcionesOne,
            formData.FechCrEData,
            formData.razon_social,
            formData.siglas,
            formData.nit_cedula,
            formData.telefono,
            formData.fax,
            formData.representante_legal,
            formData.documento_identidad,
            formData.direccion,
            formData.ciudad,
            formData.web,
            formData.email,
            formData.OpcionesTwo,
            formData.Principalesbienes,
            formData.OpcionesTre,
            formData.Opcionesfor,
            formData.ContactoCartera,
            formData.CorreoNotificacionPago,
            formData.PlazoPago,
            formData.NombreEmpresaUno,
            formData.NombreEmpresaDos,
            formData.Yo,
            formData.identificado,
            formData.NoIdn,
            formData.CiudadIdn,
            formData.PersonaJuridica,
            formData.DeclNit,
            formData.ActividadesComerciales,
            formData.OrigenDeRecursos,
            formData.NombreAccionistaSocio,
            formData.TipoNoIdn,
            formData.PorcentajeParticipacion,
            formData.ManejaRecursosPublicos,
            formData.ReconocimientoPublico,
            formData.ExisteYinculoentrePEP,
            formData.DiasCons,
            formData.MesCons,
            formData.AñoCons,
            uuid // Este es el UUID que viene de los parámetros de la URL
        ];

        await db.query(query, values);

        // Generar una nueva URL para futuros formularios
        const newUuid = await generateNewLink();
        const newUrl = `http://localhost:3000/api/formulario/${newUuid}`;

        // Devolver una respuesta exitosa
        res.json({ message: 'Formulario actualizado exitosamente', newLink: newUrl });
    } catch (err) {
        console.error('Error al actualizar el formulario:', err.message);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});


module.exports = router;
