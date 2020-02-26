import { backendTechs, databases, frontEndTechs } from './constants'

import { combineChildIntoDiv, createLinkElement,
    combineDOMObjectsToFragment, createTextElement, clearChildNode, getRandomIndexFromArray } from './utils'

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
    const frontEndTxtNode = createLinkElement(frontend)
    frontEndTxtNode.classList.add('frontend')

    const backEndTxtNode = createLinkElement(backend)
    backEndTxtNode.classList.add('backend')
    const databaseTxtNode = createLinkElement(database)
    databaseTxtNode.classList.add('db')

    const frontEndDiv = combineChildIntoDiv(frontEndTitleTxtNode, frontEndTxtNode)
    frontEndDiv.classList.add('frontend')

    const backendDiv = combineChildIntoDiv(backEndTitleTxtNode, backEndTxtNode)
    backendDiv.classList.add('backend')

    const databaseDiv = combineChildIntoDiv(DatabaseTitleTxtNode, databaseTxtNode)
    databaseDiv.classList.add('db')

    resultContainer.appendChild(combineDOMObjectsToFragment([frontEndDiv, backendDiv, databaseDiv]))
}
