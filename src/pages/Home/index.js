
import {useEffect, useState} from 'react';
import api from '../../services/api';
// URL da API /movie/noew_playing?api_key=eaeef3a28bea6fa712dcb443c4340d9e=pt=BR


function Home(){
    const[filmes, setFilmes]= useState([]);

    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get("movie/noew_playing", {
                params:{
                    api_key:"eaeef3a28bea6fa712dcb443c4340d9e",
                    language: "pt-BR",
                    page:1,
                }
            });
            console.log(response);
        }
        loadFilmes();
    });
    return(
        <div>
            <h1>Bem-vindo a Home</h1>
        </div>
    )
}

export default Home;