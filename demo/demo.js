const page = require('..')

function demo (cb) {
  let font = new FontFace('Magic School One', 'url("https://fonts.cdnfonts.com/s/56374/MagicSchoolOne.woff")')
  document.fonts.add(font)
  font.load()

  const favicon = document.createElement('link')
  favicon.setAttribute('rel', 'icon')
  favicon.setAttribute('type', 'imagine/png')
  favicon.setAttribute('href', './assets/Wizard-Amigos---Stickers---WIZARD-BALL---TRANSPARENT---2022.png')
  
  document.head.append(favicon)
  const codecamp = page(cb)
  return codecamp
}
var count = 0
const el = demo(async () => {
  await document.fonts.ready
  const style = document.createElement('style')
  style.textContent = `
    html, body {
      height: 100%;
      background-color: hsla(245, 55%, 50%, 1);
      font-size: 1.3em;
      margin: 0;
      padding: 0;
    }
  `
  document.body.append(style, el)
})


