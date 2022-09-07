(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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



},{"..":2}],2:[function(require,module,exports){
const list = require('speakers')()

module.exports = page

function page (cb) {
  const el = document.createElement('div')
  const shadow = el.attachShadow({ mode: 'closed' })
  
  const booking_button = document.createElement('button')
  booking_button.innerText = 'Tickets / Booking'
  booking_button.onclick = () => book()
  
  const map_button = document.createElement('button')
  map_button.innerText = 'Map'
  map_button.onclick = () => open_map()
  
  const speakers = document.createElement('div')
  speakers.classList.add('box')
  speakers.innerHTML = `<h1> Speakers </h2> </div>`
  const container = document.createElement('div')
  container.classList.add('speakers')
  speakers.append(container)
  list.forEach(item => {
    const img = document.createElement('img')
    img.setAttribute('src', `./assets/speakers/${item.name}`)
    const name = document.createElement('div')
    name.innerText = item.name
    name.classList.add('name')
    const project = document.createElement('div')
    project.innerText = item.project
    project.classList.add('project')

    const speaker = document.createElement('div')
    speaker.classList.add('speaker')
    speaker.append(img, name, project)

    container.append(speaker)
  })
  
  shadow.innerHTML = `
    <link rel="preload" href'./assets/astral3.jpg' as="image">
    <link rel="preload" href'./assets/astral9.jpg' as="image">
    <link rel="preload" href'./assets/astral1.jpg' as="image">
    <link rel="preload" href'./assets/astral8.jpg' as="image">
    <link rel="preload" href'./assets/astral10.jpg' as="image">
    <link rel="preload" href'./assets/astral7.jpg' as="image">
    <link rel="preload" href'./assets/astral5.jpg' as="image">
    <link rel="preload" href'./assets/astral2.jpg' as="image">
    <link rel="preload" href'./assets/astral4.jpg' as="image">
    <link rel="preload" href'./assets/astral6.jpg' as="image">
    <link rel="preload" href'./assets/astral11.jpg' as="image">
    <link rel="preload" href'./assets/astral12.jpg' as="image">
    <link rel="preload" href'./assets/astral3.jpg' as="image">
    
    <div class='main'>
      <img src='./assets/Wizard-Amigos---Stickers---FOUR-FACES---TRANSPARENT---2022.png'></img>
      <h1>
        <span>Wizard Amigos</span>
        <span> Code Camp</span>
      </h1>
      <div class='date'>Sept 26 - Oct 10 2022, Wales (UK)</div>
      <div class='box'>
      <p>Wizard Amigos code camp is a 2 week DIY event from September 26 to October 10.</p>
        <p> 
          First week is reserved for informal talks and workshops and the second week for a 
          freestyle coworking, outdoor activities and just easy going hanging out with the like-minded people.
        </p>
        <p>Half a month of living, breathing and learning P2P and the future of the internet.</p>
      </div>
      
      <speakers></speakers>

      <div class='booking box'>
        <h2> Booking </h2>
        <p>
          You can sign up for the first (events) week or stay for both weeks. 
          There is also a possibility to stay just for a few days.
        </p>
        <p>
          Tickets are free, but there are costs for the accomodation and food (all food will be vegetarian with vegan options).
          If you are on a very tight budget, don't worry, we will also provide a free community sleeping area 
          with hamocks/sleeping bags.
        </p>
        <p>
          Cabins are fitted with a queen size mattress and a shelf that goes around the bed where you can keep your stuff. 
          In the space there is a hot shower and 2 restrooms plus a fully functioning kitchen. 
          Astralship partners with a local organic food coop, so we will have healthy and yummy food. 
          There will also be Leslie who will be preparing us 2 warm meals per day.
        </p>
        <h3>Accomodation and food costs (per person)</h3>
        <p>
          Single cabin: £40/day (food included)<br>
          Double cabin: £25/day (food included)<br>
          Food only: £10/day
        </p>
        <booking_button></booking_button>
        <p>
        You can also find your own accomodation and contribute only for the food.
        There are many AirBNB and hotel offerings available in the surrounding area if this arrangement does not suit you.
      </p>
      </div>
      
      <div class='venue box'>
        <h2>Venue</h2>
        <p>
          Accommodation will be provided by the Astralship, a hackerspace that promotes 
          creativity, collaboration and innovation located in 
          Deiniolen, Wales. You can get there by taking a 
          <a target='_blank' href='https://www.thetrainline.com/book/results?origin=2144c4ddc11461cf9b03af198933e8df&destination=da5bb7333af0b34c0c39e59b5a53b139&outwardDate=2022-09-26T09%3A45%3A00&outwardDateType=departAfter&journeySearchType=single&passengers%5B%5D=1992-08-07&directSearch=false&selectedOutward=SAhkJK5SWK8%3D%3AyRnNMstN3X8%3D'>direct train</a> 
          to Bangor (approx. 3h from London) 
          and then a taxi to Deniolen (approx. £20).
        </p>      
        <map_button></map_button>
        <p class='astralship'>
          The Astralship is based in a 200 year old chapel, where the mountains of Snowdonia 
          meet the sea. The chapel dates from 1838 and is located in an unbelievably beautiful area, 
          with endless mountains, beaches and quarries to explore. 
          It's the perfect place to be if you like hiking, climbing and wild swimming.
        </p> 
        <div class='gallery'>
          <img src='./assets/astral3.jpg'></img>
          <img src='./assets/astral9.jpg'></img>
          <img src='./assets/astral1.jpg'></img>
          <img src='./assets/astral8.jpg'></img>
          <img src='./assets/astral10.jpg'></img>
          <img src='./assets/astral7.jpg'></img>
          <img src='./assets/astral5.jpg'></img>
          <img src='./assets/astral4.jpg'></img>
          <img src='./assets/astral6.jpg'></img>
          <img src='./assets/astral11.jpg'></img>
          <img src='./assets/astral13.jpg'></img>
          <img src='./assets/astral2.jpg'></img>
          <img src='./assets/astral12.jpg'></img>
        </div>     
      </div>
      <div class='faq box'>
        <h2>About</h2>
        <h3>Who is organizing this?</h3>
        <p>
          This event is being organised by enthusiasts, for enthusiasts. 
          Namely <a href='https://twitter.com/ninabreznik' target="_blank">ninabreznik</a> 
          and <a href='https://twitter.com/serapath' target="_blank">serapath</a> who are active within the P2P community.
          Anybody who would like to help should shoot us a message in <a href='https://discord.gg/8FzZPHkp44' target="_blank">WizardAmigos Discord</a>. 
        </p>
        <h3>Is event sponsored?</h3>
        <p>
          No. We have not yet asked for, nor recieved any interest in sponsorship. 
          If you would like to sponsor the camp, please email us at <a href="mailto:we@wizardamigos.com"  target="_blank">we[at]wizardamigos.com</a>
        </p>
        <h3>Is there a discount for staying longer?</h3>
        <p>
          Yes. There is a 10% discount offered if you choose to stay for both weeks of the event.
        </p>
        <h3>Where can I get more information?</h3>
        <p>
          Check our this <a href="https://hackmd.io/@T6Wf5EsOQKe-6wyPjJPtuw/B1il-RZ3c">HackMD live document</a> for more details and up to date information. 
          </p>.
        </p>
      </div>
    </div>
  `

  shadow.querySelector('img').onload = cb
  shadow.querySelector('speakers').replaceWith(speakers)
  shadow.querySelector('map_button').replaceWith(map_button)
  shadow.querySelector('booking_button').replaceWith(booking_button)
  
  // shadow.adoptedStyleSheets = [sheet]
  const style = document.createElement('style')
  style.textContent = get_theme()
  shadow.append(style)
  return el

  // handlers

  function book () {
    window.open('https://forms.zohopublic.com/virtualoffice22084/form/WizardAmigosCodeCamp/formperma/W61690fN8Q0cci-bY3M-87kMmQ2kvKBjybp4ZNaX60Y')
  }

  function open_map () {
    window.open('https://www.openstreetmap.org/way/308537567')
  }
}

function get_theme () {
  return `
    :host {
      font-family: "Courier New", Courier, monospace;
      --pink: hsla(291, 100%, 81%, 1);
      --light-purple: hsla(247, 89%, 70%, 1);
      --fluo-green: hsla(121, 97%, 65%, 1);
      --green: hsla(163, 76%, 58%, 1);
      --red: hsla(316, 56%, 32%, 1);
    }
    .main {
      display: grid;
      justify-items: center;
      line-height: 2rem;
      grid-template-columns: 1fr 4fr 1fr;
    }
    img {
      width: 450px;
      grid-column-start: 2;
    }
    h1 {
      font-family: 'Magic School One', sans-serif;
      display: block;
      line-height: 0.8;
      text-align: center;
      font-size: 4rem;
      font-weight: 100;
      color: var(--pink);
      grid-column-start: 2;
    }
    h2 {
      font-family: 'Magic School One', sans-serif;
      text-align: center;
      line-height: 1;
      font-size: 3em;
      font-weight: 100;
      color: var(--fluo-green);
      grid-column-start: 2;
    }
    h3 {
      color: var(--green);
      grid-column-start: 2;
    }
    p {
      color: var(--green);
      display: subgrid;
      justify-items: space-between;
      grid-column-start: 2;
    }
    a {
      color: var(--green);
      transition: color .3s;
    }
    a:hover {
     text-decoration: underline; 
     color: var(--fluo-green);
     transition: color .3s;
     cursor: pointer;
    }
    button {
      font-size: 1rem;
      border: none;
      padding: 1em;
      background-color: var(--pink);
      transition: background-color .3s ease-in-out;
      color: var(--red);
      grid-column-start: 2;
      margin: 3% 0 3% 0;
      width: 215px;
      height: 70px;
    }
    button:hover {
      background-color: var(--fluo-green);
      transition: background-color .3s ease-in-out;
      cursor: pointer;
    }
    .date {
      font-family: "Courier New", Courier, monospace;
      justify-items: center;
      text-align: center;
      font-size: 2rem;
      font-weight: 600;
      color: var(--fluo-green);
      grid-column-start: 2;
    }
    .box {
      grid-column-start: 2;
      border: 16px solid var(--light-purple);
      transition: box-shadow .3s ease-in-out;
      padding: 3%;
      margin: 5% 5% 0 5%;
      text-align: center;
      font-size: 1.5rem;
      width: 100%;
    }
    .speakers {     
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    }
    .speaker {
      max-with: 300px;
      padding: 10px;
      margin: 25px;
    }
    .speaker .name {
      text-align: center;
      font-weight: 700;
      font-size: 1.2rem;
      color: var(--fluo-green);
    }
    .speaker .project {
      text-align: center;
      font-size: 1rem;
      color: var(--green);
    }
    .speaker img {
      border-radius: 50%;
      margin: 5%;
      min-width: 0px;
      width: 170px;
      height: 170px;
      box-shadow: 7px 7px var(--fluo-green);
      -moz-box-shadow: 7px 7px var(--fluo-green);
      -webkit-box-shadow: 7px 7px var(--fluo-green);
      -o-box-shadow: 7px 7px var(--fluo-green);      
      transition: all 0.5s ease-in-out 0s;
    }
    .speaker img:hover {
      cursor: pointer;
      transform: translate(5%, 10%);
      box-shadow: var(--purple);
      -moz-box-shadow: var(--purple);
      -webkit-box-shadow: var(--purple);
      -o-box-shadow: var(--purple);   
      transition: all 0.2s ease-in-out 0s;
    }
    .booking {
    }
    .venue {
    }
    .faq {
    }
    .astralship {
      font-style: italic;
      font-size: 1rem;
      padding: 0 3% 3% 3%;
    }
    .gallery {
      grid-column-start: 2;
      grid-column-end: 3;
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: repeat(31, 5vw);
      grid-gap: 15px;
    }
    .gallery img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      transition: border .3s, opacity .3s ease-in-out;
    }
    .gallery img:hover {
      opacity: 0.8;
      transition: border .3s, opacity .3s ease-in-out;
    }
    .gallery img:nth-child(1) {
      grid-column-start: 1;
      grid-column-end: 6;
      grid-row-start: 1;
      grid-row-end: 7;
    }
    .gallery img:nth-child(2) {
      grid-column-start: 6;
      grid-column-end: 9;
      grid-row-start: 1;
      grid-row-end: 4;
    }
    .gallery img:nth-child(3) {
      grid-column-start: 1;
      grid-column-end: 6;
      grid-row-start: 12;
      grid-row-end: 18;
    }
    .gallery img:nth-child(4) {
      grid-column-start: 4;
      grid-column-end: 9;
      grid-row-start: 7;
      grid-row-end: 12;
    }
    .gallery img:nth-child(5) {
      grid-column-start: 6;
      grid-column-end: 9;
      grid-row-start: 4;
      grid-row-end: 7;
    }
    .gallery img:nth-child(6) {
      grid-column-start: 6;
      grid-column-end: 9;
      grid-row-start: 12;
      grid-row-end: 18;
    }
    .gallery img:nth-child(7) {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 7;
      grid-row-end: 12;
    }
    .gallery img:nth-child(8) {
      grid-column-start: 4;
      grid-column-end: 9;
      grid-row-start: 18;
      grid-row-end: 23;
    }
    .gallery img:nth-child(9) {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 18;
      grid-row-end: 23;
    }
    .gallery img:nth-child(10) {
      grid-column-start: 1;
      grid-column-end: 6;
      grid-row-start: 23;
      grid-row-end: 28;
    }
    .gallery img:nth-child(11) {
      grid-column-start: 6;
      grid-column-end: 9;
      grid-row-start: 23;
      grid-row-end: 28;
    }
    .gallery img:nth-child(12) {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 28;
      grid-row-end: 33;
    }
    .gallery img:nth-child(13) {
      grid-column-start: 4;
      grid-column-end: 9;
      grid-row-start: 28;
      grid-row-end: 33;
    }
    @media screen and (max-width: 956px) {
      .main {
        grid-template-columns: 1fr 5fr 1fr;
      };
    }
    @media only screen and (max-width: 768px) {
      .main {
        grid-template-columns: 1fr 8fr 1fr;
      };
    }
  `
}
},{"speakers":3}],3:[function(require,module,exports){
module.exports = get_speakers

function get_speakers () {
  const list = [
    { name: 'mafintosh', project: 'Hypercore & Holepunch', },
    { name: 'jam10o', project: 'Shokunin network', },
    { name: 'mauve', project: 'Agregore', },
    { name: 'noraliucode', project: 'x Token', },
    { name: 'MBrinsleyHarris', project: 'Hacktion Lab', },
    { name: 'kumavis', project: 'LavaMoat & MetaMask', },
    { name: 'heapwolf', project: 'Socket Supply', },
    { name: 'carax', project: 'Sher & Geut', },
    { name: 'ninabreznik', project: 'DatDot & WizardAmigos', },
    { name: 'zobroj', project: 'Design', },
    { name: 'dboutcert', project: 'WizardAmigos', },
    { name: 'serapath', project: 'DatDot & WizardAmigos', },
    { name: 'cryptmppt', project: 'Tokenomics', },
    { name: 'bcomnes', project: 'Socket Security', },
    { name: 'naugtur', project: 'Socket Security', },
    { name: 'telamohn', project: 'Pico Stack', },
    
  ]
  return list
} 
},{}]},{},[1]);
