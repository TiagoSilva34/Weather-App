import WeatherCard from "../components/WeatherCard/index"
import { render } from "@testing-library/react"
import axios from "axios"

// Mocking axios
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe("WeatherBar Component", () => {
    it("should render WeatherBard", () => {
        render(<WeatherCard />)
    })

    it("should fetch weather data", async() => {
        const params = {
            lang: 'pt',
            key: '693665a4e54c4be3973160204242409',
            aqi: 'no',
            q: 'São Paulo'
        }

        mockedAxios.get.mockResolvedValue({
            data: {
                current: {
                    cloud: 18
                }
            }
        })

        const url = "https://api.weatherapi.com/v1/current.json"

        const weather = await axios.get(url, {
            params
        }) 

        expect(weather.data.current.cloud).toEqual(18)
    })
})