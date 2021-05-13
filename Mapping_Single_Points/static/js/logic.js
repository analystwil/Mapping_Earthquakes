// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level. To the approximate geographical center of the United States
let map = L.map('mapid').setView([40.7, -94.5], 4);

// Add tilelayer for our map. Will be the 
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: 'pk.eyJ1IjoiYW5hbHlzdHdpbCIsImEiOiJja29rZHdwbzgwMmY2Mm5wbHBxODF0dzM2In0.oDVjoLAdJ4ICp6wovKhjng'
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);