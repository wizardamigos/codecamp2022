(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"..":2}],2:[function(require,module,exports){
// const sheet = new CSSStyleSheet()
// sheet.replaceSync(get_theme())

module.exports = page

function page () {
  const el = document.createElement('div')
  const shadow = el.attachShadow({ mode: 'closed' })

  const booking_button = document.createElement('button')
  booking_button.innerText = 'Tickets / Booking'
  booking_button.onclick = () => book()
  
  const map_button = document.createElement('button')
  map_button.innerText = 'Map'
  map_button.onclick = () => open_map()
  
  shadow.innerHTML = `
    <div class='main'>
      <img src='./assets/Wizard-Amigos---Stickers---FOUR-FACES---TRANSPARENT---2022.png'></img>
      <h1>Wizard Amigos Code Camp</h1>
      <div class='date'>Sept 26 - Oct 10 2022, Wales (UK)</div>
      <div class='box'>
      <p>Wizard Amigos code camp is a 2 week DIY event from September 26 to October 10.</p>
        <p> 
          First week is reserved for informal talks and workshops and the second week for a 
          freestyle coworking, outdoor activities and just easy going hanging out with the like-minded people.
        </p>
        <p>Half a month of living, breathing and learning P2P and the future of the internet.</p>
      </div>
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
          You can also find your own accomodation and contribute only for the food.
          There are many AirBNB and hotel offerings available in the surrounding area if this arrangement does not suit you.
        </p>
        <p>
          Single cabin: £40/day (food included)<br>
          Double cabin: £25/day (food included)<br>
          Food only: £10/day
        </p>
        <booking_button></booking_button>
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
          <img src='./assets/astral2.jpg'></img>
          <img src='./assets/astral4.jpg'></img>
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
          You can send questions to our <a href='https://twitter.com/wizardamigos' target="_blank">WizardAmigos Twitter</a> DMs or join the <a href='https://discord.gg/8FzZPHkp44' target="_blank">Discord</a>. 
          </p>.
        </p>
      </div>
    </div>
  `

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
    .main {
      display: grid;
      justify-items: center;
      line-height: 2rem;
      grid-template-columns: 1fr 3fr 1fr;
    }
    img {
      width: 450px;
      grid-column-start: 2;
    }
    h1 {
      font-family: 'Magic School One', sans-serif;
      line-height: 0.8;
      text-align: center;
      font-size: 4em;
      font-weight: 100;
      color: hsla(291, 100%, 81%, 1);
      grid-column-start: 2;
    }
    h2 {
      font-family: 'Magic School One', sans-serif;
      text-align: center;
      line-height: 1;
      font-size: 3em;
      font-weight: 100;
      color: hsla(121, 97%, 65%, 1);
      grid-column-start: 2;
    }
    h3 {
      color: hsla(163, 76%, 58%, 1);
      grid-column-start: 2;
    }
    p {
      color: hsla(163, 76%, 58%, 1);
      display: subgrid;
      justify-items: space-between;
      grid-column-start: 2;
    }
    a {
      color: hsla(163, 76%, 58%, 1);
      transition: color .3s;
    }
    a:hover {
     text-decoration: underline; 
     color: hsla(121, 97%, 65%, 1);
     transition: color .3s;
     cursor: pointer;
    }
    button {
      font-size: 1.1rem;
      border: none;
      padding: 1em;
      background-color: hsla(291, 100%, 81%, 1);
      transition: background-color .3s ease-in-out;
      color: hsla(316, 56%, 32%, 1);
      grid-column-start: 2;
      margin: 3% 0 3% 0;
      width: 215px;
      height: 70px;
    }
    button:hover {
      background-color: hsla(121, 97%, 65%, 1);
      transition: background-color .3s ease-in-out;
      cursor: pointer;
    }
    .date {
      font-family: "Courier New", Courier, monospace;
      justify-items: center;
      text-align: center;
      font-size: 2rem;
      font-weight: 600;
      color: hsla(121, 97%, 65%, 1);
      grid-column-start: 2;
    }
    .box {
      grid-column-start: 2;
      border: 16px solid hsla(247, 89%, 70%, 1);
      transition: box-shadow .3s ease-in-out;
      padding: 3%;
      margin-top: 5%;
      display: grid;
      justify-items: center;
      text-align: center;
      font-size:1.5rem;
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
      display: grid;
      grid-column-start: 2;
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: repeat(8, 5vw);
      grid-gap: 15px;
    }
    .gallery img {
      width: 100%;
      height: 100%;
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
      grid-row-end: 8;
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
      grid-row-start: 13;
      grid-row-end: 15;
    }
    .gallery img:nth-child(4) {
      grid-column-start: 4;
      grid-column-end: 9;
      grid-row-start: 8;
      grid-row-end: 13;
    }
    .gallery img:nth-child(5) {
      grid-column-start: 6;
      grid-column-end: 9;
      grid-row-start: 4;
      grid-row-end: 8;
    }
    .gallery img:nth-child(6) {
      grid-column-start: 6;
      grid-column-end: 9;
      grid-row-start: 13;
      grid-row-end: 15;
    }
    .gallery img:nth-child(7) {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 8;
      grid-row-end: 13;
    }
    .gallery img:nth-child(8) {
      grid-column-start: 4;
      grid-column-end: 9;
      grid-row-start: 15;
      grid-row-end: 17;
    }
    .gallery img:nth-child(9) {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 15;
      grid-row-end: 17;
    }
  `
}
},{}]},{},[1]);
