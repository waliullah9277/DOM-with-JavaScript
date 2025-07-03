document.getElementById('more-events').addEventListener('click', function(){
    console.log("Events Triggered!")
});

// document.getElementById('text-field').addEventListener('focus', function(){
//     console.log("Focus on the text in field here");
// });
// document.getElementById('text-field').addEventListener('blur', function(){
//     console.log("Blur on the text in field here");
// });
// document.getElementById('text-field').addEventListener('keydown', function(event){
//     console.log(event.target.value);
// });
// document.getElementById('text-field').addEventListener('keypress', function(event){
//     console.log(event.target.value);
// });
document.getElementById('text-field').addEventListener('keyup', function(event){
    console.log(event.target.value);
});

