import axios from "axios"

export const BASE_URL = axios.create({
    baseURL: "https://api.weatherapi.com/v1",
    headers: {
        "Content-Type": "application/json"
    }
})