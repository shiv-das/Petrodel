/*var map = L.map('map').setView([27.1766701, 78.0080745], 7);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

var geocodeService = L.esri.Geocoding.geocodeService();

/*map.on('click', function (e) {
  geocodeService
    .reverse()
    .latlng(e.latlng)
    .run(function (error, result) {
      L.marker(result.latlng)
        .addTo(map)
        .bindPopup(result.address.Match_addr)
        .openPopup();
    });
});

var message;

message = geocodeService
  .reverse()
  .latlng([27.1766701, 78.0080745])
  .run(function (error, result) {
    //alert(result.address.Match_addr); //this alert works here ok and can retur addrress
    console.log(result.address.Match_addr);
    return result.address.Match_addr;
  });

//this alert won't work, why I can get the address here outside the function
alert(message);
*/

const login = document.querySelector('.login__btn');
const create = document.querySelector('.new_acc');
login.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.replace('./petrodel.html');
});
create.addEventListener('click',(e)=>{
  e.preventDefault();
  window.location.replace('./create.html');
})