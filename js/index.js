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
    while(resultContainer.firstChild) {
        resultContainer.firstChild.remove()
    }

    //Titles
    const frontEndTitleTxtNode = document.createElement('h3')
    frontEndTitleTxtNode.textContent = 'Frontend'
    const backEndTitleTxtNode = document.createElement('h3')
    backEndTitleTxtNode.textContent= 'Backend'
    const DatabaseTitleTxtNode = document.createElement('h3')
    DatabaseTitleTxtNode.textContent = 'Database'


    //Slot Machine Content
    const frontEndTxtNode = document.createElement('h3')
    frontEndTxtNode.textContent = frontend

    const backEndTxtNode = document.createElement('h3')
    backEndTxtNode.textContent = backend

    const databaseTxtNode = document.createElement('h3')
    databaseTxtNode.textContent = database

    const docFragment = document.createDocumentFragment()
    docFragment.appendChild(frontEndTxtNode)
    docFragment.appendChild(backEndTxtNode)
    docFragment.appendChild(databaseTxtNode)

    resultContainer.appendChild(docFragment)
}