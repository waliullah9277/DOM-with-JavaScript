// option 1
const handleStatus = handleOnClick;
function handleOnClick(){
    const changeText = document.getElementById('handle-status');
    changeText.innerText = 'Updated text with onclick event!'
}

// option 2
document.getElementById('update-text').addEventListener('click', function(){
    const updateText = document.getElementById('handle-status');
    updateText.innerText = 'Updated text with addEventListener Events!'
})

// input text update function 
document.getElementById('update-input').addEventListener('click', function(){
    const inputField = document.getElementById('input-text');
    const inputText = inputField.value;
    const updateDefaultText = document.getElementById('update-default-text');
    updateDefaultText.innerText = inputText;
    inputField.value = '';
})