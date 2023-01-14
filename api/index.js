import axios from "axios"

export const getPlacesData = async (lat, long, type) => {
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-by-latlng`,
            {
                params: {
                    latitude: lat ? lat : '23.259933',
                    longitude: long ? long : '77.412613',
                    limit: '10',
                    distance: '2',
                    open_now: 'false',
                    lunit: 'km',
                    lang: 'en_US'
                },
                headers: {
                    'X-RapidAPI-Key': 'd4451b90c5msh95ae2498a3f8bc7p12f218jsn9e33fd597c17',
                    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                },
            },
        )
        return data
    } catch (error) {
        return null
    }
}