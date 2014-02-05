$(document).ready(function() {
	jQuery.getJSON('http://freegeoip.net/json/', function(data) {
		var visitor = data;
		var bhell = L.latLng(59.882733080235326, 17.654857635498047);

		// Figure out zoom level
		var zoom = 5;
		if (visitor.country_code) {	zoom += 1;}
		if (visitor.region_code) {	zoom += 3;}
		if (visitor.zip_code) {	zoom += 5;}
		console.log(zoom);

		var map = L.mapbox.map('map', 'bhell.h6jm4ei6', {'zoomControl': false})
			.setView([visitor.latitude, visitor.longitude], zoom);
		var msg = "";//" (far away)";
		$('#location').html(function(index, oldHtml) {
        	return $('<a href="#"></a>').html(oldHtml);
		}).click(function() {
			map.panTo(bhell, {'animate': true, 'duration': 1.0});
		}).append(msg);
	});
});


