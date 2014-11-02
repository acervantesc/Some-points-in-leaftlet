var map = L.map('map').setView([40.718829,-73.969419], 12);

L.tileLayer('http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);

 

var prattIcon = L.icon({
    iconUrl: 'img/school.png',
    //shadowUrl: 'leaf-shadow.png',

    iconSize:     [32, 37], // size of the icon
    //shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    //shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var homeIcon = L.icon({
    iconUrl: 'img/home.png',
    //shadowUrl: 'leaf-shadow.png',

    iconSize:     [32, 37], // size of the icon
    //shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    //shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var officeIcon = L.icon({
    iconUrl: 'img/office.png',
    //shadowUrl: 'leaf-shadow.png',

    iconSize:     [32, 37], // size of the icon
    //shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    //shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});




var prattMarker = L.marker([40.691158,-73.963100], {icon: prattIcon}).addTo(map);
	//marker.bindPopup("<b>Pratt!</b><br>I come here every week.")

var homeMarker = L.marker([40.686887,-73.949153], {icon: homeIcon}).addTo(map);
//marker.bindPopup("<b>300 Quincy!</b><br>I live here.")


var officeMarker = L.marker([40.758189,-73.981983], {icon: officeIcon}).addTo(map);
//marker.bindPopup("<b>WSJ</b><br>I work here")



var circle = L.circle([40.746926,-73.945386],600,{
	color: 'red',
	stroke: 0,
	fillCollor: '#f03',
	fillOpacity: 0.5
}) .addTo(map);

circle.bindPopup("<b>Clinton Hill!</b><br>School Area")


var circle = L.circle([40.710372,-74.007657],600,{
	color: 'red',
	stroke: 0,
	fillCollor: '#f03',
	fillOpacity: 0.5
}) .addTo(map);

circle.bindPopup("<b>WSJ</b><br>I work here")


var polygon = L.polygon([
	[40.672886,-73.969741],
	[40.671161,-73.961372],
	[40.669436,-73.962059],
	[40.664781,-73.961287],
	[40.663218,-73.961973],
	[40.663055,-73.963089],
	[40.654917,-73.962016],
	[40.650944,-73.972101],
	[40.658205,-73.974333],
	[40.660972,-73.979740],
	[40.673114,-73.969955]
	],{
	color: 'red',
	stroke: 0,
	fillCollor: '#f03',
	fillOpacity: 0.5
	}) .addTo(map);

polygon.bindPopup("<b>Prospect Park</b><br>20 mins walk")



var polygon = L.polygon([
	[40.800485,-73.958132],
	[40.796944,-73.949249],
	[40.764448,-73.973024],
	[40.768153,-73.981779]
	
	],{
	color: 'red',
	stroke: 0,
	fillCollor: '#f03',
	fillOpacity: 0.5
	}) .addTo(map);

polygon.bindPopup("<b>Central Park</b><br>20 mins walk")


