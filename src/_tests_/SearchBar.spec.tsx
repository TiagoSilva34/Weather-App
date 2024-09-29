import SearchBar from "../components/SearchBar/index"
import {fireEvent, render} from "@testing-library/react"

describe("SearchBar", () => {
    it("should render SearchBar component", () => {
        render(<SearchBar />)
    })

    it("should check if input locale is empty when SearchBar component is rended", () => {
        const { getByPlaceholderText } = render(<SearchBar />)

        const cityName = getByPlaceholderText('Digite a localidade')

        expect(cityName.getAttribute("value")).toBe("")
    })

    it("should check if input city receive value", () => {
        const { getByPlaceholderText } = render(<SearchBar />)

        const cityName = getByPlaceholderText('Digite a localidade')

        fireEvent.change(cityName, {target: {value: "Paracambi"}})

        expect(cityName.getAttribute("value")).toEqual("Paracambi")
    })
})