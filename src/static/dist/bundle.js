(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const getLocation = require('./locator.js').getLocation;

let state = {};

//from locator.js
state.location = sessionStorage.getItem('myLocation') || getLocation();

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
    state.location = sessionStorage.getItem('myLocation');

    if(!state.location) {
      console.log("we couldn't determine your location");
    }
    //wait 2 seconds then forward to the maps page
    setTimeout(() => window.open("http://localhost:3000/map", "_self"), 2000);
  }
}

yes.addEventListener("click", () => next(true));
no.addEventListener("click", () => next(false));
},{"./locator.js":2}],2:[function(require,module,exports){
const getLocation = function() {
  console.log("getLocation initiated");
  
  const success = (position) => {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    
    sessionStorage.setItem('myLocation', JSON.stringify([latitude,longitude]));
    console.log(`lat: ${latitude} | lon: ${longitude}`);
  }

  const error = (err) => {
    
    if(err.message === "Timeout expired") {
      console.log("Location service timed-out, trying again...");
      getLocation();
    } else {
      console.log("Couldn't track your location. Please check your device's location settings.");
    }
    
    console.error(err);
  }

  const options = {
    enableHighAccuracy: false,
    timeout: 8000,
    maximumAge: 0
  };
  
  console.log("starting navigator.geolocation.getCurrentPosition()")
  navigator.geolocation.getCurrentPosition(success, error, options).then(
    console.log("navigator returned: " + sessionStorage.getItem('myLocation'))
    // make axios call to server HERE
    // then redirect to the maps page
  );
}

module.exports = {
  getLocation : getLocation
}
},{}]},{},[1]);
