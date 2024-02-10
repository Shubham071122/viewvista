import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

// const TMBD_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const TMBD_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODJjODJhYzY5ZTg2YTEwYmM4ZmJmMDBjZjJjNjA3YSIsInN1YiI6IjY1YmJlZmE4ZjAzMTc0MDE3YzY3ZmQ1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3fZoot8zmLnWsQCa8YVavbkR3mZHaJqOl8ECROZxuqo";


const headers = {
    Authorization: "bearer " + TMBD_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try{
        const {data} = await axios.get(BASE_URL + url, {
            headers,
            params
        })
        return data;

    }catch(err){
        console.log(err);
        return err;
    }
}