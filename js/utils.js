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

function combineDOMObjectsToFragment (domObjects) {
    const fragment = document.createDocumentFragment()
    domObjects.map((domObject) => fragment.append(domObject))
    return fragment
}

function createLinkElement (textContent) {
    const aTag = document.createElement('a')
    aTag.textContent = textContent
    aTag.href = `https://lmgtfy.com/?q=${textContent}`
    return aTag
}

export {
    combineChildIntoDiv,
    combineDOMObjectsToFragment,
    createTextElement,
    createLinkElement,
    clearChildNode,
    getRandomIndexFromArray
}