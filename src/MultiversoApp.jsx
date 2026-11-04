import { useState } from "react";
import { usePersonajes } from "./hooks/usePersonajes";
import { PersonajeList } from "./components/PersonajeList";
import { FavoritesPanel } from "./components/FavoritesPanel";

export const MultiversoApp = () => {
    
    const { personajes, isLoading, error } = usePersonajes();


    const [favoritos, setFavoritos] = useState([]);

   
    const onToggleFavorito = (personaje) => {
        const yaEsFavorito = favoritos.some((f) => f.id === personaje.id);

        if (yaEsFavorito) {
            setFavoritos(favoritos.filter((f) => f.id !== personaje.id));
        } else {
            setFavoritos([...favoritos, personaje]);
        }
    };

    const onQuitarFavorito = (id) => {
        setFavoritos(favoritos.filter((f) => f.id !== id));
    };

    return (
        <div>
            <h1>Rick and Morty Universo</h1>

            <div className="layout">
                {isLoading && <p className="mensaje">Cargando...</p>}

                {error && <p className="mensaje error">Error: {error}</p>}

                {!isLoading && !error && (
                    <PersonajeList
                        personajes={personajes}
                        favoritos={favoritos}
                        onToggleFavorito={onToggleFavorito}
                    />
                )}

                <FavoritesPanel favoritos={favoritos} onQuitar={onQuitarFavorito} />
            </div>
        </div>
    );
};
