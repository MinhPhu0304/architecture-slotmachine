import { backendTechs, databases, frontEndTechs } from './constants'

const startBtn = document.getElementById('start')

startBtn.addEventListener('click', showArchitecture)

function showArchitecture () {
    const backEndIndex = Math.floor(Math.random() * Math.floor(backendTechs.length))
    console.log(backendTechs[backEndIndex])
    const frontEnd = Math.floor(Math.random() * Math.floor(frontEndTechs.length))
    console.log(frontEndTechs[frontEnd])
    const database = Math.floor(Math.random() * Math.floor(databases.length))
    console.log(databases[database])
}   