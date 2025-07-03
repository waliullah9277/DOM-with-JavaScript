const sections = document.querySelectorAll('section')
for(const section of sections){
    section.style.border = '2px solid gray'
    section.style.marginBottom = '5px'
    section.style.borderRadius = '4px'
    section.style.backgroundColor = 'lightgray'
    section.style.paddingLeft = '10px'
}

const fruitsContainer = document.getElementById('fruits-container');
fruitsContainer.classList.add('text-center')