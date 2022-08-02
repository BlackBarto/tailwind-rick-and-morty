import {btnAddCharacters, insertCharacters, getCharacters} from "./insert_characters.js"

const ulNav = document.getElementById("nav-ul")
const btnTheme = document.getElementById("change-theme")
const btnRes = document.getElementById("res-btn")
const icons = btnRes.querySelectorAll("i")

const toggleTheme = (alternate = false) => {
    document.documentElement.classList.toggle("dark")
    if (alternate) {
        localStorage.hasOwnProperty("theme") ? localStorage.removeItem("theme") : localStorage.setItem("theme", "dark")
    }
}

window.addEventListener("load", () => {
    // Enable the dark theme if the user has this preference or has alredy visited this site and cofigure the theme like this
    if (localStorage.theme || matchMedia("(prefers-color-scheme: dark)").matches) {
        toggleTheme()
    }

    getCharacters()
})

btnTheme.addEventListener("click", () => toggleTheme(true) )

btnAddCharacters.addEventListener("click", getCharacters)

btnRes.addEventListener("click", () => {
    icons.forEach(icon => icon.classList.toggle("hidden"))
    ulNav.classList.toggle("translate-x-full")
})
