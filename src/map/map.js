var map;

const findPosition = function() {
  const position = JSON.parse(sessionStorage.getItem('myLocation'));
  return {lat: position[0], lng: position[1]};
};

let myLatLng = findPosition();

// to source data from database
const httpGetAsync = function(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
          callback(JSON.parse(xmlHttp.responseText));
        }     
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

httpGetAsync("http://localhost:3000/victims", (results) => {
  initMap(results);
});

function initMap(list) {
  map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 10,
    disableDefaultUI: true,
    fullscreenControl: true,
    styles: styles
  });

  var cityCircle = new google.maps.Circle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.1,
    strokeWeight: 0,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    map: map,
    center: {lat: 37.5497, lng: -122.0811},
    radius: 1000
  });

  var infowindow = new google.maps.InfoWindow();

  // for every entry in the list
  for(let i = 0; i < list.length; i++) {

    let status = list[i].injured ? "injured" : "unharmed";
    let extraction = list[i].stuck ? "ASAP" : "unnecessary";

    let description = `<div id="content">
      <div id="siteNotice">
      </div>
      <h1 id="firstHeading" class="firstHeading">${list[i].name}</h1>
      <div id="bodyContent">
      <p><b>contact: </b><a href="tel:${list[i].phone}">${list[i].phone}</a></p> 
      <p><b>status: </b>${status}</p>
      <p><b>requires extraction: </b>${extraction}</p>
      <p><b>last login: </b> ${list[i].last_seen}</p>
      <p><b>Note: </b> Source message from another query</p>
      </div>
      </div>`;

      let newMarker = new google.maps.Marker({
        position: {lat: list[i].lat, lng: list[i].lng},
        map: map,
        title: list[i].name,
        info: description
      });

      newMarker.addListener('click', function() {
        infowindow.setContent(newMarker.info);
        infowindow.open(map, newMarker);
      });
  }
}