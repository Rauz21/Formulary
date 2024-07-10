import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Tratamiento from './Tratamiento';

const Formulario = () => {
    const { uuid } = useParams();
    const [formData, setFormData] = useState({
        OpcionesOne: '',
        FechCrEData: '',
        razon_social: '',
        siglas: '',
        nit_cedula: '',
        telefono: '',
        fax: '',
        representante_legal: '',
        documento_identidad: '',
        direccion: '',
        ciudad: '',
        web: '',
        email: '',
        OpcionesTwo: '',
        Principalesbienes: '',
        OpcionesTre: '',
        Opcionesfor: '',
        ContactoCartera: '',
        CorreoNotificacionPago: '',
        PlazoPago: '',
        NombreEmpresaUno: '',
        NombreEmpresaDos: '',
        Yo: '',
        identificado: '',
        NoIdn: '',
        CiudadIdn: '',
        PersonaJuridica: '',
        DeclNit: '',
        ActividadesComerciales: '',
        OrigenDeRecursos: '',
        NombreAccionistaSocio: '',
        TipoNoIdn: '',
        PorcentajeParticipacion: '',
        ManejaRecursosPublicos: '',
        ReconocimientoPublico: '',
        ExisteYinculoentrePEP: '',
        DiasCons: '',
        MesCons: '',
        AñoCons: ''
    });
    const [isOpenInformacionGeneral, setIsOpenInformacionGeneral] = useState(false);
    const [isOpenClasificacionProveedor, setIsOpenClasificacionProveedor] = useState(false);
    const [isOpenCertificacionesVigentes, setIsOpenCertificacionesVigentes] = useState(false);
    const [isOpenInformacionPago, setIsOpenInformacionPago] = useState(false);
    const [isOpenReferenciasComerciales, setIsOpenReferenciasComerciales] = useState(false);
    const [isOpenDeclaracionOrigenFondos, setIsOpenDeclaracionOrigenFondos] = useState(false);
    const [isOpenRelacionAccionistas, setIsOpenRelacionAccionistas] = useState(false);
    const [isOpenTratamientoDatos, setIsOpenTratamientoDatos] = useState(false);



    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3000/api/formulario/${uuid}`, formData);
            console.log(response.data);
            // Mostrar mensaje de éxito o redireccionar a otra página
        } catch (error) {
            console.error('Error al actualizar formulario:', error.message);
            // Mostrar mensaje de error al usuario
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    
    const toggleInformacionGeneral = () => {
        setIsOpenInformacionGeneral(!isOpenInformacionGeneral);
    };

    const toggleClasificacionProveedor = () => {
        setIsOpenClasificacionProveedor(!isOpenClasificacionProveedor);
    };
    const toggleCertificacionesVigentes = () => {
        setIsOpenCertificacionesVigentes(!isOpenCertificacionesVigentes);
    };

    const toggleInformacionPago = () => {
        setIsOpenInformacionPago(!isOpenInformacionPago);
    };

    const toggleReferenciasComerciales = () => {
        setIsOpenReferenciasComerciales(!isOpenReferenciasComerciales);
    };
    const toggleDeclaracionOrigenFondos = () => {
        setIsOpenDeclaracionOrigenFondos(!isOpenDeclaracionOrigenFondos);
    };
    const toggleRelacionAccionistas = () => {
        setIsOpenRelacionAccionistas(!isOpenRelacionAccionistas);
    };

    const toggleTratamientoDatos = () => {
        setIsOpenTratamientoDatos(!isOpenTratamientoDatos);
    };
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-lg max-w-3xl w-full">
                <h2 className="text-2xl mb-4 text-center font-bold">Actualizar Formulario</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                        <h2>Fecha Registro</h2>

                            <label htmlFor="OpcionesOne" className="block text-sm font-medium text-gray-700">Opciones One:</label>
                            <select id="OpcionesOne" name="OpcionesOne" value={formData.OpcionesOne} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option value="">Seleccione una opción</option>
                                <option value="VINCULACION">VINCULACION</option>
                                <option value="ACTUALIZACION">ACTUALIZACION</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="FechCrEData" className="block text-sm font-medium text-gray-700">Fecha de Creación:</label>
                            <input type="date" id="FechCrEData" name="FechCrEData" value={formData.FechCrEData} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-md p-4 mb-4">
                        <h2 className="text-lg font-bold mb-2 cursor-pointer" onClick={toggleInformacionGeneral}>
                            INFORMACIÓN GENERAL
                            <svg
                                className={`h-5 w-5 inline ml-2 ${isOpenInformacionGeneral ? 'transform rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={isOpenInformacionGeneral ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'}
                                />
                            </svg>
                        </h2>
                        {isOpenInformacionGeneral && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="col-span-2 md:col-span-1">
                                    <label htmlFor="razon_social" className="block text-sm font-medium text-gray-700">Razón Social:</label>
                                    <input
                                        type="text"
                                        id="razon_social"
                                        name="razon_social"
                                        value={formData.razon_social}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <label htmlFor="siglas" className="block text-sm font-medium text-gray-700">Siglas:</label>
                                    <input
                                        type="text"
                                        id="siglas"
                                        name="siglas"
                                        value={formData.siglas}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <label htmlFor="nit_cedula" className="block text-sm font-medium text-gray-700">NIT/Cédula:</label>
                                    <input
                                        type="text"
                                        id="nit_cedula"
                                        name="nit_cedula"
                                        value={formData.nit_cedula}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Teléfono:</label>
                                    <input
                                        type="text"
                                        id="telefono"
                                        name="telefono"
                                        value={formData.telefono}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <label htmlFor="fax" className="block text-sm font-medium text-gray-700">Fax:</label>
                                    <input
                                        type="text"
                                        id="fax"
                                        name="fax"
                                        value={formData.fax}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <label htmlFor="representante_legal" className="block text-sm font-medium text-gray-700">Representante Legal:</label>
                                    <input
                                        type="text"
                                        id="representante_legal"
                                        name="representante_legal"
                                        value={formData.representante_legal}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <label htmlFor="documento_identidad" className="block text-sm font-medium text-gray-700">Documento de Identidad:</label>
                                    <input
                                        type="text"
                                        id="documento_identidad"
                                        name="documento_identidad"
                                        value={formData.documento_identidad}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <label htmlFor="direccion" className="block text-sm font-medium text-gray-700">Dirección:</label>
                                    <input
                                        type="text"
                                        id="direccion"
                                        name="direccion"
                                        value={formData.direccion}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <label htmlFor="ciudad" className="block text-sm font-medium text-gray-700">Ciudad:</label>
                                    <input
                                        type="text"
                                        id="ciudad"
                                        name="ciudad"
                                        value={formData.ciudad}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <label htmlFor="web" className="block text-sm font-medium text-gray-700">Sitio Web:</label>
                                    <input
                                        type="text"
                                        id="web"
                                        name="web"
                                        value={formData.web}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="bg-white shadow-md rounded-md p-4 mb-4">
                        <h2 className="text-lg font-bold mb-2 cursor-pointer" onClick={toggleClasificacionProveedor}>
                            CLASIFICACIÓN DEL PROVEEDOR
                            <svg
                                className={`h-5 w-5 inline ml-2 ${isOpenClasificacionProveedor ? 'transform rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={isOpenClasificacionProveedor ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'}
                                />
                            </svg>
                        </h2>
                        {isOpenClasificacionProveedor && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="OpcionesTwo" className="block text-sm font-medium text-gray-700">Opciones Two:</label>
                                    <select
                                        id="OpcionesTwo"
                                        name="OpcionesTwo"
                                        value={formData.OpcionesTwo}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="">Seleccione una opción</option>
                                        <option value="Seguridad">Seguridad</option>
                                        <option value="Comercializador">Comercializador</option>
                                        <option value="Servicios">Servicios</option>
                                        <option value="Otros">Otros</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="Principalesbienes" className="block text-sm font-medium text-gray-700">Principales Bienes:</label>
                                    <input
                                        type="text"
                                        id="Principalesbienes"
                                        name="Principalesbienes"
                                        value={formData.Principalesbienes}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="bg-white shadow-md rounded-md p-4 mb-4">
                        <h2 className="text-lg font-bold mb-2 cursor-pointer" onClick={toggleCertificacionesVigentes}>
                            CERTIFICACIONES VIGENTES
                            <svg
                                className={`h-5 w-5 inline ml-2 ${isOpenCertificacionesVigentes ? 'transform rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={isOpenCertificacionesVigentes ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'}
                                />
                            </svg>
                        </h2>
                        {isOpenCertificacionesVigentes && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="OpcionesTre" className="block text-sm font-medium text-gray-700">Opciones Tre:</label>
                                    <select
                                        id="OpcionesTre"
                                        name="OpcionesTre"
                                        value={formData.OpcionesTre}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="">Seleccione una opción</option>
                                        <option value="Operador Económico Autorizado - OEA">Operador Económico Autorizado - OEA</option>
                                        <option value="ISO 28000">ISO 28000</option>
                                        <option value="Otro">Otro</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="Opcionesfor" className="block text-sm font-medium text-gray-700">Opciones For:</label>
                                    <select
                                        id="Opcionesfor"
                                        name="Opcionesfor"
                                        value={formData.Opcionesfor}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="">Seleccione una opción</option>
                                        <option value="ISO 9001">ISO 9001</option>
                                        <option value="BASC">BASC</option>
                                        <option value="ISO 27001">ISO 27001</option>
                                        <option value="Otro">Otro</option>
                                    </select>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="bg-white shadow-md rounded-md p-4 mb-4">
                        <h2 className="text-lg font-bold mb-2 cursor-pointer" onClick={toggleInformacionPago}>
                            INFORMACIÓN PARA PAGO
                            <svg
                                className={`h-5 w-5 inline ml-2 ${isOpenInformacionPago ? 'transform rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={isOpenInformacionPago ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'}
                                />
                            </svg>
                        </h2>
                        {isOpenInformacionPago && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="CorreoNotificacionPago" className="block text-sm font-medium text-gray-700">Correo Notificación Pago:</label>
                                    <input
                                        type="email"
                                        id="CorreoNotificacionPago"
                                        name="CorreoNotificacionPago"
                                        value={formData.CorreoNotificacionPago}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="PlazoPago" className="block text-sm font-medium text-gray-700">Plazo de Pago:</label>
                                    <input
                                        type="text"
                                        id="PlazoPago"
                                        name="PlazoPago"
                                        value={formData.PlazoPago}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="ContactoCartera" className="block text-sm font-medium text-gray-700">Contacto Cartera:</label>
                                    <input
                                        type="text"
                                        id="ContactoCartera"
                                        name="ContactoCartera"
                                        value={formData.ContactoCartera}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="bg-white shadow-md rounded-md p-4 mb-4">
                        <h2 className="text-lg font-bold mb-2 cursor-pointer" onClick={toggleReferenciasComerciales}>
                            REFERENCIAS COMERCIALES
                            <svg
                                className={`h-5 w-5 inline ml-2 ${isOpenReferenciasComerciales ? 'transform rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={isOpenReferenciasComerciales ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'}
                                />
                            </svg>
                        </h2>
                        {isOpenReferenciasComerciales && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="NombreEmpresaUno" className="block text-sm font-medium text-gray-700">Nombre Empresa Uno:</label>
                                    <input
                                        type="text"
                                        id="NombreEmpresaUno"
                                        name="NombreEmpresaUno"
                                        value={formData.NombreEmpresaUno}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="NombreEmpresaDos" className="block text-sm font-medium text-gray-700">Nombre Empresa Dos:</label>
                                    <input
                                        type="text"
                                        id="NombreEmpresaDos"
                                        name="NombreEmpresaDos"
                                        value={formData.NombreEmpresaDos}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                        )}
                    </div>


                    <div className="bg-white shadow-md rounded-md p-4 mb-4">
                        <h2 className="text-lg font-bold mb-2 cursor-pointer" onClick={toggleDeclaracionOrigenFondos}>
                            DECLARACIÓN DE ORIGEN DE FONDOS Y BENEFICIARIOS FINALES
                            <svg
                                className={`h-5 w-5 inline ml-2 ${isOpenDeclaracionOrigenFondos ? 'transform rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={isOpenDeclaracionOrigenFondos ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'}
                                />
                            </svg>
                        </h2>
                        {isOpenDeclaracionOrigenFondos && (
                            <div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="Yo" className="block text-sm font-medium text-gray-700">Yo:</label>
                                        <input
                                            type="text"
                                            id="Yo"
                                            name="Yo"
                                            value={formData.Yo}
                                            onChange={handleChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="identificado" className="block text-sm font-medium text-gray-700">Identificado:</label>
                                        <select
                                            id="identificado"
                                            name="identificado"
                                            value={formData.identificado}
                                            onChange={handleChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        >
                                            <option value="">Seleccione una opción</option>
                                            <option value="C.C">C.C</option>
                                            <option value="T.I">T.I</option>
                                            <option value="RC">RC</option>
                                            <option value="C.E">C.E</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="NoIdn" className="block text-sm font-medium text-gray-700">No. Identificación:</label>
                                        <input
                                            type="text"
                                            id="NoIdn"
                                            name="NoIdn"
                                            value={formData.NoIdn}
                                            onChange={handleChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="CiudadIdn" className="block text-sm font-medium text-gray-700">Ciudad Identificación:</label>
                                        <input
                                            type="text"
                                            id="CiudadIdn"
                                            name="CiudadIdn"
                                            value={formData.CiudadIdn}
                                            onChange={handleChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="PersonaJuridica" className="block text-sm font-medium text-gray-700">Persona Jurídica:</label>
                                        <input
                                            type="text"
                                            id="PersonaJuridica"
                                            name="PersonaJuridica"
                                            value={formData.PersonaJuridica}
                                            onChange={handleChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="DeclNit" className="block text-sm font-medium text-gray-700">Declaración NIT:</label>
                                        <input
                                            type="text"
                                            id="DeclNit"
                                            name="DeclNit"
                                            value={formData.DeclNit}
                                            onChange={handleChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="ActividadesComerciales" className="block text-sm font-medium text-gray-700">Actividades Comerciales:</label>
                                        <input
                                            type="text"
                                            id="ActividadesComerciales"
                                            name="ActividadesComerciales"
                                            value={formData.ActividadesComerciales}
                                            onChange={handleChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="OrigenDeRecursos" className="block text-sm font-medium text-gray-700">Origen de Recursos:</label>
                                        <input
                                            type="text"
                                            id="OrigenDeRecursos"
                                            name="OrigenDeRecursos"
                                            value={formData.OrigenDeRecursos}
                                            onChange={handleChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="bg-white shadow-md rounded-md p-4 mb-4">
                        <h2 className="text-lg font-bold mb-2 cursor-pointer" onClick={toggleRelacionAccionistas}>
                            RELACIÓN DE ACCIONISTAS O ASOCIADOS QUE TENGAN DIRECTA O INDIRECTAMENTE MÁS DEL 5% DEL CAPITAL SOCIAL, APORTE O PARTICIPACIÓN
                            <svg
                                className={`h-5 w-5 inline ml-2 ${isOpenRelacionAccionistas ? 'transform rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={isOpenRelacionAccionistas ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'}
                                />
                            </svg>
                        </h2>
                        {isOpenRelacionAccionistas && (
                            <div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="NombreAccionistaSocio" className="block text-sm font-medium text-gray-700">Nombre Accionista/Socio:</label>
                                        <input
                                            type="text"
                                            id="NombreAccionistaSocio"
                                            name="NombreAccionistaSocio"
                                            value={formData.NombreAccionistaSocio}
                                            onChange={handleChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="TipoNoIdn" className="block text-sm font-medium text-gray-700">Tipo No. Identificación:</label>
                                        <input
                                            type="text"
                                            id="TipoNoIdn"
                                            name="TipoNoIdn"
                                            value={formData.TipoNoIdn}
                                            onChange={handleChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="PorcentajeParticipacion" className="block text-sm font-medium text-gray-700">Porcentaje de Participación:</label>
                                        <input
                                            type="text"
                                            id="PorcentajeParticipacion"
                                            name="PorcentajeParticipacion"
                                            value={formData.PorcentajeParticipacion}
                                            onChange={handleChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="ManejaRecursosPublicos" className="block text-sm font-medium text-gray-700">Maneja Recursos Públicos:</label>
                                        <input
                                            type="text"
                                            id="ManejaRecursosPublicos"
                                            name="ManejaRecursosPublicos"
                                            value={formData.ManejaRecursosPublicos}
                                            onChange={handleChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="ReconocimientoPublico" className="block text-sm font-medium text-gray-700">Reconocimiento Público:</label>
                                        <input
                                            type="text"
                                            id="ReconocimientoPublico"
                                            name="ReconocimientoPublico"
                                            value={formData.ReconocimientoPublico}
                                            onChange={handleChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="ExisteYinculoentrePEP" className="block text-sm font-medium text-gray-700">Existe Vínculo entre PEP:</label>
                                        <input
                                            type="text"
                                            id="ExisteYinculoentrePEP"
                                            name="ExisteYinculoentrePEP"
                                            value={formData.ExisteYinculoentrePEP}
                                            onChange={handleChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="bg-white shadow-md rounded-md p-4 mb-4">
                        <h2 className="text-lg font-bold mb-2 cursor-pointer" onClick={toggleTratamientoDatos}>
                            TRATAMIENTO DE DATOS PERSONALES – HABEAS DATA
                            <svg
                                className={`h-5 w-5 inline ml-2 ${isOpenTratamientoDatos ? 'transform rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={isOpenTratamientoDatos ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'}
                                />
                            </svg>
                        </h2>
                        {isOpenTratamientoDatos && (
                            <div>
                                <p><Tratamiento/></p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <label htmlFor="DiasCons" className="block text-sm font-medium text-gray-700">Días de Constitución:</label>
                                        <input
                                            type="text"
                                            id="DiasCons"
                                            name="DiasCons"
                                            value={formData.DiasCons}
                                            onChange={handleChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="MesCons" className="block text-sm font-medium text-gray-700">Mes de Constitución:</label>
                                        <input
                                            type="text"
                                            id="MesCons"
                                            name="MesCons"
                                            value={formData.MesCons}
                                            onChange={handleChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="AñoCons" className="block text-sm font-medium text-gray-700">Año de Constitución:</label>
                                        <input
                                            type="text"
                                            id="AñoCons"
                                            name="AñoCons"
                                            value={formData.AñoCons}
                                            onChange={handleChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>


                    <div className="flex justify-center mt-6">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Actualizar Formulario</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Formulario;