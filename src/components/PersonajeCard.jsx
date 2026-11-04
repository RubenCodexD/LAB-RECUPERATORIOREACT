export const PersonajeCard = ({ id, name, status, species, image, esFavorito, onToggleFavorito }) => {
    return (
        <div className={esFavorito ? "card fav" : "card"}>
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p className={`estado estado-${status.toLowerCase()}`}>
                {status} - {species}
            </p>
            <button onClick={() => onToggleFavorito({ id, name, image })}>
                {esFavorito ? "★ Quitar de favoritos" : "☆ Agregar a favoritos"}
            </button>
        </div>
    );
};
