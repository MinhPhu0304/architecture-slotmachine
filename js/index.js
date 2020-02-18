import { backendTechs, databases, frontEndTechs } from './constants'

import { combineChildIntoDiv, combineDOMObjectsToFragment, createTextElement, clearChildNode, getRandomIndexFromArray } from './utils'

const startBtn = document.getElementById('start')
let timmerId

startBtn.addEventListener('click', showArchitecture)

function showArchitecture() {
    const backEndIndex = getRandomIndexFromArray(backendTechs)
    const frontEnd = getRandomIndexFromArray(frontEndTechs)
    const database = getRandomIndexFromArray(databases)
    renderResult(backendTechs[backEndIndex], frontEndTechs[frontEnd], databases[database])

    if (!timmerId) timmerId = setInterval(showArchitecture, 100)
    setTimeout(() => {
        clearInterval(timmerId)
        timmerId = null
    }, 2000)
}

function renderResult(backend, frontend, database) {
    const [resultContainer] = document.getElementsByClassName('result-container')
    clearChildNode(resultContainer)

    //Titles
    const frontEndTitleTxtNode = createTextElement('h4', 'Frontend')
    const backEndTitleTxtNode = createTextElement('h4', 'Backend')
    const DatabaseTitleTxtNode = createTextElement('h4', 'Database')

    //Slot Machine Content
    const frontEndTxtNode = createTextElement('h3', frontend)
    frontEndTxtNode.classList.add('frontend')

    const backEndTxtNode = createTextElement('h3', backend)
    backEndTxtNode.classList.add('backend')
    const databaseTxtNode = createTextElement('h3', database)
    databaseTxtNode.classList.add('db')

    const frontEndDiv = combineChildIntoDiv(frontEndTitleTxtNode, frontEndTxtNode)
    frontEndDiv.classList.add('frontend')

    const backendDiv = combineChildIntoDiv(backEndTitleTxtNode, backEndTxtNode)
    backendDiv.classList.add('backend')

    const databaseDiv = combineChildIntoDiv(DatabaseTitleTxtNode, databaseTxtNode)
    databaseDiv.classList.add('db')

    const docFragment = document.createDocumentFragment()
    docFragment.appendChild(frontEndDiv)
    docFragment.appendChild(backendDiv)
    docFragment.appendChild(databaseDiv)

    resultContainer.appendChild(docFragment)
}
