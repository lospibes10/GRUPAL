var map = L.map('map').setView([-26.186202,-58.162785], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([]).addTo(map)
    .bindPopup('MASCOTA1')
    .openPopup();