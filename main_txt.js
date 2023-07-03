var map = L.map('map').setView([ 10.5256264, 76.2132542], 13);

var osm=L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
})
osm.addTo(map);

var marker1 = L.marker([10.3041869, 76.3371037],)
.addTo(map)
.bindPopup("<h1> Flood vulnerability of MSMEs in Chalakudy </h1> <p> Average flood height:3.5 m, Average flood duration:5 days </p> <img src='./Data/graph.jpg', style='width:300px', 'height:600px' />")
.openPopup();

var marker2 = L.marker([10.3940068, 76.32752164],)
.addTo(map)
.bindPopup("<h1> Flood vulnerability of MSMEs in Nellayi </h1> <p> Average flood height:3 m, Average flood duration:4 days </p> <img src='./Data/graph 1.jpg', style='width:300px', 'height:600px' />")
.openPopup();

var marker3 = L.marker([10.3454442, 76.2158060],)
.addTo(map)
.bindPopup("<h1> Flood vulnerability of MSMEs in Irinjalakuda </h1> <p> Average flood height:3 m, Average flood duration:4 days </p> <img src='./Data/graph 2.jpg', style='width:300px', 'height:600px' />")
.openPopup();

var marker4 = L.marker([10.3717111, 76.3042007],)
.addTo(map)
.bindPopup("<h1> Flood vulnerability of MSMEs in Kodakara </h1> <p> Average flood height:4 m, Average flood duration:6 days </p> <img src='./Data/graph 3.jpg', style='width:300px', 'height:600px' />")
.openPopup();


    L.tileLayer('http://{s}.tile.cloudmade.com/9067860284bc491e92d2342cc51d47d9/998/256/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> Imagery © <a href="http://cloudmade.com">CloudMade</a>'
    }).addTo(map);

    var featureStyle = {
        "color": "#ff7800",
        "weight": 5, 
        "opacity": 0.2
    };

    L.geoJson('thrissur border').addTo(map);

