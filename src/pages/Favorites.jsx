import '../css/Favorites.css'
import MovieCard from '../components/MovieCard'
import { useMovieContext } from '../contexts/MovieContext'

function Favorites() {
    const { favorites } = useMovieContext();

    if (!favorites) return <div>Loading...</div>; 

    return (
        <div className="favorites">
            <h2>Your Watchlist</h2>
            {favorites.length > 0 ? (
                <div className="movies-grid">
                    {favorites.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            ) : (
                <span className="favorites-empty">
                    <h2>Watchlist is empty</h2>
                    <p>Start adding movies to your watchlist and they will appear here</p>
                </span>
            )}
        </div>
    );
}

export default Favorites;
