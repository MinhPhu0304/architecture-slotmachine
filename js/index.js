import { backendTechs, databases, frontEndTechs } from './constants'

const startBtn = document.getElementById('start')

startBtn.addEventListener('click', showArchitecture)

function showArchitecture () {
    const backEndIndex = Math.floor(Math.random() * Math.floor(backendTechs.length))
    const frontEnd = Math.floor(Math.random() * Math.floor(frontEndTechs.length))
    const database = Math.floor(Math.random() * Math.floor(databases.length))
    renderResult(backendTechs[backEndIndex], frontEndTechs[frontEnd], databases[database])
}

function renderResult (backend, frontend, database) {
    const [resultContainer] = document.getElementsByClassName('result-container')
    const frontEndTxtNode = document.createElement('p')
    frontEndTxtNode.textContent = frontend

    const backEndTxtNode = document.createElement('p')
    backEndTxtNode.textContent = backend
    const databaseTxtNode = document.createElement('p')
    databaseTxtNode.textContent = database
    const docFragment = document.createDocumentFragment()
    docFragment.appendChild(frontEndTxtNode)
    docFragment.appendChild(backEndTxtNode)
    docFragment.appendChild(databaseTxtNode)

    resultContainer.appendChild(docFragment)
}