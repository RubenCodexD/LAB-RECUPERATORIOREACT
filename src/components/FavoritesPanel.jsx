export const FavoritesPanel = ({ favoritos, onQuitar }) => {
    return (
        <aside className="favoritos">
            <h3>Favoritos ({favoritos.length})</h3>

            {favoritos.length === 0 ? (
                <p>aun no has marcado favoritos</p>
            ) : (
                <ul>
                    {favoritos.map((favorito) => (
                        <li key={favorito.id}>
                            <img src={favorito.image} alt={favorito.name} />
                            <span>{favorito.name}</span>
                            <button onClick={() => onQuitar(favorito.id)}>Quitar</button>
                        </li>
                    ))}
                </ul>
            )}
        </aside>
    );
};
