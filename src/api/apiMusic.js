import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://deezerdevs-deezer.p.rapidapi.com/',
    headers: {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "a665f6016dmsh72edd70fb812d92p110515jsnaa7905e42e05"
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
