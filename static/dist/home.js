const getLocation = require('./locator.js').getLocation;

let state = {};

//from locator.js
state.location = sessionStorage.getItem('NG_myLocation') || getLocation();

const httpPostVictim = function(theUrl, body) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", theUrl, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(body));
}

let form = [
  {
    question: "Are you Injured?",
    key: "isInjured"
  },
  {
    question: "Are you stuck?",
    key: "isStuck"
  },
  {
    question: "Are you in a danger zone?",
    key: "inDangerZone"
  }
];

const question = document.getElementById("question");
question.innerHTML = form[form.length-1].question;

const yes = document.getElementById("yes");
const no = document.getElementById("no");

const addToState = function(key, val) {
  state[key] = val;
  console.log(state);
}

const next = function(boolean) {
  
  let input = form.pop();
  addToState(input.key, boolean);
  
  if(form.length) {
    question.innerHTML = form[form.length-1].question;
    
  } else {
    const text = document.createElement("div");
    text.innerHTML = "We have tracked your location, help is on its way. You will be redirected to our maps page soon";
    text.className = "instructions";
    
    const wrapper = document.getElementById("wrapper");
    wrapper.innerHTML = "";
    wrapper.appendChild(text);

    httpPostVictim("http://localhost:3000/victims", state);

    // super hacky at the moment - try to use promises instead
    state.location = sessionStorage.getItem('NG_myLocation');

    if(!state.location) {
      console.log("we couldn't determine your location");
    }
    //wait 2 seconds then forward to the maps page
    setTimeout(() => window.open("http://localhost:3000/map", "_self"), 2000);
  }
}

yes.addEventListener("click", () => next(true));
no.addEventListener("click", () => next(false));