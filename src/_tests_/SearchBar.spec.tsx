import SearchBar from "../components/SearchBar/index"
import { fireEvent, render } from "@testing-library/react"

describe("SearchBar Component", () => {
    it("should render SearchBard", () => {
        render(<SearchBar />)
    })

    it("should check form value is empty when component render", () => {
        const { getByPlaceholderText} = render(<SearchBar />)

        const inputCityName = getByPlaceholderText("Digite a localidade")

        const value = inputCityName.getAttribute("value")

        expect(value).toEqual("")
    })

    it("should check input form value is changing", () => {
        const { getByPlaceholderText } = render(<SearchBar />)
        
        const inputCityName = getByPlaceholderText("Digite a localidade")

        fireEvent.change(inputCityName, {target: { value: "Rio de Janeiro" }})

        const value = inputCityName.getAttribute("value")

        expect(value).toEqual('Rio de Janeiro')
    })
})