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
        },
        {
            tag: 'ul',
            props: {},
            children: [
                {
                    tag: 'li',
                    props: {},
                    children:["첫번째 소제목"]
                },
                {
                    tag: 'li',
                    props: {},
                    children:["두번째 소제목"]
                },
                {
                    tag: 'li',
                    props: {},
                    children:["세번째 소제목"]
                }
            ]
        }
    ]
}

document
    .querySelector('#root')
    .appendChild(createDOM(vdom));