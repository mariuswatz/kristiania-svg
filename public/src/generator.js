const generate = (input) => {
  console.log('generate', input)

  let svgStr =
    '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 595.3 841.9" style="enable-background:new 0 0 595.3 841.9;" xml:space="preserve"><style type="text/css" >.rect {fill: #cccccc}</style><g id="intro">	<rect class="rect" x="0" y="0" width="595.3" height="841.9"/></g>'

  svgStr += '</svg>'

  console.log(svgStr)
  return svgStr
}

export default generate
