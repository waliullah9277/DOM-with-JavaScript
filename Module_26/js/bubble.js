document.getElementById('item2').addEventListener('click', function(event){
    console.log("item 2 clicked")
    // event.stopPropagation()
    event.stopImmediatePropagation();
})

document.getElementById('item2').addEventListener('click', function(event){
    console.log("item 2 second clicked")
})

document.getElementById('item2').addEventListener('click', function(event){
    console.log("item 2 third clicked")
})

document.getElementById('item2').addEventListener('click', function(event){
    console.log("item 2 forth clicked")
})



document.getElementById('item-list').addEventListener('click', function(){
    console.log("item list is clicked")
})

document.getElementById('item-container').addEventListener('click', function(){
    console.log("item container clicked")
})

document.getElementById('body').addEventListener('click', function(){
    console.log("body is clicked")
})