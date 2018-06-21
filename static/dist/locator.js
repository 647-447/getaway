const getLocation = function() {
  console.log("getLocation initiated");
  
  const success = (position) => {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    
    sessionStorage.setItem('NG_myLocation', JSON.stringify([latitude,longitude]));
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
    console.log("navigator returned: " + sessionStorage.getItem('NG_myLocation'))
    // make axios call to server HERE
    // then redirect to the maps page
  );
}

module.exports = {
  getLocation : getLocation
}