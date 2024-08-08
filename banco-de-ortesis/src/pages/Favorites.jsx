import React, { useContext, useEffect, useState } from 'react'
import { useAuth } from '../context/AuthProvider';
import ProductCard from '../components/ProductCard';
import { getFavorites } from '../services/FavoritesService';
import ProductsContext from '../context/ProductsProvider';

export default function Favorites() {
    const [favoritesList, setFavoritesList] = useState([]);
    const auth = useAuth();
    const {favorites} = useContext(ProductsContext);
    if(!auth.isAuthenticated) return null;
    // const {favoritesList} = auth.user
    useEffect(()=>{
        if(auth.isAuthenticated){
            setFavoritesList(favorites);
        }
    },[])
    console.log('favoritos', favoritesList);

    return (
        <div className='flex flex-col w-full items-center p-4 mb-20'>
            <h1 className="text-lg self-start font-bold">Lista de Favoritos</h1>
            <div className='flex w-full h-screen flex-col gap-3 text-center'>
                {favoritesList && favoritesList.length > 0 ?
                favoritesList.map(favorite => ( <ProductCard key={favorite.id_favorites} product={favorite.product} favoriteId={favorite.id_favorites} /> ))
            :
            <h2>Aun no hay favoritos</h2>
                }
            </div>
        </div>
    )
}
