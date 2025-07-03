const mainContainer = document.getElementById('main-container')
const section = document.createElement('section')
const h1 = document.createElement('h1')
h1.innerText = 'My Food List'
section.appendChild(h1)

const ul = document.createElement('ul')
section.appendChild(ul)
const li1 = document.createElement('li')
li1.innerText = 'Biriyani'
ul.appendChild(li1)

const li2 = document.createElement('li')
li2.innerText = 'Borhani'
ul.appendChild(li2)

const li3 = document.createElement('li')
li3.innerText = 'Salad'
ul.appendChild(li3)

mainContainer.appendChild(section)


// section add with innerHtml

const dressSection = document.createElement('main-container')
dressSection.innerHTML = `

<h1>My Dress List</h1>
<ul>
    <li>T-shirt</li>
    <li>Jeans Pant</li>
    <li>Shirt</li>
</ul>
`