// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level. To the approximate geographical center of the United States
let map = L.map('mapid').setView([36.1733, -120.1794], 7);

// Add tilelayer for our map. Will be the background of our map (changed to dark by using dark-v10, streets-v11 light mode)
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
   accessToken: 'pk.eyJ1IjoiYW5hbHlzdHdpbCIsImEiOiJja29rZHdwbzgwMmY2Mm5wbHBxODF0dzM2In0.oDVjoLAdJ4ICp6wovKhjng'
});

// Coordinates for each point to be used in the line.
let line = [
  [37.6213, -122.3790], //SFO
  [30.1975, -97.6664], // AUSTIN BERGSTROM
  [43.6777, -79.6248], //TORONTO
  [40.6413, -73.7781], //JFK
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "blue",
  strokeOpacity: 0.5,
  strokeWeight: 4,
  dashArray: '20, 15', 
}).addTo(map);

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);