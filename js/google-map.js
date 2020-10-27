function init() {
    var mapOptions = {
        center: new google.maps.LatLng(42.2419813, -97.015546),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 13,
        
        styles: [
            {
                stylers: [
                    { hue: "#00ff6f" },
                    { saturation: -50 }
                ]
            }, {
                featureType: "road", 
                elementType: "geometry",
                stylers: [
                    { lightness: 100 },
                    { visibility: "simplified" }
                ]
            }, {
                featureType: "water",
                elementType: "geometry",
                stylers: [
                    { hue: "#c4f4f4" }
                ]
            }, {
                featureType: "road",
                elementType: "labels",
                stylers: [
                    { visibilty: "off" }
                ]
            }
        ]
    };
    var venueMap;
    venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function loadScript() {
    var script = document.createElement('script');
    script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
    document.body.appendChild(script);
}

window.onload = loadScript;
