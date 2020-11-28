const INPUT = document.querySelector('#nameInput')

const BUTTON = document.querySelector('#adoptedButton')

BUTTON.addEventListener('click', (e) => {
    e.preventDefault()
    if (INPUT.value) {
        document.querySelector('#nameInputPlace').textContent = `Hi ${INPUT.value}, welcome to this place.`
    }
})
