import PokemonCard from "./PokemonCard"
function PokemonGrid({images}) {
    return (
        <div>
            {images.map((image, index) => (
               <img 
                src={image}
                key={index}
               />
            ))}
        </div>

    )

}

export default PokemonGrid; 