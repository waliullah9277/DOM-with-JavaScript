document.getElementById('secret-info').addEventListener('keyup', function(event){
    const text = event.target.value;
    // console.log(text)
    const deleteSecretInfo = document.getElementById('delete-info');
    if(text === 'delete'){
        deleteSecretInfo.removeAttribute('disabled');
    }
    else{
        deleteSecretInfo.setAttribute('disabled', true);
    }
});

document.getElementById('delete-info').addEventListener('click', function(){
    const deleteInfo = document.getElementById('secret-info-hide');
    deleteInfo.style.display = 'none';
});