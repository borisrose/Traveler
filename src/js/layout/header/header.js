import anchor from "../../components/anchor/anchor";

export default function () {
    return `
        <header>
            ${anchor({ href: "", textContent: "Traveler"})}
            <nav>
                ${anchor({ href: "", textContent: "Home"})}
                ${anchor({ href: "#login", textContent: "Login"})}
            </nav>
        </header>
    `
}