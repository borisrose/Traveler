import button from "./button.js"
import { screen } from "@testing-library/dom"
import "@testing-library/jest-dom"
import Button from "../../models/button.model.js"

describe("Button Test Suite", () => {
    beforeAll(() => {
        const btnData = {
            id: "login-button",
            textContent: "Se connecter",
            classNames: "custom-button",
            type: "submit",
        }
        document.body.innerHTML = button(new Button(btnData))
    })

    test("should have a button", () => {
        expect(screen.getByRole("button")).toBeTruthy()
    })
})