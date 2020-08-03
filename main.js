var container = document.getElementById('container')
var colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']

var colorTotal = 700
for (let i = 0; i < colorTotal; i++) {
	let square = document.createElement('div')
	square.classList.add('square')
	square.addEventListener('mouseover', () => {
		setColor(square)
	})
	square.addEventListener('mouseout', () => {
		removeColor(square)
	})
	container.appendChild(square)
}

function setColor(element) {
	let color = getRndomColor()
	element.style.background = color
	element.style.boxshadow = `0 0 2px ${color}`
}
function removeColor(element) {
	element.style.background = '#1b1b1b'
	element.style.boxshadow = `0 0 2px #000`
}
function getRndomColor() {
	return colors[Math.floor(Math.random() * colors.length)]
}
