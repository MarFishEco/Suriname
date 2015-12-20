// define base maps
var imagery = L.tileLayer('http://a.tiles.mapbox.com/v3/geointerest.map-dqz2pa8r/{z}/{x}/{y}.png', {attribution: '&copy; <a href="http://www.mapbox.com">Mapbox</a>'});
var terrain = L.tileLayer('http://a.tiles.mapbox.com/v3/mapbox.mapbox-warden/{z}/{x}/{y}.png', {attribution: '&copy; <a href="http://www.mapbox.com">Mapbox</a>'});
var OSM = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'});

// define vulnerable areas
var MangroveArea1 = L.marker([5.892974, -55.153056]).bindPopup("<b>Mangrove Area</b><br>Some private housing development may occur");
var MangroveArea2 = L.marker([5.974253, -55.075928]).bindPopup("<b>Mangrove Area</b>");
var MangroveArea3 = L.marker([5.929398, -55.282004]).bindPopup("<b>Mangrove Area</b>");
var FloodArea = L.polygon([[5.905481, -55.242705],[5.894207, -55.244494],[5.877901, -55.186650],[5.889856, -55.187676]], {color: "red", weight: 5, opacity: .75}).bindPopup("<b>Area of Flooding</b><br>Housing and small farms");
// combine reference layers
var reference = L.layerGroup([FloodArea, MangroveArea1, MangroveArea2, MangroveArea3]);	

// define markers
var HinduTemple= L.Icon.Default.extend({
	options: {
			iconUrl: 'img/HinduTemple.png' ,
			iconSize:     [17, 23] // size of the icon
			//shadowSize:   [33, 31.5], // size of the shadow
	}
 });
var HinduTemple = new HinduTemple(); 	

var GreenIcon= L.Icon.Default.extend({
	options: {
			iconUrl: 'img/marker-icon-greenLite.png' ,
			iconSize:     [12.75, 21], // size of the icon
			shadowSize:   [24.75, 31.5], // size of the shadow
	}
 });
var GreenIcon = new GreenIcon(); 

// set base map and controls
var map = new L.Map('map', {
	zoomControl: true,
	center: [5.87, -55.17],
	zoom: 11,
	layers: [OSM],
	minZoom: 5,
	maxZoom: 15
});

// add scale bar and map attribution
L.control.scale({ position: 'topleft' }).addTo(map);
map.attributionControl.setPrefix('Viewer by Gregg Verutes');

// marker attributes
L.marker([5.903753, -55.226294], {icon: HinduTemple}).addTo(map).bindPopup("<h2>Hindu Temple</h2>The <b>Arya Dewaker temple</b> attracts many visitors, both Hindus and non-Hindus, coming from Suriname and from all over the world. The temple was officially opened on 11 February 2001.<p><img src='img/Arya_Dewaker.jpg'>");
	
L.marker([5.903388889, -55.242000000], {icon: GreenIcon}).addTo(map).bindPopup("<h2>Vegetation Survey (Site 3)</h2><b>South of the Crematorium west of the road Oedraysing Varma weg which runs along the LVV canal</b><br>Dry swamp under tidal influence with tabaka tiki (<i>Acrosfichum aureum</i>) and Zeegras (<i>Batis maritime</i>), on the edges dying Black Mangrove / Parwa (<i>Avicennia germinans</i>) alternating with White mangrove /Akira/ (<i>Laguncularia racemosa</i>)<p><img src='img/VegSite3.jpg'>");	
		
L.marker([5.907888889, -55.241888889], {icon: GreenIcon}).addTo(map).bindPopup("<h2>Vegetation Survey (Site 4)</h2><b>North of the sluice, east of the LVV canal and north of the Oedraysingh Varmaweg</b><br>Young upcoming White Mangrove / Akira (<i>Laguncularia racemosa</i>) and on the edges older Black Mangrove / Parwa (<i>Avicennia germinans</i>), and some Indian Blackberry / Jamun (<i>Syzygium cumini</i>) trees.  In the wet areas Ronde bies / Prapra Grasi (<i>Schoenoplectus lacustris</i>)<p><img src='img/VegSite4.jpg'>");	
			
L.marker([5.905, -55.241888889], {icon: GreenIcon}).addTo(map).bindPopup("<h2>Vegetation Survey (Site 7)</h2><b>North of the Oedraysingh Varmaweg about 40m from the LVV canal</b><br>Open area, overgrown with young upcoming White Mangrove / Akira (<i>Laguncularia racemosa</i>) and in the northern parts a gallery of older Black Mangrove / Parwa trees (<i>Avicennia germinans</i>)<p><img src='img/VegSite7.jpg'>");	
	
// create dyke annotation
var point1 = new L.LatLng(5.907604346374129, -55.246457284347564);
var point2 = new L.LatLng(5.910576883036494, -55.24603136064465);
var point3 = new L.LatLng(5.908865708352992, -55.24187208835096);
var point4 = new L.LatLng(5.902683854847079, -55.230181248855715);
var point5 = new L.LatLng(5.900817267670289, -55.22588580120406);
var point6 = new L.LatLng(5.8965575372424155, -55.21296243081905);
var point7 = new L.LatLng(5.895604392336976, -55.20396063140383);
var point8 = new L.LatLng(5.8936331958631065, -55.19103651001546);
var point9 = new L.LatLng(5.893452324657124, -55.17870548811539);
var point10 = new L.LatLng(5.893197284978731, -55.174598723722134);
var point11 = new L.LatLng(5.890299751193908, -55.17449188868829);
var pointList = [point1, point2, point3, point4, point5, point6, point7, point8, point9, point10, point11];

var dyke = new L.polyline(pointList, {
color: '#542788',
weight: 5,
opacity: 1,
smoothFactor: 1,
});


// add basemap and overlays
var baseMaps = {
	"Open Street Map": OSM,
	"Imagery": imagery,
	"Terrain": terrain,
};

var DistrictMuni ='https://natcap.cartodb.com/api/v2/viz/c089b3b4-8b21-11e5-80e4-0ea31932ec1d/viz.json';	
	cartodb.createLayer(map, DistrictMuni).addTo(map)
	.on('done', function(layer) {
		layer.setZIndex(4);
	});

var cdb_url = 'https://natcap.cartodb.com/api/v2/viz/002686f8-8570-11e5-bc61-0e5db1731f59/viz.json';
// add cartoDB layer and set z-index so it shows up on top
	cartodb.createLayer(map, cdb_url).addTo(map)
	.on('done', function(layer) {
		layer.setZIndex(5);
		var overlayMaps = {
		"Forest": layer,
		"Vulnerable Areas": reference
		};
		L.control.layers(baseMaps, overlayMaps, {collapsed: false}).addTo(map);
	});

// option buttons
var $options = $('#go1');
$options.click(function(e) {
	
	dyke.addTo(map).bindPopup("Dike Phase 1");
	//map.removeLayer(dyke);
	
	//var imageUrl = 'http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
	//imageBounds = [[5.95, -55.20], [6.01, -55.30]];
	//L.imageOverlay(imageUrl, imageBounds, {opacity: 0.5}).addTo(map);

	// write results to right side panel
	document.getElementById("Option").innerHTML = "<h3>Summary of Coastal Protection Option 1</h3>A proposed dike north of Wed Naar Zee resort could protect more than 15,000 people.<p></p><h3>Map Legend</h3><span style='color:#542788'><font size='5'>&#9632;</font></span> Proposed Dike (Phase 1)";

});	

var $options = $('#go2');
$options.click(function(e) {
	
	//map.addLayer(option1);
	map.removeLayer(dyke);

	// write results to right side panel
	document.getElementById("Option").innerHTML = "<h3>Summary of Coastal Protection Option 2</h3>xxx<p></p><h3>Map Legend</h3>xxx";

});	

var $options = $('#go3');
$options.click(function(e) {
	
	//map.addLayer(option1);
	map.removeLayer(dyke);

	// write results to right side panel
	document.getElementById("Option").innerHTML = "<h3>Summary of Coastal Protection Option 3</h3>xxx<p></p><h3>Map Legend</h3>xxx";

});	

window.onload = init();