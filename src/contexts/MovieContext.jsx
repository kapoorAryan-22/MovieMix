import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem("favorites")) || [];
        } catch {
            return [];
        }
    });

   
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const addToFavorites = (movie) => {
        setFavorites((prev) => {
            if (prev.some((fav) => fav.id === movie.id)) return prev; 
            return [...prev, movie];
        });
    };

    const removeFromFavorites = (movieId) => {
        setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
    };

    const isFavorite = (movieId) => favorites.some((movie) => movie.id === movieId);

    return (
        <MovieContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}>
            {children}
        </MovieContext.Provider>
    );
};
