const nameButton = document.getElementById('name-confirm')
const nameIn = document.getElementById('name-in')
const nameTag = document.getElementById('name-on-tag')

nameButton.addEventListener('click', () => {
    nameTag.textContent = nameIn.value;
})


const colorPick = document.getElementById('color-pick')
const colorButton = document.getElementById('color-confirm')
const colorChange = document.getElementById('color')
const colorChange2 = document.getElementById('color2')
const colorChange3 = document.getElementById('color3')

colorButton.addEventListener('click', () => {
    colorChange.style.backgroundColor = colorPick.value;
    colorChange2.style.backgroundColor = colorPick.value;
    colorChange3.style.backgroundColor = colorPick.value;
})

