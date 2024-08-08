import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import { addComment, getComments } from '../services/CommentService';

export default function Comments() {
    const { id } = useParams();
    const { user } = useAuth();
    const [comentarios, setComentarios] = useState([]);
    const [texto, setTexto] = useState('');

    const fetchComments = async () => {
        try {
            const comments = await getComments(id);
            setComentarios(comments);
        } catch (error) {
            console.error('Error al obtener comentarios:', error);
        }
    };
    useEffect(() => {

        fetchComments();
    }, [id]);

    const agregarComentario = async (e) => {
        e.preventDefault();
        if (user && texto) {
            const nuevoComentario = {
                id_user: user.id_user,
                id_product: id,
                description: texto,
                creationDate: new Date().toISOString()
            };
            try {
                // Aquí iría la lógica para enviar el comentario a la API
                await addComment(nuevoComentario); // Suponiendo que tienes una función postComment para enviar el comentario a la API
                fetchComments();
                setTexto('');
            } catch (error) {
                console.error('Error al agregar comentario:', error);
            }
        }
    };

    return (
        <div>
            <form onSubmit={agregarComentario} className="bg-gray-100 p-4 border rounded shadow-sm mb-6">
                <h2 className="text-xl font-semibold mb-4">Deja un comentario</h2>
                <div className="mb-4">
                    <textarea
                        value={texto}
                        onChange={(e) => setTexto(e.target.value)}
                        className="w-full p-2 border rounded"
                        rows="4"
                        placeholder="Escribe tu comentario aquí..."
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-[#1F7A8C] text-white py-2 px-4 rounded hover:bg-[#1F7A8C]"
                >
                    Enviar
                </button>
            </form>

            <div className="space-y-4">
                {comentarios.map((comentario, index) => (
                    <div key={index} className="bg-white p-4 border rounded shadow-sm">
                        <div className="font-semibold text-lg">{comentario.user.name} {comentario.user.lastName}</div>
                        <p className="mt-2">{comentario.description}</p>
                        <small>{comentario.creationDate[0]}/{comentario.creationDate[1]}/{comentario.creationDate[2]}</small>
                    </div>
                ))}
            </div>
        </div>
    );
}

