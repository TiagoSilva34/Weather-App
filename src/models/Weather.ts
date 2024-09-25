export interface Weather {
    location: {
        name: string
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
}