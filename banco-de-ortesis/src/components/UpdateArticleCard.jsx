import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaRegTrashAlt } from "react-icons/fa";
import { deleteArticle } from '../services/ArticleService';
import { TbEdit } from "react-icons/tb";
import { MdFindInPage } from "react-icons/md";


export default function UpdateArticleCard({ product }) {
    const navigate = useNavigate();

    if (!product) return null;

    const { name, creationDate, category, imageURL, idProduct } = product;

    const deleteProduct = async (e) => {
        e.preventDefault();
        console.log('Se borrara el id: ' + idProduct);
        try {
            await deleteArticle(idProduct);
            alert('borrado correctamente')
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='flex items-center w-full gap-2 bg-transparent border-solid border border-greenAccent rounded-xl h-32'>
            <div className='h-full w-36 flex-nowrap flex-shrink-0 rounded-xl border border-solid border-greenAccent'>
                <img className='h-full w-full rounded-xl' src={imageURL != '' ? imageURL : '/img/product.png'} alt={category} />
            </div>
            <div className='flex-grow flex flex-col text-blueSecond items-center justify-center text-start gap-2 p-1 text-wrap'>
                <h3 className='self-start text-lg font-semibold leading-4'>{name}</h3>                
                <p className='text-sm w-full leading-4'>Fecha publicación: {creationDate}</p>
                <div className='flex w-full justify-evenly items-center text-sm text-blueSecond'>
                    <Link to={`/article/${idProduct}`}><MdFindInPage className='text-blueSecond' /></Link>
                    <Link to={`/update/${idProduct}`} state={{ product }}><TbEdit className='text-blueSecond' /></Link>
                    <FaRegTrashAlt onClick={deleteProduct}  className='text-blueSecond'/>
                </div>
            </div>
        </div>
    )

}
