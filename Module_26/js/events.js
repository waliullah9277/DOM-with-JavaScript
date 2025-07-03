
// option 2
function makeYellow(){
    document.body.style.backgroundColor = 'yellow'
}

// option 3
const makeBlueButton = document.getElementById('make-blue')
makeBlueButton.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor = 'blue'
}

// option 3 another
const makePurpleButton = document.getElementById('make-purple')
makePurpleButton.onclick = function maekPurple(){
    document.body.style.backgroundColor = 'purple'
}

// option 4
const makePinkButton = document.getElementById('make-pink')
makePinkButton.addEventListener('click', makePink)

function makePink(){
    document.body.style.backgroundColor = 'pink'
}

// option 4 another
const makeGreenButton = document.getElementById('make-green')
makeGreenButton.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'green'
})

// option 5 final

document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod'
})
