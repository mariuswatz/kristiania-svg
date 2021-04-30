import { parse } from 'svg-parser'

const elementTypeList = ['text', 'image', 'graphic']

export const parseSVG = (svg) => {
  let data = parse(svg)

  console.log('parsed',data)

  // skip root element
  data=data.children[0]

  let template = []


  data.children.forEach(el => {
    console.log(el.tagName,el.properties.id,el.children)

    if(el.properties.id) {
      let type = getElementType(el.properties.id)
      if(type) {
        template.push(parseElement(el))
      }
    }
  })

  console.log('template',template)
  return {elements: template}
}

const parseElement = (el) => {
  let node = {id: el.properties.id}

  el.children.forEach(tmp => {
    if(tmp.properties.id && tmp.properties.id.startsWith('bb')) {
      node.bb = {
        x: tmp.properties.x ? tmp.properties.x : 0,
        y: tmp.properties.y ? tmp.properties.y : 0,
        width: tmp.properties.width,
        height: tmp.properties.height,
      }
    }
    if(tmp.properties.id && tmp.properties.id.startsWith('data')) {
      console.log('jsonStr?',tmp)
      try {
        let jsonStr = tmp.children[0].value
        jsonStr = jsonStr.replaceAll('&quot;', '"')
        node.data = JSON.parse(jsonStr)
      } catch(error) {
        console.error(error)
      }
    }
  })

  return node
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
