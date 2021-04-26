var mymap = L.map("mapid").setView([-4.1284891, -38.2562955], 13);
L.tileLayer("https://api.mapbox.com/mapbox/streets-v11mapbox/satellite-v9}", {
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: "mapbox/streets-v11",
  tileSize: 512,
  zoomOffset: -1,
  accessToken: "your.mapbox.access.token",
}).addTo(mymap);
