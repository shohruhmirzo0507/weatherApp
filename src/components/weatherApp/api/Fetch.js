import React from 'react'
import axios from 'axios'

const URL = "https://api.openweathermap.org/data/2.5/weather"
const API_Key = "4e97f597e0c45783d273c67268ba2b85"

export const Fetch = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: "metric",
            APPID: API_Key,
        }
    })
    return data;
}






