import React from 'react';
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react';
import axios from 'axios'
import pokeball from "../images/pokeball.png"
//import App from "./App.js"


const PokeDetails = () => {
    
    


    const { id } = useParams()
    const [types, setTypes] = useState(["normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel", "fire", "water", "grass", "electric", "psychic", "ice", "dragon", "dark", "fairy"])
    const [color, setColor] = useState(["#fae588", "#b23a48", "#52b69a", "#c77dff", "#bc6c25", "#b07d62", "#dde5b6", "#efefef", "#939190", "#ff6000", "#ade8f4", "#538d22", "#9ffff5", "#ffc599", "#daeef2", "#c6c013", "#312244", "#ffccd5"])
   
    const [pokemon, setPokemon] = useState({});
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => {
            setPokemon(res.data)
            console.log(res.data)
        });
    }, []);


    return (
        <div className='details' style={{background: `${color[types.indexOf(`${pokemon.types?.[0].type.name}`)]}`}}>
            <img src={pokeball} className="pokeball" alt="" />
            <div className='main'>
                <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
                <ul>
                    <li>Weigth: <span>{pokemon.weight}</span></li>
                    <li>Heigth: <span>{pokemon.height}</span></li>
                </ul>
                <h2>{pokemon.name}</h2>
                <span>#{id}</span>

            </div>

            <div className='type'>Type:
                <ul>
                    {pokemon.types?.map((e) => {
                        return (<li key={e.type.name} style={{background: `${color[types.indexOf(e.type.name)]}`}}>{e.type.name}</li>)
                    })}
                </ul>
            </div>
            <div className='abilities'>Abilities:
                <ul>
                    {pokemon.abilities?.map((e) => {
                        return (<li key={e.ability.name}>{e.ability.name}</li>)
                    })}
                </ul>

            </div>
            <br />
            <div className='movements'>
                <span>Movements: </span>
                <ul>
                    {pokemon.moves?.map((e) => {
                        return (<li key={e.move.name}>{e.move.name}</li>)
                    })}
                </ul>
            </div>
            <div className='stateBase'>
                state base:
                <ul>
                    <li>HP: <span>{pokemon.stats?.[0].base_stat}</span></li>
                    <li>Speed: <span>{pokemon.stats?.[5].base_stat}</span></li>
                    <li>Attack: <span>{pokemon.stats?.[1].base_stat}</span></li>
                    <li>Defense: <span>{pokemon.stats?.[2].base_stat}</span></li>
                </ul>
            </div>
            
            
            

        </div>
    );
};

export default PokeDetails;