import { parse } from 'svg-parser'

const elementTypeList = ['text', 'image', 'graphic']

export const parseSVG = (svg) => {
  let elements = []

  let data = parse(svg)

  // pass over the root node
  data = data.children[0]

  // parse children to find page elements
  data.children.map((el) => {
    let tmp = parseElement(el)
    if (tmp) elements.push(tmp)
  })

  let result = {
    elements: elements,
  }

  return result
}

const parseElement = (el) => {
  if (el.properties && el.properties.id) {
    let type = getElementType(el.properties.id)
    if (!type) return

    el.children.forEach((child) => {
      if (child.properties.id && child.properties.id.startsWith('bb')) {
        el.bb = {
          x: child.properties.x ? child.properties.x : 0,
          y: child.properties.y ? child.properties.y : 0,
          width: child.properties.width,
          height: child.properties.height,
        }
      }
    })
    console.log('type', type, 'id', el.properties.id, el)
    return el
  }
}

export const getElementType = (str) => {
  let type
  let pos = str.indexOf('-')
  if (pos > -1) {
    type = str.substring(0, pos)

    if (elementTypeList.indexOf(type) < 0) type = undefined
  }
  return type
}

export default parseSVG
