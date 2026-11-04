import { useEffect, useState } from "react";
import { fetchPersonajes } from "../services/fetchPersonajes";

export const usePersonajes = () => {
    const [personajes, setPersonajes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    
    useEffect(() => {
        const getPersonajes = async () => {
            try {
                const nuevosPersonajes = await fetchPersonajes();
                setPersonajes(nuevosPersonajes);
            } catch (err) {
                setError("Aun no has marcado favoritos");
            } finally {
                setIsLoading(false);
            }
        };
        getPersonajes();
    }, []);

    return { personajes, isLoading, error };
};
