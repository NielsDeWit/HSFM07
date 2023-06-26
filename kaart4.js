// Initialize the basemap layer
var basemapLayer = new ol.layer.Tile({
  source: new ol.source.XYZ({
    url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png' // OpenStreetMap as the basemap layer
  })
});

// Initialize the map
var map = new ol.Map({
  target: 'map',
  layers: [basemapLayer], // Add the basemap layer
  view: new ol.View({
    center: ol.proj.fromLonLat([6.119977, 52.516885]), // Set the initial center coordinates (e.g., [longitude, latitude])
    zoom: 10 // Set the initial zoom level
  })
});