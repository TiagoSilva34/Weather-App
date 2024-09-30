export interface Weather {
    location: {
        region: string
        localtime: string
    }
    current: {
        temp_c: number
        condition: {
            text: string
            icon: string
        }
        wind_mph: number
        cloud: number
        feelslike_c: number
        humidity: number
    }
    forecast: {
        forecastday: [
            {
                date: string 
                day: {
                    maxtemp_c: number 
                    mintemp_c: number
                    condition: {
                        text: string
                        icon: string
                    }
                }
            }
        ]
    }
}

export type ForecastPick = Pick<Weather, 'forecast'>