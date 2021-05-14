// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level. To the approximate geographical center of the United States
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// Add tilelayer for our map. Will be the background of our map (changed to dark by using dark-v10)
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: 'pk.eyJ1IjoiYW5hbHlzdHdpbCIsImEiOiJja29rZHdwbzgwMmY2Mm5wbHBxODF0dzM2In0.oDVjoLAdJ4ICp6wovKhjng'
});

// add a circle to the marker we created for LA 
//L.circle([34.0522, -118.2437], {
    //radius: 300,
    //color: "black",
    ////fillColor: '#ffffa1'
//}).addTo(map);

// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city. Bind popup to marker
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
      radius: city.population/100000,
      color: "orange",
      fillColor: '#ffa500',
      weight: "4"
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);