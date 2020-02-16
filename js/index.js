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
    const frontEndTitleTxtNode = createTextElement('h3', 'Frontend')
    const backEndTitleTxtNode = createTextElement('h3', 'Backend')
    const DatabaseTitleTxtNode = createTextElement('h3', 'Database')

    //Slot Machine Content
    const frontEndTxtNode = createTextElement('h3', frontend)

    const backEndTxtNode = createTextElement('h3', backend)
    const databaseTxtNode = createTextElement('h3', database)

    const frontEndDiv = combineChildIntoDiv(frontEndTitleTxtNode,frontEndTxtNode)

    const backendDiv = combineChildIntoDiv(backEndTitleTxtNode,backEndTxtNode)

    const databaseDiv = combineChildIntoDiv(DatabaseTitleTxtNode,databaseTxtNode)

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

function createTextElement (tagName = 'p', content) {
    const element = document.createElement(tagName)
    element.textContent = content
    return element
}

function combineChildIntoDiv (...childs) {
   const container = document.createElement('div')

   childs.forEach((childNode) => container.appendChild(childNode))

   return container
}