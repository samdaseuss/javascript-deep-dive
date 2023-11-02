function createDOM(node) {
    if (typeof node === 'string') {
        return document.createTextNode(node);
    }
    const element = document.createElement(node.tag);

    node.children
        .map(createDOM)
        .forEach(element.appendChild.bind(element));
    return element;
}

const vdom = {
    tag: 'p',
    props: {},
    children: [
        {
            tag: 'p',
            props: {},
            children: ["TITLE"],
        }
    ]
}

document
    .querySelector('#root')
    .appendChild(createDOM(vdom));