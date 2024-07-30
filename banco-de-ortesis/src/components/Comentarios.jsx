import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthProvider'; // Asegúrate de que tienes este hook
import { getComments, addComment } from '../services/CommentService'; // Asegúrate de que tienes estos servicios

const Comentarios = ({ productId }) => {
  const auth = useAuth();
  const [comentarios, setComentarios] = useState([]);
  const [texto, setTexto] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const comments = await getComments(productId);
        setComentarios(comments);
      } catch (error) {
        console.error('Error al obtener los comentarios', error);
      }
    };

    fetchComments();
  }, [productId]);

  const agregarComentario = async (e) => {
    e.preventDefault();
    if (auth.user && texto) {
      const nuevoComentario = { 
        usuario: auth.user.name, 
        texto, 
        productId 
      };
      try {
        const savedComment = await addComment(nuevoComentario);
        setComentarios([...comentarios, savedComment]);
        setTexto('');
      } catch (error) {
        console.error('Error al agregar el comentario', error);
      }
    }
  };

  return (
    <div>
      {auth.isAuthenticated ? (
        <form onSubmit={agregarComentario} className="bg-gray-100 p-4 border rounded shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-4">Deja un comentario</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Comentario</label>
            <textarea
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              className="w-full p-2 border rounded h-32"
              rows="8"
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
      ) : (
        <p className="text-red-500">Debes estar autenticado para dejar un comentario.</p>
      )}
      
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
