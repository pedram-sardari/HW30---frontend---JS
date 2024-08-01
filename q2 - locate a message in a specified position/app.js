const formElem = document.getElementById('message-form')
const msgInput = document.getElementById('message')
const rightInput = document.getElementById('right')
const topInput = document.getElementById('top')
const msgBoxElem = document.getElementById('msg-box')

fillInputs()

formElem.addEventListener('submit', (e) => {
    e.preventDefault()
    msgBoxHeight = window.getComputedStyle(msgBoxElem).height.replace('px', '')
    msgBoxWidth = window.getComputedStyle(msgBoxElem).width.replace('px', '')
    if (validateRightInput(rightInput.value, msgBoxWidth) && validateTopInput(topInput.value, msgBoxHeight)) {
        msgBoxElem.innerText = msgInput.value
        msgBoxElem.style.top = `${+topInput.value}px`
        msgBoxElem.style.right = `${+rightInput.value}px`
    }

})

function validateTopInput(topValue, msgBoxHeight) {
    let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    console.log(vh)
    console.log(topValue)
    console.log(msgBoxHeight)
    if (topValue > vh - msgBoxHeight) {
        alert(`مقدار سمت بالا از حد مجاز ${vh - msgBoxHeight} بیشتر است!`)
        return false
    }
    return true

}

function validateRightInput(rightValue, msgBoxWidth) {
    let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    if (rightValue > vw - msgBoxWidth) {
        alert(`مقدار سمت راست از حد مجاز ${vw - msgBoxWidth} بیشتر است!`)
        return false
    }
    return true
}

function fillInputs() {
    msgInput.value = 'من اینجام'
    topInput.value = 0
    rightInput.value = 0
}