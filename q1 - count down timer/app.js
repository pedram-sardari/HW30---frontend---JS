const containerElem = document.getElementById('container')
const formElem = document.getElementById('time-form')
const timeInput = document.getElementById('time')


formElem.addEventListener('submit', (e) => {
    e.preventDefault()
    if (validateTimeInput(timeInput.value)) {
        countDown()
    } else {
        timeInput.value = ''
    }
})

function countDown() {
    const intervalId = setInterval(() => {
        containerElem.innerHTML = `<p class="count-down">${timeInput.value}</p>`
        if (+timeInput.value === 0) {
            clearInterval(intervalId);
            appendFormElem()
            displayEndMessage()
        } else {
            timeInput.value--;
        }
    }, 1000);
}

function validateTimeInput(value) {
    if (!value || isNaN(+value) || +value <= 0) {
        alert('The time value must be a positive integer.')
        return false
    }
    return true
}

function appendFormElem() {
    timeInput.value = ''
    containerElem.innerHTML = ''
    containerElem.appendChild(formElem)
}

function displayEndMessage() {
    let p = document.createElement('p')
    p.innerHTML = 'شمارنده با موفقیت به پایان رسید.'
    p.className = 'timeout-message'
    containerElem.appendChild(p)
    setTimeout(() => p.remove(), 3000)
}

