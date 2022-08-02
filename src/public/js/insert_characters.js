export const btnAddCharacters = document.getElementById("add-characters")
const charactersPlace = document.getElementById("characters-place")
const loadingAddCharacters = document.getElementById("loading-add-characters")
const loadingCharacters = document.getElementById("loading-characters")
let nextPage = "https://rickandmortyapi.com/api/character"

export const insertCharacters = characters => {
    const charactersFragment = new DocumentFragment()
    characters.forEach( ({name, status, img, origin, episodes, location, species}) => {
        const characterArticle = document.createElement("article")
        characterArticle.classList.add("flex", "flex-col", "items-center", "res:grid", "res:grid-cols-2", "res:grid-rows-desk-place", "bg-sky-200", "dark:bg-blue-700", "transition-colors", "duration-300", "border-2", "border-transparent", "hover:border-blue-700", "dark:hover:border-sky-200", "min-h-res-section", "res:min-h-0", "h-section-desk", "w-full", "max-w-lg", "res:max-w-full", "rounded")

        characterArticle.innerHTML = `
        <h4 class="order-1 res:order-none font-bold text-center self-center justify-self-center text-blue-700 dark:text-sky-200 px-5 text-2xl res:text-3xl row-span-1 col-start-1 col-end-2">${name}</h4>
        <p class="order-3 res:order-none self-center row-start-3 row-end-4 res:row-span-2 col-start-1 col-end-2 flex flex-col gap-y-3 res:h-4/5 px-5 py-4">
            <span class="block dark:text-white text-xl">Species: <b class="font-bold text-blue-700 dark:text-sky-200">${species}</b></span>
            <span class="block dark:text-white text-lg">Status: <b class="font-bold text-blue-700 dark:text-sky-200">${status}</b></span>
            <span class="block dark:text-white text-lg">Origin: <b class="font-bold text-blue-700 dark:text-sky-200">${origin}</b></span>
            <span class="block dark:text-white text-lg">Current localization: <b class="font-bold text-blue-700 dark:text-sky-200">${location}</b></span>
            <span class="block dark:text-white text-lg">Count of Episodes: <b class="font-bold text-blue-700 dark:text-sky-200">${episodes}</b></span>
        </p>
        <img src="${img}", alt="Image of ${name}" class="grow order-2 res:order-none res:col-start-2 res:col-end-3 res:row-start-1 res:row-end-3 res:h-full w-full object-cover">
        `

        charactersFragment.appendChild(characterArticle)
    })

    charactersPlace.insertBefore(charactersFragment, btnAddCharacters)
}

export const getCharacters = () => {
    if (!btnAddCharacters.classList.contains("hidden")) {
        btnAddCharacters.classList.add("hidden")
        loadingAddCharacters.classList.remove("hidden")
    }

    fetch(nextPage).then(res => res.json()).then( ({info: {next}, results}) => {
        nextPage = next
        const data = results.map(character => {
            return {
                name: character.name,
                status: character.status,
                species: character.species,
                img: character.image,
                location: character.location.name,
                origin: character.origin.name,
                episodes: character.episode.length
            }
        })
        if(!loadingCharacters.classList.contains("hidden")) loadingCharacters.classList.add("hidden")
        if(!loadingAddCharacters.classList.contains("hidden")) loadingAddCharacters.classList.add("hidden")
        btnAddCharacters.classList.remove("hidden")
        insertCharacters(data)
    })
}
