import { PersonajeCard } from "./PersonajeCard";

export const PersonajeList = ({ personajes, favoritos, onToggleFavorito }) => {
    return (
        <div className="grid">
            {personajes.map((personaje) => (
                <PersonajeCard
                    key={personaje.id}
                    {...personaje}
                    esFavorito={favoritos.some((f) => f.id === personaje.id)}
                    onToggleFavorito={onToggleFavorito}
                />
            ))}
        </div>
    );
};
