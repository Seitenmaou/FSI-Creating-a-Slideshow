const images = [
    './assets/1.jpg',
    './assets/2.jpg',
    './assets/3.jpg',
    './assets/4.jpg',
    './assets/5.jpg',
    './assets/6.jpg'
]
let imageIndex = 0;
function setImage(imageIndex){
    document.querySelector('.image').src = images[imageIndex];
}

function nextImage(positive){
    if (positive){
        if (imageIndex < images.length - 1){
            imageIndex++
        }
        else {
            imageIndex = 0
        }
    } else {
        if (imageIndex > 0){
            imageIndex--
        }
        else {
            imageIndex = images.length - 1
        }
    }
    setImage(imageIndex)
    for (totalButtons = 0; totalButtons < buttons.length; totalButtons++){
        buttons[totalButtons].textContent = 'x'
    }
    buttons[imageIndex].textContent = '○'
}

let button0 = document.getElementById('button-0');
button0.addEventListener('click', () => {
    imageIndex = 0;
    setImage(imageIndex)
})

let buttonID = 'button-'
let buttons = document.getElementsByClassName('bubble')
for (let currentButton = 0; currentButton < buttons.length; currentButton++){
    buttonID = `button-${currentButton}`
    let addButton = document.getElementById(buttonID)
    addButton.addEventListener('click', () => {
        imageIndex = currentButton;
        for (totalButtons = 0; totalButtons < buttons.length; totalButtons++){
            buttons[totalButtons].textContent = 'x'
        }
        buttons[currentButton].textContent = '○'
    

        setImage(imageIndex)
    })
}
















let next = document.getElementsByClassName('next side-bar');
next[0].addEventListener('click', () => {
    nextImage(true)
    
})
let previous = document.getElementsByClassName('previous side-bar');
previous[0].addEventListener('click', () => {
    nextImage(false)
})

setImage(imageIndex)
