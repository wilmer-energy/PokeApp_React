import React from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {useState,useEffect} from 'react'

const PokemonCard = ({urls}) => {
    const navigate =useNavigate()
    const [types, setTypes] = useState(["normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel", "fire", "water", "grass", "electric", "psychic", "ice", "dragon", "dark", "fairy"])
    const [color, setColor] = useState(["#fae588", "#b23a48", "#52b69a", "#c77dff", "#bc6c25", "#b07d62", "#dde5b6", "#efefef", "#939190", "#ff6000", "#ade8f4", "#538d22", "#9ffff5", "#ffc599", "#daeef2", "#c6c013", "#312244", "#ffccd5"])
    const [pokemon, setPokemon] = useState({});
    useEffect(() => {
        axios.get(urls.pokemon.url).then((res) => {
            setPokemon(res.data)
        });
    }, []);

    function showDetails(){
navigate(`/pokedex/${pokemon.id}`)
    }

    return (
        
        <div className="card" style={{background: `${color[types.indexOf(`${pokemon.types?.[0].type.name}`)]}`}} onClick={showDetails}>
            <div>
            <h1>{pokemon.name}</h1>
            <div>
                <ul>
                    <li>Weight:  <span>{pokemon.weight}</span></li>
                    <li>Height: <span>{pokemon.height}</span></li>
                    <li>Type: 
                    {pokemon.types?.map((e)=>{
                        return(<span key={e.type.name}> {e.type.name}  </span>)
                    })}
                        </li>
                </ul>

            </div>
            <button >Convert to meters</button><br />
            </div>
            
            <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
        </div>
       
    
    );
};

export default PokemonCard;