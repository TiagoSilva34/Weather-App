export const validateDateAndTime = (value: string) => {
    const date = new Date(value)

    const dateFormatted = date.toLocaleString()

    return dateFormatted
}

export const validateDaysDate = (value: string) => {
    const date = new Date(value)

    const getDay = new Intl.DateTimeFormat('pt-BR', {
        weekday: "long"
    }).format(date)

    return getDay
}