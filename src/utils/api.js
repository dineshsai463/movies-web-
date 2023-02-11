import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTAxMGUyNjY4NTBkZDRkZDMyOWFlYzU0NTQ0OTE3NiIsInN1YiI6IjYzZTBhMTgyODc0MWM0MDBjN2YyZmI0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a_6ziqf45mSC9PtaPdCl2JT9sVR-GzhH7_lt_PKy0mw";

const headers ={
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async(url,params) => {
    try {
        const {data} = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err){
        console.log(err);
        return err;
    }
};