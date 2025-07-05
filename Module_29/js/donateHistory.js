
document.getElementById('donation-toggle-btn').addEventListener('click', function(){
    getSectionById('all-card-section');
    this.style.backgroundColor = '#B4F461';
    document.getElementById('history-toggle-btn').style.backgroundColor = '#E5E7EB';
    
})


document.getElementById('history-toggle-btn').addEventListener('click', function(){
    getSectionById('donation-history-hide');
    this.style.backgroundColor = '#B4F461';
    document.getElementById('donation-toggle-btn').style.backgroundColor = '#E5E7EB';
})