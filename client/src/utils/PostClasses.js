export const classList = {
    'header-two': {class: 'text-2xl', node: '<h2>'},
    'header-three': {class: 'text-xl', node: '<h3>'},
    'header-four': {class: 'text-lgl', node: '<h4>'},
}

export const applyClassesToHTML = (html) => {


    let temp = html;
    Object.keys(classList).forEach((tag) => {
        temp = temp.replace(classList[tag].node, classList[tag].node.replace('>', ` className="${classList[tag].class}" >`))
    })
    return temp;
}