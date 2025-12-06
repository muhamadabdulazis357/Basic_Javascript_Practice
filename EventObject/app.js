document.querySelector('button').addEventListener('click', (e) => {
	console.log(e);
});

const input = document.querySelector('input');
input.addEventListener('keydown', (e) => {
	switch (e.code) {
		case 'ArrowUp':
		console.log('ArrowUp');
		break;
		case 'ArrowDown':
		console.log('ArrowDown');
		break;
		case 'ArrowLeft':
		console.log('ArrowLeft');
		break;
		case 'ArrowRight':
		console.log('ArrowRight');
		break;
		default:
		console.log('ignored');
		}
	});

// input.addEventListener('keyup', () => {
// console.log('Button released');
// });