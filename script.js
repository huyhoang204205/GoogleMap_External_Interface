let map;
let markers = [];

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 10.8415977, lng: 106.7628688 },
        zoom: 13,
    });

    function addMarker(location, name) {
        const marker = new google.maps.Marker({
            position: location,
            map: map,
            title: name,
        });

        const infowindow = new google.maps.InfoWindow({
            content: name,
        });

        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });

        markers.push(marker);
    }


    addMarker({ lat: 10.8355461, lng: 106.7552083 }, 'Sân cầu lông Tường Anh');
    addMarker({ lat: 10.8440997, lng: 106.7761196 }, 'FPT University HCMC');

    function searchMarker() {
        const query = document.getElementById('search-input').value.toLowerCase();
        let foundMarker = null;

        markers.forEach(marker => {
            if (marker.title.toLowerCase().includes(query)) {
                foundMarker = marker;
            }
        });

        if (foundMarker) {
            map.setCenter(foundMarker.getPosition());
            map.setZoom(18);
            const infowindow = new google.maps.InfoWindow({
                content: foundMarker.title,
            });
            infowindow.open(map, foundMarker);
        }
    }
    document.getElementById('search-input').addEventListener('input', searchMarker);
}
