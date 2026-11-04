const url = "https://rickandmortyapi.com/api/character";

export const fetchPersonajes = async () => {
    const respuesta = await fetch(url);

   
    if (!respuesta.ok) {
        throw new Error(`Error ${respuesta.status} al consultar la API`);
    }

    
    const { results = [] } = await respuesta.json();

    
    const personajes = results.map((p) => ({
        id: p.id,
        name: p.name,
        status: p.status,
        species: p.species,
        image: p.image,
    }));

    return personajes;
};
