function createDOM(vdom) {
    const element = document.createElement(vdom.tag);
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

document.querySelector('#root').appendChild(createDOM(vdom));