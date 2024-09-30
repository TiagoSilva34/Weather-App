import { BASE_URL } from "./configApi";

let weatherCache: any = {
  url: ''
}
let forecastCache = {
  url: ''
}

export const fetchWeatherData = async(locale: string) => {
    try {
        if (weatherCache.url) {
          return weatherCache.url
        } else {
        const URL = `/current.json`
        const { data } = await BASE_URL.get(URL, {
            params: {
                lang: 'pt',
                key: import.meta.env.VITE_API_KEY,
                aqi: 'no',
                q: locale
            }
        })

        weatherCache.url = data
        
        return data
        }
    } catch (error: any) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log(error.message);
          }
          console.log(error.config);
    }
}

export const fetchForecastData = async(locale: string) => {
    try {
        if (forecastCache.url) {
          return forecastCache.url
        } else {
          const URL = `/forecast.json`
          const { data } = await BASE_URL.get(URL, {
              params: {
                  lang: 'pt',
                  days: '7',
                  key: import.meta.env.VITE_API_KEY,
                  aqi: 'no',
                  alerts: 'no',
                  q: locale
              }
          })

          return data
        }
    } catch (error: any) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log(error.message);
          }
          console.log(error.config);
    }
}