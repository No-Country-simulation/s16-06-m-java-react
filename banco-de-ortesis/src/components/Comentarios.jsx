import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getComments } from '../services/CommentService';
import { useAuth } from '../context/AuthProvider';

const Comentarios = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [comentarios, setComentarios] = useState([]);
  const [texto, setTexto] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const comments = await getComments(id);
        setComentarios(comments);
      } catch (error) {
        console.error('Error al obtener comentarios:', error);
      }
    };

    fetchComments();
  }, [id]);

  const agregarComentario = async (e) => {
    e.preventDefault();
    if (user && texto) {
      const nuevoComentario = { usuario: user.name, texto };
      // Aquí iría la lógica para enviar el comentario a la API
      setComentarios([...comentarios, nuevoComentario]);
      setTexto('');
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
            <div className="font-semibold text-lg">{comentario.usuario}</div>
            <p className="mt-2">{comentario.texto}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comentarios;
