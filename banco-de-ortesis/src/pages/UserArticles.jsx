import React, { useEffect, useState } from 'react'
import { getAllArticles } from '../services/ArticleService';
import { Link } from 'react-router-dom';
import UpdateArticleCard from '../components/UpdateArticleCard';

export default function UserArticles() {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const getUserProducts = async () => {
            const products = await getAllArticles();
            setProductList(products);
        }
        getUserProducts();
    }, []);

    if (!productList) return null;


    console.log('Productos usuario id: ', productList.length);
    return (<section className='flex flex-col w-full items-center p-4 mb-40'>
        {
            productList.length > 0 ? (
            <>
                <h1 className="text-lg self-start font-bold">Tus articulos</h1>
                <div className='flex w-full flex-col gap-3'>
                    {productList.map(product => (<UpdateArticleCard key={product.idProduct} product={product} />))}
                </div>
            </>
            )
                : (
                    <h1 className="text-xl self-center font-bold">Aun no tienes publicaciones</h1>
                )

        }
    </section>);
}
