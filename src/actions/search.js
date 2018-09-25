import axios from 'axios'

export const search = (query) => dispatch => {
    const url = `https://viacep.com.br/ws/${query}/json/?callback=myfn`
    return (
        axios.get(url).then(response => {
            dispatch({
                type: 'SEARCH',
                payload: response.data
            })
        }).catch(error => {
            throw(error);
        })
    )
}
