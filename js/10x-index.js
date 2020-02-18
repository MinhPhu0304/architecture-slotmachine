import {
  backendTechs,
  databases,
  frontEndTechs,
  projectManagement,
  editorTech
} from './constants'

import { combineChildIntoDiv, createTextElement, clearChildNode, getRandomIndexFromArray } from './utils'

const startBtn = document.getElementById('start')
let timmerId

startBtn.addEventListener('click', showArchitecture)

function showArchitecture () {
  const backEndIndex = getRandomIndexFromArray(backendTechs)
  const frontEnd = getRandomIndexFromArray(frontEndTechs)
  const database = getRandomIndexFromArray(databases)
  const editor = getRandomIndexFromArray(editorTech)
  const manager = getRandomIndexFromArray(projectManagement)
  renderResult(
    backendTechs[backEndIndex],
    frontEndTechs[frontEnd],
    databases[database],
    editorTech[editor],
    projectManagement[manager]
  )

  if (!timmerId) timmerId = setInterval(showArchitecture, 100)
  setTimeout(() => {
    clearInterval(timmerId)
    timmerId = null
  }, 2000)
}

function renderResult (backend, frontend, database, editor, manager) {
  const [resultContainer] = document.getElementsByClassName('result-container')
  clearChildNode(resultContainer)

  //Define slot machine Titles
  const frontEndTitleTxtNode = createTextElement('h4', 'Frontend')
  const backEndTitleTxtNode = createTextElement('h4', 'Backend')
  const DatabaseTitleTxtNode = createTextElement('h4', 'Database')
  const editorTitleTxtNode = createTextElement('h4', 'IDE/Editor')
  const managerTitleTxtNode = createTextElement('h4', 'Project Management')

  //Slot Machine Content

  const frontEndTxtNode = createTextElement('h3', frontend)
  frontEndTxtNode.classList.add('frontend')

  const backEndTxtNode = createTextElement('h3', backend)
  backEndTxtNode.classList.add('backend')

  const databaseTxtNode = createTextElement('h3', database)
  databaseTxtNode.classList.add('db')

  const editorTxtNode = createTextElement('h3', editor)
  databaseTxtNode.classList.add('edit')

  const managementTxtNode = createTextElement('h3', manager)
  databaseTxtNode.classList.add('mgmt')

  // Combine title and output

  const frontEndDiv = combineChildIntoDiv(frontEndTitleTxtNode, frontEndTxtNode)
  frontEndDiv.classList.add('frontend')

  const backendDiv = combineChildIntoDiv(backEndTitleTxtNode, backEndTxtNode)
  backendDiv.classList.add('backend')

  const databaseDiv = combineChildIntoDiv(DatabaseTitleTxtNode, databaseTxtNode)
  databaseDiv.classList.add('db')

  const editorDiv = combineChildIntoDiv(editorTitleTxtNode, editorTxtNode)
  editorDiv.classList.add('edit')

  const managerDiv = combineChildIntoDiv(managerTitleTxtNode, managementTxtNode)
  managerDiv.classList.add('mgmt')

  const docFragment = document.createDocumentFragment()
  docFragment.appendChild(frontEndDiv)
  docFragment.appendChild(backendDiv)
  docFragment.appendChild(databaseDiv)
  docFragment.appendChild(editorDiv)
  docFragment.appendChild(managerDiv)
  resultContainer.appendChild(docFragment)
}
