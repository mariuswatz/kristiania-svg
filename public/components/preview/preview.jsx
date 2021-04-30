import React from 'react'
import { useEffect } from 'react'

import generate from '../../src/generator'

const Preview = (input) => {
  useEffect(() => {
    let result = generate(input)
    let blob = new Blob([result], { type: 'image/svg+xml' })
    let url = URL.createObjectURL(blob)
    let image = document.getElementById('result-svg')
    image.src = url
    image.addEventListener('load', () => URL.revokeObjectURL(url), {
      once: true,
    })
  })

  return (
    <div style={{ width: '40vw' }}>
      <h1>This is &lt;Preview&gt;</h1>
      <p>
      {input.input.elements &&
        input.input.elements.map((el, key) => {
          return (
            <li key={key}>
              id: {el.id}
            </li>
          )
        })}
      </p>
      <img id="result-svg" width="600px" />
    </div>
  )
}

export default Preview
