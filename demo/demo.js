const page = require('..')

function demo () {
  const codecamp = page()
  return codecamp
}

document.body.append(demo())

const style = document.createElement('style')
style.textContent = `
  html {
    height: 100%;
  }
  body {
    background-color: hsla(245, 55%, 50%, 1);
    padding: 5%;
    font-size: 1.3em;
  }
`

document.body.append(style)