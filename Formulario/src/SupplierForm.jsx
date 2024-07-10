import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Formulario = () => {
    const { uuid } = useParams();
    const [formData, setFormData] = useState({
        // Aquí van tus campos de formData
    });

    const [showModal, setShowModal] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Mostrar la modal de confirmación
        setShowModal(true);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const confirmSubmit = async () => {
        try {
            const response = await axios.put(`http://localhost:3000/api/formulario/${uuid}`, formData);
            console.log(response.data);
            // Mostrar mensaje de éxito o redireccionar a otra página
        } catch (error) {
            console.error('Error al actualizar formulario:', error.message);
            // Mostrar mensaje de error al usuario
        } finally {
            // Cerrar la modal después de enviar
            setShowModal(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-lg max-w-3xl w-full">
                <h2 className="text-2xl mb-4 text-center font-bold">Actualizar Formulario</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Otras secciones de tu formulario */}

                    {/* Botón de Submit con mensaje de confirmación */}
                    <div className="flex justify-center mt-6">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            Actualizar Formulario
                        </button>
                    </div>
                </form>

                {/* Modal de Confirmación */}
                {showModal && (
                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center">
                            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                            </div>

                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                            
                            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                                            <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <h3 className="text-lg font-medium text-gray-900">Confirmación</h3>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500">
                                                    Una vez enviado este formulario no podrás modificar la información ni podrás volver a llenarlo. ¿Estás seguro de enviarlo?
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <button
                                        type="button"
                                        onClick={confirmSubmit}
                                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                    >
                                        Enviar
                                    </button>
                                    <button
                                        type="button"
                                        onClick={closeModal}
                                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    >
                                        Cancelar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Formulario;
