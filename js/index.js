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
    clearChildNode(resultContainer)

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

    const frontEndDiv = document.createElement('div')
    frontEndDiv.appendChild(frontEndTitleTxtNode)
    frontEndDiv.appendChild(frontEndTxtNode)

    const backendDiv = document.createElement('div')
    backendDiv.appendChild(backEndTitleTxtNode)
    backendDiv.appendChild(backEndTxtNode)

    const databaseDiv = document.createElement('div')
    databaseDiv.appendChild(DatabaseTitleTxtNode)
    databaseDiv.appendChild(databaseTxtNode)

    const docFragment = document.createDocumentFragment()
    docFragment.appendChild(frontEndDiv)
    docFragment.appendChild(backendDiv)
    docFragment.appendChild(databaseDiv)

    resultContainer.appendChild(docFragment)
}

function clearChildNode (node) {
    while(node.firstChild) {
        node.firstChild.remove()
    }
}
