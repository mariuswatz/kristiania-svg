import React from 'react'
import parseSVG from '../../src/svg.js'
import svgTemplate from '../../design-template/demo-template.svg'
import Preview from '../preview/preview.jsx'

const SVGData = () => {
  let template = parseSVG(svgTemplate)
  console.log('SVGData', template)
  
  return <Preview input={template} />
}

export default SVGData
