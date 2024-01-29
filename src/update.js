var span = document.querySelector('#time-now');

export default function update() {
	span.textContent = new Date().toLocaleTimeString();
	setTimeout(update, 1000);
}
