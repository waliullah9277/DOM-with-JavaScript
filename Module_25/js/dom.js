// console.log("Hello JavaScript");
const liCollection = document.getElementsByTagName("li");
for (const li of liCollection) {
  // console.log(li.innerText)
}

const h1Collection = document.getElementsByTagName("h1");
for (const h1 of h1Collection) {
  // console.log(h1.innerText)
}

const domList = document.getElementsByClassName("dom-list");
for (const d of domList) {
  // console.log(d.innerText);
}

const fruitsList = document.getElementsByClassName('fruits-list')
// console.log(fruitsList)


const innerFruits = document.getElementById('fruits-container').innerHTML
// console.log(innerFruits);

// const innerFruitsText = document.getElementById('fruits-container').innerText
const innerFruitsText = document.getElementById('fruits-container').setAttribute = '<h2>changes </h2>'
// console.log(innerFruitsText);