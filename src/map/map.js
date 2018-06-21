var map;

//TODO: handle exceptions
const findPosition = function() {
  const position = JSON.parse(sessionStorage.getItem('NG_myLocation'));
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

  /*
  var id4153358620 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Nuno Neves</h1>'+
      '<div id="bodyContent">'+
      '<p><b>contact: </b><a href="tel:415-335-8620">415-335-8620</a></p>' +
      '<p><b>status: </b>injured</p>'+
      '<p><b>requires extraction: </b>ASAP</p>'+
      '<p><b>last login: </b> 18:32 | 05/02/2018 | Pacific Time</p>'+
      '<p><b>Note: </b> Losing lots of blood here! I am type A+</p>'
      '</div>'+
      '</div>';

  var id5554443333 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Andre Nguyen</h1>'+
      '<div id="bodyContent">'+
      '<p><b>contact: </b><a href="tel:555-444-3333">555-444-3333</a></p>' +
      '<p><b>status: </b>unharmed</p>'+
      '<p><b>requires extraction: </b>ASAP</p>'+
      '<p><b>last login: </b> 18:28 | 05/02/2018 | Pacific Time</p>'+
      '<p><b>Note: </b> I lost my boy Nuno in the explosion! I know he\'s still alive out there!</p>'
      '</div>'+
      '</div>';

  var mk4153358620 = new google.maps.Marker({
    position: {lat: 37.5497, lng: -122.0811},
    map: map,
    title: 'Nuno Neves',
    info: id4153358620
  });

  mk4153358620.addListener('click', function() {
    infowindow.setContent(mk4153358620.info);
    infowindow.open(map, mk4153358620);
  });

  var mk5554443333 = new google.maps.Marker({
    position: {lat: 37.538, lng: -122.085},
    map: map,
    title: 'Andre Nguyen',
    info: id5554443333
  });

  mk5554443333.addListener('click', function() {
    infowindow.setContent(mk5554443333.info);
    infowindow.open(map, mk5554443333);
  });

  google.maps.event.addListener(map, 'click', function(event) {
           placeCircle(event.latLng);
        });

        var temp = 1;
        function placeCircle(location) {
          if(temp > 5) return;
          temp++;
          var cityCircle = new google.maps.Circle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.1,
            strokeWeight: 0,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            map: map,
            center: location,
            radius: 200
          });
        }

  */
}