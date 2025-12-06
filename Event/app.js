const button = document.querySelector('#clickme');

button.onclick = function () {
	console.log('You clicked me');
};

const scream = () => {
	console.log('Dont touch me');
};

button.onmouseover = scream;

const eventbtn = document.querySelector('#eventbtn');
eventbtn.addEventListener('click', stepSatu);
eventbtn.addEventListener('click', stepDua);

function stepSatu() {
	console.log('step one');
}

function stepDua() {
	console.log('step two');
}

// eventbtn.onclick = stepSatu;
// eventbtn.onclick = stepDua;