import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaRegTrashAlt } from "react-icons/fa";
import { deleteArticle } from '../services/ArticleService';

export default function UpdateArticleCard({ product }) {
    const navigate = useNavigate();

    if (!product) return null;

    const { name, creationDate, category, img, id } = product;

    const deleteProduct = async (e) => {
        e.preventDefault();
        console.log('Se borrara el id: ' + id);
        try {
            await deleteArticle(id);
            alert('borrado correctamente')
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='flex items-center w-full gap-2 bg-stone-300 rounded-xl h-32'>
            <img className='h-full w-40 object-cover rounded-xl' src={img != '' ? img : '/img/product.png'} alt={category} />
            <div className='flex-grow flex flex-col text-black items-center justify-center text-start gap-2 p-2 text-wrap'>
                <h3 className='self-start text-lg'>{name}</h3>
                <p className='text-sm w-full'>Fecha publicación: {creationDate}</p>
                <div className='flex w-full justify-evenly items-center text-sm'>
                    <Link to={`/article/${id}`}>Ver Publicación</Link>
                    <Link to={`/update/${id}`} state={{ product }}>Modificar</Link>
                    <FaRegTrashAlt onClick={deleteProduct} />
                </div>
            </div>
        </div>
    )

}
