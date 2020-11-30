const input = document.querySelector('#nameInput')

const button = document.querySelector('#nameButton')

console.log("test")

button.addEventListener('click', (e) => {
    if (input.value) {
        document.querySelector('#nameInputPlace').textContent = `Hi ${input.value}, welcome to this place.`
    }
})
