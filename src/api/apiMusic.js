import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://deezerdevs-deezer.p.rapidapi.com/',
    headers: {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "2538d3fed1mshc98063e5aecf172p1c2f99jsn3eb2d546677e"
    }
})


export const radioAPI = {
    getTrack(searchResult) {
        return instance.get(`search?q=${searchResult}`)
            // .then(response => {
            //     // console.log(response);
            //     return response.data;
            // })
            .catch(err => {
                console.log(err);
            });
    }
}
