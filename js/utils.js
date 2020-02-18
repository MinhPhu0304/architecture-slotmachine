function clearChildNode (node) {
    while (node.firstChild) {
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

    childs.forEach(childNode => container.appendChild(childNode))

    return container
}

function getRandomIndexFromArray (input) {
   return  Math.floor(Math.random() * Math.floor(input.length))
}

function combineDOMObjectsToFragment (...objects) {
    const fragment = Document.createDocumentFragment()
    objects.forEach((domObject) => fragment.appendChild(domObject))
    return fragment
}

export {
    combineChildIntoDiv,
    combineDOMObjectsToFragment,
    createTextElement,
    clearChildNode,
    getRandomIndexFromArray
}