// some common function 

function getInputFieldById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextValueById(id){
    const inputText = document.getElementById(id).innerText;
    const inputNumber = parseFloat(inputText);
    if(inputNumber){
        return inputNumber;
    }
    else{
        return inputText;
    }
}

// section by id
function getSectionById(id){
    // hide all section
    document.getElementById('donation-history-hide').classList.add('hidden');
    document.getElementById('all-card-section').classList.add('hidden');

    // show specific section
    document.getElementById(id).classList.remove('hidden');
}

// modal function create
function showDonationModal(amount, newBalance) {
    // Remove previous modal (if any)
    const existingModal = document.getElementById('donation-modal');
    if (existingModal) {
      existingModal.remove();
    }
  
    // Create modal
    const modal = document.createElement('div');
    modal.id = 'donation-modal';
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
  
    modal.innerHTML = `
      <div class="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6 relative text-center">
        <button onclick="document.getElementById('donation-modal').remove()" 
          class="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl font-bold">&times;</button>
  
        <img src="images/coin.png" alt="Currency" class="w-12 h-12 mx-auto mb-4">
        <h2 class="text-2xl font-bold text-green-600 mb-2">🎉 Congratulations!</h2>
        <p class="text-lg font-semibold text-gray-800 mb-2">
          You have donated <span class="text-blue-500 font-bold">৳${amount}</span>
        </p>
        <p class="text-gray-600">Thank you for your kind contribution.</p>
        <p class="text-gray-600 mb-4">Your new balance is <span class="font-bold">৳${newBalance}</span></p>
  
        <button onclick="document.getElementById('donation-modal').remove()" 
          class="mt-4 bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600">Close</button>
      </div>
    `;
  
    // Append to container
    document.getElementById('modal-container').appendChild(modal);
  
  }
  