const page = require('..')

function demo () {
  const font = document.createElement('link')
  font.setAttribute('href', 'https://fonts.cdnfonts.com/css/magic-school-one-2')
  font.setAttribute('rel', 'stylesheet')

  const favicon = document.createElement('link')
  favicon.setAttribute('rel', 'icon')
  favicon.setAttribute('type', 'imagine/png')
  favicon.setAttribute('href', './assets/Wizard-Amigos---Stickers---WIZARD-BALL---TRANSPARENT---2022.png')
  
  document.head.append(font, favicon)
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