import axios from 'axios'
function myfn(response){
    return
}
export const search = (query) => dispatch => {
    const url = `https://viacep.com.br/ws/${query}/json/?callback=myfn`
    axios.get(url)
        .then(response => function myfn(response){
            console.log(response)
            dispatch({
                type: 'SEARCH',
                payload: response
            })
        })
        .catch(error => {
            throw(error);
        })

}
export const searchMap = (query) => dispatch => {
    const api_key = 'AIzaSyBUGaS0efFIvUFPVuewFUrASUSf_1n0QYw'
    const urlMaps = `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${api_key}`
    return (
        axios.get(urlMaps)
            .then(response => {
                dispatch({
                    type: 'SEARCH_MAP',
                    payload: response.data.results[0].geometry.location
                })
            })
            .catch(error => {
                throw(error);
            })
    )
}