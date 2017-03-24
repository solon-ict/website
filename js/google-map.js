

function initMap() {
  var location = {
    lat: 51.319732,
    lng: 5.812311
  };

  var infoWindowContent = '<div id="content"><h3>Nieuwebaan 8a, 6036RD Ospel </h3></div>';

  var map = new google.maps.Map(document.getElementsByClassName('google-map')[0], {
    zoom: 16,
    center: location
  });

  var infoWindow = new google.maps.InfoWindow({
    content: infoWindowContent
  });

  var marker = new google.maps.Marker({
    position: location,
    map: map,
    title: 'Solon ICT'
  });

  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });
}
