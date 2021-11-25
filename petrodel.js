//const loginbtn = document.querySelector('.login__btn');
const loggedinUI = document.querySelector('.app');
const loginUI = document.querySelector('.log');
const petrol_lit = document.querySelector('#petlit');
const diesel_lit = document.querySelector('#dielit');
const pet_amt = document.querySelector('#petamt');
const die_amt = document.querySelector('#dieamt');
const petcalc = document.querySelector('#petcalc');
const diecalc = document.querySelector('#diecalc');
const curr_loc = document.querySelector('#curr_loc');
const address = document.querySelector('.address-btn');
const backto = document.querySelector('.backto');
//loggedinUI.style.opacity = 1;
/*loginbtn.addEventListener('click', (e) => {
  e.preventDefault();

  loginUI.classList.add('hidden');
  loggedinUI.style.opacity = 1;
});*/
petcalc.addEventListener('click', (e) => {
  e.preventDefault();
  if (petrol_lit.value == '' && pet_amt.value == '') {
    alert('Enter Number of Litres or Amount');
  } else {
    if (petrol_lit.value != '') {
      pet_amt.value = Number(petrol_lit.value) * 106.72;
    } else {
      petrol_lit.value = Number(pet_amt.value) / 106.72;
    }
  }
});
diecalc.addEventListener('click', (e) => {
  e.preventDefault();
  if (diesel_lit.value == '' && die_amt.value == '') {
    alert('Enter Number of Litres or Amount');
  } else {
    if (diesel_lit.value != '') {
      die_amt.value = Number(diesel_lit.value) * 100.32;
    } else {
      diesel_lit.value = Number(die_amt.value) / 100.32;
    }
  }
});

curr_loc.addEventListener('click', getLocation);

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
}

function showPosition(position) {
  console.log(position.coords.latitude, position.coords.longitude);

  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  var geocodeService = L.esri.Geocoding.geocodeService();
  var message;

  message = geocodeService
    .reverse()
    .latlng([lat, lng])
    .run(function (error, result) {
      //alert(result.address.Match_addr); //this alert works here ok and can retur addrress
      console.log(result.address.Match_addr);
      address.value = result.address.Match_addr;
      return result.address.Match_addr;
    });

  //this alert won't work, why I can get the address here outside the function
}
backto.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.replace('./login.html');
});
