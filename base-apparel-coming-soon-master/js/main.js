// const email = document.querySelector('form input[placeholder = "Email Address"]');
// console.log(email.value);

const form = document.querySelector('form');
const email = document.querySelector('form input[type=email]');

form.addEventListener('submit', (e) => {
	console.log(email.value);
});