//*base URL https://api.themoviedb.org/3/
//*/movie/noew_playing?api_key=eaeef3a28bea6fa712dcb443c4340d9e=pt=BR

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;