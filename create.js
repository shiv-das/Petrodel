const bac = document.querySelector('.subet');
const submit = document.querySelector('.sube');
const username = document.querySelector('#user');
const password = document.querySelector('#pass');
const email = document.querySelector('#email');
const arr = [];
bac.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.replace('./login.html');
});
submit.addEventListener('click', (e) => {
  e.preventDefault();
  if (username.value == '' || password.value == '' || email.value == '') {
    alert('Please fill all the details!');
  } else {
    const obj = {
      username: username.value,
      password: password.value,
    };
    console.log(obj);
    arr.push(obj);
    console.log(arr);
  }
});

/*const ob={
  username:
}*/
