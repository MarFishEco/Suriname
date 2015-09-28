// define basemaps
var imagery = L.tileLayer('http://a.tiles.mapbox.com/v3/geointerest.map-dqz2pa8r/{z}/{x}/{y}.png', {id: 'MapID'});

var terrain = L.tileLayer('http://a.tiles.mapbox.com/v3/mapbox.mapbox-warden/{z}/{x}/{y}.png', {id: 'MapID'});

// define reference layers
var MangBelt = L.marker([5.893696, -55.148496]).bindPopup("Green belt of mangrove and swamp forests indicating increasing impact of development"),

	FloodArea = L.polygon([[5.905481, -55.242705],[5.894207, -55.244494],[5.877901, -55.186650],[5.889856, -55.187676]], {color: "red", weight: 5}).bindPopup("Housing and small farms<br>(area of flooding)"),
	   
	HinduTemple = L.marker([5.903753, -55.226294]).bindPopup("Hindu Temple");
	//var HinduIcon = L.icon({iconUrl: 'pagoda.svg',iconSize: [38, 95]});	
	//L.marker([5.903753, -55.226294], {icon: HinduIcon}).bindPopup("Hindu Temple");

// combine reference layers
var reference = L.layerGroup([MangBelt, FloodArea, HinduTemple]);	

var option1 = L.tileLayer('http://a.tiles.mapbox.com/v3/geointerest.BelizeHabitats/{z}/{x}/{y}.png');

//var option2 = L.tileLayer('http://a.tiles.mapbox.com/v3/geointerest.BelizeHabitats/{z}/{x}/{y}.png');

//var option3 = L.tileLayer('http://a.tiles.mapbox.com/v3/geointerest.BelizeHabitats/{z}/{x}/{y}.png');	


// set base map and controls
var map = new L.Map('map', {
	zoomControl: true,
	center: [5.92, -55.17],
	zoom: 11,
	layers: [imagery, reference],
	minZoom: 5,
	maxZoom: 15
});

L.control.scale({ position: 'bottomleft' }).addTo(map);
	
// add basemap and overlays
var baseMaps = {
	"Imagery": imagery,
	"Terrain": terrain,
	//"Terrain 2": mapboxTerrain
};

var overlayMaps = {
	"Reference": reference,
	"Option 1": option1
	//"Option 2": option2,
	//"Option 3": option3
};
L.control.layers(baseMaps, overlayMaps).addTo(map);


var $options = $('#go1');
$options.click(function(e) {
	
	map.addLayer(option1);
	map.removeLayer(reference);
	
	//var imageUrl = 'http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
	//imageBounds = [[5.95, -55.20], [6.01, -55.30]];
	//L.imageOverlay(imageUrl, imageBounds, {opacity: 0.5}).addTo(map);

	// write results to right side panel
	document.getElementById("Option1").innerHTML = "<h3>Summary of Option 1</h3>xxx<p></p><h3>Map Legend</h3>xxx";

});	


// bottom to top
// cartodb.createLayer(map, 'http://natcap.cartodb.com/api/v2/viz/d3884ee0-985f-11e4-a998-0e9d821ea90d/viz.json').addTo(map);

window.onload = init();