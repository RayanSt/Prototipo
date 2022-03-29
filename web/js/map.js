
 
var map = L.map('map2').setView([4.6319065189372886, -74.06602621078491], 16);
map.scrollWheelZoom.disable();
 

L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href = "https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    
var control = L.Routing.Control({
	waypoints: [
		L.latLng(4.640440116913196, -74.0721845626831),
		L.latLng(4.6319065189372886, -74.06602621078491)
	],
    routeWhileDragging: true,
    reverseWaypoints: true,
    showAlternatives: true,
    altLineOptions: {
        styles: [
            {color: 'black', opacity: 0.15, weight: 9},
            {color: 'white', opacity: 0.8, weight: 6},
            {color: 'blue', opacity: 0.5, weight: 2}
        ]
    }
}).addTo(map);

L.Routing.errorControl(control).addTo(map);

L.Routing.Formatter = L.Class.extend({
	options: {
		language: 'sp'
	}
});

 
if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
            console.log(position);
            $.get( "http://maps.googleapis.com/maps/api/geocode/json?latlng="+ position.coords.latitude + "," + position.coords.longitude +"&sensor=false", function(data) {
                console.log(data);
            })
        });
    }
    


//L.geoJson(mapM).addTo(map);
//map.fitBounds

// ------------------------------------------------------------------------ //