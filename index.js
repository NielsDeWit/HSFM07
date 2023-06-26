window.addEventListener('load', (event) => {
    var Stamen_Toner = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        minZoom: 10,
        maxZoom: 20,
        ext: 'png'
    });

    var bounds = new L.LatLngBounds(new L.LatLng(52.5190445781, 6.1233960271), new L.LatLng(52.5150508292, 6.1174839075));

    var map = L.map('map', {
        center: [52.517194, 6.220902],
        zoom: 16,
        layers: [Stamen_Toner],

        maxBounds: bounds,
        maxBoundsViscosity: 0.9,

    });

    var peczwolle = L.geoJson(pecZwolle, {
        style: function (feature) {
            return {
                fillColor: '#43429C',
                weight: 0.5,
                fillOpacity: 0.5
            }
        }
    }).addTo(map).bindPopup('<h1>Mac3park Stadion');


});


