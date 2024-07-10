import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [url, setUrl] = useState('');
    const [uuid, setUuid] = useState('');

    const generateURL = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/generate-url');
            const generatedUrl = response.data.url;
            setUrl(generatedUrl);

            // Extraer y guardar el UUID desde la URL generada
            const uuidFromUrl = generatedUrl.substring(generatedUrl.lastIndexOf('/') + 1);
            setUuid(uuidFromUrl);
        } catch (error) {
            console.error('Error al generar URL:', error);
        }
    };

    return (
        <div className="max-w-2xl mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4">Generación y Actualización de Formulario</h1>
            <button
                onClick={generateURL}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Generar URL
            </button>
            {url && (
                <div className="mt-4 space-y-2">
            
                    <p>Acciones:</p>
                    <div className="space-x-4">
                        <Link to={`/formulario/${uuid}`} className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500">
                            Link Formulario
                        </Link>
                     
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;