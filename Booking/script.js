// Inicializar el mapa usando Leaflet
var map = L.map('map').setView([-38.0055, -57.5426], 13); // Coordenadas de Mar del Plata

// Cargar el mapa base de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Añadir marcadores de ejemplo
var marker1 = L.marker([-38.0055, -57.5426]).addTo(map)
    .bindPopup('Baño público en Plaza Colón');

var marker2 = L.marker([-38.0086, -57.5477]).addTo(map)
    .bindPopup('Baño público en Playa Bristol');

var marker3 = L.marker([-38.0156, -57.5377]).addTo(map)
    .bindPopup('Baño público en Plaza Mitre');
